'use strict';

let arr = ['HTML', 'JavaScript', 'CSS'];

let copiedArray = arr.slice();

function copySorted(copiedArray) {
  return copiedArray.sort();
}

let sorted = copySorted(copiedArray);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS
