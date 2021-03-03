'use strict';

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(someObject) {
  for (let key in someObject) {
    if (typeof someObject[key] === 'number') {
      someObject[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
