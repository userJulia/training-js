'use strict';

function Calc() {
  this.firstNumber = null;
  this.secondNumber = null;

  this.read = function read() {
    this.firstNumber = +prompt('enter a');
    this.secondNumber = +prompt('enter b');
  }

  this.sum = function sum() {
   const result = this.firstNumber + this.secondNumber;
   return result;
  }

  this.mul = function mul() {
    const result = this.firstNumber * this.secondNumber;
    return result;
  }
}

let calc = new Calc();
calc.read();
alert('Sum =' + calc.sum());
alert('Mul =' + calc.mul());
