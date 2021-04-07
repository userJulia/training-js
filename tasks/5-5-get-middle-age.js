'use strict';

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [ john, pete, mary ];

function getAverageAge(users) {
  let totalAge = 0;

  users.forEach(function(item) {
    totalAge += item.age;
  });
  return totalAge/users.length;
}

console.log(getAverageAge(users)); // (25 + 30 + 29) / 3 = 28

function getMiddleAge(users) {
  return users.reduce((result, item, i, arr) => {
    result += item.age;
    return i === arr.length - 1 ? result/arr.length : result;
  }, 0);
}

/* arrow-function
function getMiddleAge(users) {
  return users.reduce((result, item) => result + item.age, 0) /users.length;
}
*/

console.log(getMiddleAge(users));//28

//return sum [1, 2, 13, 15, -1]

let arr = [1, 2, 13, 15, -1];

let sum = arr.reduce(function(result, item) {
  return result + item;
}, 0);

console.log(sum);//30
