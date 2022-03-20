class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const LinkedList = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(elem) {
    const newNode = new LinkedListNode(elem);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  prepend(elem) {
    const newNode = new LinkedListNode(elem);

    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }
  find(elem) {
    if (!this.head) {
      return null;
    }

    let current = this.head;

    while (current) {
      if (current.value === elem) {
        return current;
      }
      current = current.next;
    }

    return null;
  }
  toArray() {
    let current = this.head;
    const arr = [];

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }
  static fromIterable(iterable) {
    if (
      iterable === null ||
      iterable === undefined ||
      typeof iterable[Symbol.iterator] !== 'function'
    ) {
      throw new Error('Please enter an iterable!');
    }

    const newLinkedList = new LinkedList();

    for (let el of iterable) {
      newLinkedList.append(el);
    }

    return newLinkedList;
  }
};
