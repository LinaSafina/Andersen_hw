const input = document.querySelector('#input');
const buttons = document.querySelectorAll('button');

input.textContent = '';

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    calculate(this.textContent);
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    checkLength();
  });
});

function calculate(value) {
  const isError =
    input.textContent === '' &&
    (value === '*' || value === '/' || value === '.');

  if (isError) {
    alert('Please, enter a number first!');

    return;
  }

  switch (value) {
    case '=':
      try {
        let result = eval(input.textContent);

        checkLength(result);

        if (result === Infinity) {
          alert('Cannot divide on 0!');
          return;
        }

        const isNeedRounding =
          !Number.isInteger(result) &&
          result.toString().length - result.toString().indexOf('.') > 9;

        if (isNeedRounding) {
          input.textContent = result.toFixed(8);

          return;
        }

        input.textContent = result;
      } catch (e) {
        alert(e.message);
      }

      break;

    case 'C':
      input.textContent = '';
      break;

    case '>':
      input.textContent = input.textContent.slice(0, -1);
      break;

    case '+/-':
      const isNegative =
        input.textContent[input.textContent.length - 1] === ')' &&
        input.textContent.slice(0, 2) === '-(';
      const isNotOneNumber =
        input.textContent.includes('+', 1) ||
        input.textContent.includes('-', 1) ||
        input.textContent.includes('/') ||
        input.textContent.includes('*');

      if (isNegative && isNotOneNumber) {
        input.textContent = input.textContent.slice(2, -1);

        return;
      }

      if (isNotOneNumber) {
        input.textContent = '-(' + input.textContent + ')';

        return;
      }

      if (!isNotOneNumber && input.textContent[0] === '-') {
        input.textContent = input.textContent.slice(1);

        return;
      }

      if (!isNotOneNumber) {
        input.textContent = '-' + input.textContent;

        return;
      }

      break;

    default:
      input.textContent += value;
  }
}

function checkLength() {
  if (input.textContent.length <= 12) {
    input.style.fontSize = '2.5em';

    return;
  }

  if (input.textContent.length > 12 && input.textContent.length < 18) {
    input.style.fontSize = '1.7em';

    return;
  }

  if (input.textContent.length > 18) {
    input.style.fontSize = '1.3em';

    return;
  }
}
