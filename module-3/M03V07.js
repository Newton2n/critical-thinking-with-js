//* Linked list node 
//* append

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  print() {
    // console.log("Head", this.head);
    // console.log("tail", this.tail);
    // return this.head;
    const arr = [];
    let temp = this.head;
    console.log(this.tail);
    console.log(temp);
    while (temp !== null) {
      arr.push(temp.data);
      temp = temp.next;
    }
    return arr;
  }
}

const newLinkedList = new LinkedList();
newLinkedList.append(1);
newLinkedList.append(2);
newLinkedList.append(3);
newLinkedList.append(4);
newLinkedList.append(5);

console.log(newLinkedList.print());
