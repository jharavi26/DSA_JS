// Selection Sort is a simple comparison-based sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the array and swapping it with the first unsorted element. This process continues until the entire array is sorted.

function Selection(arr){
  let n =arr.length;
  for(let i =0 ; i<n; i++)
  {
    let min = i;
    for(let j = i+1; j < n ; j++)
    {
      if(arr[j] < arr[min])
      {
        min = j;
    }
  }
    [arr[min] , arr[i]] = [arr[i] , arr[min]]
  }
  return arr
}

console.log(Selection([11,7,45,31,26]))



//Bubble Sort :- Bubble sort is a basic algorithm that arranges a list of data in order by comparing adjacent elements and swapping them if they are out of order.

function bubble(arr){
  let n = arr.length
  for(let i =0 ; i<n-1 ; i++)
  {
    for( let j =0 ; j<n-i-1 ; j++)
    {
      if(arr[j] > arr[j+1])
      {
        [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
      }
    }
  }
  return arr;
}

console.log(bubble([24,19,60,25,10]))      // 10,19,24,25,60




//Inseration Sort :-Builds the sorted array one item at a time by inserting elements in the correct position

function Inseration(arr){
  if(arr.length<=1) return arr;
  for(let i = 1; i<arr.length ; i++)
  {
    let key = arr[i];
    let j = i-1
    while( arr[j] > 0  && arr[j] > key)
    {
      arr[j+1] = arr[j];
      j--
    }
    arr[j+1] = key;
  }
  return arr;
}

console.log(Inseration([22,6,11,51,21,31]));