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
