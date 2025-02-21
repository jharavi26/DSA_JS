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
  return result;
}

console.log(last("artjha"))