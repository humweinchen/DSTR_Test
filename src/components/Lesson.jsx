import React, { useMemo, useState } from 'react';
import { REGISTRY, promptFor, subPromptFor } from './exercises.jsx';
import { shuffle } from '../engine/shuffle.js';

const MAX_HEARTS = 5;

/**
 * items: [{ ref: { lessonId, index }, data }]
 * onFinish({ cleared, xp, missed })  — cleared === false means they ran out of hearts.
 */
export default function Lesson({ title, items, unlimitedHearts = false, onQuit, onFinish }) {
  const [queue, setQueue] = useState(() => shuffle(items).map((it, i) => ({ ...it, key: `q${i}` })));
  const [pos, setPos] = useState(0);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [missed, setMissed] = useState([]);
  const [verdict, setVerdict] = useState(null); // null | 'right' | 'wrong'
  const [answer, setAnswer] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const [dead, setDead] = useState(false);

  const item = queue[pos];
  const type = item ? REGISTRY[item.data.type] : null;

  // Randomised presentation is regenerated whenever we move to a new card.
  const prep = useMemo(
    () => (item ? type.prepare(item.data) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pos, attempt]
  );

  // Some types (match) need a structured starting answer rather than null.
  const currentAnswer = useMemo(
    () => (answer !== null ? answer : type?.initialAnswer ? type.initialAnswer() : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [answer, pos, attempt]
  );

  if (!item) return null;

  const checked = verdict !== null;
  const canCheck = !checked && type.canSubmit(currentAnswer, prep);
  const progress = Math.round((pos / queue.length) * 100);

  function check() {
    if (!canCheck) return;
    const right = type.isCorrect(currentAnswer, item.data, prep);
    if (right) {
      setVerdict('right');
      return;
    }
    setVerdict('wrong');
    setMissed((m) =>
      m.some((r) => r.lessonId === item.ref.lessonId && r.index === item.ref.index)
        ? m
        : [...m, item.ref]
    );
    if (!unlimitedHearts) {
      const left = hearts - 1;
      setHearts(left);
      if (left <= 0) setDead(true);
    }
    // A card answered wrongly comes back at the end of the session.
    setQueue((q) => [...q, { ...item, key: `${item.key}-r${q.length}` }]);
  }

  function next() {
    if (dead) {
      onFinish({ cleared: false, xp: 0, missed });
      return;
    }
    const nextPos = pos + 1;
    setVerdict(null);
    setAnswer(null);
    setAttempt((a) => a + 1);
    if (nextPos >= queue.length) {
      onFinish({ cleared: true, xp: 10 + hearts * 2, missed });
    } else {
      setPos(nextPos);
    }
  }

  const Comp = type.Component;

  return (
    <div className="lesson">
      <header className="lesson-bar">
        <button
          className="icon-btn"
          type="button"
          onClick={() => onQuit({ missed })}
          aria-label="Quit lesson"
        >
          ✕
        </button>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="hearts" aria-label={`${hearts} hearts left`}>
          {unlimitedHearts ? '∞' : `❤️ ${hearts}`}
        </div>
      </header>

      <main className="lesson-body">
        <p className="lesson-topic">{title}</p>
        <h2 className="prompt">{promptFor(item.data)}</h2>

        {item.data.keyword && <div className="keyword-chip">“{item.data.keyword}”</div>}
        {subPromptFor(item.data) && <p className="sub-prompt">{subPromptFor(item.data)}</p>}

        <div className="exercise">
          <Comp
            key={`${item.key}-${attempt}`}
            data={item.data}
            prep={prep}
            answer={currentAnswer}
            setAnswer={setAnswer}
            disabled={checked}
            checked={checked}
          />
        </div>
      </main>

      <footer className={`footer ${verdict ? `footer-${verdict}` : ''}`}>
        {checked && (
          <div className="feedback">
            <strong>
              {verdict === 'right' ? '✅ Correct!' : dead ? '💔 Out of hearts' : '❌ Not quite'}
            </strong>
            {verdict === 'wrong' && (
              <p className="correct-answer">
                <span>Answer: </span>
                {type.correctText(item.data, prep)}
              </p>
            )}
            {item.data.explain && <p className="explain">{item.data.explain}</p>}
          </div>
        )}
        <button
          type="button"
          className={`cta ${checked ? (verdict === 'right' ? 'cta-green' : 'cta-red') : ''}`}
          disabled={!checked && !canCheck}
          onClick={checked ? next : check}
        >
          {checked ? (dead ? 'See results' : 'Continue') : 'Check'}
        </button>
      </footer>
    </div>
  );
}
