document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('calc-display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        if (value === '+' || value === '-' || value === '*' || value === '/') {
          if (currentInput) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
          }
        } else if (value === '.') {
          if (!currentInput.includes('.')) {
            currentInput += value;
          }
        } else if (button.id === 'clear') {
          currentInput = '';
          previousInput = '';
          operator = '';
        } else if (button.id === 'equal') {
          if (previousInput && operator && currentInput) {
            currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
            operator = '';
            previousInput = '';
          }
        } else {
          currentInput += value;
        }
  
        display.value = currentInput;
      });
    });
  });
  