class Node {
    constructor(value, next, prev) {
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
}

class doublyLinkedList {
    constructor() {
       this.head = null;
       this.tail = null;
    }
    insertFirst(value) {
        this.head = new Node(value, this.head, null);
        if(this.tail === null){
            this.tail = this.head;
        }
    }
    insertLast(value) {
        let currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        currNode.next = new Node(value, null, currNode);
        this.tail = currNode.next;
    }
    insertAfter(item, value) {
        let currNode = this.head;
        let prevNode = this.head;
        while (currNode.value !== item) {
          currNode = prevNode;
          prevNode = currNode.next;
        }
        currNode.next = new Node(value, prevNode, currNode);
        prevNode.prev = currNode.next;
    }
    insertBefore(item, value) {
        let currNode = this.head;
        let prevNode = this.head;
        while(currNode.value !== item) {
            currNode = currNode.next;
            prevNode = currNode.prev;
        }
        currNode.prev = new Node(value, currNode, currNode.prev);
        prevNode.next = currNode.prev;
    }
    insertAt(index, value) {
        let currIndex = 0;
        let currNode = this.head;
        let prevNode = this.head;
        while(currIndex !== index) {
          currNode = currNode.next;
          prevNode = currNode.prev;
          currIndex++;
        }
        currNode.prev = new Node(value, currNode, currNode.prev);
        prevNode.next = currNode.prev;
    }
    remove(item) {
        let currNode = this.head;
        let prevNode = this.head;
        while (currNode !== null && currNode.value !== item) {
          prevNode = currNode;
          currNode = currNode.next;
        }
        prevNode.next = currNode.next;
    }
    find(item) {
        let currNode = this.head;
        while (currNode !== null && currNode.value !== item) {
          currNode = currNode.next;
        }
        return currNode;
    }
    reverse(node) {
        if (node.next !== null) {
          this.reverse(node.next);
          node.next.next = node;
          node.next = null;
        } else {
          this.head = node;
        }
    }
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

function main() {
    let DLL = new doublyLinkedList();
    DLL.insertFirst('Aquaria');
    DLL.insertLast('Caprica');
    DLL.insertLast('Gemenon');
    DLL.insertLast('Picon');
    DLL.insertLast('Sagittaron');
    //DLL.printList();
    DLL.insertAfter('Gemenon','AfterGem');
    DLL.insertBefore('Caprica', 'B4Cap');
    DLL.insertAt(1,'Water');
    DLL.remove('Picon');
    // console.log(DLL.find('Caprica'));
    DLL.insertLast('Latte');
    DLL.printList();
    console.log(DLL.tail.value);
}
main();