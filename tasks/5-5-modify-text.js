'use strict';

function cameLice(str) {

  let arr = str.split('-');
  let newArr = arr.map(function(item, index) {
    if (index === 0) {
      return item;
    } else {
      return item[0].toUpperCase() + item.slice(1);
    }
  });
  return newArr.join('');
}

console.log(cameLice("background-color"));//backgroundColor
console.log(cameLice("list-style-image"));//listStyleImage
console.log(cameLice("-webkit-transition"));//WebkitTransition
