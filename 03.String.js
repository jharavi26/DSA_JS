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
