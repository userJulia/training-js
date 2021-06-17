'use strict';

function Animal(type) {
  this.type = type;
}

const animal = new Animal('Cat');
console.log(animal.type); // Cat

const animal2 = new animal.constructor('Dog');
console.log(animal2.type); // Dog

function Dinosaur() {}
Dinosaur.prototype = {
  jumps: true,
};

const dinosaur = new Dinosaur();
console.log(dinosaur.constructor === Dinosaur); // false
