function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function calculate(a, b, operation) {
  switch (operation) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    default:
      throw new Error('Invalid operation');
  }
}

console.log(calculate(5, 3, 'add')); // Output: 8
console.log(calculate(5, 3, 'subtract')); // Output: 2
console.log(calculate(5, 3, 'multiply')); // Output: 15
console.log(calculate(5, 3, 'divide')); // Output: 1.666...

// Example of error handling
try {
  console.log(calculate(5, 0, 'divide'));
} catch (error) {
  console.error(error.message); // Output: Division by zero
}

try {
  console.log(calculate(5, 3, 'exponent'));
} catch (error) {
  console.error(error.message); // Output: Invalid operation
}
