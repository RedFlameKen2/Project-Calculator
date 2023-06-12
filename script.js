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
