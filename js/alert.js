"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040 + 100; 
// alert(money);

let lesson10 = 'Привязка контекста к функции';
//
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(() => user.login(true), () => user.login(false));
// Или же можно создать частично применённую функцию на основе user.login, 
// которая использует объект user в качестве контекста и получает
// соответствующий первый аргумент:

askPassword(user.login.bind(user, true), user.login.bind(user, false));