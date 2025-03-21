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