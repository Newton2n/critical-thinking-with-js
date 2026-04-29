//stack using linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//? LIFO (Last In First Out)
//? Method Push,pop,peek
// class Stack {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }

//   pop() {
//     if (this.length < 1) {
//       throw new Error("No element to pop");
//     }

//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//       this.length--;
//       return null
//     }
//     const leadingNode = this.traverseIntoIndex(this.length -2);
//     console.log(leadingNode)
//     const toBeRemove = leadingNode.next
//     leadingNode.next = null;
//     this.tail == leadingNode;
//     this.length--;
//     return toBeRemove;
//   }

//   peek(){
//     console.log(this.traverseIntoIndex(this.length-1))
//     return this.traverseIntoIndex(this.length -1)
//   }
//   traverseIntoIndex(index) {
//     let temp = this.head;
//     let count = 0;
//     console.log(temp);
//     while (count !== index) {
//       console.log(temp.next)
//       console.log(count)
//       temp = temp.next;
//       count++;
//     }
//     console.log(temp)
//     return temp;
//   }
//   print() {
//     console.log(this.length);
//     return this.head;
//   }
// }

// const newStack = new Stack();
// newStack.push(0);
// newStack.push(1);
// newStack.push(2);
// newStack.push(3);
// // console.log(newStack.print());
// // newStack.pop()
// // console.log(newStack.print());
// // newStack.pop()
// // console.log(newStack.print());

// console.log(newStack.peek())

//* Queue FIFO (first in first out)
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enQueue(value) {
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
  deQueue() {
    this.head = this.head.next;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.length--;
    return this.head;
  }
  peek() {
    return this;
  }
  print() {
    console.log(this.length);
    return this.head;
  }
}

const newQueue = new Queue();

newQueue.enQueue(1);
newQueue.enQueue(2);
newQueue.enQueue(3);

console.log(newQueue.print());
newQueue.deQueue(3);
console.log(newQueue.print());
