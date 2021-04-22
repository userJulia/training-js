'use strict';

function sumTo(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(sumTo(100)); // 5050 (n=100000): 50005000

function sumTo1(n) {
  const result = 1;
  if (n === 1) {
    return result;
  }
  return n + sumTo1(n - 1);
}

console.log(sumTo1(100)); // 5050 // (n=100000): Maximum call stack size exceeded

function sumTo2(n) {
  const result = (n * (n + 1)) / 2;
  return result;
}

console.log(sumTo2(100)); // 5050 // (n=100000): 50005000
