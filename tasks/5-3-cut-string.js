'use strict';

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return  str = str.slice(0, maxLength - 3) + '...';
  } else {
    return str;
  }
}

console.log(truncate('Hello my friends!', 15));
console.log(truncate('Hi, you!', 15));
