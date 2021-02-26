'use strict';

function getPower() {
  const x = prompt('enter x');
  const n = prompt('enter n');
  if (n >= 1) {
    return x ** n;
  } else {
    return 'use natural number';
  }
}

alert(getPower());

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
function checkAge(age) {
  const age = prompt('your age');
  return (age > 18) ? true : confirm('parents allow');
}

checkAge(age);
*/

/* if - ||
function checkAge(age ) {
  const age = prompt('your age');
  return age > 18 || confirm('parents confirm');
}

checkAge(age);
*/
