function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example
console.log(isPalindrome("racecar"));
console.log(isPalindrome("abc")); 

// Remove outermost Paranthesis in string:-

function removeOuterParentheses(s) {
  let result = '';
  let depth = 0;

  for (let char of s) {
    if (char === '(') {
      if (depth > 0) result += char; // Add to result only if not the outermost '('
      depth++;
    } else if (char === ')') {
      depth--;
      if (depth > 0) result += char; // Add to result only if not the outermost ')'
    }
  }

  return result;
}

// Example
console.log(removeOuterParentheses("(()())(())")); 
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));


