'use strict';

function unique(arr) {
  let set = new Set([]);
  for(let value of arr) {
    set.add(value);
  }
  return set;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));//"Hare", "Krishna", ":-O"

//use arrow-function
let unique1 = (arr) => {
  let set = new Set([]);
  for(let value of arr) {
    set.add(value);
  }
  return set;
}

console.log(unique1(values));//"Hare", "Krishna", ":-O"
