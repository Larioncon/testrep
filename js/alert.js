"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040; 
// alert(money);

function createIncrement() {
  
  let count = 0;
  
  function increment() {
    count++;
  }
  function log() {
    let message = `Count is ${count}`;
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();