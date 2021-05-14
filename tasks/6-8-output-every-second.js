'use strict';

const printNumbers1 = (from, to) => {
  let currentNumber1 = from;

  const timerId1 = setInterval(() => {
    console.log(currentNumber1);
    if (currentNumber1 === to) {
      clearInterval(timerId1);
    }
    currentNumber1++;
  }, 1000);
};

const printNumbers = (from, to) => {
  let currentNumber = from;

  const showNumber = () => {
    console.log(currentNumber);
    if (currentNumber < to) {
      currentNumber++;
      setTimeout(showNumber, 1000);
    }
  };
  setTimeout(showNumber, 1000);
};
printNumbers(2, 4);
printNumbers(8, 10);
printNumbers1(2, 4);
printNumbers1(5, 7);
