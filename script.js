let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').value = displayValue;
}

function deleteLastChar() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('result').value = displayValue;
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById('result').value = displayValue;
  } catch (error) {
    displayValue = '';
    document.getElementById('result').value = 'Error';
  }
}

function animateButtonClick(button) {
  button.classList.add('clicked');
  setTimeout(function() {
    button.classList.remove('clicked');
  }, 300);
}

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    animateButtonClick(button);
  });
});
