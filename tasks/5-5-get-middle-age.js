'use strict';

const john = { name: 'John', age: 25 };
const pete = { name: 'Pete', age: 30 };
const mary = { name: 'Mary', age: 29 };

const users = [john, pete, mary];

const getAverageAge = (usersArray) => {
  let totalAge = 0;

  usersArray.forEach((item) => {
    totalAge += item.age;
  });
  return totalAge / usersArray.length;
};

console.log(getAverageAge(users)); // (25 + 30 + 29) / 3 = 28

const getMiddleAge = (usersArray) => {
  const middleAge = usersArray.reduce((result, item, i, arr) => {
    const sumAge = result + item.age;
    return i === arr.length - 1 ? sumAge / arr.length : sumAge;
  }, 0);
  return middleAge;
};

/* arrow-function
function getMiddleAge(usersArray) {
  return usersArray.reduce((result, item) => result + item.age, 0) /usersArray.length;
}
*/

console.log(getMiddleAge(users));// 28

// return sum [1, 2, 13, 15, -1]

const arr = [1, 2, 13, 15, -1];

const sum = arr.reduce((result, item) => {
  return result + item;
}, 0);

console.log(sum);// 30
