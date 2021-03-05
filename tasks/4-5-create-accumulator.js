'use strict';

function Accumulator(startingValue = 1) {
  this.value = startingValue;

  this.read = function read() {
    this.number = +prompt('enter number');
    this.value += this.number;
  }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
alert(accumulator.value);
