// Stack

const Stack = class Stack {
  constructor(maxSize) {
    if (!maxSize) {
      this.maxSize = 10;
    } else if (typeof maxSize !== 'number' || maxSize < 0) {
      throw new Error('Please enter a valid number!');
    } else {
      this.maxSize = maxSize;
    }

    this.size = 0;
    this.storage = {};
  }
  push(elem) {
    if (this.size === this.maxSize) {
      throw new Error('Stack is full!');
    }

    this.size++;
    this.storage[this.size] = elem;
  }
  pop() {
    if (!this.size) {
      throw new Error('Stack is empty!');
    }

    const deletedElem = this.storage[this.size];

    delete this.storage[this.size];
    this.size--;

    return deletedElem;
  }
  peek() {
    if (this.size === 0) {
      return null;
    }

    return this.storage[this.size];
  }
  isEmpty() {
    return this.size === 0;
  }
  toArray() {
    return Object.values(this.storage);
  }
  static fromIterable(iterable) {
    if (
      iterable === null ||
      iterable === undefined ||
      typeof iterable[Symbol.iterator] !== 'function'
    ) {
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
