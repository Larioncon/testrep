"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040 + 100; 
// alert(money);

let sectionOfLearning = 'Свойства объекта, их конфигурация';
let lessonFirst = 'Флаги и дескрипторы свойств';

let user = {
  name: 'Jogn'
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert ( JSON.stringify(descriptor, null, 2) );
