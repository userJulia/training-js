'use strict';

const dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
  console.log(key); // "apple", "__proto__"
}

console.log(dictionary.toString()); // "apple,__proto__"
