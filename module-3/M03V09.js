class Node {
  constructor(value) {
    this.data = value;
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

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insert(index, value) {
    if (index < 0 || this.length > index) {
      throw new Error("Index out of bound");
    }
    if (index === 0) {
      this.prepend(value);
    } else if (this.length === index) {
      this.append(value);
    }
  }

  print() {
    // console.log(this.length)
    // console.log(this.head);
    let temp = this.head;
    console.log(temp);
    console.log(this.length);
    const arr = [];
    while (temp !== null) {
      arr.push(temp.data);
      temp = temp.next;
    }

    console.log(arr);
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.prepend(-1);
linkedList.prepend(-2);
linkedList.prepend(-3);

console.log(linkedList.print());
