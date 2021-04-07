'use strict';

function getWeekDay(date) {
  switch(date.getDay()) {
    case 0:
      console.log('Sun');
      break;

    case 1:
      console.log('Mon');
      break;

    case 2:
      console.log('Tue');
      break;

    case 3:
      console.log('Wed');
      break;

    case 4:
      console.log('Thu');
      break;

    case 5:
      console.log('Fri');
      break;

    case 6:
      console.log('Sat');
      break;
  }
}
let date = new Date(2012, 0, 3);
let date1 = new Date(2012, 0, 4);
let date2 = new Date(2012, 0, 5);
getWeekDay(date);//Tue
getWeekDay(date1);//Wed
getWeekDay(date2);//Thu
