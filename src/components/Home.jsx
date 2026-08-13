import React from 'react';
import { units, totalLessons, totalExercises } from '../data/index.js';

export default function Home({ progress, onStartLesson, onPractice, onReset }) {
  const done = Object.keys(progress.completed).length;
  const mistakes = progress.mistakes.length;

  return (
    <div className="home">
      <header className="home-header">
        <div className="brand">
          <span className="brand-icon">🌳</span>
          <div>
            <h1>DSTR Lingo</h1>
            <p>Data Structures exam trainer</p>
          </div>
        </div>
        <div className="stats">
          <span title="Day streak">🔥 {progress.streak}</span>
          <span title="Total XP">⭐ {progress.xp}</span>
          <span title="Lessons cleared">
            🏆 {done}/{totalLessons}
          </span>
        </div>
      </header>

      <section className="practice-card">
        <div>
          <h2>Practice your mistakes</h2>
          <p>
            {mistakes > 0
              ? `${mistakes} question${mistakes === 1 ? '' : 's'} waiting. Unlimited hearts.`
              : 'Nothing to review yet — every question you miss lands here.'}
          </p>
        </div>
        <button type="button" className="cta cta-small" disabled={mistakes === 0} onClick={onPractice}>
          Practice
        </button>
      </section>

      <div className="path">
        {units.map((unit) => {
          const cleared = unit.lessons.filter((l) => progress.completed[l.id]).length;
          const complete = cleared === unit.lessons.length;
          return (
            <section className="unit" key={unit.id}>
              <div className="unit-head" style={{ background: unit.color }}>
                <div className="unit-title">
                  <span className="unit-icon">{unit.icon}</span>
                  <div>
                    <h2>{unit.title}</h2>
                    <p>{unit.blurb}</p>
                  </div>
                </div>
                <div className="unit-crown">
                  {complete ? '👑' : `${cleared}/${unit.lessons.length}`}
                </div>
              </div>
              <div className="lessons">
                {unit.lessons.map((lesson) => {
                  const times = progress.completed[lesson.id] || 0;
                  return (
                    <button
                      key={lesson.id}
                      type="button"
                      className={`lesson-btn ${times ? 'done' : ''}`}
                      style={times ? { borderColor: unit.color } : undefined}
                      onClick={() => onStartLesson(unit, lesson)}
                    >
                      <span className="lesson-check" style={{ background: times ? unit.color : undefined }}>
                        {times ? '✓' : '▶'}
                      </span>
                      <span className="lesson-name">{lesson.title}</span>
                      <span className="lesson-count">{lesson.exercises.length} q</span>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <footer className="home-footer">
        <p>
          {totalExercises} questions across {totalLessons} lessons, built from the Mock 2 paper and
          the revision notes.
        </p>
        <button type="button" className="link-btn" onClick={onReset}>
          Reset progress
        </button>
      </footer>
    </div>
  );
}
