'use strict';

const x = prompt('enter x');
const n = prompt('enter n');

function getPower(x, n) {
  if (n >= 1) {
    alert(x ** n);
  } else {
    alert('use natural number');
  }
}

getPower(x, n);

/*
const age = prompt('your age');

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

checkAge(age);


const age = prompt('your age');

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Родители разрешили?');
}

checkAge(age);
*/

/* if - ?
const age = prompt('your age');

function checkAge(age) {
  (age > 18) ? true : confirm('parents allow');
}

checkAge(age);
*/

/* if - ||
const age = prompt('your age');

function checkAge(age ) {

}

checkAge(age);
*/
