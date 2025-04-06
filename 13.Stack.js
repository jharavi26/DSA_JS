//Stack :- A stack is a linear data structure that follows the LIFO (Last In, First Out) principle.

//Implement stack using Array 

class StackArray{
  constructor(){
    this.stack = [];
  }

  push(value){
    this.stack.push(value);
  }
  pop(){
    if(this.isEmpty()) return null;
    return this.stack.pop()
  }

  peek(){
    if(this.isEmpty()) return null;
    return this.stack[this.stack.length-1];
  }

  isEmpty(){
    return this.stack.length === 0;
  }

  size(){
    return this.stack.length;
  }
}

const stack = new StackArray();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size())
console.log(stack.peek());

//Balanced Paraanthesis

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
      if(stack.length === 0   || stack.pop() !== brackets[char]){
        return false
      }
    }
  }
  return stack.length ===0;
}
console.log(balance("([{}])"))


//Postfix Operation :- Take two operand & perform operation 

function evaluate(tokens){
  let stack = [];

  for(let token of tokens){
    if(!isNaN(token)){
      stack.push(Number(token))
    }
    else {
  const a = stack.pop();
  const b = stack.pop();

  switch (token) {
    case "+":
      stack.push(a+b);
      break;

  case "-":
    stack.push(a-b);
    break;

  case "*":
  stack.push(a*b)
  break;

  case "/":
  stack.push(Math.trunc(a+b));
  break;
}
  }
  }
  return stack.pop();
}

console.log(evaluate(["1", "2" , "*" , "3" , "+"]))

//Next Greather Element 
