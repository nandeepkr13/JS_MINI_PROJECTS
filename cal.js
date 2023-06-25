var num1 = parseInt(prompt("Enter a No."));
var operator = prompt("Use The operator (+, -, *, /):");
var num2 = parseInt(prompt("Enter a  2nd No."));

var result;

if (operator === '+') {
  result = num1 + num2;
} else if (operator === '-') {
  result = num1 - num2;
} else if (operator === '*') {
  result = num1 * num2;
} else if (operator === '/') {
  result = num1 / num2;
} else {
  result = 'Error';
}
console.log("Result: " + result);