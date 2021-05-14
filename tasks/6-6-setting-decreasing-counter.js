'use strict';

const makeCounter = () => {
  let count = 0;

  const counter = () => {
    return count++;
  };
  counter.set = (value) => {
    count = value;
  };
  counter.decrease = () => {
    count--;
  };
  return counter;
};

const counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // set value 10

console.log(counter()); // 10

counter.decrease(); //

console.log(counter()); // 10
