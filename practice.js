const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"]
};


function cycleDetect(graph){
  const visited = new Set();
  function dfs(node, parent){
      visited.add(node)  
  for(let neighbor of graph[node]){
    if (!visited.has(neighbor)) {
    if(dfs(neighbor, node)) return true;
    } else if(neighbor !== parent){
      return true;
    }
  }
  return false;
}
  for(let node in graph){
    if(!visited.has(node)){
      if(dfs(node, null)) return true;
    }
  }
  return false;
}

console.log(cycleDetect(graph))