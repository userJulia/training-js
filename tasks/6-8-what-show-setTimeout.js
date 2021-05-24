'use strict';

let i = 0;

setTimeout(() => console.log(i), 100);
// 100000000, setTimeout(func) will be executed after the execution of the current code has finished

for (let j = 0; j < 100000000; j++) {
  i++;
}
