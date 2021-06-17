'use strict';

const root = {
  a: 1,
  b: 2,
  c: {
    name: 'Mark',
    f1: () => {},
    f2: () => {},
  },
  data: {
    title: 'title',
    desc: 'desc',
    params: {
      first: 'first',
      second: 'second',
      resetParams() {},
    },
    resetData() {},
  },
};

const a = () => {};

root.d = root.a = a;

const b = (root.b = () => {});

root.dataCopy = { ...root.data };

root[`${Math.random()}Secret`] = root;

root.resetAll = () => {};

console.log(b);

/* links
$0: object
  root
  $0.random

$1: object
  $0.c

$2: function
  $1.f1

$3: function
  $1.f2

$4: object
  $0.data
  $0.dataCopy

$5: object
  $4.params

$6: function
  $5.resetParams

$7: function
  $4.resetData

$8: function
  a
  $0.a
  $0.d

$9: function
  b
  $0.b

$10: function
  $0.resetAll
*/
