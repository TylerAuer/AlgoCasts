// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    // An FILO array waiting to each node's data
    // processed by the function passed as a parameter.
    // Also, where each Node's children are placed after function runs
    // on the data
    const queue = [this.root];
    // While there are values in the queue
    while (queue.length) {
      // Grab the "first-in" node from queue
      const node = queue.shift();
      // Add of the node's children to the queue
      queue.push(...node.children);
      // Apply the user's functions to the node
      // Do this second in case the function modifies the node
      fn(node);
    }
  }

  // // Recursive solution
  // traverseDF(fn) {
  //   const recursiveTraverse = (node) => {
  //     fn(node);
  //     node.children.forEach((child) => recursiveTraverse(child));
  //   };

  //   recursiveTraverse(this.root);
  // }

  // Nearly identical to the breadth first solution except,
  // you use a stack (FIFO) to determine which node to process
  traverseDF(fn) {
    const stack = [this.root];
    while (stack.length) {
      const node = stack.shift();
      stack.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
