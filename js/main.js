"use strict";
function loadScript() {
  let script = document.createElement('script');
  script.src = 'js/alert.js';
  document.head.appendChild(script);
}

let i = 0, text;
text = '* sl kasd mkamsd ijasd klasn iajsijd kdkfs nalksdkj aksmknfsdf kakslmkalsd';

function typing () {
  if(i<text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 58);
  }
}

typing();

function generateRandomLocation() {
  const x = Math.floor(Math.random() * 101); // генерируем случайную координату x от 0 до 100
  const y = Math.floor(Math.random() * 101); // генерируем случайную координату y от 0 до 100
  const z = Math.floor(Math.random() * 101); // генерируем случайную координату z от 0 до 100
  return { x, y, z }; // возвращаем объект с координатами астероида
}
function calculateDistance(probe, location) {
  const dx = probe.x - location.x; // вычисляем разницу по координате x
  const dy = probe.y - location.y; // вычисляем разницу по координате y
  const dz = probe.z - location.z; // вычисляем разницу по координате z
  return Math.sqrt(dx * dx + dy * dy + dz * dz); // возвращаем расстояние между зондом и астероидом
}
function findAsteroidLocation() {
  const probes = []; // массив для хранения координат зондов
  const location = generateRandomLocation(); // генерируем случайные координаты для астероида
  const maxCoord = 100; // максимальное значение координаты

  // генерируем случайные координаты для зондов
  for (let i = 0; i < 50; i++) {
    probes.push({
      x: Math.floor(Math.random() * (maxCoord + 1)),
      y: Math.floor(Math.random() * (maxCoord + 1)),
      z: Math.floor(Math.random() * (maxCoord + 1)),
    });
  }

  let minSum = Infinity; // переменная для хранения минимальной суммы расстояний
  let result = null; // переменная для хранения результата

  // перебираем все возможные координаты астероида в кубе размером 100x100x100
  for (let x = 0; x <= maxCoord; x++) {
    for (let y = 0; y <= maxCoord; y++) {
      for (let z = 0; z <= maxCoord; z++) {
        const currentLocation = { x, y, z }; // текущая координата астероида
        let sum = 0; // переменная для хранения суммы расстояний до зондов

        // вычисляем расстояние от каждого зонда до текущей координаты астероида
        for (const probe of probes) {
          const distance = calculateDistance(probe, currentLocation);
          sum += distance;
        }

        // если сумма расстояний меньше минимальной, сохраняем текущие координаты астероида и сумму расстояний
        if (sum < minSum) {
          minSum = sum;
          result = { location: currentLocation, probes: { count: probes.length, coordinates: probes } };
        }
      }
    }
  }

  return { result };
}

console.log(findAsteroidLocation());


//task 1


function loadConversionRules() {
  return fetch('./js/conversRules.json')
    .then(response => response.json());
}

function convertDistance() {
  const distance = document.getElementById('distance').value;
  const unit = document.getElementById('unit').value;
  const convertTo = document.getElementById('convertTo').value;

  loadConversionRules()
    .then(conversionRules => {
      const conversionFactor = conversionRules[unit][convertTo];
      const convertedDistance = distance * conversionFactor;
      
      const resultElement = document.getElementById('result');
      if (isNaN(convertedDistance)) {
        resultElement.innerHTML = 'Сделайте другой выбор единицы измерения';
      } else {
        resultElement.innerHTML = `--> ${convertedDistance.toFixed(2)} ${convertTo}`;
      }
    })
    .catch(error => console.error(error));
}

const convertButton = document.getElementById('convertBtn');
convertButton.addEventListener('click', convertDistance);