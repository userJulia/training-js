'use strict';

function Calculator() {
  this.methods = {};

  this.calculate = function(str) {
    const arr = str.split(' ');
    const a = +arr[0];
    const b = +arr[2];
    const operator = arr[1];

    const method = this.methods[operator];

    return method ? method(a, b) : NaN;
  };

  this.addMethod = function(operator, func) {
    this.methods[operator] = func;
  };
}

let calc = new Calculator();

calc.addMethod('+', (a, b) => a + b);
calc.addMethod('-', (a, b) => a - b);
calc.addMethod('*', (a, b) => a * b);
calc.addMethod('/', (a, b) => a / b);
calc.addMethod('pow', (a, b) => a ** b);

console.log(calc.calculate('4 * 5'));//20
console.log(calc.calculate('3 pow 2'));//9
