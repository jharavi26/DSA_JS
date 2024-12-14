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

console.log(CheckArray([1,2,3,4,5]));  // O(n)

//Remove Duplicate Element from Array 

let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr); // Output: [1, 2, 3, 3, 1, 2, 4, 5]

//Left the Rotata Array by One

function RotateArray(array){
    const firstElement = array[0]; // Store the first element
    for (let i = 1; i < array.length; i++) {
        array[i - 1] = array[i]; // Shift elements to the left
    }
    array[array.length - 1] = firstElement;

    return array;

}
const array =[1,2,3,4,5] ;
console.log(RotateArray(array));

function leftRotateByOne(arr) {
    if (arr.length === 0) return arr; // Handle empty array
    const firstElement = arr.shift(); // Remove the first element
    arr.push(firstElement); // Add the first element to the end
    return arr;
}

//Left Rotate the array by N place 

function MoveZero(arr){
    let NonzeroIndex =0;
    for(i=0; i<arr.length; i++){
    if(arr[i]!==0){
        arr [NonzeroIndex]=arr[i];
        NonzeroIndex++;
    }
}
    for(i=NonzeroIndex; i<=arr.length-1; i++){
        arr[i]=0
    }
        return arr;
}
console.log(MoveZero([1,0,2,0,3,4]));

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
