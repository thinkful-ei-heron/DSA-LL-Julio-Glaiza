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
  SLL.insertAfter('Husker', 'Latte');
  SLL.insertAfter('Boomer', 'BoomerNext');
  SLL.insertAt(2 , 'BoomerNext');
  SLL.insertBefore('Boomer','Athena');
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertAt(3 , 'Kat');
  //SLL.remove('Tauhida');
  //console.log(SLL.findPrevious('Latte'));
  //SLL.printList();
  //console.log(SLL.findLast());
  // console.log(SLL);
  SLL.reverse(SLL.head);
  // SLL.printList();

}
//main();
function secondMain() {
  let SLL = new linkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertAfter('Husker', 'Latte');
  //console.log(SLL.thirdFromTheEnd());
  console.log(SLL.middleOfList(SLL));
}
// secondMain();

function cyleMain(){
  let CycleList = new linkedList();
  CycleList.insertLast('Apollo');
  CycleList.insertLast('Boomer');
  CycleList.insertLast('Helo');
  CycleList.insertLast('Husker');
  CycleList.insertLast('Starbuck');
  CycleList.insertLast('Tauhida');
  CycleList.printList();
  console.log(CycleList.isCyle(CycleList));

}

cyleMain();