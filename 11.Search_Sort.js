// Count the number of occurrences of an element in a sorted array.

function Counter (arr , target){
const count = {};
for(let i =0 ; i < arr.length ; i++)
{
  count[arr[i]]= (count[arr[i]] || 0) + 1
}

return count[target] || 0;
}

console.log(Counter([1,2,2,2,2,3,4,5] , 2))

// Peak element is Greaterthan from its neighbour.

function peakElement(arr){
  for(let i = 0; i<arr.length ; i++)
    {
      if(i === 0  && arr[i]>arr[i+1])
      {
      console.log(arr[i]);
      }

      else if(i === arr.length-1 && arr[i] > arr[i-1])
      {
        console.log(arr[i]);
      }
      else if(i > 0  && i < arr.length-1 && arr[i] > arr[i+1] && arr[i] > arr[i-1])
        {
          console.log(arr[i]);
        }
      }
    }


peakElement([2,3,8,5,6,6,7]);

//- Search in a rotated sorted array
//Rotated sorted Array : -A rotated sorted array is a sorted array that has been shifted left or right by a certain number of positions. The order is still preserved, but the starting point changes.

function search(arr, target)
{
  let left = 0 ;
  let right = arr.length-1;
  let mid ;
  while(arr[left] <= arr[right]) {
    mid = Math.floor((left+right)/2);

  if(arr[mid] === target) return mid;

  if(arr[left] <=arr[mid])
  {
    if(arr[left] < target  && target < arr[mid]){
      right = mid-1;
    }
    else{
      left = mid+1;
    }
  }

  else{
    if(arr[mid] < target && target <= arr[right]) 
    {
      left = mid+1
    }
    else{
      right = mid-1;
    }
  }
  }
  return -1
}

console.log(search([1,2,4,5,0,6,7,8], 7));

// - Find the missing and repeating numbers in an array.

function missing(arr){
  const freuency = {};
  let missing , repeating;
  for(let count of arr)
  {
    freuency[count] = (freuency[count] || 0) + 1;
  }

  for(let i = 1 ; i <= arr.length ; i++)
  {
    if(!freuency[i])
    {
      missing = i;
    }

    else if(freuency[i] === 2){
      repeating = i
    }

  }
  return [missing, repeating];
}

console.log(missing([1,2,3,3,5,6]));

// 