"use strict";
function loadScript() {
  let script = document.createElement('script');
  script.src = 'js/alert.js';
  document.head.appendChild(script);
}

const hoursElem = document.querySelector('.watch__hours-numbers');
const minutesElem = document.querySelector('.watch__minutes-numbers');

setInterval(() => {
  // получаем текущее время
  const now = new Date();

  // обновляем значения элементов часов
  hoursElem.textContent = padZero(now.getHours());
  minutesElem.textContent = padZero(now.getMinutes());
}, 1000);

// функция для добавления ведущего нуля к числу
function padZero(num) {
  return num.toString().padStart(2, '0');
}