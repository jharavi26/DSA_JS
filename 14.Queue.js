//Queue :- A Queue is a linear data structure that follows the principle of:
// FIFO :- First In First Out

// Queue Type	Key Feature	Real-World Use Case
// Simple Queue	FIFO	Printer queue, customer service
// Circular Queue	Wrap-around using fixed-size buffer	CPU scheduling, round robin
// Deque	Insertion/removal from both ends	Undo/redo, browser history
// Priority Queue	Highest-priority element dequeued first	Emergency room, Dijkstra's algorithm
// Monotonic Queue	Maintains order (incr/decr) for window ops	Sliding window max/min
// Circular Deque	Deque with circular wrap	Caching, palindrome detection

class queue{
  constructor() {
    this.items = []
  }

enqueue(item){
  this.items.push(item)
}

dequeue(){
  return this.items.shift();
}

front(){
  return this.items[0];
}

isEmpty(){
  return this.items.length === 0;
}

size(){
  return this.items.length;
}

print(){
  console.log(this.items.join("<-"));
}
}

const q = new queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print();     // 10 <- 20 <- 30

q.dequeue();
q.print();     // 20 <- 30

console.log(q.front()); 


//Implement queue using TWO Stack 

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




