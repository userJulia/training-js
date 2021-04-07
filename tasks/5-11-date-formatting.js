'use strict';

function formatDate(date) {

  let differenceDate = new Date() - date;

  if (differenceDate < 1000) {
    return 'right now';
  }

  let seconds = (differenceDate / 1000);

  if (seconds < 60) {
    return seconds + 'seconds away';
  }

  let minutes = (differenceDate / 60000);
  if (minutes < 60) {
    return minutes + 'minutes away';
  }

  let now = date;
    now = [
    '0' + now.getDate(),
    '0' + (now.getMonth() + 1),
    '' + now.getFullYear(),
    '' + now.getHours(),
    '' + now.getMinutes(),
  ]
  now.map(function(parts){
    parts.slice(-2);
  });
  return now.slice(0, 3).join('.') + ' ' + now.slice(3).join(':');
}

console.log(formatDate(new Date(new Date - 1))); //right now
console.log(formatDate(new Date(new Date - 30 * 1000))); //30seconds away
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); //5minutes away
console.log(formatDate(new Date(new Date - 86400 * 1000)));//05.04.2021 17:18
