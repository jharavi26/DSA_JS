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
