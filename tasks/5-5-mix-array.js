'use strict';

function shuffle(arr) {

  const result = [];
  let arrIndex;

  for (let i = 0; i < arr.length; i++) {
    do {
      arrIndex = randomMax(arr.length);
    } while (arr[arrIndex] === null);

    const arrItem = arr[arrIndex];
    arr[arrIndex] = null;

    result.push(arrItem);
  }
  return result;
}

console.log(shuffle([1, 2, 3]));
console.log(shuffle([1, 2, 3]));
console.log(shuffle([1, 2, 3]));


function shuffleOther(arr) {

  const result = [];
  let resultIndex;

  for (let i = 0; i < arr.length; i++) {
    do {
      resultIndex = randomMax(arr.length);
    } while (typeof(result[resultIndex]) !== 'undefined');

   result[resultIndex] = arr[i];
  }
  return result;
}

console.log(shuffleOther([1, 2, 3]));
console.log(shuffleOther([1, 2, 3]));
console.log(shuffleOther([1, 2, 3]));
