'use strict';

function getLocalDay(date) {
 return date.getDay();
}

let date = new Date(2012, 0, 3);
console.log(getLocalDay(date));//2
