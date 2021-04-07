'use strict';

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));//29
console.log(getLastDayOfMonth(2012, 3));//30
console.log(getLastDayOfMonth(2015, 2));//31
