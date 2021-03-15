'use strict';

function getMaxSubSum(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currantValue = 0;
    for (let j = i; j < arr.length; j++) {
      currantValue += arr[j];
      maxSum = Math.max(maxSum, currantValue);
    }
  }
  return maxSum;
}

console.log(getMaxSubSum([-1, -2, 6, 12, -3]));


function getBiggestSubSum(array) {
  let subSum = 0;
  let presentValue = 0;

  for (let item of array) {
    presentValue += item;
    subSum = Math.max(subSum, presentValue);
    if (presentValue < 0) presentValue = 0;
  }
  return subSum;
}

console.log(getBiggestSubSum([100, -9, 2, -3, 5]));
