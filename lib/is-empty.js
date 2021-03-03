'use strict';

function isEmpty(someObject) {
  for (let key in someObject) {
    return false;
  }
  return true;
}
