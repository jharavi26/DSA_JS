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
if(str[left].toLowerCase !== str[right].toLowerCase){
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
