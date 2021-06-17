'use strict';

const Rabbit = () => {};
Rabbit.prototype = {
  eats: true,
};

const rabbit = new Rabbit();
// Rabbit.prototype = {}; // 1
// Rabbit.prototype.eats = false; // 2
// delete rabbit.eats; // 3
delete Rabbit.prototype.eats; // 4

console.log(rabbit.eats); // true // 1 - true // 2 - false // 3 - true // 4 - undefined
