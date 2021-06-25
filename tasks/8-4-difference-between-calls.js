'use strict';

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

const rabbit = new Rabbit('Rabbit');

rabbit.sayHi(); // Rabbit // this === rabbit => name = 'Rabbit'
Rabbit.prototype.sayHi(); // undefined // this === Rabbit.prototype
Object.getPrototypeOf(rabbit).sayHi(); // undefined
// Object.getPrototypeOf(rabbit) returns the prototype
// (that is, the [[Prototype]] internal property) of the specified object (rabbit).
rabbit.__proto__.sayHi(); // undefined // this === rabbit._proto_ === Rabbit.prototype
