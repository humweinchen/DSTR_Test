/**
 * Units 15-16: the two units that are about EXAM WRITING rather than theory.
 *
 * The revision notes are blunt about this: the knowledge is already there, the
 * marks are lost because notes get copied onto the paper instead of sentences.
 * These units drill the conversion.
 */

export const sentenceGym = {
  id: 'sentence-gym',
  title: 'Sentence Gym',
  icon: '✍️',
  color: '#ff4b4b',
  blurb: 'Turn your keywords into full exam sentences. This is where your marks are.',
  lessons: [
    {
      id: 'sentence-gym-1',
      title: 'Keyword → sentence',
      exercises: [
        {
          type: 'match',
          question: 'Match each note to the exam sentence it becomes.',
          pairs: {
            'array static size': 'An array has a fixed size, declared before use',
            'expensive insert delete': 'Elements may need to be shifted, so it can be O(n)',
            'node = data + pointer': 'A node has a data field and a pointer field',
            'head first, tail last': 'The head points to the first node, the tail points to NULL',
          },
          explain: 'Left column is what you wrote. Right column is what earns marks.',
        },
        {
          type: 'match',
          question: 'Match these notes to their exam sentences.',
          pairs: {
            FIFO: 'The first item inserted is the first item removed',
            'enqueue rear': 'Enqueue adds a new item to the rear of the queue',
            'dequeue front': 'Dequeue removes the item from the front of the queue',
            'BST left right': 'Smaller values go left of the root, larger values go right',
          },
          explain: 'Same knowledge you already have — just wrapped in a sentence.',
        },
        {
          type: 'better',
          question: 'Which one is the exam answer?',
          bad: 'unknown data',
          good:
            'A linked list is useful when the number of data items is unknown or changes during runtime.',
          explain: 'The formula: keyword → what it means → why it matters.',
        },
        {
          type: 'better',
          question: 'Which one is the exam answer?',
          bad: 'graph vertices edges',
          good:
            'A graph is made up of vertices and edges, where vertices are nodes and edges are connections.',
          explain: 'Never leave a keyword naked on the page. Always define it in the same sentence.',
        },
        {
          type: 'better',
          question: 'Which one is the exam answer?',
          bad: 'Dijkstra shortest path',
          good:
            "Dijkstra's algorithm is used to find the shortest path in a weighted graph.",
          explain: 'Six words became a full sentence. That is the difference between 3/10 and 7/10.',
        },
        {
          type: 'build',
          question: 'Build the sentence for the note "binary tree two children":',
          answer: 'A binary tree is a tree where each node can have at most two children.',
          extra: ['exactly'],
          explain: 'Note the "at most" — that detail is the mark.',
        },
        {
          type: 'build',
          question: 'Build the sentence for the note "frequent insert delete":',
          answer:
            'A linked list is useful for frequent insertion and deletion because only pointers need to be changed.',
          extra: ['shifted'],
          explain: 'Keyword → sentence → reason.',
        },
      ],
    },
    {
      id: 'sentence-gym-2',
      title: 'Answer templates',
      exercises: [
        {
          type: 'mcq',
          question: 'For an "Explain X" question, the safest opening is:',
          choices: [
            '"X is a ... data structure that ..."',
            '"X got ..."',
            '"X is like ..."',
            'A bullet list of keywords',
          ],
          answer: '"X is a ... data structure that ..."',
          explain: 'Definition first. Then how it works. Then an example or complexity.',
        },
        {
          type: 'mcq',
          question: 'For a "Discuss TWO ..." question, you should write:',
          choices: [
            'Two separate points, each as a full sentence with a reason',
            'One long paragraph covering everything',
            'Two keywords',
            'A diagram only',
          ],
          answer: 'Two separate points, each as a full sentence with a reason',
          explain: 'If the question says TWO, give exactly two clearly separated points.',
        },
        {
          type: 'mcq',
          question: 'For a "Compare A and B" question, the best structure is:',
          choices: [
            'Say what is the same, then contrast feature by feature',
            'Describe A fully, then stop',
            'List keywords for both',
            'Give an example only',
          ],
          answer: 'Say what is the same, then contrast feature by feature',
          explain: 'e.g. "Both are linear data structures, but they store data differently."',
        },
        {
          type: 'mcq',
          question: 'For a "Procedure" question (like the print queue), you should:',
          choices: [
            'State the principle, then describe the steps in order using the correct operation names',
            'Just name the principle',
            'Draw a diagram with no words',
            'Give the time complexity only',
          ],
          answer:
            'State the principle, then describe the steps in order using the correct operation names',
          explain: 'FIFO → enqueue at rear → print front → dequeue front. Principle, then procedure.',
        },
        {
          type: 'mcq',
          question: 'For a "Code explanation" question, always finish with:',
          choices: [
            'The time complexity and why',
            'A joke',
            'The variable names',
            'The number of lines',
          ],
          answer: 'The time complexity and why',
          explain: '"The function visits every node once, so the time complexity is O(n)."',
        },
        {
          type: 'order',
          question: 'Order the shape of a strong 25-mark answer:',
          answer: [
            'Definition of the structure',
            'How it works, with the correct terminology',
            'An example or a diagram',
            'The time complexity where relevant',
            'A real-life application',
          ],
          explain: 'Five beats. If you are stuck, walk through them one at a time.',
        },
        {
          type: 'tf',
          statement: 'Writing only keywords is fine as long as the keywords are correct.',
          answer: false,
          explain:
            'This is the exact reason your mock sat at borderline. Markers reward sentences, not notes.',
        },
      ],
    },
    {
      id: 'sentence-gym-3',
      title: 'The 7 answer skeletons',
      exercises: [
        {
          type: 'build',
          question: 'Skeleton 1 — array drawbacks:',
          answer:
            'Arrays have a fixed size, so they are not flexible when the amount of data changes.',
          extra: ['dynamic'],
          explain: 'Then add the shifting/O(n) sentence to complete it.',
        },
        {
          type: 'build',
          question: 'Skeleton 2 — linked-list node:',
          answer:
            'A linked-list node contains data and at least one pointer that stores the address of the next node.',
          extra: ['index'],
          explain: 'Follow it with the head/NULL sentence and a drawing.',
        },
        {
          type: 'build',
          question: 'Skeleton 3 — linked-list requirements:',
          answer:
            'A linked list is used when the number of data items is unknown and when insertion and deletion are frequent.',
          extra: ['fixed'],
          explain: 'Both requirements in one sentence, then expand each with a reason.',
        },
        {
          type: 'build',
          question: 'Skeleton 4 — print queue:',
          answer:
            'A print queue follows First In, First Out, so documents are enqueued at the rear and printed from the front.',
          extra: ['Last'],
          explain: 'Principle plus both operations.',
        },
        {
          type: 'build',
          question: 'Skeleton 5 — binary tree and BST:',
          answer:
            'A binary tree has at most two children per node, while a BST also stores smaller values on the left and larger values on the right.',
          extra: ['exactly'],
          explain: 'One sentence covers both structures and their difference.',
        },
        {
          type: 'build',
          question: 'Skeleton 6 — height function:',
          answer:
            'The height function visits every node once to find the deepest path, so the time complexity is O(n).',
          extra: ['O(log'],
          explain: 'Write this line directly under your code.',
        },
        {
          type: 'build',
          question: 'Skeleton 7 — graph:',
          answer:
            'A graph consists of vertices and edges, can be represented by an adjacency matrix or adjacency list, and is used in map navigation systems.',
          extra: ['leaves'],
          explain: 'Definition, representation, application — the three things the question asks for.',
        },
      ],
    },
  ],
};

export const mistakeClinic = {
  id: 'mistake-clinic',
  title: 'Mistake Clinic',
  icon: '🩹',
  color: '#ea2b2b',
  blurb: 'The exact errors that cost you marks in Mock 2. Fix these first.',
  lessons: [
    {
      id: 'mistake-clinic-1',
      title: 'The four dangerous mistakes',
      exercises: [
        {
          type: 'mcq',
          question: 'Mistake 1. A linked list stores its nodes in memory that is:',
          choices: ['Non-contiguous', 'Contiguous', 'Sorted', 'Fixed'],
          answer: 'Non-contiguous',
          explain:
            'You wrote "because it is contiguous". Array = contiguous. Linked list = NON-contiguous.',
        },
        {
          type: 'tf',
          statement: 'A binary tree always has two children per node.',
          answer: false,
          explain:
            'Mistake 2. "At MOST two children." Zero and one child are both allowed in a binary tree.',
        },
        {
          type: 'mcq',
          question: 'Mistake 3. In a BST, the correct comparison is:',
          choices: [
            'Values are compared with the root: smaller go left, larger go right',
            'The right subtree is always larger than the left subtree',
            'The left subtree is always a leaf',
            'Both subtrees must have the same height',
          ],
          answer: 'Values are compared with the root: smaller go left, larger go right',
          explain: 'Everything is measured against the ROOT, not left against right.',
        },
        {
          type: 'mcq',
          question: 'Mistake 4. Which C++ line is written correctly?',
          choices: [
            'if (root == NULL) return -1;',
            'If (root == null) return -1;',
            'if (Root == NULL) Return -1;',
            'if (root = NULL) return -1;',
          ],
          answer: 'if (root == NULL) return -1;',
          explain:
            'Lower-case keywords, capital NULL, and == for comparison. Your mock used If / null / Root.',
        },
        {
          type: 'mcq',
          question: 'Where does "the algorithm visits every node once, so it is O(n)" belong?',
          choices: [
            'Under the tree height function',
            'Under the graph question',
            'Under the array drawbacks',
            'Under the print queue',
          ],
          answer: 'Under the tree height function',
          explain: 'In Mock 2 this sentence was accidentally written under the graph answer.',
        },
        {
          type: 'blank',
          text: 'Array = contiguous. Linked list = ___.',
          answer: 'non-contiguous',
          bank: ['contiguous', 'sorted', 'fixed'],
          explain: 'If you only remember one correction tonight, make it this one.',
        },
      ],
    },
    {
      id: 'mistake-clinic-2',
      title: 'Rewrite your own answers',
      exercises: [
        {
          type: 'better',
          question: 'Your Mock 2 answer vs the upgrade:',
          bad: 'Static size. Which sets when its declaration.',
          good:
            'An array has a fixed size, which means its size is declared before use and cannot easily change during runtime.',
          explain: 'Array drawbacks scored 5/8. This sentence closes most of that gap.',
        },
        {
          type: 'better',
          question: 'Your Mock 2 answer vs the upgrade:',
          bad: 'Node = data + pointer',
          good:
            'A node contains a data field and a pointer field. The data stores the value, while the pointer stores the address of the next node.',
          explain: 'Linked-list node scored 7/10. Explaining what the pointer STORES is the missing mark.',
        },
        {
          type: 'better',
          question: 'Your Mock 2 answer vs the upgrade:',
          bad: 'Binary tree has two children. The right subtree is always larger than the left subtree.',
          good:
            'A binary tree is a tree where each node can have at most two children. A BST stores smaller values in the left subtree and larger values in the right subtree of the root.',
          explain: 'Binary tree + BST scored 5/10 — both halves of that answer had the wrong wording.',
        },
        {
          type: 'better',
          question: 'Your Mock 2 answer vs the upgrade:',
          bad: 'Algorithm will visit every node. Graph = edges + ventices. Real life application = Google Maps.',
          good:
            'A graph is a non-linear data structure made of vertices and edges. It can be represented by an adjacency matrix or an adjacency list, and it is used in map navigation systems such as Google Maps.',
          explain: 'Graph scored 3/10 — the lowest mark on the paper, purely because it was too short.',
        },
        {
          type: 'better',
          question: 'Your Mock 2 answer vs the upgrade:',
          bad: 'Queue is using FIFO. So in the print queue procedure, the document will print by the order, front.',
          good:
            'A print queue follows the First In, First Out principle. Each new document is enqueued at the rear, and the document at the front is printed and then dequeued.',
          explain: 'Print queue scored 7/10. Naming enqueue-rear and dequeue-front finishes it.',
        },
        {
          type: 'order',
          question: 'Order your revision priority (matching the exam layout):',
          answer: [
            'Array and linked-list theory',
            'Stack and queue',
            'Binary tree and BST',
            'Graph and Dijkstra',
          ],
          explain: 'This is the order your mock paper asks the questions in. Revise in the same order.',
        },
      ],
    },
  ],
};
