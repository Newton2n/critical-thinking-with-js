//* Linked list node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = new Node("I");
// console.log(head);


head.next = new Node("am");

// console.log(head);

head.next.next = new Node("Newton");
console.log(head);

let temp = head;

while(temp !== null) {
  console.log("node data",temp.data);
  temp = temp.next;
}

console.log(head)