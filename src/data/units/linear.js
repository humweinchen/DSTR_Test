/**
 * Units 1-4: Big-O, arrays, linked lists and the comparison question.
 * Wording is kept as close as possible to the model answers in the revision notes,
 * because the goal is to be able to write those exact sentences in the exam.
 */

export const foundations = {
  id: 'foundations',
  title: 'Big-O Basics',
  icon: '⏱️',
  color: '#1cb0f6',
  blurb: 'Growth, not seconds. O(1), O(n), O(log n), O(n²).',
  lessons: [
    {
      id: 'foundations-1',
      title: 'What Big-O means',
      exercises: [
        {
          type: 'mcq',
          question: 'An algorithm is:',
          choices: [
            'A step-by-step procedure to solve a problem',
            'A way of storing data in memory',
            'A pointer to the first node',
            'A fixed block of contiguous memory',
          ],
          answer: 'A step-by-step procedure to solve a problem',
          explain:
            'Data structures are ways of organising data. Algorithms are step-by-step procedures that operate on that data.',
        },
        {
          type: 'blank',
          text: 'Big-O is not about exact seconds. It is about ___.',
          answer: 'growth',
          bank: ['seconds', 'hardware', 'memory addresses'],
          explain:
            'Big-O describes how the work grows as the number of elements n grows. A faster laptop does not change the Big-O.',
        },
        {
          type: 'mcq',
          question: 'If an operation takes the same time no matter how many elements exist, it is:',
          choices: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
          answer: 'O(1)',
          explain: 'Constant time. The size of the data does not change the amount of work.',
        },
        {
          type: 'mcq',
          question: 'If an operation may need to check every element once, it is:',
          choices: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
          answer: 'O(n)',
          explain: 'Linear time. Double the data, double the work.',
        },
        {
          type: 'mcq',
          question: 'If an algorithm cuts the problem in half each time, it is:',
          choices: ['O(log n)', 'O(n)', 'O(1)', 'O(n²)'],
          answer: 'O(log n)',
          explain: 'Halving each step gives logarithmic time. Binary search is the classic example.',
        },
        {
          type: 'mcq',
          question: 'If an algorithm uses one loop inside another loop, it is usually:',
          choices: ['O(n²)', 'O(n)', 'O(log n)', 'O(1)'],
          answer: 'O(n²)',
          explain: 'A nested loop runs the inner loop n times for each of the n outer steps.',
        },
        {
          type: 'match',
          question: 'Match each complexity to its meaning.',
          pairs: {
            'O(1)': 'Constant — same work always',
            'O(n)': 'Linear — check every element once',
            'O(log n)': 'Halve the problem each step',
            'O(n²)': 'Nested loops',
          },
          explain: 'These four cover almost every complexity you will be asked about in this paper.',
        },
        {
          type: 'tf',
          statement: 'Big-O measures the exact number of seconds an algorithm takes.',
          answer: false,
          explain: 'Big-O measures growth, not seconds. It ignores hardware speed.',
        },
      ],
    },
    {
      id: 'foundations-2',
      title: 'The table you must memorise',
      exercises: [
        {
          type: 'mcq',
          question: 'Access by index in an ARRAY is:',
          choices: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
          answer: 'O(1)',
          explain:
            'The computer can calculate the exact memory location from the index, so it jumps straight there.',
        },
        {
          type: 'mcq',
          question: 'Access by index in a LINKED LIST is:',
          choices: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
          answer: 'O(n)',
          explain: 'There is no index. You start at the head and follow pointers one node at a time.',
        },
        {
          type: 'mcq',
          question: 'Insertion at the BEGINNING of a linked list is:',
          choices: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
          answer: 'O(1)',
          explain: 'Only pointers change. Nothing has to be shifted.',
        },
        {
          type: 'mcq',
          question: 'Insertion at the BEGINNING of an array is:',
          choices: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
          answer: 'O(n)',
          explain: 'Every existing element must shift one position to the right to make space.',
        },
        {
          type: 'type',
          question: 'Calculating the number of nodes in a linked list takes:',
          answer: 'O(n)',
          accept: ['on', 'o(n)', 'big o(n)', 'linear'],
          explain: 'You must traverse node by node, so it is O(n). This exact line appears in your test file.',
        },
        {
          type: 'mcq',
          question:
            'In a singly linked list with only a HEAD pointer, which operations are O(1)?',
          choices: [
            'Insertion at the front and deletion of the front node',
            'Insertion at the end and deletion at the end',
            'Searching for a value',
            'Counting all the nodes',
          ],
          answer: 'Insertion at the front and deletion of the front node',
          explain:
            'With only a head pointer, the front is the only place you can reach instantly. This is straight out of your linked-list mock answer key.',
        },
        {
          type: 'tf',
          statement: 'Searching a linked list is O(1) because the nodes are connected by pointers.',
          answer: false,
          explain: 'Searching is O(n). Pointers connect the nodes but you still have to walk through them.',
        },
        {
          type: 'build',
          question: 'Build the exam sentence:',
          answer:
            'Accessing an element in an array is O(1) because the computer can calculate the exact memory location using the index.',
          extra: ['traverse', 'pointer'],
          explain: 'Name the complexity, then say WHY. The "because" clause is where the marks are.',
        },
      ],
    },
  ],
};

export const array = {
  id: 'array',
  title: 'Array',
  icon: '🧱',
  color: '#ff9600',
  blurb: 'Contiguous memory, fixed size, the two drawbacks.',
  lessons: [
    {
      id: 'array-1',
      title: 'What an array is',
      exercises: [
        {
          type: 'keyword',
          keyword: 'contiguous memory + index access',
          question: 'Which data structure is this?',
          choices: ['Array', 'Linked List', 'Graph', 'Queue'],
          answer: 'Array',
          explain: 'Contiguous (continuous) memory plus direct index access is the array signature.',
        },
        {
          type: 'blank',
          text: 'An array stores elements of the same type in ___ memory locations.',
          answer: 'consecutive',
          bank: ['scattered', 'non-contiguous', 'dynamic'],
          explain: 'Consecutive = contiguous = continuous. Array is contiguous, linked list is NOT.',
        },
        {
          type: 'mcq',
          question: 'Why is array access so fast?',
          choices: [
            'The computer can calculate the exact memory location of an element',
            'The elements are sorted automatically',
            'Each element stores a pointer to the next one',
            'The array grows and shrinks as needed',
          ],
          answer: 'The computer can calculate the exact memory location of an element',
          explain: 'Base address + index × element size. No searching, no traversal.',
        },
        {
          type: 'mcq',
          question: 'Arrays are suitable when:',
          choices: [
            'The number of elements is known and frequent random access is required',
            'The number of data items keeps changing during runtime',
            'You insert and delete in the middle all the time',
            'Memory cannot be contiguous',
          ],
          answer: 'The number of elements is known and frequent random access is required',
          explain: 'Known size + fast access = array. Unknown size + frequent insert/delete = linked list.',
        },
        {
          type: 'build',
          question: 'Build the exam-style definition:',
          answer:
            'An array is a linear data structure that stores elements of the same type in consecutive memory locations.',
          extra: ['pointers', 'nodes'],
          explain: 'Start every "explain X" answer with "X is a ... data structure that ...".',
        },
        {
          type: 'tf',
          statement: 'Every element of an array can be accessed using an index.',
          answer: true,
          explain: 'That direct index access is exactly what makes array access O(1).',
        },
      ],
    },
    {
      id: 'array-2',
      title: 'The TWO drawbacks',
      exercises: [
        {
          type: 'mcq',
          question: 'Drawback 1 of array implementation is:',
          choices: [
            'The size is fixed once declared',
            'Elements are stored non-contiguously',
            'Access by index is slow',
            'It needs extra memory for pointers',
          ],
          answer: 'The size is fixed once declared',
          explain:
            'In many languages the size is decided before use. If the array is full you cannot simply add more — a new larger array must be created.',
        },
        {
          type: 'mcq',
          question: 'Drawback 2 of array implementation is:',
          choices: [
            'Insertion and deletion in the middle require shifting elements',
            'You cannot store the same type twice',
            'You cannot access an element by index',
            'It cannot be used to implement a stack',
          ],
          answer: 'Insertion and deletion in the middle require shifting elements',
          explain: 'Shifting elements costs O(n). That is the whole reason linked lists exist.',
        },
        {
          type: 'better',
          question: 'Which answer scores more marks?',
          bad: 'Static size. Which sets when its declaration.',
          good:
            'One drawback of arrays is that their size is fixed once declared, so they are not flexible when the number of data items changes during runtime.',
          explain:
            'Your mock lost marks here for being too short. Keyword → full sentence → consequence. Same idea, more marks.',
        },
        {
          type: 'better',
          question: 'Which answer scores more marks?',
          bad: 'Expensive insertion and the deletion. Where you have to redo it all.',
          good:
            'Another drawback is that insertion and deletion in the middle of an array require shifting elements, causing O(n) time complexity.',
          explain:
            'Say WHAT shifts and WHAT it costs. Naming O(n) turns a vague sentence into a marked point.',
        },
        {
          type: 'build',
          question: 'Build drawback 1:',
          answer:
            'One drawback of arrays is that their size is fixed once declared, so they are not flexible when the number of data items changes during runtime.',
          extra: ['pointers'],
          explain: 'Memorise this line. It is worth about half the marks on that sub-question.',
        },
        {
          type: 'build',
          question: 'Build drawback 2:',
          answer:
            'Another drawback is that insertion and deletion in the middle of an array require shifting elements, causing O(n) time complexity.',
          extra: ['contiguous'],
          explain: 'Two clean sentences answer the whole "TWO drawbacks" question.',
        },
        {
          type: 'order',
          question: 'Order the steps when you insert 25 into the middle of [10, 20, 30, 40]:',
          answer: [
            'Find the position where 25 belongs',
            'Shift 30 and 40 one place to the right',
            'Place 25 into the free slot',
            'Increase the number of stored elements',
          ],
          explain: 'The shifting step is the expensive one — that is where the O(n) comes from.',
        },
        {
          type: 'tf',
          statement: 'An array can grow automatically when it becomes full.',
          answer: false,
          explain:
            'Not by itself. A new, larger array has to be created and the old contents copied across.',
        },
      ],
    },
  ],
};

export const linkedList = {
  id: 'linked-list',
  title: 'Linked List',
  icon: '🔗',
  color: '#ce82ff',
  blurb: 'Node = data + pointer. Head, tail, NULL, insertion after P.',
  lessons: [
    {
      id: 'linked-list-1',
      title: 'Nodes and terminology',
      exercises: [
        {
          type: 'blank',
          text: 'A linked-list node = data + ___.',
          answer: 'pointer',
          bank: ['index', 'array', 'root'],
          explain: 'Node = data + pointer. This is the one line you already had right in your mock.',
        },
        {
          type: 'mcq',
          question: 'The pointer variable that stores the address of the first node is called the:',
          choices: ['head', 'tail', 'root', 'top'],
          answer: 'head',
          explain: 'First node = head. Last node = tail. The tail points to NULL.',
        },
        {
          type: 'blank',
          text: 'The last node of a singly linked list points to ___.',
          answer: 'NULL',
          bank: ['the head', 'the tail', 'itself'],
          explain: 'NULL shows the end of the list, because there is no next node.',
        },
        {
          type: 'match',
          question: 'Match the linked-list terms.',
          pairs: {
            Head: 'Pointer to the first node',
            Tail: 'The last node in the list',
            NULL: 'Marks the end of the list',
            Node: 'Data plus a pointer',
          },
          explain: 'Use these four words in the exam and the marker knows you understand the structure.',
        },
        {
          type: 'better',
          question: 'Which is the better exam sentence?',
          bad: 'Node = data + pointer.',
          good:
            'A node contains a data field and a pointer field. The data stores the value, while the pointer stores the address of the next node.',
          explain:
            'Your notes are the keyword. The exam wants the keyword wrapped into a sentence with what each part does.',
        },
        {
          type: 'build',
          question: 'Build the exam-style answer:',
          answer:
            'A linked list is made up of nodes. Each node contains data and a pointer to the next node.',
          extra: ['index', 'contiguous'],
          explain: 'Short, correct and complete. Then add the head/tail/NULL sentence after it.',
        },
        {
          type: 'build',
          question: 'Build the head/tail sentence:',
          answer:
            'The head points to the first node, while the tail is the last node and points to NULL.',
          extra: ['index'],
          explain: 'This is the second half of the "explain a linked-list node" answer.',
        },
        {
          type: 'tf',
          statement: 'Linked-list nodes must be stored in consecutive memory locations.',
          answer: false,
          explain:
            'The opposite. Nodes can be anywhere in memory — that is exactly why the list can grow dynamically.',
        },
      ],
    },
    {
      id: 'linked-list-2',
      title: 'When to use a linked list',
      exercises: [
        {
          type: 'mcq',
          question: 'A linked list is useful when:',
          choices: [
            'The number of data items is unknown or changes during runtime',
            'The number of elements is fixed and known',
            'You need direct access by index',
            'Memory must be contiguous',
          ],
          answer: 'The number of data items is unknown or changes during runtime',
          explain: 'Unknown / changing size is requirement number one.',
        },
        {
          type: 'mcq',
          question: 'The second requirement where a linked list is used is:',
          choices: [
            'Frequent insertion and deletion, because only pointers need to be changed',
            'Frequent searching, because search is O(1)',
            'Sorting, because the list sorts itself',
            'Random access, because each node has an index',
          ],
          answer: 'Frequent insertion and deletion, because only pointers need to be changed',
          explain: 'No shifting is needed, unlike an array. Only pointer updates.',
        },
        {
          type: 'match',
          question: 'Match each situation to why a linked list helps.',
          pairs: {
            'Unknown number of data items': 'Can grow and shrink dynamically',
            'Frequent insertion/deletion': 'Only pointer changes are needed',
            'Implementing stack/queue': 'Nodes can be added or removed dynamically',
            'Memory is not contiguous': 'Nodes can sit anywhere in memory',
          },
          explain: 'Any two of these four fully answer the "TWO requirements" question.',
        },
        {
          type: 'mcq',
          question: 'Linked lists can be used to implement:',
          choices: [
            'A stack, a binary tree, and chaining in hash tables',
            'Only stacks',
            'Only sorted arrays',
            'Binary search on an array',
          ],
          answer: 'A stack, a binary tree, and chaining in hash tables',
          explain: 'This exact list is in your linked-list quiz.',
        },
        {
          type: 'better',
          question: 'Which sentence is better for the exam?',
          bad: 'Frequent insertion and deletion. Because it is contiguous.',
          good:
            'A linked list is useful for frequent insertion and deletion because only pointers need to be changed, and the nodes do not need contiguous memory.',
          explain:
            '⚠️ This was a marked mistake in your paper. A linked list is NON-contiguous. Array = contiguous, linked list = non-contiguous.',
        },
        {
          type: 'build',
          question: 'Build requirement 1:',
          answer:
            'A linked list is useful when the number of data items is unknown or changes during runtime.',
          extra: ['fixed'],
          explain: 'Requirement 1 of 2.',
        },
        {
          type: 'build',
          question: 'Build requirement 2:',
          answer:
            'A linked list is useful for frequent insertion and deletion because only pointers need to be changed.',
          extra: ['shifted'],
          explain: 'Requirement 2 of 2. Together they are a complete answer.',
        },
      ],
    },
    {
      id: 'linked-list-3',
      title: 'Insertion after node P',
      exercises: [
        {
          type: 'order',
          question: 'Order the C++ statements to insert newNode after node P:',
          answer: ['newNode->data = x;', 'newNode->next = P->next;', 'P->next = newNode;'],
          explain:
            'First the new node points to the node after P. Then P points to the new node. This order is confirmed by your mock answer key.',
        },
        {
          type: 'mcq',
          question: 'Why must newNode->next = P->next; come BEFORE P->next = newNode;?',
          choices: [
            'Otherwise you lose the address of the old next node',
            'Otherwise the new node has no data',
            'Otherwise the head pointer is deleted',
            'Otherwise the list becomes contiguous',
          ],
          answer: 'Otherwise you lose the address of the old next node',
          explain:
            'If you overwrite P->next first, nothing remembers where the rest of the list was. The list is broken.',
        },
        {
          type: 'blank',
          text: 'To insert after P, first set newNode->next = ___;',
          answer: 'P->next',
          bank: ['newNode', 'NULL', 'head'],
          explain: 'The new node must first point to whatever P was pointing to.',
        },
        {
          type: 'mcq',
          question: 'Deleting the FIRST node of a singly linked list is:',
          choices: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
          answer: 'O(1)',
          explain: 'The head is immediately reachable, so only one pointer changes.',
        },
        {
          type: 'mcq',
          question: 'Deleting a node in the MIDDLE of a linked list is:',
          choices: [
            'O(n), because you must traverse to reach it',
            'O(1), because only pointers change',
            'O(log n), because the list halves',
            'Impossible without an index',
          ],
          answer: 'O(n), because you must traverse to reach it',
          explain:
            'The pointer update itself is O(1), but REACHING the position costs O(n). Say both halves in the exam.',
        },
        {
          type: 'tf',
          statement: 'Insertion at the front of a linked list requires shifting the other nodes.',
          answer: false,
          explain: 'No shifting ever happens in a linked list. That is the array problem, not this one.',
        },
      ],
    },
  ],
};

export const arrayVsList = {
  id: 'array-vs-list',
  title: 'Array vs Linked List',
  icon: '⚖️',
  color: '#ff4b4b',
  blurb: 'The comparison question. Almost guaranteed to appear.',
  lessons: [
    {
      id: 'array-vs-list-1',
      title: 'The comparison table',
      exercises: [
        {
          type: 'match',
          question: 'Match each feature to the ARRAY behaviour.',
          pairs: {
            Memory: 'Contiguous',
            Size: 'Usually fixed',
            Access: 'Direct by index',
            'Access time': 'O(1)',
          },
          explain: 'Array: contiguous, fixed, direct, O(1).',
        },
        {
          type: 'match',
          question: 'Match each feature to the LINKED LIST behaviour.',
          pairs: {
            Memory: 'Non-contiguous',
            Size: 'Dynamic',
            Access: 'Sequential traversal',
            'Extra memory': 'More, because of pointers',
          },
          explain: 'Linked list: non-contiguous, dynamic, sequential, extra pointer memory.',
        },
        {
          type: 'mcq',
          question: 'Which structure is best for FAST ACCESS?',
          choices: ['Array', 'Linked list', 'Both are the same', 'Neither'],
          answer: 'Array',
          explain: 'Array for fast access. Linked list for frequent insert/delete.',
        },
        {
          type: 'mcq',
          question: 'Which structure is best for FREQUENT INSERT/DELETE?',
          choices: ['Linked list', 'Array', 'Both are the same', 'Neither'],
          answer: 'Linked list',
          explain: 'Only pointers change, so nothing has to be shifted.',
        },
        {
          type: 'mcq',
          question: 'Which needs MORE extra memory, and why?',
          choices: [
            'Linked list, because each node also stores a pointer',
            'Array, because it reserves contiguous space',
            'Linked list, because it stores an index per node',
            'They use exactly the same memory',
          ],
          answer: 'Linked list, because each node also stores a pointer',
          explain: 'Every node carries a pointer field on top of its data. That is the trade-off.',
        },
        {
          type: 'build',
          question: 'Build the opening line of the comparison answer:',
          answer:
            'Arrays and linked lists are both linear data structures, but they store data differently.',
          extra: ['non-linear'],
          explain: 'Open a compare question by naming what is the SAME, then contrast.',
        },
        {
          type: 'build',
          question: 'Build the array half:',
          answer:
            'An array stores elements in contiguous memory locations and allows direct access using an index, so accessing an element is O(1).',
          extra: ['pointers'],
          explain: 'Storage → access → complexity.',
        },
        {
          type: 'build',
          question: 'Build the linked-list half:',
          answer:
            'A linked list stores elements as nodes connected by pointers and can grow or shrink dynamically, but searching requires traversal from the head, which takes O(n).',
          extra: ['index'],
          explain: 'Same three beats: storage → access → complexity. Now you have a full 25-mark structure.',
        },
      ],
    },
  ],
};
