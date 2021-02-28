'use strict';

function isEmpty() {
  if ('8:30' in schedule) {
    return false;
  } else {
    return true;
  }
}

let schedule = {};

alert(isEmpty(schedule));

schedule['8:30'] = 'get up';

alert(isEmpty(schedule));

/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

