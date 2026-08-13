import { shuffle, normalise, normaliseHard } from './shuffle.js';

/**
 * The pure rules for every exercise type — no React in here, so the whole
 * question bank can be round-trip tested in Node (see scripts/validate-content.mjs).
 *
 *   prepare(data)                 -> randomised presentation for one attempt
 *   initialAnswer()               -> starting answer, when null won't do
 *   canSubmit(answer, prep)       -> is the Check button enabled?
 *   isCorrect(answer, data, prep) -> did they get it right?
 *   correctText(data, prep)       -> shown in the red bar when they didn't
 *   modelAnswer(data, prep)       -> the answer a perfect player would submit
 */

const choiceRules = (getAnswer) => ({
  prepare: (data) => ({ choices: shuffle(data.choices) }),
  canSubmit: (answer) => answer != null,
  isCorrect: (answer, data) => answer === getAnswer(data),
  correctText: (data) => getAnswer(data),
  modelAnswer: (data) => getAnswer(data),
});

export const RULES = {
  mcq: choiceRules((d) => d.answer),
  keyword: choiceRules((d) => d.answer),

  // "Which TWO points must your answer include?" — the shape of the real exam questions.
  multi: {
    prepare: (data) => ({ choices: shuffle(data.choices) }),
    initialAnswer: () => [],
    canSubmit: (answer) => (answer || []).length > 0,
    isCorrect: (answer, data) =>
      answer.length === data.answers.length && data.answers.every((a) => answer.includes(a)),
    correctText: (data) => data.answers.join('   •   '),
    modelAnswer: (data) => [...data.answers],
  },

  blank: {
    prepare: (data) => ({ choices: shuffle([data.answer, ...(data.bank || [])]) }),
    canSubmit: (answer) => answer != null,
    isCorrect: (answer, data) => answer === data.answer,
    correctText: (data) => data.answer,
    modelAnswer: (data) => data.answer,
  },

  type: {
    prepare: () => ({}),
    canSubmit: (answer) => !!answer && answer.trim().length > 0,
    isCorrect: (answer, data) => {
      const accepted = [data.answer, ...(data.accept || [])].map(normaliseHard);
      return accepted.includes(normaliseHard(answer));
    },
    correctText: (data) => data.answer,
    modelAnswer: (data) => data.answer,
  },

  build: {
    prepare: (data) => {
      const tiles = [...data.answer.split(/\s+/), ...(data.extra || [])].map((text, i) => ({
        id: `t${i}`,
        text,
      }));
      return { tiles: shuffle(tiles) };
    },
    canSubmit: (answer) => (answer || []).length > 0,
    isCorrect: (answer, data) =>
      normalise((answer || []).map((t) => t.text).join(' ')) === normalise(data.answer),
    correctText: (data) => data.answer,
    // Pick the tiles that spell out the answer, in order, without reusing a tile.
    modelAnswer: (data, prep) => {
      const pool = [...prep.tiles];
      return data.answer.split(/\s+/).map((word) => {
        const i = pool.findIndex((t) => t.text === word);
        return pool.splice(i, 1)[0];
      });
    },
  },

  order: {
    prepare: (data) => ({
      tiles: shuffle(data.answer.map((text, i) => ({ id: `s${i}`, text }))),
    }),
    canSubmit: (answer, prep) => (answer || []).length === prep.tiles.length,
    isCorrect: (answer, data) =>
      (answer || []).map((t) => t.text).join('|') === data.answer.join('|'),
    correctText: (data) => data.answer.map((s, i) => `${i + 1}. ${s}`).join('   '),
    modelAnswer: (data, prep) =>
      data.answer.map((text) => prep.tiles.find((t) => t.text === text)),
  },

  match: {
    prepare: (data) => ({
      pairs: data.pairs,
      left: shuffle(Object.keys(data.pairs)),
      right: shuffle(Object.values(data.pairs)),
    }),
    initialAnswer: () => ({ matched: {}, wrong: 0 }),
    canSubmit: (answer, prep) => Object.keys(answer.matched).length === prep.left.length,
    isCorrect: (answer) => answer.wrong === 0,
    correctText: (data) =>
      Object.entries(data.pairs)
        .map(([k, v]) => `${k} → ${v}`)
        .join('   '),
    modelAnswer: (data) => ({ matched: { ...data.pairs }, wrong: 0 }),
  },

  tf: {
    prepare: () => ({ choices: ['True', 'False'] }),
    canSubmit: (answer) => answer != null,
    isCorrect: (answer, data) => (answer === 'True') === data.answer,
    correctText: (data) => (data.answer ? 'True' : 'False'),
    modelAnswer: (data) => (data.answer ? 'True' : 'False'),
  },

  better: {
    prepare: (data) => ({ choices: shuffle([data.bad, data.good]) }),
    canSubmit: (answer) => answer != null,
    isCorrect: (answer, data) => answer === data.good,
    correctText: (data) => data.good,
    modelAnswer: (data) => data.good,
  },
};

/** An answer that must be judged wrong — used to prove the checker isn't just saying yes. */
export function wrongAnswer(data, prep) {
  switch (data.type) {
    case 'mcq':
    case 'keyword':
      return data.choices.find((c) => c !== data.answer);
    case 'multi':
      // One point short of the full answer must never be accepted.
      return data.answers.slice(0, -1);
    case 'blank':
      return data.bank[0];
    case 'type':
      return 'definitely not the answer';
    case 'build':
      return [...RULES.build.modelAnswer(data, prep)].reverse();
    case 'order':
      return [...RULES.order.modelAnswer(data, prep)].reverse();
    case 'match':
      return { matched: { ...data.pairs }, wrong: 1 };
    case 'tf':
      return data.answer ? 'False' : 'True';
    case 'better':
      return data.bad;
    default:
      return null;
  }
}
