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


//Breadth Firtst Search 

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

function BFS(graph, start){
  const queue = [start];
  const visited = new Set();

  while(queue.length > 0){
    const node = queue.shift();
  
  if(!visited.has(node)){
    console.log(node);
    visited.add(node);
  
  for(let neighbours of graph[node]){
    queue.push(neighbours);
  }
}
}
}

BFS(graph,"A")

//  Depth First Search 

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

function DFS(graph, start){
  const stack = [start];
  const visited = new Set();

  while(stack.length > 0){
    const node = stack.pop();

    if(!visited.has(node)){
      console.log(node);
      visited.add(node);

    for(let i = graph[node].length-1; i>=0; i--){
      stack.push(graph[node][i]);
    }
    }
  }

}

DFS(graph , "A")

// using Recursive Method

function dfs(graph, start, visited = new Set()){
  console.log(start);
  visited.add(start);
  for(let neighbours of graph[start]){
    if(!visited.has(neighbours)){
      dfs(graph, neighbours, visited)
    }
  }
}

//Cycle in Directed Graph 

const graph = {
  A: ["B"],
  B: ["C"],
  C: ["A"],
};

function cycleDetect(graph){
  const visited = new Set();
  const recStack = new Set();

  function dfs(node){
  if(recStack.has(node)) return true;
  if(visited.has(node)) return false;

  recStack.add(node);
  visited.add(node);

  for(let neighbour of graph[node]){
    if(dfs(neighbour)) return true;
  }
  
  recStack.delete(node);
  return false;
}

  for(let node in graph){
    if(dfs(node)) return true;
  }
  return false;
  }

console.log(cycleDetect(graph));