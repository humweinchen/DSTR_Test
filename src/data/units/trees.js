/** Units 9-12: binary tree, traversal, BST (incl. deletion), binary search. */

export const binaryTree = {
  id: 'binary-tree',
  title: 'Binary Tree',
  icon: '🌳',
  color: '#58cc02',
  blurb: 'At most two children, terminology, full binary tree, height code.',
  lessons: [
    {
      id: 'binary-tree-1',
      title: 'Definition and terminology',
      exercises: [
        {
          type: 'mcq',
          question: 'A binary tree is a tree where each node can have:',
          choices: ['At most 2 children', 'Exactly 2 children', 'At least 2 children', 'Unlimited children'],
          answer: 'At most 2 children',
          explain:
            '⚠️ You wrote "has two children" in your mock and lost marks. "At most" allows 0, 1 or 2 children.',
        },
        {
          type: 'match',
          question: 'Match the binary tree terms.',
          pairs: {
            Root: 'The top node',
            Leaf: 'A node with no child',
            Edge: 'A connection between two nodes',
            Height: 'Number of edges from a node to the deepest leaf',
          },
          explain: 'Your test file defines height as the number of EDGES to the deepest leaf.',
        },
        {
          type: 'match',
          question: 'Match these too.',
          pairs: {
            Parent: 'A node that has a child',
            Child: 'A node below a parent',
            Subtree: 'A tree formed by a node and its descendants',
            'Empty tree': 'A tree whose root is NULL',
          },
          explain: 'Define your terms before you use them — free marks in a 25-mark question.',
        },
        {
          type: 'better',
          question: 'Which sentence is better for the exam?',
          bad: 'Binary tree has two children.',
          good: 'A binary tree is a tree where each node can have at most two children.',
          explain: '"At most" means 0, 1 or 2 children are all allowed. This was a marked mistake in your paper.',
        },
        {
          type: 'blank',
          text: 'The height of a node is the number of ___ from that node to the deepest leaf.',
          answer: 'edges',
          bank: ['nodes', 'leaves', 'subtrees'],
          explain: 'Edges, not nodes. That is why an empty tree has height -1.',
        },
        {
          type: 'tf',
          statement: 'A node with only one child is still allowed in a binary tree.',
          answer: true,
          explain: 'Allowed in a binary tree — but NOT in a full binary tree. Keep those two separate.',
        },
      ],
    },
    {
      id: 'binary-tree-2',
      title: 'Full binary tree',
      exercises: [
        {
          type: 'mcq',
          question: 'A FULL binary tree is one where every node has:',
          choices: [
            'Either 0 or exactly 2 children',
            'At most 2 children',
            'Exactly 1 child',
            'At least 1 child',
          ],
          answer: 'Either 0 or exactly 2 children',
          explain: 'Zero or two. Nothing in between.',
        },
        {
          type: 'mcq',
          question: 'How do you check whether a tree is full in the exam?',
          choices: [
            'Look at every node — if any node has exactly 1 child, it is not full',
            'Count the leaves and check they are even',
            'Check the height is a power of 2',
            'Check the left subtree is smaller than the right',
          ],
          answer: 'Look at every node — if any node has exactly 1 child, it is not full',
          explain: 'One node with a single child breaks it. That is the whole test.',
        },
        {
          type: 'tf',
          statement: 'A node with exactly one child is allowed in a full binary tree.',
          answer: false,
          explain: 'No node may have exactly 1 child in a full binary tree.',
        },
        {
          type: 'build',
          question: 'Build the exam answer:',
          answer:
            'A full binary tree is a binary tree where every node has either zero children or exactly two children.',
          extra: ['at', 'most'],
          explain: 'Then add: "A node with only one child makes the tree not full."',
        },
        {
          type: 'better',
          question: 'Which is the better exam sentence?',
          bad: 'Full binary tree got 2 children each.',
          good:
            'A full binary tree is a binary tree where every node has either zero children or exactly two children. A node with only one child makes the tree not full.',
          explain: 'Definition plus the disqualifying case. Two sentences, full marks.',
        },
      ],
    },
    {
      id: 'binary-tree-3',
      title: 'The C++ height function',
      exercises: [
        {
          type: 'mcq',
          question: 'In the height function, what does  if (root == NULL) return -1; mean?',
          choices: [
            'The tree is empty, so its height is -1',
            'The tree is full',
            'The tree is a graph',
            'The tree has two children',
          ],
          answer: 'The tree is empty, so its height is -1',
          explain:
            'Empty tree = height -1, so that a single node comes out as height 0 (zero edges below it).',
        },
        {
          type: 'order',
          question: 'Order the body of int height(Node* root):',
          answer: [
            'if (root == NULL) return -1;',
            'int leftHeight = height(root->left);',
            'int rightHeight = height(root->right);',
            'if (leftHeight > rightHeight) return leftHeight + 1;',
            'else return rightHeight + 1;',
          ],
          explain:
            '⚠️ Your mock had left and right swapped and used  root > left  instead of  root->left. Memorise this exact order.',
        },
        {
          type: 'mcq',
          question: 'Which line is correct C++?',
          choices: [
            'int leftHeight = height(root->left);',
            'int leftHeight = Height(root > left);',
            'int leftHeight = height(Root.left);',
            'Int leftHeight = height(root->Left);',
          ],
          answer: 'int leftHeight = height(root->left);',
          explain:
            'Lower-case  int  and  height, the arrow operator  ->, and  left  spelled in lower case. Your paper lost marks on exactly these.',
        },
        {
          type: 'mcq',
          question: 'The height function visits every node once. Its time complexity is:',
          choices: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
          answer: 'O(n)',
          explain:
            'Every node is visited exactly once, so it is O(n) where n is the number of nodes.',
        },
        {
          type: 'blank',
          text: 'struct Node { int data; Node* left; Node* ___; };',
          answer: 'right',
          bank: ['next', 'parent', 'head'],
          explain: 'A tree node holds data plus a left and a right pointer.',
        },
        {
          type: 'build',
          question: 'Build the explanation you write under the code:',
          answer:
            'The function visits every node once to find the deepest path, so the time complexity is O(n).',
          extra: ['O(log', 'n)'],
          explain:
            '⚠️ In your mock this sentence was accidentally written under the graph question. It belongs here.',
        },
        {
          type: 'tf',
          statement: 'The height function returns 0 for an empty tree.',
          answer: false,
          explain: 'It returns -1 for an empty tree. A single node returns 0.',
        },
      ],
    },
  ],
};

export const traversal = {
  id: 'traversal',
  title: 'Tree Traversal',
  icon: '🚶',
  color: '#8549ba',
  blurb: 'Preorder, inorder, postorder — where the root goes.',
  lessons: [
    {
      id: 'traversal-1',
      title: 'The three orders',
      exercises: [
        {
          type: 'mcq',
          question: 'Preorder means:',
          choices: ['Root, Left, Right', 'Left, Root, Right', 'Left, Right, Root', 'Right, Left, Root'],
          answer: 'Root, Left, Right',
          explain: 'PRE = root comes BEFORE the subtrees.',
        },
        {
          type: 'mcq',
          question: 'Inorder means:',
          choices: ['Left, Root, Right', 'Root, Left, Right', 'Left, Right, Root', 'Right, Root, Left'],
          answer: 'Left, Root, Right',
          explain: 'IN = root comes IN the middle.',
        },
        {
          type: 'mcq',
          question: 'Postorder means:',
          choices: ['Left, Right, Root', 'Root, Left, Right', 'Left, Root, Right', 'Root, Right, Left'],
          answer: 'Left, Right, Root',
          explain: 'POST = root comes AFTER the subtrees.',
        },
        {
          type: 'match',
          question: 'Match the traversal to its rule.',
          pairs: {
            Preorder: 'Root → Left → Right',
            Inorder: 'Left → Root → Right',
            Postorder: 'Left → Right → Root',
            Traversal: 'Visiting every node',
          },
          explain:
            'Memory trick: the prefix tells you where the ROOT goes. Left always comes before right.',
        },
        {
          type: 'blank',
          text: 'In pre/in/post-order, the prefix tells you the position of the ___.',
          answer: 'root',
          bank: ['leaf', 'left subtree', 'edge'],
          explain: 'PRE-first, IN-middle, POST-last. Left is always before right.',
        },
        {
          type: 'tf',
          statement: 'In every traversal, the left subtree is visited before the right subtree.',
          answer: true,
          explain: 'Only the root moves. Left always comes before right.',
        },
      ],
    },
    {
      id: 'traversal-2',
      title: 'Traverse this tree',
      exercises: [
        {
          type: 'order',
          question: 'Tree: root 1, left child 2, right child 3. Give the PREORDER:',
          answer: ['1', '2', '3'],
          explain: 'Root first: 1, then left 2, then right 3.',
        },
        {
          type: 'order',
          question: 'Same tree (root 1, left 2, right 3). Give the INORDER:',
          answer: ['2', '1', '3'],
          explain: 'Left 2, root 1, right 3.',
        },
        {
          type: 'order',
          question: 'Same tree (root 1, left 2, right 3). Give the POSTORDER:',
          answer: ['2', '3', '1'],
          explain: 'Left 2, right 3, root 1 last.',
        },
        {
          type: 'mcq',
          question:
            'Tree: root A; A→left B, A→right C; B→left D, B→right E. What is the preorder?',
          choices: ['A B D E C', 'D B E A C', 'D E B C A', 'A B C D E'],
          answer: 'A B D E C',
          explain: 'Root A, then the whole left subtree (B D E), then the right subtree (C).',
        },
        {
          type: 'mcq',
          question: 'Same tree. What is the inorder?',
          choices: ['D B E A C', 'A B D E C', 'D E B C A', 'B D E A C'],
          answer: 'D B E A C',
          explain: 'Left subtree inorder is D B E, then root A, then C.',
        },
        {
          type: 'mcq',
          question: 'Same tree. What is the postorder?',
          choices: ['D E B C A', 'D B E A C', 'A B D E C', 'C E D B A'],
          answer: 'D E B C A',
          explain: 'Left subtree postorder D E B, then right C, then root A last.',
        },
        {
          type: 'tf',
          statement: 'The inorder traversal of a BST gives the values in sorted order.',
          answer: true,
          explain: 'Smaller values are on the left, so inorder walks them in ascending order.',
        },
      ],
    },
  ],
};

export const bst = {
  id: 'bst',
  title: 'Binary Search Tree',
  icon: '🔎',
  color: '#00b8a9',
  blurb: 'Ordering rule, searching, and the three deletion cases.',
  lessons: [
    {
      id: 'bst-1',
      title: 'The ordering rule',
      exercises: [
        {
          type: 'mcq',
          question: 'In a Binary Search Tree:',
          choices: [
            'Smaller values go in the left subtree and larger values go in the right subtree',
            'The right subtree is always larger than the left subtree',
            'Values are stored in the order they arrive',
            'Every node must have exactly two children',
          ],
          answer:
            'Smaller values go in the left subtree and larger values go in the right subtree',
          explain:
            '⚠️ You wrote "the right subtree is always larger than the left subtree". The comparison is with the ROOT, not left vs right.',
        },
        {
          type: 'better',
          question: 'Which is the correct exam sentence?',
          bad: 'The right subtree is always larger than the left subtree.',
          good:
            'A BST stores values smaller than the root in the left subtree and values larger than the root in the right subtree.',
          explain: 'Everything is compared against the ROOT of that subtree. This was a marked mistake.',
        },
        {
          type: 'blank',
          text: 'In a BST, values smaller than the root go in the ___ subtree.',
          answer: 'left',
          bank: ['right', 'parent', 'root'],
          explain: 'Left = smaller. Right = larger.',
        },
        {
          type: 'order',
          question: 'BST with root 50, left 30, right 70. Order the steps to search for 70:',
          answer: ['Compare 70 with the root 50', '70 is larger, so go right', 'Found 70'],
          explain: 'Each comparison throws away half the tree — that is why it is fast.',
        },
        {
          type: 'mcq',
          question: 'Searching in a balanced BST takes:',
          choices: ['O(log n)', 'O(1)', 'O(n)', 'O(n²)'],
          answer: 'O(log n)',
          explain: 'Balanced means each comparison halves the search space. If it degenerates it becomes O(n).',
        },
        {
          type: 'build',
          question: 'Build the exam answer:',
          answer:
            'A binary search tree is a binary tree where the left subtree of a node contains smaller values and the right subtree contains larger values.',
          extra: ['equal'],
          explain: 'Definition first, then say searching is O(log n) when the tree is balanced.',
        },
      ],
    },
    {
      id: 'bst-2',
      title: 'Deleting a node',
      exercises: [
        {
          type: 'mcq',
          question: 'Case 1 — the node to delete is a LEAF. You:',
          choices: [
            'Just remove it',
            'Replace it with its parent',
            'Replace it with the inorder successor',
            'Rebuild the whole tree',
          ],
          answer: 'Just remove it',
          explain: 'No children, nothing to reconnect.',
        },
        {
          type: 'mcq',
          question: 'Case 2 — the node has ONE child. You:',
          choices: [
            'Remove the node and connect its parent to its child',
            'Just remove it',
            'Replace it with the largest value in the tree',
            'Move the child to the root',
          ],
          answer: 'Remove the node and connect its parent to its child',
          explain: 'The single child is promoted into the gap.',
        },
        {
          type: 'mcq',
          question: 'Case 3 — the node has TWO children. You replace it with:',
          choices: [
            'The inorder predecessor OR the inorder successor',
            'Its parent',
            'The root',
            'The deepest leaf',
          ],
          answer: 'The inorder predecessor OR the inorder successor',
          explain: 'Those two options are exactly why the exam asks for "TWO ways" to redraw the tree.',
        },
        {
          type: 'mcq',
          question: 'The inorder PREDECESSOR is:',
          choices: [
            'The largest value in the left subtree',
            'The smallest value in the right subtree',
            'The parent of the node',
            'The root of the tree',
          ],
          answer: 'The largest value in the left subtree',
          explain: 'Predecessor = the value just BEFORE it in sorted order = biggest on the left.',
        },
        {
          type: 'mcq',
          question: 'The inorder SUCCESSOR is:',
          choices: [
            'The smallest value in the right subtree',
            'The largest value in the left subtree',
            'The deepest leaf',
            'The node below the root',
          ],
          answer: 'The smallest value in the right subtree',
          explain: 'Successor = the value just AFTER it in sorted order = smallest on the right.',
        },
        {
          type: 'match',
          question: 'Match each deletion case to its action.',
          pairs: {
            'Leaf node': 'Simply remove it',
            'One child': 'Connect the parent to the child',
            'Two children': 'Replace with predecessor or successor',
            'Two valid redraws': 'Because there are two replacement choices',
          },
          explain: 'When the exam says "show TWO ways", it means draw the predecessor version AND the successor version.',
        },
        {
          type: 'build',
          question: 'Build the answer for the two-children case:',
          answer:
            'If the node has two children, it can be replaced by the inorder predecessor, which is the largest value in the left subtree.',
          extra: ['smallest', 'right'],
          explain: 'Way 1 of 2.',
        },
        {
          type: 'build',
          question: 'Build the second way:',
          answer:
            'It can also be replaced by the inorder successor, which is the smallest value in the right subtree.',
          extra: ['largest', 'left'],
          explain: 'Way 2 of 2. Draw both trees and you have answered the whole sub-question.',
        },
      ],
    },
  ],
};

export const binarySearch = {
  id: 'binary-search',
  title: 'Binary Search',
  icon: '✂️',
  color: '#ff86d0',
  blurb: 'Halve a sorted array until you find the target.',
  lessons: [
    {
      id: 'binary-search-1',
      title: 'Halving the array',
      exercises: [
        {
          type: 'mcq',
          question: 'Binary search works only when the array is:',
          choices: ['Sorted', 'Full', 'Contiguous', 'Dynamic'],
          answer: 'Sorted',
          explain: 'If it is not sorted, throwing away half the array is meaningless.',
        },
        {
          type: 'mcq',
          question: 'Binary search compares the target with:',
          choices: [
            'The middle element',
            'The first element',
            'The last element',
            'Every element in order',
          ],
          answer: 'The middle element',
          explain: 'Then it discards the half that cannot contain the target.',
        },
        {
          type: 'order',
          question: 'Order the steps of binary search:',
          answer: [
            'Check the middle element of the array',
            'If the target is smaller, continue in the left half',
            'If the target is larger, continue in the right half',
            'Repeat until the target is found or the range is empty',
          ],
          explain: 'Four steps. Write them as four sentences and the marks follow.',
        },
        {
          type: 'mcq',
          question: 'The time complexity of binary search is:',
          choices: ['O(log n)', 'O(n)', 'O(1)', 'O(n²)'],
          answer: 'O(log n)',
          explain: 'The search range halves every step.',
        },
        {
          type: 'mcq',
          question: 'Array [10, 20, 30, 40, 50, 60], searching for 50. After checking the middle (30), you:',
          choices: [
            'Ignore the left half and search 40, 50, 60',
            'Ignore the right half and search 10, 20',
            'Start again from index 0',
            'Report that 50 is not in the array',
          ],
          answer: 'Ignore the left half and search 40, 50, 60',
          explain: '50 is bigger than 30, so nothing to the left of 30 can be the target.',
        },
        {
          type: 'build',
          question: 'Build the exam answer:',
          answer:
            'Binary search repeatedly divides a sorted array into halves and compares the target with the middle element.',
          extra: ['unsorted'],
          explain: 'Sentence 1.',
        },
        {
          type: 'build',
          question: 'Build the closing sentence:',
          answer:
            'This continues until the target is found or the search range becomes empty, and its time complexity is O(log n).',
          extra: ['O(n)'],
          explain: 'Sentence 2. Always end a complexity question by naming the complexity.',
        },
        {
          type: 'tf',
          statement: 'Binary search can be used directly on an unsorted array.',
          answer: false,
          explain: 'It must be sorted first. Say this explicitly — it is usually worth a mark.',
        },
      ],
    },
  ],
};
