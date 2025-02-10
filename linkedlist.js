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

  pop() {
    let nodeBeforeLastNode = this.at(this.size - 2);
    let poppedNode = this.tail;
    nodeBeforeLastNode.nextNode = null;
    this.tail = nodeBeforeLastNode;
    this.size--;
    return poppedNode;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return string + "null";
  }
}
const myLinkedList = new LinkedList();
myLinkedList.append(0);
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(-1);
myLinkedList.at(1);
myLinkedList.pop();
console.log(myLinkedList.contains(4));
console.log(myLinkedList.toString());

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
