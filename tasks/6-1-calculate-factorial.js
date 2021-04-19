'use strict';

function factorial(n) {
  const result = 1;
  if (n === 1) {
    return result;
  }
  return n * factorial(n - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040
