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
      // Apply the user's functions to the node
      fn(node);
      // Add of the node's children to the queue
      queue.push(...node.children);
    }
  }

  traverseDF(fn) {}
}

module.exports = { Tree, Node };
