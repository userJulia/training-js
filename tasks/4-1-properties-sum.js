'use strict';

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalary(salaryObject) {
  let result = 0;
  for(let name in salaryObject) {
    result += salaryObject[name];
  }
  return result;
}

alert(sumSalary(salaries));
console.log(sumSalary(salaries));
