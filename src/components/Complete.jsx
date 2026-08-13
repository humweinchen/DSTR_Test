import React from 'react';

export default function Complete({ result, onHome, onRetry }) {
  const { cleared, xp, missed } = result;

  if (!cleared) {
    return (
      <div className="complete">
        <div className="complete-emoji">💔</div>
        <h1>Out of hearts</h1>
        <p>
          You ran out of hearts, but nothing is lost — the questions you missed are saved in
          Practice.
        </p>
        <button type="button" className="cta cta-red" onClick={onRetry}>
          Try the lesson again
        </button>
        <button type="button" className="link-btn" onClick={onHome}>
          Back to the path
        </button>
      </div>
    );
  }

  return (
    <div className="complete">
      <div className="complete-emoji">{missed.length === 0 ? '🏆' : '🎉'}</div>
      <h1>{missed.length === 0 ? 'Perfect lesson!' : 'Lesson complete!'}</h1>
      <div className="complete-stats">
        <div className="stat-box">
          <span className="stat-label">XP earned</span>
          <span className="stat-value">+{xp}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Missed</span>
          <span className="stat-value">{missed.length}</span>
        </div>
      </div>
      <p className="complete-note">
        {missed.length === 0
          ? 'No mistakes. Write those sentences the same way in the exam.'
          : 'The questions you missed are now in Practice. Go over them before you stop.'}
      </p>
      <button type="button" className="cta cta-green" onClick={onHome}>
        Continue
      </button>
    </div>
  );
}
