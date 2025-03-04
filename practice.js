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

console.log(runLength("aaarrrrttttt"))