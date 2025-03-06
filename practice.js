function max(arr){
  const frequency = {}
  for(let i = 0; i<arr.length ; i++ )
  {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  }
  return frequency;

}

console.log(max([1,2,1,3,4,2,4,4,5]))