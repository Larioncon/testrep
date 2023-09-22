"use strict"; 



let newSectionClass = 'class';
let lesson1 = 'class:syntax';

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(`${this.name} hey!`)
//   }
// }

// let user1 = new User ('Jamba');

// user1.sayHi();

//-----------

// let User = class {
//   sayHi() {
//     alert('Hello');
//   }
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
      
//       return alert( 'Name too short' );;
//     }
//     this._name = value;
//   }
// }

// let user = new User ('Sai');
// alert(user.name);

// class User {
//   name = 'Anon';

//   sayHi() {
//     alert(`Hey, ${this.name}!`);
//   }
// }
// new User().sayHi();

// function Clock({ template }) {
  
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

class MyClock {
  
  constructor({templ}) {
    this.templ = templ;
    this.timer = null;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.templ
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }
  stop(){
    clearInterval(this.timer);
  }
  start(){
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000)
  }
}

let clock = new MyClock({templ: 'h:m:s'});
clock.start()




let link = 'https://learn.javascript.ru/class';