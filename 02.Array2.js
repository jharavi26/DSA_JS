// 2 Sum Problem 

function twoSum(arr, target) {
  const hashMap = new Map(); // To store numbers and their indices

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];  // Current number
    const complement = target - num;  // Complement to the target sum

    // Check if the complement exists in the hash map
    if (hashMap.has(complement)) {
      // Return the indices of the complement and the current number
      return [hashMap.get(complement), i];
    }

    // Store the current number and its index in the hash map
    hashMap.set(num, i);
  }

  return []; // Return empty if no pair is found
}

console.log(twoSum([2, 7, 11, 15], 22)); // Output: [1, 3]

//Sort an array of 0s, 1s and 2s

function sortArray(arr){
  let mid=0, low=0, high=arr.length-1;
  while(mid<=high){
    if(arr[mid]===0){
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    }
    else if(arr[mid]===1){
      mid++;
    }
    else {
      [arr[mid],arr[high]] = [arr[high],arr[mid]];
      high--;

      }
    }
    return arr;

  }
  console.log(sortArray([0, 1, 2, 0, 1, 2]));

  //