# DSTR Lingo 🌳

A Duolingo-style game for revising the DSTR (Data Structures) exam.

Every question is built from **your own material** — the Mock 2 paper, the answers you wrote,
and the revision notes. The point is not general theory: it is being able to write the exact
sentences that earn marks, in the exam, from memory.

**259 questions · 39 lessons · 17 units.**

---

## Run it

```bash
npm install
npm run dev          # http://localhost:5173
```

To build a static copy (works on a phone, works offline once loaded):

```bash
npm run build
npm run preview
```

## Play it on your phone

Push to GitHub, then **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The included workflow (`.github/workflows/deploy.yml`) builds and publishes on every push to
the default branch, and the site appears at `https://<your-username>.github.io/<repo>/`.
Open it on your phone and add it to your home screen.

Progress (XP, streak, cleared lessons, mistakes) is saved in the browser's local storage, so it
stays on whichever device you play on.

---

## The ten question types

| Type | What you do | Why it's here |
|---|---|---|
| `mcq` | Pick the right option | Plain recall |
| `multi` | Select every point your answer must contain | Mirrors "Explain the TWO…" / "Discuss TWO…" |
| `keyword` | See a keyword, pick what it refers to | "When you see FIFO…" |
| `blank` | Tap a word into the gap | Locks in exact terms |
| `type` | Type the answer | No luck, no options to guess from |
| `build` | Tap words in order to assemble a full exam sentence | **The main event** — turns your keywords into sentences |
| `order` | Put steps in the correct sequence | Procedures: print queue, Dijkstra, postfix, height function |
| `match` | Tap matching pairs | Terminology and comparison tables |
| `tf` | True or false | Kills the specific misconceptions in your paper |
| `better` | Choose the better exam sentence out of two | Your actual Mock 2 answer vs the upgrade |

## How a lesson works

- 5 hearts. A wrong answer costs one heart and puts that question back at the end of the queue,
  so you never leave a lesson without having got it right.
- Every answer shows an explanation — including *why* the wrong one is wrong.
- Missed questions land in **Practice**, which has unlimited hearts.
- Run out of hearts and the lesson fails, but the mistakes are still saved.

## The units

1. **Big-O Basics** — growth vs seconds, and the array/linked-list complexity table
2. **Array** — contiguous memory, the TWO drawbacks
3. **Linked List** — node = data + pointer, head/tail/NULL, insertion after P
4. **Array vs Linked List** — the comparison question
5. **Stack** — LIFO, push/pop/peek/isEmpty, applications
6. **Queue** — FIFO, enqueue/dequeue, the print queue procedure
7. **Stack vs Queue** — the other comparison question
8. **Infix & Postfix** — conversion by precedence, evaluation with a stack
9. **Binary Tree** — at most two children, full binary tree, the C++ height function
10. **Tree Traversal** — preorder, inorder, postorder
11. **Binary Search Tree** — the ordering rule and the three deletion cases
12. **Binary Search** — halving a sorted array, O(log n)
13. **Graph** — vertices/edges, adjacency matrix vs list, Google Maps
14. **Dijkstra's Algorithm** — shortest path, the five steps
15. **Sentence Gym** — keyword → exam sentence, answer templates, the 7 skeletons
16. **Mistake Clinic** — the exact errors that cost marks in Mock 2
17. **Exam Room: Mock 2** — the seven real exam questions, in the paper's own wording

Units 15–17 are the ones to do first if you are short on time. The notes are blunt about it: the
knowledge is there, the marks are lost by writing notes instead of sentences.

**Exam Room** works differently from the rest. Each lesson is one real question from the Mock 2
paper, quoted exactly, and it runs the same drill every time: pick the points the answer must
contain, compare what you actually wrote in Mock 2 against a pass-safe version, then build that
version sentence by sentence.

---

## Adding your own questions

Content lives in `src/data/units/*.js`. A unit looks like this:

```js
export const myUnit = {
  id: 'my-unit',
  title: 'My Unit',
  icon: '📘',
  color: '#58cc02',
  blurb: 'One line shown on the home screen.',
  lessons: [
    {
      id: 'my-unit-1',
      title: 'Lesson name',
      exercises: [ /* see below */ ],
    },
  ],
};
```

Then add it to the `units` array in `src/data/index.js`.

Exercise shapes — every one also takes an `explain` string, shown after answering:

```js
{ type: 'mcq',     question, choices: [...], answer }        // answer must be one of choices
{ type: 'multi',   question, choices: [...], answers: [...] } // select-all-that-apply
{ type: 'keyword', keyword, question, choices: [...], answer }
{ type: 'blank',   text: 'A stack follows ___.', answer, bank: [...wrong options] }
{ type: 'type',    question, answer, accept: [...other spellings] }
{ type: 'build',   question, answer: 'The full sentence.', extra: [...distractor words] }
{ type: 'order',   question, answer: ['step 1', 'step 2', ...] }
{ type: 'match',   question, pairs: { left: 'right', ... } }
{ type: 'tf',      statement, answer: true }
{ type: 'better',  question, bad: '...', good: '...' }
```

`build` and `order` shuffle their tiles for you — you only write the correct version.

### Check your content

```bash
npm run validate
```

This checks the structure (answers that aren't in the choice list, duplicate steps, distractor
words that collide with real ones, sentences too long to tap) **and** plays every question
twelve times with shuffled ordering, asserting that the correct answer is accepted and a wrong
answer is rejected. `npm run build` runs it automatically, so broken content cannot ship.

## Layout

```
src/
  data/units/*.js   the question bank
  engine/types.js   the rules for each question type (pure — no React, so it's testable)
  engine/progress.js  XP, streak, mistakes, localStorage
  components/       Home, Lesson, Complete, and the exercise UIs
scripts/validate-content.mjs
```
