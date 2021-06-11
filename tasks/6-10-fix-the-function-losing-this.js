'use strict';

const askPassword = (ok, fail) => {
  const password = prompt('Password?', '');
  if (password === 'rockStar') ok();
  else fail();
};

const user = {
  name: 'John',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // add .bind(user)
