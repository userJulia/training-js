'use strict';

let arr = [5, 2, 1, -10, 8];

arr.sort(function(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});

console.log(arr); // -10, 1, 2 , 5, 8

let otherArr = [5, 2, 1, -10, 8];

otherArr.sort(function(a, b) {
  if (a < b) return 1;
  if (a === b) return 0;
  if (a > b) return -1;
});

console.log(otherArr); // 8, 5, 2, 1, -10
