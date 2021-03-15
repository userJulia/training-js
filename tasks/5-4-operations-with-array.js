'use strict';

let styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push('Rock-n-Roll');
console.log(styles);

for (let i = 1; i < styles.length/2; i++) {
  styles[i] = 'Classic';
}
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift('Rap', 'Reggae');
console.log(styles);
