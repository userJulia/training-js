'use strict';

let min;
let max;

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min); // Math.round include 5
}

console.log(random(1, 5));
