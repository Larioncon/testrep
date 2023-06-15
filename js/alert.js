"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040 + 100; 
// alert(money);

let sectionOfLearning = 'Свойства объекта, их конфигурация';
let lessonSecond = 'Get and set or accessor properties';

let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert('Name too short!');
      return;
    }
    this._name  = value;
  }
};

user.name = "Pet";
alert(user.name);

function UserF (name, age) {
  this.name = name;
  this.age = age;
}

let johnF = new UserF ('John', 25);

alert(johnF.age);


// возраст рассчитывается из текущей даты и дня рождения
function User (name, birthday) {
  this.name = name;
  this.birthday = birthday;
  
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User('John', new Date(1992, 6, 1));
let johnJson = JSON.stringify (john);
alert( john.birthday );
alert( john.age);
alert( johnJson );
//asdasdasd

