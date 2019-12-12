const linkedList = require('./linkedList');
let SLL = new linkedList();
  SLL.insertFirst('A');
  SLL.insertLast('B');
  SLL.insertLast('C');
  SLL.insertLast('A');
  SLL.insertLast('B');
  SLL.insertLast('F');

function WhatDoesThisProgramDo(lst) { // <-- inputing singly linked array
    let current = lst.head;
    while (current !== null) {  // O(n^2) <-- two while loops
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) { // <--- compares the current value with the newNode to see if the values are identical
                newNode.next = newNode.next.next; // <-- sets the newNode to next node
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
WhatDoesThisProgramDo(SLL);
SLL.printList();