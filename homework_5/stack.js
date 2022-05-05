// Stack

class StackNode {
  constructor(data) {
    this.data = data;
    this.previous = null;
  }
}

const Stack = class Stack {
  constructor(maxSize = 10) {
    if (typeof maxSize !== 'number' || maxSize < 0) {
      throw new Error('Please enter a valid number!');
    } else {
      this.maxSize = maxSize;
    }

    this.size = 0;
    this.top = null;
  }

  push(elem) {
    if (this.size === this.maxSize) {
      throw new Error('Stack is full!');
    }

    const newNode = new StackNode(elem);

    newNode.previous = this.top || null;
    this.size++;
    this.top = newNode;
  }

  pop() {
    if (!this.size) {
      throw new Error('Stack is empty!');
    }

    const deletedElem = this.top;

    this.top = this.top.previous || null;
    this.size--;

    return deletedElem.data;
  }

  peek() {
    if (this.size === 0) {
      return null;
    }

    return this.top.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    let current = this.top;
    const arr = [];

    while (current) {
      arr.unshift(current.data);
      current = current.previous;
    }

    return arr;
  }

  static fromIterable(iterable) {
    const isNotIterable =
      iterable === null ||
      iterable === undefined ||
      typeof iterable[Symbol.iterator] !== 'function';

    if (isNotIterable) {
      throw new Error('Please enter an iterable!');
    }

    const newStack = new Stack(iterable.length);

    for (let el of iterable) {
      newStack.push(el);
    }

    return newStack;
  }
};

// module.exports = { Stack };
