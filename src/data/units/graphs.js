/** Units 13-14: graphs, their representations, and Dijkstra. */

export const graph = {
  id: 'graph',
  title: 'Graph',
  icon: '🕸️',
  color: '#ff9600',
  blurb: 'Vertices and edges, terminology, matrix vs list.',
  lessons: [
    {
      id: 'graph-1',
      title: 'Vertices and edges',
      exercises: [
        {
          type: 'mcq',
          question: 'A graph is made of:',
          choices: ['Vertices and edges', 'Root and leaves', 'Front and rear', 'Data and index'],
          answer: 'Vertices and edges',
          explain: 'Vertices are the nodes. Edges are the connections.',
        },
        {
          type: 'blank',
          text: 'A graph is a ___ data structure made of a finite set of vertices and edges.',
          answer: 'non-linear',
          bank: ['linear', 'contiguous', 'sorted'],
          explain:
            'Non-linear. Arrays, linked lists, stacks and queues are linear — graphs and trees are not.',
        },
        {
          type: 'match',
          question: 'Match the graph terms.',
          pairs: {
            Vertex: 'A node',
            Edge: 'A connection',
            Weight: 'The cost or distance of an edge',
            Path: 'A sequence of connected vertices',
          },
          explain: 'Define these before you use them in the 25-mark answer.',
        },
        {
          type: 'match',
          question: 'Match these too.',
          pairs: {
            Degree: 'Number of edges connected to a vertex',
            'Directed graph': 'Edges have direction',
            'Undirected graph': 'Edges have no direction',
            Cycle: 'A path that returns to its starting vertex',
          },
          explain: 'Your test file defines degree as the number of incident edges on a vertex.',
        },
        {
          type: 'mcq',
          question: 'A weighted graph is one where:',
          choices: [
            'Each edge has a cost, distance or time',
            'Each vertex has a number',
            'The edges have direction',
            'There are no cycles',
          ],
          answer: 'Each edge has a cost, distance or time',
          explain: 'Weights are what make Dijkstra meaningful.',
        },
        {
          type: 'mcq',
          question: 'One-way roads are best modelled by:',
          choices: ['A directed graph', 'An undirected graph', 'A binary tree', 'A stack'],
          answer: 'A directed graph',
          explain: 'One-way roads = direction. Friendship connections = undirected.',
        },
        {
          type: 'build',
          question: 'Build the opening line of the 25-mark graph answer:',
          answer:
            'A graph is a non-linear data structure consisting of a finite set of vertices and edges.',
          extra: ['linear'],
          explain: 'Then: "Vertices represent objects, while edges represent relationships between objects."',
        },
      ],
    },
    {
      id: 'graph-2',
      title: 'Adjacency matrix vs list',
      exercises: [
        {
          type: 'mcq',
          question: 'Which two are graph representations?',
          choices: [
            'Adjacency matrix and adjacency list',
            'Push and pop',
            'Head and tail',
            'Preorder and postorder',
          ],
          answer: 'Adjacency matrix and adjacency list',
          explain: 'For a 25-mark graph question you must explain at least these two.',
        },
        {
          type: 'mcq',
          question: 'An adjacency matrix uses:',
          choices: [
            'A two-dimensional table where 1 means connected and 0 means not connected',
            'A list of neighbours for each vertex',
            'A stack of edges',
            'A binary tree of vertices',
          ],
          answer:
            'A two-dimensional table where 1 means connected and 0 means not connected',
          explain: 'With 4 vertices the matrix is 4 × 4.',
        },
        {
          type: 'mcq',
          question: 'An adjacency list stores:',
          choices: [
            'Each vertex together with its neighbouring vertices',
            'A table of every possible pair',
            'The shortest path between all vertices',
            'The degree of the graph only',
          ],
          answer: 'Each vertex together with its neighbouring vertices',
          explain: 'Only actual connections are stored, so sparse graphs use far less memory.',
        },
        {
          type: 'match',
          question: 'Match each representation to its advantage/disadvantage.',
          pairs: {
            'Matrix advantage': 'Fast to check whether two vertices are connected',
            'Matrix disadvantage': 'Wastes memory on large sparse graphs',
            'List advantage': 'Saves memory for sparse graphs',
            'List disadvantage': 'Checking a specific connection may require searching',
          },
          explain: 'One advantage and one disadvantage each. That is four marks written almost for free.',
        },
        {
          type: 'tf',
          statement: 'An adjacency matrix is the better choice for a large graph with very few edges.',
          answer: false,
          explain: 'That is a sparse graph — the matrix would be mostly zeros. Use an adjacency list.',
        },
        {
          type: 'build',
          question: 'Build the representations sentence:',
          answer:
            'Graphs can be represented using an adjacency matrix or an adjacency list.',
          extra: ['stack'],
          explain: 'Then describe each one and give its advantage.',
        },
        {
          type: 'build',
          question: 'Build the matrix explanation:',
          answer:
            'An adjacency matrix uses a two-dimensional table to show whether pairs of vertices are connected.',
          extra: ['neighbouring'],
          explain:
            'Then add the trade-off: it allows fast checking, but wastes memory when the graph has few edges.',
        },
        {
          type: 'build',
          question: 'Build the list explanation:',
          answer:
            'An adjacency list stores each vertex together with its neighbouring vertices, and it is more memory-efficient for sparse graphs.',
          extra: ['table'],
          explain: 'Same shape as the matrix sentence. Symmetry is easy to memorise.',
        },
      ],
    },
    {
      id: 'graph-3',
      title: 'Real-life application',
      exercises: [
        {
          type: 'mcq',
          question: 'The strongest real-life example to use in the exam is:',
          choices: [
            'A map navigation system such as Google Maps',
            'A stack of plates',
            'A printer queue',
            'A sorted array of marks',
          ],
          answer: 'A map navigation system such as Google Maps',
          explain: 'Your test material also mentions social networks and transportation networks.',
        },
        {
          type: 'match',
          question: 'In a map navigation system, match each part to the graph term.',
          pairs: {
            'Locations or junctions': 'Vertices',
            Roads: 'Edges',
            'Distance or travel time': 'Edge weights',
            'Finding the fastest route': "Dijkstra's algorithm",
          },
          explain:
            'This mapping IS the answer. Say what is a vertex, what is an edge, what is a weight.',
        },
        {
          type: 'better',
          question: 'Which answer scores more marks?',
          bad: 'Graph = edges + ventices. Real life application = Google Maps. Dijkstra = shortest path.',
          good:
            'A real-life application of graphs is a map navigation system such as Google Maps, where locations are represented as vertices and roads are represented as edges.',
          explain:
            '⚠️ Your graph answer scored 3/10 — too short, and "ventices" is a spelling slip for vertices. Same knowledge, expanded into sentences, is worth far more.',
        },
        {
          type: 'build',
          question: 'Build the application answer:',
          answer:
            'A real-life application of graphs is a map navigation system such as Google Maps, where locations are represented as vertices and roads are represented as edges.',
          extra: ['leaves'],
          explain: 'Sentence 1 of the application paragraph.',
        },
        {
          type: 'build',
          question: 'Build the closing sentence:',
          answer:
            'The distance or travel time between locations can be represented as edge weights, and a shortest-path algorithm such as Dijkstra can find the fastest route.',
          extra: ['height'],
          explain: 'Sentence 2. Now the graph question is fully answered: definition, representations, application.',
        },
        {
          type: 'order',
          question: 'Order the structure of the 25-mark graph answer:',
          answer: [
            'Define a graph as a non-linear structure of vertices and edges',
            'Explain directed, undirected and weighted graphs',
            'Explain the adjacency matrix with its advantage and disadvantage',
            'Explain the adjacency list with its advantage and disadvantage',
            'Give a real-life application and map vertices, edges and weights onto it',
          ],
          explain: 'Follow this order and you cannot run out of things to write.',
        },
      ],
    },
  ],
};

export const dijkstra = {
  id: 'dijkstra',
  title: "Dijkstra's Algorithm",
  icon: '🗺️',
  color: '#1cb0f6',
  blurb: 'Shortest path in a weighted graph with non-negative weights.',
  lessons: [
    {
      id: 'dijkstra-1',
      title: 'What it finds and how',
      exercises: [
        {
          type: 'mcq',
          question: "Dijkstra's algorithm is used to find:",
          choices: [
            'The shortest path in a weighted graph',
            'The height of a tree',
            'The top of a stack',
            'An array index',
          ],
          answer: 'The shortest path in a weighted graph',
          explain: 'From ONE source vertex to the other vertices.',
        },
        {
          type: 'mcq',
          question: 'Dijkstra requires the edge weights to be:',
          choices: ['Non-negative', 'All equal', 'Whole numbers only', 'Sorted'],
          answer: 'Non-negative',
          explain: 'Negative weights break the assumption that a settled vertex cannot improve later.',
        },
        {
          type: 'order',
          question: "Order the steps of Dijkstra's algorithm:",
          answer: [
            'Give the source vertex distance 0 and all other vertices infinity',
            'Select the unvisited vertex with the smallest distance',
            'Update the distances of its neighbours if a shorter path is found',
            'Mark that vertex as visited',
            'Repeat until all shortest paths are found',
          ],
          explain: 'These five steps are the whole answer. Learn them as a list.',
        },
        {
          type: 'blank',
          text: 'At the start of Dijkstra, every vertex except the source is given distance ___.',
          answer: 'infinity',
          bank: ['zero', 'one', 'its weight'],
          explain: 'Source = 0, everything else = infinity, then improve as you go.',
        },
        {
          type: 'mcq',
          question:
            'A→B costs 2, B→C costs 3, A→C costs 10. What is the shortest path from A to C?',
          choices: ['A → B → C, cost 5', 'A → C, cost 10', 'A → B, cost 2', 'B → C, cost 3'],
          answer: 'A → B → C, cost 5',
          explain: 'The direct road is not always the cheapest. 2 + 3 = 5 beats 10.',
        },
        {
          type: 'build',
          question: 'Build the exam answer:',
          answer:
            "Dijkstra's algorithm is used to find the shortest path from a source vertex to other vertices in a weighted graph with non-negative edge weights.",
          extra: ['negative'],
          explain: 'Sentence 1: what it does and what it requires.',
        },
        {
          type: 'build',
          question: 'Build the mechanism sentence:',
          answer:
            'It gives the source distance 0 and all other vertices infinity, then repeatedly selects the unvisited vertex with the smallest distance.',
          extra: ['largest'],
          explain: 'Sentence 2: the mechanism. Two sentences answer "explain Dijkstra" completely.',
        },
        {
          type: 'tf',
          statement: "Dijkstra's algorithm works correctly on a graph containing negative edge weights.",
          answer: false,
          explain: 'It needs non-negative weights. Mentioning this restriction shows real understanding.',
        },
      ],
    },
  ],
};
