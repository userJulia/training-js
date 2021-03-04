'use strict';

function makeUser() {
  alert(this);
  return {
    name: 'John',
    ref: this,
  };
};

let tempObject = {
  f: makeUser,
};
tempObject.d = makeUser;

let userD = tempObject.d();
// let userF = tempObject.f();
let userE = makeUser();
// userD.ref === userF.ref // true
userD.ref.name // undefined
userE.ref.name // error
