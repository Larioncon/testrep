"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040 + 100; 
// alert(money);

let newSection = 'prototypes';
let lesson1 = 'prototype-inheritance';

// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal;

// alert( rabbit.eats );

let space = " ";

// let animal = {
//   name: 'animal',
//   eats: true,
//   walk() {
//     alert(`${this.name} walk`);
//   }
// };

// let rabbit = {
//   name: 'rabbit',
//   jumps: true,
//   __proto__: animal
// };

// rabbit.walk();

// let longEar = {
//   name: 'long ear',
//   earLength: 10,
//   __proto__: rabbit
// };

// longEar.walk();
// alert(longEar.jumps);

let divider = ' ';

// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// alert( Object.keys(rabbit));
// // Object.keys возвращает только собственные ключи

// // for..in проходит и по своим, и по унаследованным ключам
// for ( let prop in rabbit ) alert(prop);
//*
//Если унаследованные свойства нам не нужны,
//то мы можем отфильтровать их при помощи встроенного метода 
//obj.hasOwnProperty(key): он возвращает true, 
//если у obj есть собственное, не унаследованное, свойство с именем key.
//*

// for ( let prop in rabbit ) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     alert(`Our: ${prop}`);
//   } else {
//     alert(`Inherited: ${prop}`);
//   }
// }

let tasks = ' ';

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert( rabbit.jumps); //true

// delete rabbit.jumps;

// alert( rabbit.jumps); //null

// delete animal.jumps;

// alert( rabbit.jumps ); //und

//next task

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat(); // this = rabbit, rabbit - full.