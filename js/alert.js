"use strict";

let newSectionClass = "class";
let lesson2 = "class inheritance";

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} has speed: ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     alert(`${this.name} doesn't move.`);
//   }
// }

// let animal = new Animal('My pet');

// animal.run(23);

// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} is hiding!`);
//   }
//   stop() {
//     super.stop();
//     this.hide();
//   }
// }
// let rabbit = new Rabbit('White krol');

// rabbit.run(5);
// rabbit.stop();

// class Animal {
//   name = 'animal';

//   constructor() {
//     alert(this.name);
//   }
// }

// class Rabbit extends Animal {
//   name = 'rabbit';
// }

// new Rabbit ();

// new Animal ();
//task 1
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White krol");

// alert(rabbit.name);

//task2

class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor ({ template, tickRate }) {
    super({template});
    this.tickRate = tickRate;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.tickRate);
  }
}


let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  tickRate: 10000
});

lowResolutionClock.start();

let link = "https://learn.javascript.ru/class-inheritance";
