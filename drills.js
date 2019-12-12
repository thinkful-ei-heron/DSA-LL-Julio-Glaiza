const linkedList = require('./linkedList');

function main() {
  let SLL = new linkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  //SLL.remove('squirrel');
  SLL.insertBefore('Helo', 'squirrel');
  //SLL.printList();
  SLL.insertAfter('Husker', 'Latte');
  console.log(SLL.printList());
}
main();
