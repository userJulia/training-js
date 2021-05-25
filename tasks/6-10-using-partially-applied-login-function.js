'use strict';

const askPassword = (ok, fail) => {
  const password = prompt('Password?', '');
  if (password === 'rockStar') ok();
  else fail();
};

const user = {
  name: 'John',

  login(result) {
    console.log(this.name + (result ? ' logged in' : ' failed to log in'));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));
// user - context, true/false - arguments
