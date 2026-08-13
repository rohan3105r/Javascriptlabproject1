function simpleCalculator(num1, num2, operator) {
  switch (operator) {
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    default: return "Error: Invalid operator";
  }
}

console.log(simpleCalculator(10, 5, "+")); 
console.log(simpleCalculator(10, 5, "-")); 
console.log(simpleCalculator(10, 5, "*")); 
console.log(simpleCalculator(10, 5, "/")); 
