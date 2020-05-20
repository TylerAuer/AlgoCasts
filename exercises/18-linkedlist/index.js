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
    let node = this.head;
    // runs while there is a next Node referenced in the current node
    while (node.next != null) {
      node = node.next;
    }
    return node;
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

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
}

module.exports = { Node, LinkedList };
