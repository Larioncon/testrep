"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040 + 100; 
// alert(money);

function createLogger () {
  let log = '';

  function logger(message) {
    log += message + '\n';
    alert(log);
  }
  function clear() {
    log = '';
    alert('Log cleared');
  }

  return {
    log: logger,
    clear: clear
  };
}

let logger = createLogger();

alert('Привет, меня зовут Альбертумус, я заргон, а...')
let userName = prompt('А как зовут тебя?', );
logger.log(`Приятно познакомиться, ${userName}`);
logger.log('Я собираюсь поведать тебе очень занятную историю.');
logger.log('Готов к ней?');
