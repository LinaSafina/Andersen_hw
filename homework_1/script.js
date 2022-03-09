// Task 1

const num1 = +prompt("Please, enter the first number");
const num2 = +prompt("Please, enter the second number");

if (isNaN(num1) || isNaN(num2)) {
  console.log("Некорректный ввод!");
} else {
  const result = num1.toString(num2);
  console.log(result);
}
