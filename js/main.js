"use strict";
function loadScript() {
  let script = document.createElement('script');
  script.src = 'js/alert.js';
  document.head.appendChild(script);
}

const hoursElem = document.querySelector('.watch__hours-numbers');
const minutesElem = document.querySelector('.watch__minutes-numbers');

