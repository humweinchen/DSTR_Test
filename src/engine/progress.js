const KEY = 'dstr-lingo-progress-v1';

const EMPTY = {
  xp: 0,
  streak: 0,
  lastPlayed: null, // 'YYYY-MM-DD'
  completed: {}, // lessonId -> times cleared
  mistakes: [], // [{ unitId, lessonId, index }]
};

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function daysBetween(a, b) {
  const ms = new Date(`${b}T00:00:00`) - new Date(`${a}T00:00:00`);
  return Math.round(ms / 86400000);
}

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY };
    return { ...EMPTY, ...JSON.parse(raw) };
  } catch {
    return { ...EMPTY };
  }
}

export function save(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* private mode / storage full — the game still works, it just won't remember */
  }
}

export function reset() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  return { ...EMPTY };
}

/**
 * Fold a finished lesson into the saved state.
 * `missed` is the list of exercise refs the player got wrong at least once.
 */
export function recordLesson(state, { lessonId, xp, missed }) {
  const day = today();
  let streak = state.streak;
  if (state.lastPlayed !== day) {
    const gap = state.lastPlayed ? daysBetween(state.lastPlayed, day) : null;
    streak = gap === 1 ? state.streak + 1 : 1;
  }
  if (streak === 0) streak = 1;

  // Keep the newest 40 mistakes, most recent first, no duplicates.
  const key = (m) => `${m.lessonId}#${m.index}`;
  const seen = new Set(missed.map(key));
  const mistakes = [...missed, ...state.mistakes.filter((m) => !seen.has(key(m)))].slice(0, 40);

  return {
    ...state,
    xp: state.xp + xp,
    streak,
    lastPlayed: day,
    completed: { ...state.completed, [lessonId]: (state.completed[lessonId] || 0) + 1 },
    mistakes,
  };
}

/** Drop the mistakes the player has just answered correctly in a review session. */
export function clearMistakes(state, refs) {
  const key = (m) => `${m.lessonId}#${m.index}`;
  const done = new Set(refs.map(key));
  return { ...state, mistakes: state.mistakes.filter((m) => !done.has(key(m))) };
}
