'use strict';

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

console.log(users);

let names = users.map(function(item) {
  return item.name;
});

console.log(names); // John, Pete, Mary
