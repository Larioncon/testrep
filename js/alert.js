"use strict";

let newSectionClass = "class";
let lesson5 = "extend-natives";

// class PowerArray extends Array {
//   isEmpty() {
//     return this.length === 0;
//   }
// }

// let arr = new PowerArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30);
// alert(arr.isEmpty() );

// let filteredArr = arr.filter(item => item >= 45 );

// alert(filteredArr.isEmpty());



// alert( arr.constructor === PowerArray);


class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
  
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1,2,3,4,5, 10, 25);

alert(arr.isEmpty() );


let link = "https://learn.javascript.ru/extend-natives";
