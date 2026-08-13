/**
 * Unit 17: the real Mock 2 paper.
 *
 * One lesson per question, using the exam's own wording. Each lesson runs the
 * same drill: which points must the answer contain, your Mock 2 answer versus
 * the model, then build the model answer sentence by sentence.
 *
 * The `bad` text in every `better` exercise is quoted from the Mock 2 script.
 */

export const mock2 = {
  id: 'mock2',
  title: 'Exam Room: Mock 2',
  icon: '📝',
  color: '#4b4b4b',
  blurb: 'The seven real questions, in the exam’s own words. Answer them properly.',
  lessons: [
    {
      id: 'mock2-q1',
      title: 'Q1 · Two drawbacks of arrays',
      exercises: [
        {
          type: 'multi',
          question:
            '“Explain the TWO drawbacks of array implementation in the context of data structure.” Which TWO points must your answer contain?',
          choices: [
            'The size is fixed once declared',
            'Insertion and deletion require shifting elements',
            'Elements are stored non-contiguously',
            'Each element must store a pointer',
            'Elements cannot be accessed by index',
          ],
          answers: [
            'The size is fixed once declared',
            'Insertion and deletion require shifting elements',
          ],
          explain:
            'The question says TWO, so give exactly two — each as a full sentence with a consequence.',
        },
        {
          type: 'better',
          question: 'Your Mock 2 answer vs a pass-safe answer:',
          bad: 'Static size. Which sets when its declaration.',
          good:
            'An array has a fixed size, which means its size is declared before use and cannot easily change during runtime.',
          explain: 'This question scored 5/8. The marks were lost on wording, not on knowledge.',
        },
        {
          type: 'build',
          question: 'Write drawback 1 in full:',
          answer:
            'One drawback of arrays is that their size is fixed once declared, so they are not flexible when the number of data items changes.',
          extra: ['dynamic'],
          explain: 'Point → what it means → why it matters.',
        },
        {
          type: 'build',
          question: 'Write drawback 2 in full:',
          answer:
            'Another drawback is that insertion and deletion in the middle require shifting elements, which causes O(n) time complexity.',
          extra: ['pointers'],
          explain: 'Naming O(n) is what turns a vague sentence into a marked point.',
        },
        {
          type: 'order',
          question: 'Order how you lay this answer out on the paper:',
          answer: [
            'Define what an array is in one sentence',
            'Drawback 1: fixed size, with its consequence',
            'Drawback 2: shifting on insert/delete, with O(n)',
            'Close with when an array is still the right choice',
          ],
          explain: 'A one-line definition first costs you ten seconds and frames both drawbacks.',
        },
      ],
    },
    {
      id: 'mock2-q2',
      title: 'Q2 · The node and its terminology',
      exercises: [
        {
          type: 'multi',
          question:
            '“Explain the node for data and its terminology of collecting data.” Which points must your answer contain?',
          choices: [
            'A node contains a data field and a pointer field',
            'The pointer stores the address of the next node',
            'The first node is the head',
            'The last node points to NULL',
            'Nodes are stored in contiguous memory',
          ],
          answers: [
            'A node contains a data field and a pointer field',
            'The pointer stores the address of the next node',
            'The first node is the head',
            'The last node points to NULL',
          ],
          explain:
            'Four points, four marks. Contiguous memory is the array — including it would lose you a mark.',
        },
        {
          type: 'better',
          question: 'Your Mock 2 answer vs a pass-safe answer:',
          bad: 'Node = data + pointer',
          good:
            'A node contains a data field and a pointer field. The data stores the value, while the pointer stores the address of the next node.',
          explain:
            'This scored 7/10. Your diagram was good — the missing marks were explaining what the pointer stores.',
        },
        {
          type: 'build',
          question: 'Write the node sentence:',
          answer:
            'A node contains a data field and a pointer field, where the pointer stores the address of the next node.',
          extra: ['index'],
          explain: 'Sentence 1.',
        },
        {
          type: 'build',
          question: 'Write the terminology sentence:',
          answer:
            'The first node is called the head, and the last node is called the tail, which points to NULL.',
          extra: ['root'],
          explain: 'Sentence 2. Then draw [Data | Next] → [Data | Next] → [Data | NULL] underneath.',
        },
        {
          type: 'order',
          question: 'Order the diagram you draw beside this answer:',
          answer: [
            'head → [Data | Next]',
            '[Data | Next]',
            '[Data | NULL]',
            'Label the first box head and the last box tail',
          ],
          explain: 'You already drew this in Mock 2 and it earned marks. Keep doing it.',
        },
      ],
    },
    {
      id: 'mock2-q3',
      title: 'Q3 · Two requirements for a linked list',
      exercises: [
        {
          type: 'multi',
          question:
            '“Discuss TWO requirements that the Linked-List data structure is used.” Which TWO points must your answer contain?',
          choices: [
            'The number of data items is unknown or changes during runtime',
            'Insertion and deletion are frequent, so only pointers change',
            'The data must be stored contiguously',
            'Elements must be reachable by index in O(1)',
            'The size is known before the program runs',
          ],
          answers: [
            'The number of data items is unknown or changes during runtime',
            'Insertion and deletion are frequent, so only pointers change',
          ],
          explain: 'The other three are reasons to use an ARRAY, not a linked list.',
        },
        {
          type: 'better',
          question: 'Your Mock 2 answer vs a pass-safe answer:',
          bad: 'Frequent insertion and deletion. Because it is cotiguous.',
          good:
            'A linked list suits frequent insertion and deletion because only pointers need to be changed, and its nodes do not need contiguous memory.',
          explain:
            '⚠️ This scored 3/7 — the lowest ratio on the paper — because "contiguous" is backwards. Array = contiguous. Linked list = NON-contiguous.',
        },
        {
          type: 'tf',
          statement: 'A linked list is useful because its nodes are stored contiguously.',
          answer: false,
          explain: 'Non-contiguous. If you write this one word wrong, you lose the point.',
        },
        {
          type: 'build',
          question: 'Write requirement 1:',
          answer:
            'A linked list is used when the number of data items is unknown or changes during runtime, because it can grow and shrink dynamically.',
          extra: ['fixed'],
          explain: 'Requirement 1, with its reason attached.',
        },
        {
          type: 'build',
          question: 'Write requirement 2:',
          answer:
            'A linked list is also used when insertion and deletion are frequent, because only the pointers need to be changed instead of shifting elements.',
          extra: ['index'],
          explain: 'Requirement 2, with its reason attached. Two sentences, full marks.',
        },
      ],
    },
    {
      id: 'mock2-q4',
      title: 'Q4 · The print queue procedure',
      exercises: [
        {
          type: 'multi',
          question:
            '“The queue data structure can be applied in sending a document to a print queue. Explain the print queue procedure.” Which points must your answer contain?',
          choices: [
            'A queue follows First In, First Out',
            'A new document is enqueued at the rear',
            'The document at the front is printed first',
            'The printed document is dequeued from the front',
            'The most recent document is printed first',
          ],
          answers: [
            'A queue follows First In, First Out',
            'A new document is enqueued at the rear',
            'The document at the front is printed first',
            'The printed document is dequeued from the front',
          ],
          explain:
            'The hint on the paper asks for the principle, the procedure AND the operations. That is three things, so write all three.',
        },
        {
          type: 'better',
          question: 'Your Mock 2 answer vs a pass-safe answer:',
          bad: 'Queue is using FIFO. So in the print queue procedure, the document will print by the order, front.',
          good:
            'A print queue follows the First In, First Out principle. Each new document is enqueued at the rear, and the document at the front is printed and then dequeued.',
          explain:
            'This scored 7/10. You had FIFO and the operations, but the sentence did not clearly connect enqueue to rear and dequeue to front.',
        },
        {
          type: 'build',
          question: 'Write the principle:',
          answer:
            'A print queue follows the First In, First Out principle, so the document sent first is printed first.',
          extra: ['Last'],
          explain: 'Sentence 1: the principle.',
        },
        {
          type: 'build',
          question: 'Write the procedure:',
          answer:
            'When a document is sent to the printer it is enqueued at the rear, and the document at the front is printed and then dequeued.',
          extra: ['pushed'],
          explain: 'Sentence 2: the procedure, with both operations named.',
        },
        {
          type: 'order',
          question: 'Order the procedure as you would number it on the paper:',
          answer: [
            'A document is sent and enqueued at the rear of the queue',
            'Documents wait in the order they arrived',
            'The document at the front is printed',
            'That document is dequeued from the front',
            'The next document becomes the new front',
          ],
          explain: 'Five numbered steps. Numbering makes each step easy for the marker to tick.',
        },
      ],
    },
    {
      id: 'mock2-q5',
      title: 'Q5 · Binary tree and BST',
      exercises: [
        {
          type: 'multi',
          question:
            '“Explain the concept of a binary tree and a binary search tree (BST).” Which points must your answer contain?',
          choices: [
            'A binary tree is a tree where each node has at most two children',
            'A BST is a binary tree with an ordering rule',
            'Values smaller than the root go in the left subtree',
            'Values larger than the root go in the right subtree',
            'Every node in a binary tree has exactly two children',
          ],
          answers: [
            'A binary tree is a tree where each node has at most two children',
            'A BST is a binary tree with an ordering rule',
            'Values smaller than the root go in the left subtree',
            'Values larger than the root go in the right subtree',
          ],
          explain: 'Both halves of the question — the binary tree AND the ordering rule of the BST.',
        },
        {
          type: 'better',
          question: 'Your Mock 2 answer vs a pass-safe answer:',
          bad: 'Binary tree has two children.',
          good: 'A binary tree is a tree where each node can have at most two children.',
          explain: '“At most” allows 0, 1 or 2 children. “Has two” is wrong and was marked as such.',
        },
        {
          type: 'better',
          question: 'Your Mock 2 answer vs a pass-safe answer:',
          bad: 'It has Subtree left and right. The right subtree is always larger than the left subtree.',
          good:
            'A binary search tree stores values smaller than the root in the left subtree and values larger than the root in the right subtree.',
          explain:
            '⚠️ The comparison is against the ROOT, not left against right. Q5 scored 5/10 because of these two sentences.',
        },
        {
          type: 'build',
          question: 'Write the binary tree half:',
          answer: 'A binary tree is a tree where each node can have at most two children.',
          extra: ['exactly'],
          explain: 'Half 1.',
        },
        {
          type: 'build',
          question: 'Write the BST half:',
          answer:
            'A binary search tree is a binary tree where the left subtree of a node contains smaller values and the right subtree contains larger values.',
          extra: ['equal'],
          explain: 'Half 2. Then draw a small BST with root 50 to show it.',
        },
      ],
    },
    {
      id: 'mock2-q6',
      title: 'Q6 · The C++ height function',
      exercises: [
        {
          type: 'multi',
          question:
            '“Given a binary tree, write a C++ function to calculate the height of the tree. Analyze the time complexity of your solution.” What must you hand in?',
          choices: [
            'The struct Node definition',
            'A recursive height function',
            'The empty-tree base case returning -1',
            'The time complexity, with a reason',
            'A worked example of binary search',
          ],
          answers: [
            'The struct Node definition',
            'A recursive height function',
            'The empty-tree base case returning -1',
            'The time complexity, with a reason',
          ],
          explain:
            'The question says "analyze the time complexity", so the code alone cannot score full marks.',
        },
        {
          type: 'order',
          question: 'Order the struct:',
          answer: ['struct Node {', 'int data;', 'Node* left;', 'Node* right;', '};'],
          explain: 'Write the struct first. It is quick, and it earns marks on its own.',
        },
        {
          type: 'order',
          question: 'Order the function body:',
          answer: [
            'if (root == NULL) return -1;',
            'int leftHeight = height(root->left);',
            'int rightHeight = height(root->right);',
            'if (leftHeight > rightHeight) return leftHeight + 1;',
            'else return rightHeight + 1;',
          ],
          explain:
            '⚠️ Your Mock 2 code assigned rightHeight from root->left and leftHeight from root->right — swapped. Get this order into your hand.',
        },
        {
          type: 'mcq',
          question: 'Which of your Mock 2 lines was the syntax error?',
          choices: [
            'Int rightheight = Height(root > left);',
            'int rightHeight = height(root->right);',
            'if (root == NULL) return -1;',
            'return leftHeight + 1;',
          ],
          answer: 'Int rightheight = Height(root > left);',
          explain:
            'Capital Int and Height, and `root > left` is a comparison, not the arrow operator. It should be `height(root->left)`.',
        },
        {
          type: 'build',
          question: 'Write the complexity analysis:',
          answer:
            'The function visits every node once to find the deepest path, so the time complexity is O(n).',
          extra: ['O(log', 'n)'],
          explain:
            '⚠️ In Mock 2 you wrote "Algorithm will visit every node" under the GRAPH question. It belongs here, under the code.',
        },
      ],
    },
    {
      id: 'mock2-q7',
      title: 'Q7 · Graph, representations, application',
      exercises: [
        {
          type: 'multi',
          question:
            '“Explain Graph data structure and its representations and provide a real life application in which a graph would be appropriate.” Which points must your answer contain?',
          choices: [
            'A graph is a non-linear structure of vertices and edges',
            'It can be represented by an adjacency matrix',
            'It can be represented by an adjacency list',
            'A real-life application, explained in detail',
            'A graph is a linear data structure',
          ],
          answers: [
            'A graph is a non-linear structure of vertices and edges',
            'It can be represented by an adjacency matrix',
            'It can be represented by an adjacency list',
            'A real-life application, explained in detail',
          ],
          explain:
            'The question asks for three things: the structure, the representationS (plural), and an application with detail.',
        },
        {
          type: 'better',
          question: 'Your Mock 2 answer vs a pass-safe answer:',
          bad: 'Graph = edges + ventices. Real life application = Google Maps. Dijkstra = shortest path. adjency',
          good:
            'A graph is a non-linear data structure consisting of a finite set of vertices and edges, where vertices represent objects and edges represent connections between them.',
          explain:
            '⚠️ This scored 3/10 — the lowest on the paper. Every idea was right; none was a sentence. "ventices" and "adjency" are also spelling slips.',
        },
        {
          type: 'build',
          question: 'Write the definition:',
          answer:
            'A graph is a non-linear data structure consisting of a finite set of vertices and edges.',
          extra: ['linear'],
          explain: 'Part 1 of 3.',
        },
        {
          type: 'build',
          question: 'Write the representations:',
          answer:
            'A graph can be represented using an adjacency matrix, which is a two-dimensional table, or an adjacency list, which stores each vertex with its neighbours.',
          extra: ['stack'],
          explain: 'Part 2 of 3. Add one advantage each if you have time.',
        },
        {
          type: 'build',
          question: 'Write the application:',
          answer:
            'A real-life application is a map navigation system such as Google Maps, where locations are vertices, roads are edges, and distances are edge weights.',
          extra: ['leaves'],
          explain:
            'Part 3 of 3. Naming what the vertices, edges and weights ARE is the "detailed explanation" the question asks for.',
        },
        {
          type: 'build',
          question: 'Close with Dijkstra:',
          answer:
            "A shortest-path algorithm such as Dijkstra's algorithm can then find the fastest route between two locations.",
          extra: ['height'],
          explain: 'One extra sentence, and Q7 goes from 3/10 to a comfortable pass.',
        },
      ],
    },
  ],
};
