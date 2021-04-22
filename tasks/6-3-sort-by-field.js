'use strict';

const byField = (fieldName) => {
  return (obj1, obj2) => {
    const field1 = obj1[fieldName];
    const field2 = obj2[fieldName];

    if (field1 > field2) {
      return 1;
    }
    if (field1 === field2) {
      return 0;
    }
    if (field1 < field2) {
      return -1;
    }
  };
};

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

users.sort(byField('name'));
for (let user of users) {
  console.log(user.name); // Ann, John, Pete
}

users.sort(byField('age'));
for (let user of users) {
  console.log(user.name); // Pete, Ann, John
}
