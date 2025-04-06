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