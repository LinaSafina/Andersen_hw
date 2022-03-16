// Filter

Array.prototype.myFilter = function (cb, obj) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, arr)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

// ForEach

Array.prototype.myForEach = function (cb, obj) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, arr);
  }
};

// Map

Array.prototype.myMap = function (cb, obj) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, arr));
  }

  return newArr;
};

// Reduce

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue || this[0];
  const index = initialValue ? 0 : 1;

  for (let i = index; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, arr);
  }

  return accumulator;
};
