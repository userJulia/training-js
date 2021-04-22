'use strict';

function printList(list) {
  let newList = list;
  while (newList) {
    console.log(newList.value);
    newList = newList.next;
  }
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

printList(list); // 1, 2, 3, 4

function printList1(list1) {
  console.log(list1.value);
  if (list1.next !== null) {
    printList1(list1.next);
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

printList1(list1); // 1, 2, 3, 4
