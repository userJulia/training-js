'use strict';

const n = +prompt('enter n');

function sum(n) {
  let result = 0;
  for(let j = 1; j <= n; j++) {
    result += j;
  }
  return result;
}

console.log(sum(n));

const a = +prompt('enter a');

function otherSum(a) {
  if (a === 1) {
    return 1;
  }
  return a + otherSum(a-1);
}

console.log(otherSum(a));

// написать функцию для суммы всех n (через цикл и замыкание)
