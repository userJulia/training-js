'use strict';

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

let user = {
  name: 'John',
  surname: 'Smith',
};

user.name = 'Pete';

delete user.name;
