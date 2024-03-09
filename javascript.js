let displayValue = '';

function append(value) {
  if (value === '+/-') {
    displayValue = eval('-' + displayValue);
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function calculate() {
  displayValue = eval(displayValue);
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

