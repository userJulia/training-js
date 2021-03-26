'use strict';

let arr = ['HTML', 'JavaScript', 'CSS'];

let copyArr = arr.slice();

function copySorted(copyArr) {
  copyArr.sort();
  return copyArr;
}

let sorted = copySorted(copyArr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS
