// Task 1

function concatStrings(str, separator) {
  if (typeof str !== 'string') {
    return str || '';
  }

  function innerFunc(str2) {
    if (typeof str2 !== 'string') {
      return str;
    }

    str = separator ? str + separator : str;

    return concatStrings(str + str2, separator);
  }

  return innerFunc;
}

// Task 2

class Calculator {
  constructor(num1, num2, ...arg) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Only numbers are accepted!');
    }

    if (arg.length !== 0) {
      throw new Error('Please, enter only TWO numbers!');
    }

    this.num1 = num1;
    this.num2 = num2;
  }
  setX = (num) => {
    if (!num || typeof num !== 'number') {
      throw new Error('Please, enter ONE number');
    }

    this.num1 = num;
  };
  setY = (num) => {
    if (!num || typeof num !== 'number') {
      throw new Error('Please, enter ONE number');
    }

    this.num2 = num;
  };
  logSum = () => {
    console.log(this.num1 + this.num2);
  };
  logMul = () => {
    console.log(this.num1 * this.num2);
  };
  logSub = () => {
    console.log(this.num1 - this.num2);
  };
  logDiv = () => {
    if (this.num2 === 0) {
      throw new Error('Cannot divide by 0');
    }

    console.log(this.num1 + this.num2);
  };
}
