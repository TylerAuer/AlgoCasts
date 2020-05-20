// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // inserts new node at head (start) of linked list
  insertFirst(data) {
    // updates the head to a new node where
    // the next parameter is the old head or
    // null if there was no previous head
    this.head = new Node(data, this.head);
  }

  // returns int of elements in the list
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  // returns first node in the linked list
  getFirst() {
    return this.head;
  }

  // returns last node in the linked list
  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  // empty list
  clear() {
    this.head = null;
  }

  // removes the first node in the list
  removeFirst() {
    this.head = this.head.next || null;
  }

  // removes the last element
  removeLast() {
    // Case of empty list
    if (!this.head) {
      return;
    }
    // Case of list length 1
    if (!this.head.next) {
      this.head = null;
      return;
    }
    // Case of length > 1
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
    return;
  }

  // insert value at end of list
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  // return node at a given index
  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  // removes node at a given index
  removeAt(index) {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prevNode = this.getAt(index - 1);
    if (prevNode && prevNode.next) {
      prevNode.next = prevNode.next.next;
    }
  }

  insertAt(data, index) {
    // Edge: empty list
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    // Edge: index = 0
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    // If prevNode is out of range, use lastElement
    const prevNode = this.getAt(index - 1) || this.getLast();
    prevNode.next = new Node(data, prevNode.next);
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      // You pass the node and they do whatever they want with it
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
