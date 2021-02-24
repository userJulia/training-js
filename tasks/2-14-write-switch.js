'use strict';

const number = +prompt('Enter a number between 0 and 3');

switch (number) {
  case 0:
    alert('You entered number 0');
    break;

  case 1:
    alert ('You entered number 1');
    break;

  case 2:
  case 3:
    alert('You entered number 2 or 3');
    break;
}

