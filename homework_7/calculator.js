const input = document.querySelector('#input');

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', function () {
    calculate(this.textContent);
  });
});

function calculate(value) {
  const isError =
    input.textContent === '' &&
    (value === '*' || value === '/' || value === '.');
  if (isError) {
    alert('Please, enter a number first');
    return;
  }

  switch (value) {
    case '=':
      input.textContent = eval(input.textContent).toFixed(8);
      break;

    case 'C':
      input.textContent = '';
      break;

    case '>':
      input.textContent = input.textContent.substring(0, -1);
      break;

    case '+/-':
      if (
        input.textContent[input.textContent.length - 1] === ')' &&
        input.textContent.slice(0, 2) === '-('
      ) {
        input.textContent = input.textContent.slice(2, -1);
      } else {
        input.textContent = '-(' + input.textContent + ')';
      }
      break;

    default:
      input.textContent += value;
  }
}
