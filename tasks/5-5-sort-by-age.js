'use strict';

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let arr = [john, pete, mary];

function sortByAge(arr) {
  arr.sort(function(item1, item2) {
    if(item1.age > item2.age) {
      return 1;
    } else {
      return -1;
    }
  });
  return arr.name;
}

sortByAge(arr);

console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
