'use strict';

function isAnagram(str1, str2) {
  function prepareString(str) {
    const arr = str.toLowerCase().split('');
    arr.sort();
    return arr.join('');
  }
  return prepareString(str1) === prepareString(str2);
}

function noAnagrams(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    const word = arr[i];

    if(!result.find((item) => isAnagram(item, word))) {
      result.push(word);
    }
  }
  return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let arr2 = ['cat', 'mode', 'TAC', 'google', 'dome', 'demo', 'lego']

console.log(noAnagrams(arr));//"nap", "teachers", "ear"
console.log(noAnagrams(arr2));//"cat", "mode", "google", "lego"
