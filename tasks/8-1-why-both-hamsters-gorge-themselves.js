'use strict';

/* task
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple  // takes property from prototype. two hamsters, but one stomach
*/

const hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

const speedy = {
  __proto__: hamster,
  stomach: [], // add property stomach
};

const lazy = {
  __proto__: hamster,
  stomach: [], // add property stomach
};

speedy.eat('apple');
console.log(speedy.stomach); // apple

console.log(lazy.stomach); // [] - empty
