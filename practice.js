function majority(arr){
  let frequency = {};
  let count;
  const majorElement  = Math.floor(arr.length/2);

  for(let i =0 ; i<arr.length ; i++)
  {
    count = arr[i];
    frequency[count] = (frequency[count] ||0) + 1;
  }
  if(frequency[count]> majorElement)
  {
    return count;
  }

  return -1 ;

}

console.log(majority([3, 3, 4, 2, 4, 4, 2, 4, 4]));