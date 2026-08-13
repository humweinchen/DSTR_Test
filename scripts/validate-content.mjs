/**
 * Sanity-checks the question bank so a typo in the content can never ship a
 * question that is impossible to answer correctly.
 *
 *   node scripts/validate-content.mjs
 */
import { units } from '../src/data/index.js';
import { RULES, wrongAnswer } from '../src/engine/types.js';

const errors = [];
const seenLessonIds = new Set();
let exerciseCount = 0;

const TYPES = new Set(['mcq', 'keyword', 'multi', 'blank', 'type', 'build', 'order', 'match', 'tf', 'better']);

for (const unit of units) {
  if (!unit.id || !unit.title) errors.push(`Unit is missing id/title: ${JSON.stringify(unit.title)}`);
  if (!unit.lessons?.length) errors.push(`Unit "${unit.id}" has no lessons`);

  for (const lesson of unit.lessons || []) {
    if (seenLessonIds.has(lesson.id)) errors.push(`Duplicate lesson id: ${lesson.id}`);
    seenLessonIds.add(lesson.id);
    if (!lesson.exercises?.length) errors.push(`Lesson "${lesson.id}" has no exercises`);

    lesson.exercises.forEach((ex, i) => {
      exerciseCount++;
      const at = `${lesson.id}[${i}] (${ex.type})`;

      if (!TYPES.has(ex.type)) errors.push(`${at}: unknown type`);
      if (!ex.explain) errors.push(`${at}: missing explain`);

      switch (ex.type) {
        case 'mcq':
        case 'keyword': {
          if (!ex.question) errors.push(`${at}: missing question`);
          if (!Array.isArray(ex.choices) || ex.choices.length < 2)
            errors.push(`${at}: needs at least 2 choices`);
          else {
            if (!ex.choices.includes(ex.answer))
              errors.push(`${at}: answer is not one of the choices`);
            if (new Set(ex.choices).size !== ex.choices.length)
              errors.push(`${at}: duplicate choices`);
          }
          if (ex.type === 'keyword' && !ex.keyword) errors.push(`${at}: missing keyword`);
          break;
        }
        case 'multi': {
          if (!ex.question) errors.push(`${at}: missing question`);
          if (!Array.isArray(ex.choices) || ex.choices.length < 3)
            errors.push(`${at}: needs at least 3 choices`);
          if (!Array.isArray(ex.answers) || ex.answers.length < 2)
            errors.push(`${at}: needs at least 2 correct answers`);
          else {
            for (const a of ex.answers)
              if (!ex.choices.includes(a)) errors.push(`${at}: answer "${a}" is not a choice`);
            if (ex.answers.length >= ex.choices.length)
              errors.push(`${at}: every choice is correct, nothing to discriminate`);
            if (new Set(ex.choices).size !== ex.choices.length)
              errors.push(`${at}: duplicate choices`);
          }
          break;
        }
        case 'blank': {
          if (!ex.text?.includes('___')) errors.push(`${at}: text has no ___ placeholder`);
          if (!ex.answer) errors.push(`${at}: missing answer`);
          if (!Array.isArray(ex.bank) || ex.bank.length < 1) errors.push(`${at}: needs a bank`);
          else if (ex.bank.includes(ex.answer)) errors.push(`${at}: answer duplicated in bank`);
          break;
        }
        case 'type': {
          if (!ex.question) errors.push(`${at}: missing question`);
          if (!ex.answer) errors.push(`${at}: missing answer`);
          break;
        }
        case 'build': {
          if (!ex.answer) errors.push(`${at}: missing answer`);
          else {
            const words = ex.answer.split(/\s+/);
            if (words.length < 3) errors.push(`${at}: answer too short to build`);
            if (words.length > 26) errors.push(`${at}: answer too long to tap (${words.length} words)`);
            if (/\s{2,}/.test(ex.answer))
              errors.push(`${at}: double space would break the word tiles`);
            // A distractor identical to a real word is invisible to the player,
            // and could be tapped in place of the real one.
            for (const extra of ex.extra || []) {
              if (words.includes(extra)) errors.push(`${at}: extra "${extra}" also appears in the answer`);
            }
          }
          break;
        }
        case 'order': {
          if (!Array.isArray(ex.answer) || ex.answer.length < 2)
            errors.push(`${at}: needs at least 2 steps`);
          else if (new Set(ex.answer).size !== ex.answer.length)
            errors.push(`${at}: duplicate steps make the order ambiguous`);
          break;
        }
        case 'match': {
          const keys = Object.keys(ex.pairs || {});
          const values = Object.values(ex.pairs || {});
          if (keys.length < 2) errors.push(`${at}: needs at least 2 pairs`);
          if (new Set(values).size !== values.length)
            errors.push(`${at}: duplicate right-hand values make matching ambiguous`);
          break;
        }
        case 'tf': {
          if (!ex.statement) errors.push(`${at}: missing statement`);
          if (typeof ex.answer !== 'boolean') errors.push(`${at}: answer must be true/false`);
          break;
        }
        case 'better': {
          if (!ex.bad || !ex.good) errors.push(`${at}: needs both bad and good`);
          if (ex.bad === ex.good) errors.push(`${at}: bad and good are identical`);
          break;
        }
      }

      // Round-trip: a perfect player must be accepted, and a wrong answer rejected.
      // Repeated, because prepare() shuffles and we want every ordering to hold.
      const rules = RULES[ex.type];
      if (rules) {
        for (let run = 0; run < 12; run++) {
          try {
            const prep = rules.prepare(ex);
            const model = rules.modelAnswer(ex, prep);
            if (!rules.canSubmit(model, prep)) errors.push(`${at}: model answer cannot be submitted`);
            if (!rules.isCorrect(model, ex, prep)) errors.push(`${at}: model answer marked WRONG`);
            const bad = wrongAnswer(ex, prep);
            if (bad != null && rules.isCorrect(bad, ex, prep))
              errors.push(`${at}: a wrong answer was marked correct`);
            if (!rules.correctText(ex, prep)) errors.push(`${at}: no correct-answer text to show`);
          } catch (err) {
            errors.push(`${at}: threw during round-trip — ${err.message}`);
            break;
          }
        }
      }
    });
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} content problem(s):\n`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}

console.log(`✓ content OK — ${units.length} units, ${seenLessonIds.size} lessons, ${exerciseCount} exercises`);
