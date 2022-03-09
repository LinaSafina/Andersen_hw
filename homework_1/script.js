// Task 1

const num1 = +prompt('Please, enter the first number');
const num2 = +prompt('Please, enter the second number');

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log('Некорректный ввод!');
} else {
  const result = num1.toString(num2);
  console.log(result);
}

// Task 2

const number1 = +prompt('Please, enter the first number');

if (Number.isNaN(number1)) {
  console.log('Некорректный ввод!');
} else {
  const number2 = +prompt('Please, enter the second number');
  if (Number.isNaN(number2)) {
    console.log('Некорректный ввод!');
  } else {
    const sum = number1 + number2;
    const quot = number1 / number2;
    console.log(`Ответ: ${sum}, ${quot}`);
  }
}
