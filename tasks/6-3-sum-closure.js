'use strict';

const sum = (a) => {
  return function (b) {
    console.log(a + b);
  };
};

sum(1)(2); // 3
sum(5)(-1); // 4
sum(0)(-3); // -3
