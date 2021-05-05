'use strict';

const inBetween = (a, b) => {
  return function (valueInBetween) {
    if (valueInBetween >= a && valueInBetween <= b) {
      return valueInBetween;
    }
  };
};

const inArray = (array) => {
  return function (valueInArray) {
    for (let i = 0; i < array.length; i++) {
      if (i === valueInArray) {
        return valueInArray;
      }
    }
  };
};

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3, 4, 5, 6
console.log(arr.filter(inArray([1, 2, 10]))); // 1, 2
