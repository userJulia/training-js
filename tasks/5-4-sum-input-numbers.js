'use strict';

function sumInput() {
  let sum = [];
  let n;
  do {
    n = prompt('enter n');
    sum.push(+n);
  } while (n !== '' && n !== null && !isNaN(n));

  let result = 0;
  for (let i = 0; i < sum.length; i++) {
    const numberOnIndex = sum[i];
    result += numberOnIndex;
  }
  return result;
}

console.log(sumInput());
