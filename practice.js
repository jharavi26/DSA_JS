function checkArray (arr1, arr2){
  let count = {}
  for(let num of arr1)
  {
    count[num] = (count[num] || 0)+1;
  }

  for(let num of arr2)
  {
    if(!count[num]) return false;
    count[num]--
  }

  return true;

}

console.log(checkArray([1,2,3,4] , [4,3,2,1]))