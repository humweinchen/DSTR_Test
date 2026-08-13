/** Units 5-8: stack, queue, the comparison, and infix/postfix. */

export const stack = {
  id: 'stack',
  title: 'Stack',
  icon: '🥞',
  color: '#ffc800',
  blurb: 'LIFO. push, pop, peek/top, isEmpty.',
  lessons: [
    {
      id: 'stack-1',
      title: 'LIFO and its operations',
      exercises: [
        {
          type: 'keyword',
          keyword: 'last in, first out',
          question: 'This means:',
          choices: ['LIFO', 'FIFO', 'BST', 'O(n)'],
          answer: 'LIFO',
          explain: 'Last In, First Out — a stack. Think of a pile of plates.',
        },
        {
          type: 'blank',
          text: 'A stack follows the ___ principle.',
          answer: 'LIFO',
          bank: ['FIFO', 'BST', 'O(1)'],
          explain: 'The most recently inserted item is removed first.',
        },
        {
          type: 'match',
          question: 'Match each stack operation to its meaning.',
          pairs: {
            'push(x)': 'Add x to the top',
            'pop()': 'Remove the top item',
            'peek() / top()': 'View the top without removing it',
            'isEmpty()': 'Check if the stack is empty',
          },
          explain: 'Four operations. Name all four in the exam — each one is a mark.',
        },
        {
          type: 'mcq',
          question: 'Insertion and deletion in a stack happen at:',
          choices: ['One end called the top', 'The front and the rear', 'Any index', 'The head and the tail'],
          answer: 'One end called the top',
          explain: 'One end only. That single end is what makes it LIFO.',
        },
        {
          type: 'mcq',
          question: 'push(10), push(20), push(30). What does pop() return?',
          choices: ['30', '10', '20', 'NULL'],
          answer: '30',
          explain: '30 went in last, so 30 comes out first.',
        },
        {
          type: 'mcq',
          question: 'push(10), push(20), push(30), pop(). What is on top now?',
          choices: ['20', '30', '10', 'The stack is empty'],
          answer: '20',
          explain: '30 was removed, so 20 is exposed as the new top.',
        },
        {
          type: 'build',
          question: 'Build the exam-style answer:',
          answer:
            'A stack is a linear data structure where insertion and deletion happen at one end called the top.',
          extra: ['front', 'rear'],
          explain: 'Sentence 1 of the stack answer.',
        },
        {
          type: 'build',
          question: 'Build the second sentence:',
          answer:
            'It follows the Last In, First Out principle, and its main operations are push, pop, peek and isEmpty.',
          extra: ['enqueue', 'dequeue'],
          explain: 'Sentence 2. Principle plus operations = full marks territory.',
        },
      ],
    },
    {
      id: 'stack-2',
      title: 'Where stacks are used',
      exercises: [
        {
          type: 'mcq',
          question: 'Which is a real application of a stack?',
          choices: [
            'Undo mechanisms in software',
            'Printer job scheduling',
            'Breadth-first search',
            'Serving customers in the order they arrived',
          ],
          answer: 'Undo mechanisms in software',
          explain: 'Undo, function call management, recursion and expression evaluation are all stacks.',
        },
        {
          type: 'mcq',
          question: 'Which of these is NOT a stack application?',
          choices: [
            'Print queue scheduling',
            'Function call management',
            'Undo operations',
            'Evaluating a postfix expression',
          ],
          answer: 'Print queue scheduling',
          explain: 'A print queue is FIFO, so it is a queue, not a stack.',
        },
        {
          type: 'match',
          question: 'Match each stack use to why it is LIFO.',
          pairs: {
            'Undo': 'The most recent action is undone first',
            'Function calls': 'The most recent call returns first',
            'Recursion': 'The deepest call finishes first',
            'Postfix evaluation': 'The last two operands are popped',
          },
          explain: 'Every stack application is "the most recent one comes back first".',
        },
        {
          type: 'tf',
          statement: 'A stack can be implemented using either an array or a linked list.',
          answer: true,
          explain: 'Both work. So can a queue. Mentioning this earns an easy mark in a compare question.',
        },
        {
          type: 'better',
          question: 'Which sentence is better for the exam?',
          bad: 'Stack is LIFO. Use for undo.',
          good:
            'A stack follows Last In, First Out, so it is used for undo operations where the most recent action must be reversed first.',
          explain: 'Never stop at the keyword. Keyword → what it means → why it fits the application.',
        },
        {
          type: 'order',
          question: 'Order what happens for push(5), push(9), pop(), push(7):',
          answer: ['Stack: 5', 'Stack: 5, 9', 'Stack: 5 (9 removed)', 'Stack: 5, 7'],
          explain: 'Top is always the right-hand end. Draw this in the exam — diagrams earn marks.',
        },
      ],
    },
  ],
};

export const queue = {
  id: 'queue',
  title: 'Queue',
  icon: '🖨️',
  color: '#2b70c9',
  blurb: 'FIFO. enqueue at rear, dequeue at front. The print queue question.',
  lessons: [
    {
      id: 'queue-1',
      title: 'FIFO and its operations',
      exercises: [
        {
          type: 'keyword',
          keyword: 'first in, first out',
          question: 'This means:',
          choices: ['FIFO', 'LIFO', 'BST', 'O(n)'],
          answer: 'FIFO',
          explain: 'First In, First Out — a queue. Think of people lining up.',
        },
        {
          type: 'mcq',
          question: 'In a queue, adding a new item to the rear is called:',
          choices: ['enqueue', 'push', 'pop', 'dequeue'],
          answer: 'enqueue',
          explain: 'Enqueue adds at the REAR.',
        },
        {
          type: 'mcq',
          question: 'In a queue, removing the front item is called:',
          choices: ['dequeue', 'pop', 'enqueue', 'traversal'],
          answer: 'dequeue',
          explain: 'Dequeue removes from the FRONT.',
        },
        {
          type: 'match',
          question: 'Match each queue operation to its meaning.',
          pairs: {
            'enqueue(x)': 'Add x at the rear',
            'dequeue()': 'Remove the item from the front',
            'front() / peek()': 'View the front item',
            'isEmpty()': 'Check if the queue is empty',
          },
          explain: 'Four operations again. Learn them in pairs with the stack ones.',
        },
        {
          type: 'blank',
          text: 'The data structure that deletes from the front and inserts at the rear is a ___.',
          answer: 'queue',
          bank: ['stack', 'graph', 'binary tree'],
          explain: 'This exact sentence is in your test file.',
        },
        {
          type: 'mcq',
          question: 'enqueue(A), enqueue(B), enqueue(C), dequeue(). What is at the front now?',
          choices: ['B', 'A', 'C', 'The queue is empty'],
          answer: 'B',
          explain: 'A arrived first so A left first. B is now the front.',
        },
        {
          type: 'tf',
          statement: 'In a queue, the most recently added item is removed first.',
          answer: false,
          explain: 'That is a stack. A queue removes the EARLIEST item first.',
        },
      ],
    },
    {
      id: 'queue-2',
      title: 'The print queue question',
      exercises: [
        {
          type: 'mcq',
          question: 'In a print queue, adding a new document to the back is called:',
          choices: ['enqueue', 'push', 'pop', 'dequeue'],
          answer: 'enqueue',
          explain: 'New documents join at the rear and wait their turn.',
        },
        {
          type: 'mcq',
          question: 'In a print queue, printing and removing the front document is called:',
          choices: ['dequeue', 'enqueue', 'push', 'traversal'],
          answer: 'dequeue',
          explain: 'The document at the front is printed and dequeued.',
        },
        {
          type: 'order',
          question: 'Order the print queue procedure:',
          answer: [
            'A document is sent to the printer and enqueued at the rear',
            'The documents wait in the order they arrived',
            'The document at the front is printed first',
            'The printed document is dequeued from the front',
            'The next document becomes the new front',
          ],
          explain:
            'Principle → procedure → operations. That structure is exactly what the mark scheme wants.',
        },
        {
          type: 'better',
          question: 'Which answer scores more marks?',
          bad: 'Queue is using FIFO. The document will print by the order, front.',
          good:
            'A print queue follows the First In, First Out principle. Each new document is enqueued at the rear, and the document at the front is printed and then dequeued.',
          explain:
            'Your mock got 7/10 here. The missing marks were the clear enqueue-at-rear / dequeue-at-front sentence.',
        },
        {
          type: 'build',
          question: 'Build the print queue answer:',
          answer:
            'A print queue follows the First In, First Out principle, so the document that is sent first is printed first.',
          extra: ['Last', 'top'],
          explain: 'Sentence 1: the principle.',
        },
        {
          type: 'build',
          question: 'Build the operations sentence:',
          answer:
            'Each new document is enqueued at the rear of the queue, and the document at the front is printed and then dequeued.',
          extra: ['pushed', 'popped'],
          explain: 'Sentence 2: the operations, with rear and front named explicitly.',
        },
        {
          type: 'mcq',
          question: 'Which of these is a queue application?',
          choices: [
            'Breadth-first search',
            'Undo mechanism',
            'Recursion',
            'Evaluating a postfix expression',
          ],
          answer: 'Breadth-first search',
          explain: 'Print job scheduling, task scheduling and BFS are the three in your mock notes.',
        },
      ],
    },
  ],
};

export const stackVsQueue = {
  id: 'stack-vs-queue',
  title: 'Stack vs Queue',
  icon: '🔁',
  color: '#00cd9c',
  blurb: 'The other comparison question.',
  lessons: [
    {
      id: 'stack-vs-queue-1',
      title: 'Side by side',
      exercises: [
        {
          type: 'match',
          question: 'Match each STACK property.',
          pairs: {
            Rule: 'LIFO',
            'Insert operation': 'push',
            'Delete operation': 'pop',
            'Access point': 'top',
          },
          explain: 'Stack: LIFO, push, pop, top.',
        },
        {
          type: 'match',
          question: 'Match each QUEUE property.',
          pairs: {
            Rule: 'FIFO',
            'Insert operation': 'enqueue',
            'Delete operation': 'dequeue',
            'Access point': 'front and rear',
          },
          explain: 'Queue: FIFO, enqueue, dequeue, front and rear.',
        },
        {
          type: 'mcq',
          question: 'The main difference between a stack and a queue is:',
          choices: [
            'The order of removal',
            'One is linear and one is non-linear',
            'One uses memory and one does not',
            'One can be implemented with an array and one cannot',
          ],
          answer: 'The order of removal',
          explain: 'Both are linear, both can use arrays or linked lists. Only the removal order differs.',
        },
        {
          type: 'mcq',
          question: 'Stack of plates : stack :: waiting line : ___',
          choices: ['queue', 'graph', 'binary tree', 'array'],
          answer: 'queue',
          explain: 'Use these two everyday examples in the exam — they show real understanding fast.',
        },
        {
          type: 'build',
          question: 'Build the opening sentence:',
          answer:
            'A stack and a queue are both linear data structures, and both can be implemented using arrays or linked lists.',
          extra: ['non-linear'],
          explain: 'Say what is the same first. Then contrast.',
        },
        {
          type: 'build',
          question: 'Build the contrast:',
          answer:
            'A stack follows Last In, First Out, while a queue follows First In, First Out.',
          extra: ['sorted'],
          explain: 'The single most important sentence in the comparison.',
        },
        {
          type: 'build',
          question: 'Build the operations sentence:',
          answer:
            'Stack uses push and pop operations, while queue uses enqueue and dequeue operations.',
          extra: ['traverse'],
          explain: 'Finish with applications: undo and recursion vs scheduling and printer queues.',
        },
      ],
    },
  ],
};

export const infixPostfix = {
  id: 'infix-postfix',
  title: 'Infix & Postfix',
  icon: '➗',
  color: '#a560e8',
  blurb: 'Convert with precedence, evaluate with a stack.',
  lessons: [
    {
      id: 'infix-postfix-1',
      title: 'Converting to postfix',
      exercises: [
        {
          type: 'mcq',
          question: 'In infix notation, the operator is:',
          choices: [
            'Between the operands, like A + B',
            'After the operands, like A B +',
            'Before the operands, like + A B',
            'Not written at all',
          ],
          answer: 'Between the operands, like A + B',
          explain: 'Infix is normal human maths.',
        },
        {
          type: 'mcq',
          question: 'In postfix notation, the operator is:',
          choices: [
            'After the operands, like A B +',
            'Between the operands, like A + B',
            'Before the operands, like + A B',
            'Always inside brackets',
          ],
          answer: 'After the operands, like A B +',
          explain: 'Postfix puts the operator after the values.',
        },
        {
          type: 'mcq',
          question: 'Why is postfix useful?',
          choices: [
            'A computer can evaluate it easily with a stack, without brackets or precedence rules',
            'It is shorter to write',
            'It sorts the operands automatically',
            'It works only for addition',
          ],
          answer:
            'A computer can evaluate it easily with a stack, without brackets or precedence rules',
          explain: 'Once converted, precedence is already baked into the order.',
        },
        {
          type: 'type',
          question: 'Convert to postfix: A + B',
          answer: 'AB+',
          accept: ['a b +', 'ab+'],
          explain: 'Operands first, then the operator.',
        },
        {
          type: 'mcq',
          question: 'Convert to postfix: A + B * C',
          choices: ['ABC*+', 'AB+C*', 'ABC+*', 'A+BC*'],
          answer: 'ABC*+',
          explain: 'Multiplication binds tighter, so B * C → BC* happens first, then A + that.',
        },
        {
          type: 'mcq',
          question: 'Convert to postfix: (A + B) * C',
          choices: ['AB+C*', 'ABC*+', 'AB*C+', 'ABC+*'],
          answer: 'AB+C*',
          explain: 'The brackets go first: A + B → AB+. Then multiply by C.',
        },
        {
          type: 'tf',
          statement: 'A + B * C and (A + B) * C convert to the same postfix expression.',
          answer: false,
          explain: 'ABC*+ versus AB+C*. Precedence changes everything — always check the brackets first.',
        },
        {
          type: 'order',
          question: 'Order the conversion of A + B * C:',
          answer: [
            'Multiplication has higher precedence than addition',
            'Convert B * C to BC*',
            'The expression becomes A + BC*',
            'Convert to postfix: ABC*+',
          ],
          explain: 'Show these steps in the exam. Working earns method marks even if you slip at the end.',
        },
      ],
    },
    {
      id: 'infix-postfix-2',
      title: 'Evaluating postfix with a stack',
      exercises: [
        {
          type: 'mcq',
          question: 'When evaluating postfix and you read a NUMBER, you:',
          choices: ['Push it onto the stack', 'Pop two numbers', 'Ignore it', 'Enqueue it'],
          answer: 'Push it onto the stack',
          explain: 'Numbers go on the stack and wait.',
        },
        {
          type: 'mcq',
          question: 'When evaluating postfix and you read an OPERATOR, you:',
          choices: [
            'Pop two numbers, apply the operator, push the result',
            'Push it onto the stack',
            'Pop one number and print it',
            'Restart from the beginning',
          ],
          answer: 'Pop two numbers, apply the operator, push the result',
          explain: 'This is the whole algorithm: push numbers, pop two on an operator, push the result.',
        },
        {
          type: 'order',
          question: 'Evaluate 3 4 + 2 * step by step:',
          answer: [
            'Read 3 → push. Stack: 3',
            'Read 4 → push. Stack: 3, 4',
            'Read + → pop 4 and 3, push 7. Stack: 7',
            'Read 2 → push. Stack: 7, 2',
            'Read * → pop 2 and 7, push 14. Stack: 14',
          ],
          explain: 'The final value left on the stack is the answer.',
        },
        {
          type: 'type',
          question: 'What does 3 4 + 2 * evaluate to?',
          answer: '14',
          accept: ['14'],
          explain: '(3 + 4) × 2 = 14.',
        },
        {
          type: 'mcq',
          question: 'What does 5 2 - 3 * evaluate to?',
          choices: ['9', '15', '-1', '25'],
          answer: '9',
          explain: '5 − 2 = 3, then 3 × 3 = 9. Careful with the order: the first popped value is the RIGHT operand.',
        },
        {
          type: 'blank',
          text: 'Postfix expressions are evaluated using a ___.',
          answer: 'stack',
          bank: ['queue', 'graph', 'binary search tree'],
          explain: 'This is the classic "application of stack" exam link.',
        },
      ],
    },
  ],
};
