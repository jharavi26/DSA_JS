// Quick Sort :-Quick Sort is a highly efficient sorting algorithm that follows the divide-and-conquer approach. It works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays (those less than the pivot and those greater than the pivot). The sub-arrays are then recursively sorted.

function QuickSort(arr){
  if(arr.length <=1){
    return arr;
  }
  let pivot = arr[arr.length-1];
  let left = [];
  let right = [];

  for(let i =0; i< arr.length-1; i++)
  {
    if(arr[i]<pivot)
    {
      left.push(arr[i]);
    }
    else {
      right.push(arr[i]);
    }

  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}
const array = [90,78,65,98,134];
console.log(QuickSort(array));

// Merge Sort :- Merge Sort is a divide-and-conquer algorithm that works by splitting the array into smaller sub-arrays, sorting those sub-arrays, and then merging them back together in sorted order.

function mergeSort(arr) {
  // Base case: If the array has one or zero elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide: Find the middle point of the array
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid); // Left sub-array
  const right = arr.slice(mid); // Right sub-array

  // Recursively sort the left and right sub-arrays
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Conquer: Merge the sorted left and right sub-arrays
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let i = 0; // Pointer for the left array
  let j = 0; // Pointer for the right array

  // Merge the two sorted arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // If there are remaining elements in either left or right array, append them
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
const arr = [90, 78, 65, 98, 134];
console.log(mergeSort(arr));  // Output: [65, 78, 90, 98, 134]
