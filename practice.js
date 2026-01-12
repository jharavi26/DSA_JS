function balance(str){
  stack = [];
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for(let char of str){
    if(char === "(" || char === "{" || char === "["){
      stack.push(char)
    }
    else if(char === ")" || char === "}" || char === "]"){
      if(stack.length === 0 || stack.pop() !== brackets[char]){
        return false
      }
    }
  }
  return stack.length === 0;
}
console.log(balance("([{}])"))