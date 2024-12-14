function lengthOfLongestSubstring(s) {
  let charSet = new Set(); // Store unique characters
  let maxLength = 0; // Maximum length of substring
  let start = 0; // Left pointer for sliding window

  for (let end = 0; end < s.length; end++) {
      // If character is already in the set, shrink the window from the left
      while (charSet.has(s[end])) {
          charSet.delete(s[start]);
          start++;
      }
      // Add the current character to the set
      charSet.add(s[end]);
      // Update maximum length
      maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
