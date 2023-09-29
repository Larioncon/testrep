"use strict";

let newSectionClass = "class";
let lesson6 = "mixins";

// let sayHiMixin = {
//   sayHi() {
//     alert(`Hello, ${this.name}`);
//   };
//   sayBye() {
//     alert(`Good bye, ${this.name}.`);
//   }
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }


let eventMixin = {
  on ( eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  off(eventName, handler) {
    let  handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[1] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return;
    }

    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};



class Menu {
  choose(value) {
    this.trigger('select', value);
  }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on('select', value => alert(`Chosen value: ${value}`));


menu.choose('123');

let link = "https://learn.javascript.ru/mixins";
