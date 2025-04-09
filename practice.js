function cycleDetect(graph){
  const visited = new Set();
  const recStack = new Set();

  function dfs(node){
  if(recStack.has(node)) return true;
  if(visited.has(node)) return false;

  recStack.add(node);
  visited.add(node);

  for(let neighbour of graph[node]){
    if(dfs[neighbour]) return true;
  }

  recStack.delete(node);
  return false;

  for(let node in graph){
    if(dfs(node)) return true;
  }
  }
}