'use strict';

const arr = ['HTML', 'JavaScript', 'CSS'];

const copiedArray = arr.slice();

const copySorted = (newArray) => {
  return newArray.sort();
};

const sorted = copySorted(copiedArray);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS
