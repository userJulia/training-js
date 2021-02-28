'use strict';

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

function sumSalary() {
  let sumResult = salaries.John + salaries.Ann + salaries.Pete;
  if (salaries.noProperties === undefined) {
    return 0;
  } else {
    return sumResult;
  }
}

alert(sumSalary(salaries));
/*
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/
