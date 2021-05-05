'use strict';

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    // such cycle creates a new lexical environment for i
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
