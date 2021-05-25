'use strict';

const sayHi = () => {
  console.log(this.name);
};
sayHi.test = 5;

const bound = sayHi.bind({
  name: 'John',
});

console.log(bound.test); // what will output? - undefined; why? -the bound has no 'test' property.
