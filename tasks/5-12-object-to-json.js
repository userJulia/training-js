'use strict';

let user = {
  name: "John Smith",
  age: 35
};

let json = JSON.stringify(user);

console.log(typeof json);//string
console.log(json);//{"name":"John Smith","age":35}

let user1 = JSON.parse(json);

console.log(typeof user1);//object
console.log(user1);//{age: 35, name: "John Smith"}
