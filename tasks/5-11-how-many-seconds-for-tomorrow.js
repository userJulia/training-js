'use strict';

function getSecondsToTomorrow() {
  let nowDate = new Date();
  let tomorrowDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1, nowDate.getHours(), nowDate.getMinutes(), nowDate.getSeconds())
  return (tomorrowDate - nowDate)/1000;
}

console.log(getSecondsToTomorrow());//86399.405
