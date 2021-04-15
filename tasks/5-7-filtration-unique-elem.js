'use strict';

function unique(arr) {
  const set = new Set([]);
  for (const value of arr) {
    set.add(value);
  }
  return set;
}

const values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values)); // "Hare", "Krishna", ":-O"

// simple version
const unique0 = (arr) => {
  const uniqueValue = Array.from(new Set(arr));
  return uniqueValue;
};

console.log(unique0(values));// "Hare", "Krishna", ":-O"

// use arrow-function
const unique1 = (arr) => {
  const set = new Set([]);
  for (const value of arr) {
    set.add(value);
  }
  return set;
};

console.log(unique1(values));// "Hare", "Krishna", ":-O"
