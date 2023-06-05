"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040 + 100; 
// alert(money);

// function sayHi() {
//   alert('Hey');
// }

// setTimeout(sayHi, 500);

// function sayHi(phrase, who) {
//   alert( phrase + ', ' + who);
// }

// setTimeout(sayHi, 500, 'Hey', 'Jo');

// setTimeout("alert('Hello')", 1000); 
// setTimeout(() => alert('Privki'), 1000);
// let timerId = setTimeout(() => alert('Nichego ne prois-hodit'), 3000);
// alert(timerId);
// clearTimeout(timerId);
// alert(timerId);

// let timerId = setInterval(() => alert('tick'), 2000);

// setTimeout(() => clearInterval(timerId), 5000);
// let serverPower = 2;
// let delay = 5000;

// let timerId = setTimeout(function request() {
//   alert("ZAPROS OTPRAVLEN")

//   if (serverPower > 1) {
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);

// let timerId = setTimeout(function tuk() {
//   alert('tick');
//   timerId = setTimeout(tuck, 2000); // (*)
// }, 10000);

// setTimeout(() => alert("Мир"));

// alert("Привет");

//Первая строка помещает вызов в «календарь» через 0 мс. 
//Но планировщик проверит «календарь» только после того,
//как текущий код завершится.
// Поэтому "Привет" выводится первым, а "Мир" – после него.

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова

//   if (start + 100 < Date.now()) alert(times); // показываем задержку через 100 мс
//   else setTimeout(run); // если нужно ещё запланировать
// });

// function printNum(from, to) {

//   let current = from;
//   let timerId = setInterval(function() {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);

// }

// printNum(1, 50);

// function printNum(from, to) {
//   let current = from;

//   setTimeout(function tick() {
//     alert(current);
//     if ( current < to ) {
//       setTimeout(tick, 1000);
//     }
//     current++;
//   }, 1000);
// }

// printNum(1, 2);
let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}

//Любой вызов setTimeout будет выполнен только после того, 
//как текущий код завершится.

//Последним значением i будет: 100000000.