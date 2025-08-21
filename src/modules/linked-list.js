import Node from './node';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    this.tail = current;
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  pop() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
  }

  contains(value) {
    let current = this.head;
    while (current.next) {
      if (current.value == value) return true;
      else current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current.next) {
      if (current.value == value) return index;
      else {
        current = current.next;
        index++;
      }
    }
    return null;
  }

  toString() {}
}
