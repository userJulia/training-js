'use strict';

let min;
let max;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(random(1, 5));
