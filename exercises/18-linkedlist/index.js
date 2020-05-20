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
    while (node.next != null) {
      node = node.next;
    }
    return node;
  }
}

module.exports = { Node, LinkedList };
