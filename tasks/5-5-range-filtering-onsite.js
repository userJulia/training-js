'use strict';

function filterRangeInPlace(arr, a, b) {
  let item = 0;
  while(item < arr.length) {
    if (item <= a || item >= b) {
      arr.splice(item, 1);
      item++;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log( arr ); // [3, 1]
