"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040; 
// alert(money);

const calculateBtn = document.querySelector('.ci-calc__calculate-btn');
const resultInfo = document.querySelector('.ci-result__info');
const periodsCountInput = document.getElementById('periods-count');
const resultContainer = document.querySelector('.ci-result__list');

calculateBtn.addEventListener('click', function() {
  const initialDeposit = Number(document.getElementById('initial-deposit').value);
  const periodsCount = Number(document.getElementById('periods-count').value);
  const periodInterestRate = Number(document.getElementById('period-interest-rate').value);
  const periodicPayment = Number(document.getElementById('periodic-payment').value);

  let totalDeposit = initialDeposit;
  let table = '<table>';
  table += '<tr><th class="number-cell">#</th><th>Начало</th><th>Прибыль</th><th>Довложение</th><th>Конец</th></tr>';

  for (let i = 1; i <= periodsCount; i++) {
    let profit = totalDeposit * periodInterestRate / 100;
    let endPeriodDeposit = totalDeposit + profit + periodicPayment;
    table += `<tr><td class="number-cell">${i}</td><td>${totalDeposit.toFixed(2)}</td><td class="profit-cell">${profit.toFixed(2)}</td><td>${periodicPayment.toFixed(2)}</td><td>${endPeriodDeposit.toFixed(2)}</td></tr>`;
    totalDeposit = endPeriodDeposit;
  }

  const finalDeposit = totalDeposit.toFixed(2);
  const finalPeriodProfit = (totalDeposit - periodicPayment * (periodsCount - 1) - initialDeposit * (1 + periodInterestRate / 100) ** (periodsCount - 1)).toFixed(2);
  const finalDividends = finalPeriodProfit;

  let messageResult = `К концу срока (${periodsCount} периодов), ваш вклад будет составлять ${finalDeposit}$, учитывая ставку ${periodInterestRate}% за период. По окончанию срока вклада, размер дивидендов будет составлять ${finalDividends}$ за период. Таблица начисления процентов:<br><br>${table}</table>`;

  resultInfo.innerHTML = messageResult;
  console.log(messageResult);
});

function updateResultContainerHeight() {
  const periodsNumber = Number(periodsCountInput.value);
  const maxHeight = 716; // Максимальная высота по умолчанию

  if (periodsNumber > 25) {
    const newHeight = maxHeight * 2; // Новая высота, если периодов больше 25
    resultContainer.style.height = `${newHeight}px`;
  } else {
    resultContainer.style.height = `${maxHeight}px`; // Высота по умолчанию
  }
}

periodsCountInput.addEventListener('input', updateResultContainerHeight);
updateResultContainerHeight(); // Вызов функции для установки начальной высоты


periodsCountInput.addEventListener('input', function() {
  const periodsCount = Number(periodsCountInput.value.trim());

  if (periodsCount <= 25) {
    resultInfo.innerHTML = ''; // Очищаем содержимое .ci-result__info
  }
});




