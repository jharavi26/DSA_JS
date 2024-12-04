// Backtracking is an algorithmic technique used to solve problems recursively by exploring all possible options for a given solution. If an option leads to a solution, it is chosen; otherwise, the algorithm "backtracks" and tries the next option. It is commonly used in problems like finding subsets, permutations, solving mazes, and n-queens problems.

function permute(str, path = "", results = []) {
  if (!str.length) {
      results.push(path); // Add the permutation to the results
      return;
  }

  for (let i = 0; i < str.length; i++) {
      // Choose a character
      const char = str[i];

      // Explore with remaining characters
      permute(str.slice(0, i) + str.slice(i + 1), path + char, results);
  }

  return results;
}

// Example usage:
const input = "abc";
console.log(permute(input)); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

//Find the all the Subset

function subsets(nums) {
  const result = [];

  function backtrack(start, path) {
      result.push([...path]); // Add the current subset (path) to result

      for (let i = start; i < nums.length; i++) {
          path.push(nums[i]); // Include nums[i] in the subset
          backtrack(i + 1, path); // Explore the next numbers
          path.pop(); // Backtrack (remove nums[i])
      }
  }

  backtrack(0, []);
  return result;
}

// Example usage
console.log(subsets([1, 2, 3]));




