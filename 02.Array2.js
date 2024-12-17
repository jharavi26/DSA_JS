// Two Sum 

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// Example Usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2



