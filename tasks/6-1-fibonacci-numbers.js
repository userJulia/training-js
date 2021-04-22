'use strict';

function fib(n) {
  const result = n;
  if (n <= 1) {
    return result;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); //

/*
const fib2 = (n) => {
  for (let i = 0, result = 1; i < n; i++) {
    result += i;
    console.log(i, result);
  }
};

// 1   1   2   3   5   8   13   21
// 0   1   2   3   4   5   6    7

console.log(fib2(3)); // 2
console.log(fib2(7)); // 13
console.log(fib2(77)); // ...
*/
