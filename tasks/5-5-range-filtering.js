'use strict';

function filterRange(arr, a, b) {
    let filteredArray = arr.filter(function(elem) {
    return elem >= a && elem <= b;
  });
  return filteredArray;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1

alert( arr ); // 5,3,8,1
