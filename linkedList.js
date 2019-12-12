/* eslint-disable no-console */
const _Node = require('./_Node');
class linkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, value) {
    let currNode = this.head;
    let newNode = this.head;
    if (this.head.value === item) {
      this.insertFirst(value);
    } else {
      while (currNode.value !== item) {
        newNode = currNode;
        currNode = currNode.next;
      }
      newNode.next = new _Node(value, currNode);
    }
  }

  insertAfter(item, value) {
    let currNode = this.head;
    let newNode = this.head;
    while (currNode.value !== item) {
      newNode = currNode.next;
      currNode = currNode.next;
    }
    newNode.next = new _Node(value, currNode);
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  //it prints the content of the list
  printList() {
    let curr = this.head;
    let str = '';
    while (curr) {
      str += curr.value + ' ';
      curr = curr.next;
    }
    console.log(str);
  }
}
module.exports = linkedList;
