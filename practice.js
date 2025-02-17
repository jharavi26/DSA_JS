function count(n){
  if(n<1) return 1;
  return 1 + count(Math.floor(n%10))
  
  } 
  
  console.log(count(3456))