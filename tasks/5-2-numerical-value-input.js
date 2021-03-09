'use strict';

let number;
function readNumber() {
  do {
    number = +prompt('enter number');
  } while (number === '' || number === null);
  if (number === '' || number === null) {
    return null;
  }
  return number;
}
console.log(readNumber());

let num;
function readNum() {
  do {
    num = +prompt('enter num');
  } while (!isFinite(num));//используется для проверки, содержится ли в строке число
  if (num === '' || num === null) {
    return null;
  }
  return num;
}
console.log(readNum());

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

// Иногда isFinite используется для проверки, содержится ли в строке число:

// let num = +prompt("Enter a number", '');

// вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
// alert( isFinite(num) );
