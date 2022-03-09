// Task 1

const num1 = +prompt('Please, enter the first number');
const num2 = +prompt('Please, enter the second number');

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log('Некорректный ввод!');
} else {
  console.log(num1.toString(num2));
}

// Task 2

const ERROR_MESSAGE = 'Некорректный ввод!';
const PROMPT_MESSAGE = 'Please, enter the number';
const number1 = +prompt(PROMPT_MESSAGE);

if (Number.isNaN(number1)) {
  console.log(ERROR_MESSAGE);
} else {
  const number2 = +prompt(PROMPT_MESSAGE);

  if (Number.isNaN(number2)) {
    console.log(ERROR_MESSAGE);
  } else {
    console.log(`Ответ: ${number1 + number2}, ${number1 / number2}`);
  }
}
