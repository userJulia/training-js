'use strict';

let user = {
  name: 'John',
  go: function() { alert(this.name) }
};

(user.go)();

/*
Каким будет результат выполнения этого кода?

let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}

(user.go)()
P.S. Здесь есть подвох :)
*/
