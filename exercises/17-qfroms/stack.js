class Stack {
  constructor() {
    this.data = [];
  }

  // adds new value
  push(record) {
    this.data.push(record);
  }

  // returns value (FILO)
  pop() {
    return this.data.pop();
  }

  // Looks at the next value to be removed
  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
