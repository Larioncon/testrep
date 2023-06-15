"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040 + 100; 
// alert(money);

let sectionOfLearning = 'Свойства объекта, их конфигурация';
let lessonFirst = 'Флаги и дескрипторы свойств';

let user = {};

Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
});

let link = 'https://learn.javascript.ru/property-descriptors';