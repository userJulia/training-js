'use strict';

const n = +prompt('enter n');

function factorial(n) {
  let result = 1;
  for(let j = 2; j <= n; j++) {
    result *= j;
  }
  return result;
}

console.log(factorial(n));

const a = +prompt('enter a');

function otherFactorial(a) {
  if (a === 1) {
    return 1;
  }
  return a * otherFactorial(a-1);
}

console.log(otherFactorial(a));

//написать функцию факториала (вариант решения через цикл и через замыкание), ф
