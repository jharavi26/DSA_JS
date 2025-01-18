
//Reverse a String :-

function reversedString(str){
  let result = "";
  for(let i=str.length-1; i>=0; i--)
  {
    result += str[i];
  }
  return result;
}
console.log(reversedString("Art"))

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
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  let left =0;
  let right = str.length-1;
  while(left<right){
  if(str[left] !== str[right]){
    return false;
  }
  left++;
  right--
}
return true;
}
console.log(Palindrome("madam"));

//using Recursion 
function Palindome(str, left=0, right=str.length-1){
  if(left>=right){
    return true;
  }
if(str[left].toLowerCase() !== str[right].toLowerCase()){
  return false;
}
return Palindome(str, left+1, right-1)
}
console.log(Palindome("racecar"));

//Frequency of the First non-repeating Character 

function First(str){
  let Frequency = {};
  for(let i=0; i<str.length; i++)
  {
    let char = str[i];
    Frequency[char] = (Frequency[char] ||0)+1;
  }
  for(let i=0; i<str.length; i++){
    if (Frequency[str[i]]===1){
      return str[i];
    }
  }
return null;
}
console.log(First("raviraj"));

//Anagram In String :-

function Anagram(art1, art2){
  if(art1.length !== art2.length) return false;

  let occur = {};
  for(let i=0; i<=art1.length; i++){
    let char = art1[i];
    occur[char] = (occur[char]||0)+1;
  }

  for(let i=0; i<art2.length; i++){
    let char = art2[i];
    if(!occur[char]){
      return false;
    }
  }
  return true;
}

console.log(Anagram("art","tra"))

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

// Implement string compression (e.g., 'aabbcc' to 'a2b2c2').

function buzz(str){
  let count = 1;
  let compressed = ""

  for(let i =0; i<str.length; i++){
    if(str[i+1]==str[i]){
      count++
    }
      else 
      {
        compressed += str[i] + (count > 1 ? count : "" ) 
        count = 1 ;
      }
    }
    return compressed.length < str.length ? compressed : str;

  }
console.log(buzz("arrrrttt"))          

