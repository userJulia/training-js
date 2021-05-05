'use strict';

let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // sayHi is not defined. Function sayHi() exists only inside the if-block.
