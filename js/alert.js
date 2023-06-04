"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040 + 100; 
// alert(money);

function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()();
