'use strict';

function Accumulator(startingValue = 1) {
  this.value = startingValue;

  this.read = function read() {
    this.value += +prompt('enter number');
  }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
alert(accumulator.value);
