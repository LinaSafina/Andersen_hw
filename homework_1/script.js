// Task 1

const ERROR_MESSAGE = 'Некорректный ввод!';
const num1 = prompt('Please, enter the first number (task1)').trim();
const num2 = prompt('Please, enter the second number (task1)').trim();

if (num1 === '' || num2 === '' || !Number(num1) || !Number(num2)) {
  console.log(ERROR_MESSAGE);
} else {
  console.log(Number(num1).toString(+num2));
}

// Task 2

const number1 = prompt('Please, enter the 1st number (task2)').trim();

const isValidNumber = function (num) {
  if (num === '' || !Number(num)) {
    console.log(ERROR_MESSAGE);
    return false;
  } else {
    return true;
  }
};

if (isValidNumber(number1)) {
  const number2 = prompt('Please, enter the 2nd number (task2)').trim();

  if (isValidNumber(number2)) {
    console.log(`Ответ: ${+number1 + +number2}, ${number1 / number2}`);
  }
}
