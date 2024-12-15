function findAnagrams(s, p) {
  const result = [];
  const pCount = new Map();
  const sCount = new Map();
  
  // Create frequency map for the target word
  for (const char of p) {
    pCount.set(char, (pCount.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;

  // Sliding window through the string `s`
  while (right < s.length) {
    const char = s[right];
    sCount.set(char, (sCount.get(char) || 0) + 1);
    
    // If window size exceeds the size of `p`, shrink it
    if (right - left + 1 > p.length) {
      const leftChar = s[left];
      if (sCount.get(leftChar) === 1) {
        sCount.delete(leftChar);
      } else {
        sCount.set(leftChar, sCount.get(leftChar) - 1);
      }
      left++;
    }
    
    // Compare frequency maps
    if (compareMaps(pCount, sCount)) {
      result.push(left);
    }
    
    right++;
  }

  return result;
}

// Helper function to compare two frequency maps
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (const [key, value] of map1) {
    if (map2.get(key) !== value) return false;
  }
  return true;
}

// Example usage
const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p)); // Output: [0, 6]
