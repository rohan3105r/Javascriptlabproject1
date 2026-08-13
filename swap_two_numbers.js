function swapTwoNumbers(a, b) {
  console.log(`Before swap: a=${a}, b=${b}`);

  a = a + b;
  b = a - b;
  a = a - b;

  console.log(`After swap:  a=${a}, b=${b}`);
  return [a, b];
}

swapTwoNumbers(5, 10);
