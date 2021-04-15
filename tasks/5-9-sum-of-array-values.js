'use strict';

function sumSalaries(salaries) {
  let result = 0;
  for(let value of Object.values(salaries)) {
    result += value;
  }
  return result;
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

console.log(sumSalaries(salaries)); // 650
