'use strict';

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Jackson", id: 2 };
let mary = { name: "Mary", surname: "Jane", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(function(item) {
  let fullName = item.name + ' ' + item.surname;
  let id = item.id;
  return {id, fullName};
});

console.log(usersMapped);
//Array(3)
//0: {id: 1, fullName: "John Smith"}
//1: {id: 2, fullName: "Pete Jackson"}
//2: {id: 3, fullName: "Mary Jane"}
console.log(usersMapped[0].id);//1
console.log(usersMapped[0].fullName);//John Smith
