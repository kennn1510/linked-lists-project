import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;

    return this;
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;

    return this;
  }
  size() {
    return this.size;
  }
  head() {
    return this.head;
  }
  tail() {
    return this.tail;
  }
  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
}
const myLinkedList = new LinkedList();
console.log(myLinkedList.append(0));
console.log(myLinkedList.append(1));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(4));
console.log(myLinkedList.prepend(-1));
console.log(myLinkedList.at(1));
