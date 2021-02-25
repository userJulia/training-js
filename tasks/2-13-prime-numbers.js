'use strict';

for (let n = 2; n <= 10; n++) {
  for (let j = 2; j <= n; j++) {
    if (n % j === 0) {
      if (n === j) {
        console.log(n);
      }
      break;
    }
  }
}
