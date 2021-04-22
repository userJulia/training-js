'use strict';

function printInverseList(list) {
  if (list.next) {
    printInverseList(list.next);
  }
  console.log(list.value);
}

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printInverseList(list); // 4, 3, 2, 1

function printInverseList1(list1) {
  const reverseList = [];
  let newList = list1;

  while (newList) {
    reverseList.push(newList.value);
    newList = newList.next;
  }
  reverseList.reverse();
  for (const item of reverseList) {
    console.log(item);
  }
}

const list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printInverseList1(list1); // 4, 3, 2, 1
