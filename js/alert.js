"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040; 
// alert(money);

// Получение элементов формы и кнопки "ПОДСЧЕТ"
const form = document.querySelector('.ci-calc__inputs');
const calcButton = document.querySelector('.ci-calc__calculate-btn');

// Добавление обработчика клика на кнопку "ПОДСЧЕТ"
calcButton.addEventListener('click', () => {
  // Получение значений из полей формы
  const initialDeposit = Number(document.getElementById('initial-deposit').value);
  const periodsCount = Number(document.getElementById('periods-count').value);
  const periodInterestRate = Number(document.getElementById('period-interest-rate').value) / 100;
  const periodicPayment = Number(document.getElementById('periodic-payment').value);

  // Вычисление конечной суммы
  let sum = initialDeposit;
  for (let i = 0; i < periodsCount; i++) {
    sum += periodicPayment;
    sum *= (1 + periodInterestRate);
  }

  // Вывод результата в окно alert()
  alert(`Конечная сумма: ${sum.toFixed(2)}`);
});
