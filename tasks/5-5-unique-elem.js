'use strict';

function unique(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

let arr = ['cat', 'dog', 'pig', 'dog', 'cat', 'cat', ':-0'];

console.log(unique(arr));// ['cat', 'dog', 'pig', ':-0']
