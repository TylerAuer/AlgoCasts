// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.data = new Stack();
  }

  add(record) {
    // Placeholder stack for reversing
    const tempStack = new Stack();

    // Moves all elems form one stack to another
    const stackSwapper = (start, end) => {
      while (start.peek()) {
        end.push(start.pop());
      }
    };

    // move every elem into tempStack
    stackSwapper(this.data, tempStack);

    // add record to top of tempStack
    tempStack.push(record);

    // move every elem from tempStack to newStack
    stackSwapper(tempStack, this.data);
  }

  peek() {
    return this.data.peek();
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
