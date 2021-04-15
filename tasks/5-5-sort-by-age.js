'use strict';

const john = { name: 'John', age: 25 };
const pete = { name: 'Pete', age: 30 };
const mary = { name: 'Mary', age: 28 };

const arr = [john, pete, mary];

const sortByAge = (arrayStaff) => {
  arrayStaff.sort((item1, item2) => {
    if (item1.age === item2.age) {
      return 0;
    }

    if (item1.age > item2.age) {
      return 1;
    }

    return -1;
  });
  return arr.name;
};

sortByAge(arr);

console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
