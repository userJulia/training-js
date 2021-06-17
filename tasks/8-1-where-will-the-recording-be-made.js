'use strict';

const animal = {
  eat() {
    this.full = true;
  },
};

const rabbit = {
  __proto__: animal,
};

rabbit.eat(); // this = rabbit

// Which object will get the full property when rabbit.eat () is called: animal or rabbit?
// full property get object rabbit. rabbit.eat() calls like a method of object, context 'this'
// determines at the time of execution
