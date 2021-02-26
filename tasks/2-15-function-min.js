'use strict';

function getMinValue() {
  const a = prompt('enter a');
  const b = prompt('enter b');
  if (a <= b) {
    return a;
  } else {
    return b;
  }
}

alert(getMinValue());
