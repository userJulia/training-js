'use strict';

function checkString(string) {
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  if (string === result) {
    alert('it\'s palendrom');
  } else {
    alert('try again');
  }
}

console.log(checkString('abccba'));

//2. написать функцию, которая принимает строку и проверяет является ли она палиндромом
