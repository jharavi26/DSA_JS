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
      if(stack.length === 0 || stack.pop() !== brackets[char]){
        return false
      }
    }
  }
  return stack.length === 0;
}
console.log(balance("([{}])"))

// Min Stack 

class minStack{
    constructor(){
        this.stack = [];
        this.minstack = [];
    }
    push(value){
        this.stack.push(value)
            if(this.minstack.length === 0 || value <= this.minstack[this.minstack.length-1]){
                this.minstack.push(value)
        }
    }
    pop(){
        if(this.stack.length === 0) return "Stack is Empty"
        let remove = this.stack.pop();
        if(remove === this.minstack[this.minstack.length-1]){
            this.minstack.pop()
        } return remove
    }
    top(){
        if(this.stack.length === 0) return 
        return this.stack[this.stack.length-1]
    }
    getMin(){
        if(this.minstack.length === 0) return ;
        return this.minstack[this.minstack.length-1];
    }
}

const stock = new minStack();
stock.push(5)
stock.push(3)
stock.push(7)
stock.pop();
stock.push(-24);
stock.pop();
stock.getMin();

console.log(stock.getMin());
console.log(stock.stack)


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

console.log(evaluate(["1", "2" , "*" , "3" , "+"]))  // 

//Next Greather Element 

function gretherElement(arr){
  let stack = [];
  let result = new Array(arr.length).fill(-1);
  let n = arr.length-1;

  for(let i = n; i>=0; i--){
    while(stack.length > 0 && stack[stack.length-1] <=arr[i]){
      stack.pop();
    }

    if(stack.length>0){
      result[i] = stack[stack.length-1];
    }

    stack.push(arr[i]);
  }

  return result;
}

console.log(gretherElement([4,5,2,10]))

//Implement using Stack using two Queue

class queue {
  constructor(){
    this.q1 = [];
    this.q2 = [];
  }
push(x){
  this.q2.push(x);
  while(this.q1.length){
    this.q2.push(this.q1.shift())
  }
  [this.q1 , this.q2] = [this.q2, this.q1]
}

pop(){
  if(this.q1.length === 0) return null;
  return this.q1.shift();
  }

  top(){
    if(this.q1.length === 0) return null;
    return this.q1[0];
    }
  

isEmpty(){
  return this.q1.length === 0;
}
}

const stack1 = new queue();

stack1.push(10);
stack1.push(20);
stack1.push(30);

console.log(stack1.top());    // 30
console.log(stack1.pop());    // 30
console.log(stack1.top());    // 20
console.log(stack1.isEmpty()); // false

