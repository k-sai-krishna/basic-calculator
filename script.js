let expression = '';
let error_message = document.getElementById('error-here');
let btns = document.querySelectorAll('.button');
let input = document.querySelector('input');
let buttons = Array.from(btns);
buttons.forEach(button => {
  button.addEventListener('click', e => {
    if (e.target.innerHTML === 'AC') {
      input.value = '';
      expression = '';
      error_message.className = 'disable'
    } else if (e.target.innerHTML === 'X') {
      let new_expression = '';
      for (let i = 0; i < expression.length - 1; i++) {
        new_expression += expression[i];
      }
      input.value = new_expression;
      expression = new_expression;
      error_message.className = 'disable';
    } else if (e.target.innerHTML === '=') {
      try {
        expression = eval(expression);
        input.value = expression;
      } catch (error) {
        // alert('Invalid input');
        error_message.className = 'red';
        error_message.innerHTML = 'Invalid input boss!!';
        console.log(error_message.className);
      }
    } else {
      expression += e.target.innerHTML;
      input.value = expression;
      error_message.className = 'disable';
      console.log(error_message.className);
    }
    console.log(e.target);
  });
});
