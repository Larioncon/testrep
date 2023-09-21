"use strict"; 



let newSectionPrototypes = 'prototypes';
let lesson4 = 'Методы прототипов, объекты без свойства __proto__';

// let animal = {
//   eats: 'yes'
// };

// создаём новый объект с прототипом animal
// let rabbit = Object.create(animal);

// alert(rabbit.eats); // true

// alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit

// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}


//
//У Object.create есть необязательный второй аргумент: 
//дескрипторы свойств. 
//Мы можем добавить дополнительное свойство новому объекту таким образом:
// let rabbitchik = Object.create(animal, {
//   jumps: {
//     value: true
//   }
// });


// let chineseDictionary = Object.create(null);
// chineseDictionary.hello = 'HEJ';
// chineseDictionary.bye = 'GOOD LUCK!';

// alert(Object.keys(chineseDictionary));

// alert(rabbitchik.jumps);

//tasks
//first task

// let dictionary = Object.create(null, {
//   toString: {
//     value() {
//       return Object.keys(this).join();
//     }
//   }
// });

// dictionary.apple = 'Apple';
// dictionary.__proto__ = 'test';

// for(let key in dictionary) {
//   alert (key);
// }




// alert(dictionary);

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
}

let rabbit = new Rabbit ('Rabbit');
let newRabbit = new Rabbit ('Robert');

rabbit.sayHi();
newRabbit.sayHi();
alert('divider');
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
let link = 'https://learn.javascript.ru/prototype-methods';