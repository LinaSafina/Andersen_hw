// Task 1

const makeObjectDeepCopy = function (obj) {
  const newObj = {};

  for (const key in obj) {
    if (obj[key] instanceof Object) {
      newObj[key] = makeObjectDeepCopy(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

// Task 2

const selectFromInterval = function (arr, num1, num2) {
  const isArrayOfNumbers =
    Array.isArray(arr) &&
    arr.every((num) => typeof num === 'number' && !Number.isNaN(num));

  if (!isArrayOfNumbers) {
    throw new Error('Please, enter an array of numbers!');
  }

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Two numbers are expected!');
  }

  return num2 >= num1
    ? arr.filter((num) => num <= num2 && num >= num1)
    : arr.filter((num) => num <= num1 && num >= num2);
};

// Task 3

const myIterable = { from: 1, to: 4 };

myIterable[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
