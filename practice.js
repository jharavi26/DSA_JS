function factotial(n){
  let fact = 1;
  if(n == 0 ){
    return 1
  }
  for(let i=1; i<n; i++){
    fact = fact*i;
  }
  return fact;
}

console.log(factotial(5));