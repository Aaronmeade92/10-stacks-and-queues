class Queue {

    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    enqueue(value) {
  
      const newNode = new Node(value);
  
      if(!this.tail) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
  
      const oldTail = this.tail;
  
      this.tail = newNode; 
      oldTail.next = this.tail;
    }
  
    dequeue() {
  
      if(!this.head) {
        return null;
      }
      const ogHead = this.head;
      this.head = ogHead.next;
      return ogHead.data;
    }
  }
  
  class Node {
    constructor(val) {
      this.data = val;
      this.next = null;
    }
  }

  
  