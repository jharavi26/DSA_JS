 //Find the Largest Element in Array :-

function LargestElement(arr){
    let largest = arr[0];
    for(i=0; i<=arr.length-1; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest;
}
console.log(LargestElement([3,4,1,8,2]));

//Find the Second Larger Element 

function SecondLarEle(arr){
    if(arr.length<2){
        return null;
    }
    let larger = -Infinity;
    let secondLarger = -Infinity;

    for(i=0; i<=arr.length-1; i++)
    {
        if(arr[i]>larger){
            secondLarger =larger;
            larger=arr[i];
        }
        else if (arr[i]>secondLarger && arr[i] !== larger)
        {
            secondLarger = arr[i];
        }
    }
    if(secondLarger == -Infinity){
        return null;
    }
    return secondLarger;
}

const Arr = [9,7,4,5,6];
console.log(SecondLarEle(Arr));   // Time Complexity O(n)

//Check The Array is Sorted 

function CheckArray(arr){
    if(arr.length<=1){
        return null;
    }

  let isAscending = true;
  let isDescending = true;

    // Check the sorting order
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          isAscending = false; // Not sorted in ascending order
        }
        if (arr[i] < arr[i + 1]) {
          isDescending = false; // Not sorted in descending order
        }
      }
    
      // Return true if sorted in either ascending or descending order
      return isAscending || isDescending;
    }

console.log(CheckArray([1,2,3,4,5]));





