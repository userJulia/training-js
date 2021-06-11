'use strict';

let f = () => {
  console.log(this.name); // John
};

f = f.bind({ name: 'John' }).bind({ name: 'Sam' });

f();
