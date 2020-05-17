// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    // indexOf(0) is the TOP of the stack
    // Stacks are first in last out
    this.data = [];
  }

  /**
   *
   * @param {element} record - element added to the top of the stack
   */
  push(record) {
    this.data.unshift(record);
  }

  /**
   * Removes element at the top of the stack and returns in
   */
  pop() {
    return this.data.shift();
  }

  /**
   * Returns the element at the top of the stack without removing it from stack
   */
  peek() {
    return this.data[0];
  }
}

module.exports = Stack;
