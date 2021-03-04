'use strict';
/*
let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
*/

let user = {
  name: 'Bob',
  pet: {
    name: 'Sam',
    type: 'dog',
  }
};

function sayHi() {
  alert(this.name);
}
let petty = user.pet;
user.f = sayHi;
//user.pet.f = sayHi;
petty.f = sayHi;

user.f();
//user.pet.f();
petty.f();

