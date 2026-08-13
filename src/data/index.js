import { foundations, array, linkedList, arrayVsList } from './units/linear.js';
import { stack, queue, stackVsQueue, infixPostfix } from './units/stackqueue.js';
import { binaryTree, traversal, bst, binarySearch } from './units/trees.js';
import { graph, dijkstra } from './units/graphs.js';
import { sentenceGym, mistakeClinic } from './units/exam.js';
import { mock2 } from './units/mock2.js';

/** Ordered to match the way the mock paper asks its questions. */
export const units = [
  foundations,
  array,
  linkedList,
  arrayVsList,
  stack,
  queue,
  stackVsQueue,
  infixPostfix,
  binaryTree,
  traversal,
  bst,
  binarySearch,
  graph,
  dijkstra,
  sentenceGym,
  mistakeClinic,
  mock2,
];

/** Flat index so a mistake can be stored as { lessonId, index } and looked up later. */
export const lessonById = {};
for (const unit of units) {
  for (const lesson of unit.lessons) {
    lessonById[lesson.id] = { unit, lesson };
  }
}

export function getExercise(lessonId, index) {
  const entry = lessonById[lessonId];
  if (!entry) return null;
  return entry.lesson.exercises[index] || null;
}

export const totalLessons = units.reduce((n, u) => n + u.lessons.length, 0);
export const totalExercises = units.reduce(
  (n, u) => n + u.lessons.reduce((m, l) => m + l.exercises.length, 0),
  0
);
