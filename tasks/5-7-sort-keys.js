'use strict';

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());// make a "real" array

keys.push("more");

console.log(keys);// name, more
