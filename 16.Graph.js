// A Graph is a non-linear data structure consisting of:

// Vertices (Nodes) — Represent entities.

// Edges (Connections) — Represent relationships between those entities.

// Graph Representation

// Adjacency Matrix (2D Array)

// Easy to implement, uses more space.

// Good for dense graphs.

// Adjacency List (Map or Object of Arrays)

// More space-efficient.

// Preferred for sparse graphs.

// Graph Traversal Algorithms
// 1. Breadth-First Search (BFS)
// Uses a queue.

// Visits level by level.

// Used for: shortest path in unweighted graphs.

// 2. Depth-First Search (DFS)
// Uses a stack (or recursion).

// Visits as deep as possible.

// Used for: detecting cycles, connectivity, topological sort.



class Graph{
  constructor(){
    this.adjancencyList = {};
  }

  addVertex(vertex){
    if(!this.adjancencyList[vertex]){
      this.adjancencyList[vertex] = []
    }
  }

  addEdge(vertex1, vertex2, isDirected = false){
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    this.adjancencyList[vertex1].push([vertex2]);
    if(!isDirected){
      this.adjancencyList[vertex2].push([vertex1]);
    }
  }

  printGraph(){
    for(let vertex in this.adjancencyList){
      console.log(`${vertex} -> ${this.adjancencyList[vertex].join(",")}`);
    }
  }
}

const a = new Graph();

a.addEdge('A','B');
a.addEdge('A','C');
a.addEdge('B','D');
a.addEdge('C','D');

a.printGraph();
