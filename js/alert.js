"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040 + 100; 
// alert(money);

let newSectionPrototypes = 'prototypes';
let lesson2 = 'F.prototype';

// let animal = {
//   eats: true
// };
// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype = animal;

// let rabbit = new Rabbit ('White Rabbit'); //  rabbit.__proto__ == animal


// alert( rabbit.eats );

//constructor 

// function Rabbit () {

// }

// let rabbit = new Rabbit ();
// alert( rabbit.constructor == Rabbit );

//tasks:

function Rabbit () {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit ();

delete Rabbit.prototype.eats;

alert( rabbit.eats );

let link = 'https://learn.javascript.ru/function-prototype';