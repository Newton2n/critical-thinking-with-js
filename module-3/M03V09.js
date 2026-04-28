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
    console.log(this.length, index);
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bound");
    }
    if (index === 0) {
      return this.prepend(value);
    } else if (this.length === index) {
      return this.append(value);
    }

    // new node
    const newNode = new Node(value);

    //* leading node
    const leadingNode = this.traverseToIndex(index - 1);
    //* holding note
    const holdingNode = leadingNode.next;

    leadingNode.next = newNode;

    newNode.next = holdingNode;
    // console.log("Leading node ", leadingNode);
    // console.log("Holding node ", holdingNode);

    this.length++;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let count = 0;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
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

    return arr;
  }
}

const linkedList = new LinkedList();


linkedList.append(1);
linkedList.append(3);
linkedList.append(4);

// console.log(linkedList.print());
// console.log(linkedList.traverseToIndex(1));
console.log(linkedList.insert(0, 0));
console.log(linkedList.insert(2, 2));
console.log(linkedList.insert(5, 5));
console.log(linkedList.insert(6, 6));

console.log(linkedList.print());
