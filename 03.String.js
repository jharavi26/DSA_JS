
//Reverse a String :-

function reversedString(str){
  let result = "";
  for(let i=str.length-1; i>=0; i--)
  {
    result += str[i];
  }
  return result;
}
console.log(reversedString("Art"))   //tra

//using Recursion 
function reverseString(str) {
  if (str === '') {
    return str;
  } else {
    return reverseString(str.substr(1)) + str[0];
  }
}

console.log(reverseString("hello"));

//Palindrome in String 

function Palindrome(str){
  let left =0;
  let right = str.length-1;
  while(left<right){
  if(str[left].toLowerCase() !== str[right].toLowerCase()){
    return false;
  }
  left++;
  right--
}
return true;
}
console.log(Palindrome("madam"));

//Count the Number of Vowels

function check(str)
{
  const arr = ["a", "e", "i", "o", "u"];
  let count = 0
  for(let i = 0 ; i < str.length; i++)
  {
    if(arr.includes(str[i].toLowerCase())){
      count++
    }
  
  }
  return count;

}

console.log(check("ravikumarart"));   //5 

//Find Words Containing Character

function wordsWithChar(words, target) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(target)) {
      result.push(words[i]);
    }
  }
  return result;
}
console.log(wordsWithChar(["Ravi", "is",  "my",  "Rajan", "Ravan"], "Ra"));

//Jewels and Stones

function numJewelStone(jewel, stone){
  let count = 0;
  for(let i =0; i<jewel.length; i++){
    for(j = 0; j<stone.length; j++){
      if(jewel[i] === stone[j]){
        count++
      }
    }
  } 
  return count ;
}

console.log(numJewelStone("aA", "aaaaAAAbbb"))             // Time :- n * madam

//Using HashMap

function numJewelStone(jewels, stones){
  let count = 0;
  let jewelSet = new Set(jewels);
  for(let stone of stones){
    if(jewelSet.has(stone)){
      count++
    }
  }
  return count ;
}
console.log(numJewelStone("aA", "aaaaAAAbbb"))             // Time = n + m

// Largest odd Number Substring in Striong

function FindStr(str){
    for(let i = str.length-1; i > 0; i--){
        if(str[i] % 2 !== 0){
            return str.slice(0, i+1);
        }
    } return " "
}

console.log(FindStr("3456"))                               // 345

// Remove Space Between Number

function space(str){
  count = ""
  for(let char of str)
  {
    if(char !== " ")
    {
      count +=char;
    }
  }
  return count ;
}

console.log(space("eavi art kumr")) //eaviartkumr


//Frequency of the First non-repeating Character 

function check(str){
 const frequency = {}
  for(let i = 0 ; i < str.length; i++)
  {
    let char = str[i];
    frequency[char] = (frequency[char] || 0)+1; 
  }
  for(let char of str){
    if(frequency[char] === 1)
    {
      return char;
    }
  }
  return null;
  }
console.log(check("ravikumarart"));  


// Count of frequency of each Character in String

function space(str){
  count = {}
  for(let char of str)
  {
    count[char] = (count[char]||0)+1
  }
  return count ;
}

console.log(space("ravikumarart")) 

//Anagram In String :-

function space(str1, str2){
  if(str1.length !== str2.length) return false;
  const count = {}
  for(let char of str1)
  {
    count[char] = (count[char]||0)+1
  }
  for(let char of str2)
  {
   if(!count[char]) return false;
   count[char]--
  }
  return true;
}

console.log(space("ravi" , "ariv")) 

//Length of last Word 

function findLastIndex(str){
  let length = 0;
  let i = str.length-1

  while(i>=0 && str[i] ===" "){
    i--
  }
  while(i>=0 && str[i] !==" ")
  {
    length++
    i--;
    
  }
  return length;
}
console.log(findLastIndex("Art is my Favourite"))   //9

function string(str){
  let r = str.trim()

  let s = r.split(" ");

  return s = s[s.length-1].length
}
console.log(string("Good morning art"))   //3

// Using One Loop More Optimize Solution 

function lastWord(str){
    let count = 0;
    for(let i = str.length-1; i>0 ; i--)
    {
        if(str[i] === " "){
            if(count > 0) break;
        } else count++
    }
    return count
}
console.log(lastWord("Ravi is Art favouritravi"));

// Isomorphic Strings

function isIsomorphic(s, t){
    if(s.length !== t.length ) return false;
    let mapSt = {};
    let mapTs = {};
    for(let i =0; i<s.length; i++){
        const charS = s[i];
        const charT = t[i];
        if(mapSt[charS] && mapSt[charS] !== charT){
            return false;
        } 
         if(mapTs[charT] && mapTs[charT] !== charS){
            return false;
        } 
        
        mapSt[charS] = charT;                               // used Object for Mapping
        mapTs[charT] = charS;
        }
        return true;
}

console.log(isIsomorphic("egg", "add"));    // true
console.log(isIsomorphic("foo", "bar"));    // false
console.log(isIsomorphic("paper", "title"));// true
console.log(isIsomorphic("ab", "aa"));

// Find Group of Anagram

function FindAnagram(strs){
    const map = {} ;
        for(let words of strs){
            const key = words.split("").sort().join("")
        if(!map[key]){
            map[key] = [];
        }
        map[key].push(words);
    }
    return Object.values(map);
}

console.log(FindAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

//Find out Longest Common Prefix 

function LongestCommonPre(str){
    if(str.length == 0 ) return "";
    let prefix = str[0];
    for( i =1; i < str.length ; i++){
        while(!str[i].startsWith(prefix)){
            prefix = prefix.slice(0, -1);
            if(prefix === "") return ""
        }
    } return prefix;
}
console.log(LongestCommonPre(["flower", "flow", "flight"]));       // fl


//- Count and remove duplicate characters from a string.

function last(str){
  let CountChar = {};
  let result = [];

  for(const char of str){
    CountChar[char] = (CountChar[char] || 0)+1;
  }

  for(const char of str){
    if(CountChar[char] === 1)
    {
      result += char;
    }
  }
  return {count : CountChar , result}
}

console.log(last("artjha"))

// Find the longest word in string.

function find(str){
  let words = str.split(" ");
  let longerWord = "";

  for(let word  of words)
  {
    if(word.length > longerWord.length)
    {
      longerWord = word;
    }
  }
  return longerWord;
}

console.log(find("Javascript is my Favourite Programming Language"))  //Programming

//  Find the Most Frequent Character in a String

function most(str){
  let frequency = {};
  let MaxCount = 0;
  let MaxChar = ""

  for (const count of str)
  {
    frequency[count] = (frequency[count] || 0) +1
  }

  for(const count in frequency)
  {
  if(frequency[count] > MaxCount)
    {
      MaxChar = count;
      MaxCount = frequency[count]
    }
  }

  return [MaxChar , MaxCount];
}

console.log(most("Ravi is my friend"))

// find the str contains a number


function checkNumber(str){
  for(let i =0 ; i<str.length ; i++)
  {
    let value = str.charCodeAt(i);
    if(value < 48 || value > 57)
    {
      return false;
    }
  }
  return true;
}

console.log(checkNumber("34556779"))

// Find All Permutations of a Given String

function permutation(str){
  if(str.length <=1) return [str];

  const result = []

  for(let i = 0 ; i<str.length ; i++)
  {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i+1);

  let allpermutation = permutation(remaining)

  for(let perm of allpermutation)
  {
    result.push(char+perm )
  }
  }
  return result;
}

console.log(permutation("art"))

// Check if a String is a Rotation of Another String

function find(s1, s2){
  if(s1.length !== s2.length) return false;

  let double = s1+s1;
  for(let i = 0 ; i<=double.length -s2.length; i++){
    let substr = double.substring(i , i+s2.length);
    if(substr == s2) return true;
}
return false;

}

console.log(find("art" ,"tar"))

// Compress a String Using Run-Length Encoding

function runLength(str){
  let compressedStr = ""
  let count = 1;
  for(let i =0; i<str.length; i++)
  {
    if(str[i] == str[i+1])
    {
      count++
    }
    else 
    {
      compressedStr += str[i] + count;
      count = 1;
    }
  }
return compressedStr
}

console.log(runLength("aaaabbbbbbbbcccrrrtttt"))







