'use strict';

let userName = prompt('Enter login');

if (userName === 'Admin') {
  let userPassword = prompt('Enter password');

  if (userPassword === 'big boss') {
    alert('Welcome!');
  } else if (userPassword === '' || userPassword === null) {
    alert('Cancel');
  } else {
    alert('Wrong Password!');
  }
} else if (userName === '' || userName === null) {
  alert('Cancel');
} else {
  alert('I do not know you!');
}
