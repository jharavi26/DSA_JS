class myQueue {
  constructor(){
    this.stack1 = [];
    this.stack2 = [];
  }

    enqueue(item){
      this.stack1.push(item);
    }

    dequeue(){
      if(this.isEmpty()) return null;

      while(this.stack2.length === 0){
        this.stack2.push(this.stack1.pop())
      } 
     return this.stack2.pop();
    }

    peek(){
      if(this.isEmpty()) return null;

      while(this.stack2.length === 0){
        this.stack2.push(this.stack1.pop())
      }
      return this.stack2[this.stack2.length-1];

      
    }

    isEmpty(){
      return this.stack1.length ===0 && this.stack2.length === 0;
    }
    
  }

  const queue = new myQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
queue.enqueue(40);
console.log(queue.dequeue()); // 20
console.log(queue.dequeue()); // 30
console.log(queue.dequeue()); // 40
console.log(queue.isEmpty()); // true




