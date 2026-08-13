
function findLargest(numbers) {
  let max = numbers[0];
  for (const n of numbers) {
    if (n > max) max = n;
  }
  return max;
}

const numbers = [12, 45, 3, 89, 27];
console.log(findLargest(numbers)); 
