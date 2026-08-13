import React, { useEffect, useState } from 'react';
import Home from './components/Home.jsx';
import Lesson from './components/Lesson.jsx';
import Complete from './components/Complete.jsx';
import { getExercise } from './data/index.js';
import * as store from './engine/progress.js';

export default function App() {
  const [progress, setProgress] = useState(() => store.load());
  const [view, setView] = useState({ name: 'home' });

  useEffect(() => {
    store.save(progress);
  }, [progress]);

  function startLesson(unit, lesson) {
    const items = lesson.exercises.map((data, index) => ({
      ref: { unitId: unit.id, lessonId: lesson.id, index },
      data,
    }));
    setView({ name: 'lesson', title: `${unit.title} · ${lesson.title}`, lesson, unit, items });
  }

  function startPractice() {
    const items = progress.mistakes
      .map((ref) => ({ ref, data: getExercise(ref.lessonId, ref.index) }))
      .filter((it) => it.data)
      .slice(0, 20);
    if (items.length === 0) return;
    setView({ name: 'lesson', title: 'Practice · your mistakes', practice: true, items });
  }

  /** Missed questions are worth keeping even when the lesson wasn't finished. */
  function rememberMistakes(p, missed) {
    if (missed.length === 0) return p;
    return {
      ...p,
      mistakes: [
        ...missed,
        ...p.mistakes.filter(
          (m) => !missed.some((r) => r.lessonId === m.lessonId && r.index === m.index)
        ),
      ].slice(0, 40),
    };
  }

  function quitLesson({ missed = [] } = {}) {
    setProgress((p) => rememberMistakes(p, missed));
    setView({ name: 'home' });
  }

  function finishLesson(result) {
    if (result.cleared) {
      setProgress((p) => {
        if (view.practice) {
          // Anything answered correctly in practice leaves the mistake list.
          const stillWrong = new Set(result.missed.map((m) => `${m.lessonId}#${m.index}`));
          const solved = view.items
            .map((it) => it.ref)
            .filter((ref) => !stillWrong.has(`${ref.lessonId}#${ref.index}`));
          return store.recordLesson(store.clearMistakes(p, solved), {
            lessonId: '__practice__',
            xp: result.xp,
            missed: result.missed,
          });
        }
        return store.recordLesson(p, {
          lessonId: view.lesson.id,
          xp: result.xp,
          missed: result.missed,
        });
      });
    } else {
      // Failed lessons still remember what went wrong.
      setProgress((p) => rememberMistakes(p, result.missed));
    }
    setView({ name: 'complete', result, retry: view });
  }

  if (view.name === 'lesson') {
    return (
      <Lesson
        key={view.title + view.items.length}
        title={view.title}
        items={view.items}
        unlimitedHearts={!!view.practice}
        onQuit={quitLesson}
        onFinish={finishLesson}
      />
    );
  }

  if (view.name === 'complete') {
    return (
      <Complete
        result={view.result}
        onHome={() => setView({ name: 'home' })}
        onRetry={() => setView({ ...view.retry })}
      />
    );
  }

  return (
    <Home
      progress={progress}
      onStartLesson={startLesson}
      onPractice={startPractice}
      onReset={() => {
        if (confirm('Reset all XP, streak and progress?')) setProgress(store.reset());
      }}
    />
  );
}
