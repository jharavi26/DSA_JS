// Searching in JavaScript refers to finding a specific element, value, or substring within data structures like arrays, objects, or strings.
// 1.Linear Search :- This is the simplest searching algorithm where each element is checked one by one until the desired element is found.
// Time Complexity: O(n)
// Space Complexity: O(1)

function LinearSearch(arr, target){
  for(let i=0; i<arr.length-1; i++){
    if(arr[i]===target){
      return i;
    }
  }
  return -1;
}
const arr = [78,22,34,56,78];
console.log(LinearSearch(arr,34));

//Searching in Array :-
// 1.Find():-Returns the first element that matches the condition.
// 2.IndexOf():- Finds the first occurrence of a value in an array.
// 3.findIndex():-Returns the index of the first element that matches the condition.
// 4.includes():-Checks if a value exists in an array.

//Searching in String :- 
// 1.indexOf():-Finds the first occurrence of a substring.
// 2.includes():-Checks if a substring exists.
// 3.Search():-Finds a match using a regular expression.
// 4.match():-Retrieves matches using a regular expression.

//Searching in Object :-
// 1. in Operator :-Checks if a key exists in an object.
// 2.Object.keys or Object.values:-search for key values in object.
// 3.Object.entries():-Searches in key-value pairs.


// Binary Search :-Binary Search is an efficient algorithm for finding an element in a sorted array.
//Time and Space Complexity  :-
// Time Complexity: O(log n)
// The search space is halved with each iteration.
// Space Complexity:
// Iterative approach: O(1) (No additional space used)
// Recursive approach: O(log n) (Stack space for recursive calls)

function BsSearch(arr,target){
  let left =0;
  let right =arr.length-1;

  while(left <= right){
  const mid = Math.floor((left+right)/2);

  if (arr[mid] === target){
    return mid;
  }
  else if (arr[mid]<target){
    left = mid+1;
  }
  else {
    right=mid-1;
  }
 }
 return -1;
 
}

const array =[10,20,30,40,50];
console.log(BsSearch(array, 50));

//Recursive Approach

function RSearch(arr, target, left, right){
  if(left>right){
    reurn -1;
  }
  const mid = Math.floor((left+right)/2);

  if(arr[mid]==target){
    return mid;
  }
  else if (arr[mid]<target){
    return RSearch(arr, target, mid+1, right);
}
else {
  return RSearch(arr, target , left, mid-1);
}

}
const sortedArray = [10, 20, 30, 40, 50, 60];
console.log(RSearch(sortedArray, 60, 0, sortedArray.length - 1));










