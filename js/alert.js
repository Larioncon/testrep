"use strict"; 



let newSectionPrototypes = 'prototypes';
let lesson3 = 'Встроенные прототипы';

// let arr = [1, 2, 3];

// String.prototype.al = function() {
//   alert(this);
// };

// 'This is alert from String.prototype.al'.al();

//sssssssssss

// if (!String.prototype.repeat) {
//   String.prototype.repeat= function(n) {
//     return new Array(n + 1).join(this);
//   };
// }

// alert('La'.repeat(5));

//ssss
// let obj = {
//   0: 'Hell',
//   1: 'World',
//   length: 2,
// };

// obj.join = Array.prototype.join;

// alert( obj.join(',') );
// task
// Function.prototype.defer = function(ms) {
//   setTimeout(this, ms)
// }

// function f() {
//   alert('Huj');
// }

// f.defer(2000);

//task2
function task2 (a, b) {
  alert ( a + b );
}
Function.prototype.defer = function(ms) {
  const func = this;
  return function (...args) {
    setTimeout(() => func(...args), ms);
  };
}
task2.defer(2000)(2, 4);


let link = 'https://learn.javascript.ru/native-prototypes';