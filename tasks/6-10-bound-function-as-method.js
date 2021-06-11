'use strict';

const f = () => {
  console.log(this); // null, this = null
};

const user = {
  g: f.bind(null),
};

user.g();
