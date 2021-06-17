'use strict';

Function.prototype.defer = function (ms) {
  const func = this;
  return function (...args) {
    setTimeout(() => func.call(null, ...args), ms);
  };
};

const f = (a, b) => {
  console.log(a + b);
};

f.defer(1000)(1, 2); // 3 (after 1 sec)
f.defer(2000)(3, 6); // 9 (after 2 sec)
