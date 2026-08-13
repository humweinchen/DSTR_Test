import React, { useState } from 'react';
import { RULES } from '../engine/types.js';

/*
 * The answer-checking rules live in engine/types.js (pure, testable).
 * This file only adds the interactive part for each type.
 */

/* ------------------------------------------------------------------ choices */

function ChoiceList({ choices, answer, setAnswer, disabled, data, checked }) {
  return (
    <div className="choices">
      {choices.map((choice) => {
        const selected = answer === choice;
        let tone = '';
        if (checked && choice === data.answer) tone = 'is-right';
        else if (checked && selected) tone = 'is-wrong';
        return (
          <button
            key={choice}
            type="button"
            className={`choice ${selected ? 'selected' : ''} ${tone}`}
            disabled={disabled}
            onClick={() => setAnswer(choice)}
          >
            {choice}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------- multi-select points */

function MultiExercise({ data, prep, answer, setAnswer, disabled, checked }) {
  const picked = answer || [];
  return (
    <div className="choices">
      {prep.choices.map((choice) => {
        const selected = picked.includes(choice);
        const isAnswer = data.answers.includes(choice);
        let tone = '';
        if (checked && isAnswer) tone = 'is-right';
        else if (checked && selected) tone = 'is-wrong';
        return (
          <button
            key={choice}
            type="button"
            className={`choice checkable ${selected ? 'selected' : ''} ${tone}`}
            disabled={disabled}
            aria-pressed={selected}
            onClick={() =>
              setAnswer(selected ? picked.filter((c) => c !== choice) : [...picked, choice])
            }
          >
            <span className="tick">{selected ? '✓' : ''}</span>
            {choice}
          </button>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------- fill blanks */

function BlankExercise({ data, prep, answer, setAnswer, disabled, checked }) {
  const [before, after = ''] = data.text.split('___');
  return (
    <>
      <p className="sentence">
        {before}
        <span className={`blank ${answer ? 'filled' : ''}`}>{answer || ' '}</span>
        {after}
      </p>
      <ChoiceList
        choices={prep.choices}
        answer={answer}
        setAnswer={(v) => setAnswer(answer === v ? null : v)}
        disabled={disabled}
        data={data}
        checked={checked}
      />
    </>
  );
}

/* ------------------------------------------------------------- typed answer */

function TypeExercise({ answer, setAnswer, disabled }) {
  return (
    <input
      className="type-input"
      type="text"
      autoFocus
      autoComplete="off"
      autoCapitalize="off"
      spellCheck="false"
      placeholder="Type your answer"
      value={answer || ''}
      disabled={disabled}
      onChange={(e) => setAnswer(e.target.value)}
    />
  );
}

/* ------------------------------ sequence: build a sentence / order the steps */

function SequenceExercise({ prep, answer, setAnswer, disabled, layout }) {
  const picked = answer || [];
  const pickedIds = new Set(picked.map((t) => t.id));
  const remaining = prep.tiles.filter((t) => !pickedIds.has(t.id));

  return (
    <div className={`sequence ${layout}`}>
      <div className="sequence-slot">
        {picked.length === 0 && <span className="sequence-hint">Tap them in order…</span>}
        {picked.map((tile, i) => (
          <button
            key={tile.id}
            type="button"
            className="tile picked"
            disabled={disabled}
            onClick={() => setAnswer(picked.filter((_, j) => j !== i))}
          >
            {layout === 'rows' && <span className="tile-num">{i + 1}</span>}
            {tile.text}
          </button>
        ))}
      </div>
      <div className="sequence-bank">
        {remaining.map((tile) => (
          <button
            key={tile.id}
            type="button"
            className="tile"
            disabled={disabled}
            onClick={() => setAnswer([...picked, tile])}
          >
            {tile.text}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- match */

function MatchExercise({ prep, answer, setAnswer, disabled }) {
  const { matched, wrong } = answer;
  const [pickedLeft, setPickedLeft] = useState(null);
  const [flash, setFlash] = useState(null);

  const takenRight = new Set(Object.values(matched));

  function tapLeft(key) {
    if (disabled || matched[key]) return;
    setPickedLeft(pickedLeft === key ? null : key);
  }

  function tapRight(value) {
    if (disabled || takenRight.has(value) || !pickedLeft) return;
    if (prep.pairs[pickedLeft] === value) {
      setAnswer({ matched: { ...matched, [pickedLeft]: value }, wrong });
    } else {
      setFlash(value);
      setAnswer({ matched, wrong: wrong + 1 });
      setTimeout(() => setFlash(null), 420);
    }
    setPickedLeft(null);
  }

  return (
    <div className="match">
      <div className="match-col">
        {prep.left.map((key) => (
          <button
            key={key}
            type="button"
            className={`match-item ${matched[key] ? 'done' : ''} ${
              pickedLeft === key ? 'selected' : ''
            }`}
            disabled={disabled || !!matched[key]}
            onClick={() => tapLeft(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="match-col">
        {prep.right.map((value) => (
          <button
            key={value}
            type="button"
            className={`match-item ${takenRight.has(value) ? 'done' : ''} ${
              flash === value ? 'shake' : ''
            }`}
            disabled={disabled || takenRight.has(value)}
            onClick={() => tapRight(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------- rules + their components */

const COMPONENTS = {
  mcq: ({ data, prep, ...rest }) => <ChoiceList choices={prep.choices} data={data} {...rest} />,
  keyword: ({ data, prep, ...rest }) => <ChoiceList choices={prep.choices} data={data} {...rest} />,
  multi: MultiExercise,
  blank: BlankExercise,
  type: TypeExercise,
  build: (props) => <SequenceExercise {...props} layout="words" />,
  order: (props) => <SequenceExercise {...props} layout="rows" />,
  match: MatchExercise,
  tf: ({ data, prep, ...rest }) => (
    <>
      <p className="sentence quoted">{data.statement}</p>
      <ChoiceList
        choices={prep.choices}
        data={{ ...data, answer: data.answer ? 'True' : 'False' }}
        {...rest}
      />
    </>
  ),
  better: ({ data, prep, ...rest }) => (
    <ChoiceList choices={prep.choices} data={{ ...data, answer: data.good }} {...rest} />
  ),
};

export const REGISTRY = Object.fromEntries(
  Object.entries(RULES).map(([type, rules]) => [type, { ...rules, Component: COMPONENTS[type] }])
);

/** The instruction line above each exercise. */
export function promptFor(data) {
  switch (data.type) {
    case 'blank':
      return 'Fill in the blank';
    case 'multi':
      return data.question;
    case 'build':
      return data.question || 'Build the exam sentence';
    case 'order':
      return data.question || 'Put these in the correct order';
    case 'match':
      return data.question || 'Tap the matching pairs';
    case 'tf':
      return 'True or false?';
    case 'better':
      return data.question || 'Which sentence is better for the exam?';
    case 'keyword':
      return 'When you see this keyword…';
    default:
      return data.question;
  }
}

/** Types that show an extra sub-question under the prompt. */
export function subPromptFor(data) {
  return data.type === 'keyword' ? data.question : null;
}
