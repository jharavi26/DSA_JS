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

console.log(CheckArray([1,2,3,4,5]));  // O(n)

//Remove Duplicate Element from Array 

function reverse (arr){
    const obj = {};
    const result  = []
    for(let i =0; i<arr.length; i++)
    {
      if(!obj[arr[i]])
      {
      obj[arr[i]] = true;
    result.push(arr[i])
      }
    }
    return result;
  
  }
  console.log(reverse([1,2,3,4,5,3,4,5,]));  // [1,2,3,4,5]

  //Find the Frequency of Each Element in an Array 

  function frequency(arr){
    let count  = {} ;
   
    for(let i = 0; i<arr.length; i++)
    {
      count[arr[i]] = (count[arr[i]] || 0) + 1;
     
    }
    return count ;
  }
  
  console.log(frequency([1,2,3,4,5,3,4,5,6]));

  // Find the Index of a Target Element in an Array

  function frequency(arr , target){
    for(let i = 0; i<arr.length; i++)
    {
      if(arr[i] == target)
      {
        console.log(i);
      }
   
    }
    return ;
  }
  frequency([1,2,3,4,5,3,4,5,6], 3);

  //Move All Zeros to the End of an Array

  function Zero(arr){
    let left  = 0;
    for(let i =0; i<arr.length ; i++){
      if(arr[i] !== 0)
      {
        [arr[left] , arr[i]] = [arr[i] , arr[left]];
        left++
      }
    }
    return arr;
  }
  
  console.log(Zero([1,0,2,0,3,0,4,0,6,9]));

  //Left Rotate an Array by One Position

  function Zero(arr){
    let left  = arr[0];
  
    for(let i = 0; i<arr.length; i++){
      arr[i] = arr[i+1] ;
    }
    arr[arr.length-1] = left;
  
    return arr;
  }
  
  console.log(Zero([1,2,3,4,5,6]));

  //Right Rotate an Array by one position

  function Zero(arr){
    let left  = arr[arr.length-1];
    for(let i = arr.length-1; i > 0; i--){
      arr[i] = arr[i-1] ;
    }
    arr[0] = left;
  
    return arr;
  }
  
  console.log(Zero([1,2,3,4,5,6]));

// By using Function 
function leftRotateByOne(arr) {
    if (arr.length === 0) return arr; // Handle empty array
    const firstElement = arr.shift(); // Remove the first element
    arr.push(firstElement); // Add the first element to the end
    return arr;
}


//Linear Search 

function Search(arr, n){
    for(i=0;i<arr.length;i++){
        if(arr[i]==n){
            return arr[i];
        }
    }
    return -1;
}

console.log(Search([1,2,3,4,5,6],1));

// Merge Two Sorted Arrays into One Sorted Array

function Zero(arr1, arr2){
    let result  = [];
    let i = 0 , j = 0;
    while ( i < arr1.length && j < arr2.length)
    {
      if(arr1[i] < arr2[j])
      {
        result.push(arr1[i]);
        i++
      }
      else {
        result.push(arr2[j]);
        j++
      }
    }
  
    while (i < arr1.length){
      result.push(arr1[i]);
      i++
    }
  
    while(j < arr2.length){
      result.push(arr2[j]);
      j++
    }
  
    return result;
  }
  
  console.log(Zero([1,2,3,4], [6,7,8,9,12]));

//Union of the Two Array

function Union(arr1, arr2){
    let result = []
    {
        for(i=0; i<=arr1.length-1; i++){
            if (!result.includes(arr1[i])) {
                result.push(arr1[i]);
            }
        }
        for(i=0; i<=arr2.length-1; i++){
            if (!result.includes(arr2[i])) {
                result.push(arr2[i]);
            }
        }
        return result;

    }
}
console.log(Union([1,2,3,4,5], [2,4,5,6,7,8]));

//Find Missing Number in Array

function MissingNumber(arr){
    let n = arr.length+1;
    let actualSum =0;
    let expectedSum = (n*(n+1))/2;

    for(i=0; i<arr.length; i++)
    {
        actualSum += arr[i]; 
    }

    let Number = expectedSum - actualSum; 

    return Number;
}
console.log(MissingNumber([1,2,3,4,6,7]));

//Maximum Consecutive Ones

function Count(arr){
    let count = 0;
    let MaxCount = 0;
    if(arr.length<=1){
        return arr;
    }
   
    for(i=0; i<=arr.length-1; i++){
        if(arr[i] == 1){
            count ++
        }
        else 
        {
            MaxCount = Math.max(MaxCount, count);
            count = 0;
        }
    }
    MaxCount = Math.max(MaxCount, count);
    
    return MaxCount;

}
console.log(Count([1,1,1,5,6,0,1,1,1,1]));

//Longest subarray by given sum value K

function LongestSubArray(arr, k){
    let start = 0, currentCount=0, maximumCount=0, end;
    for(end=0; end<arr.length; end++){
        currentCount +=arr[end]
    
        while(currentCount>k && start<=end){
            currentCount -=arr[start];
            start++
        }
        if(currentCount === k ){
            maximumCount = Math.max(maximumCount, end-start+1)
        }
    }
    return maximumCount;
} 

console.log(LongestSubArray([1,2,3,4,5], 9));
