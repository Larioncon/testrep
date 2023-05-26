"use strict";
// function loadScript() {
//   let script = document.createElement('script');
//   script.src = 'js/alert.js';
//   document.head.appendChild(script);
// }

// main.js
document.addEventListener('DOMContentLoaded', function() {
  let testJsButton = document.querySelector('.test-js__button');
  
  testJsButton.addEventListener('click', function() {
    // Загрузка и выполнение скрипта alert.js
    loadScript('js/alert.js');
  });
});

function loadScript(url) {
  let script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
}
