"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040; 
// alert(money);

// const calculateBtn = document.querySelector('.ci-calc__calculate-btn');
// const resultInfo = document.querySelector('.ci-result__info');

// calculateBtn.addEventListener('click', function() {
//   const initialDeposit = Number(document.getElementById('initial-deposit').value);
//   const periodsCount = Number(document.getElementById('periods-count').value);
//   const periodInterestRate = Number(document.getElementById('period-interest-rate').value);
//   const periodicPayment = Number(document.getElementById('periodic-payment').value);

//   let totalDeposit = initialDeposit;
//   let table = ' # \t Начало \t Прибыль \t Довложение \t Конец \n';

//   for (let i = 1; i <= periodsCount; i++) {
//     let profit = totalDeposit * periodInterestRate / 100;
//     let endPeriodDeposit = totalDeposit + profit + periodicPayment;
//     table += `${i}\t${totalDeposit.toFixed(2)}\t${profit.toFixed(2)}\t${periodicPayment.toFixed(2)}\t${endPeriodDeposit.toFixed(2)}\n`;
//     totalDeposit = endPeriodDeposit;
//   }

//   const finalDeposit = totalDeposit.toFixed(2);
//   const finalPeriodProfit = (totalDeposit - periodicPayment * (periodsCount - 1) - initialDeposit * (1 + periodInterestRate / 100) ** (periodsCount - 1)).toFixed(2);
//   const finalDividends = finalPeriodProfit;

//   let messageResult = (`К концу срока (${periodsCount} периодов), ваш вклад будет составлять ${finalDeposit}$, учитывая ставку ${periodInterestRate}% за период. По окончанию срока вклада, размер дивидендов будет составлять ${finalDividends}$ за период. Таблица начисления процентов:\n\n${table}`);

//   resultInfo.textContent = messageResult;
//   console.log(messageResult);
// });
const calculateBtn = document.querySelector('.ci-calc__calculate-btn');
const resultInfo = document.querySelector('.ci-result__info');

calculateBtn.addEventListener('click', function() {
  const initialDeposit = Number(document.getElementById('initial-deposit').value);
  const periodsCount = Number(document.getElementById('periods-count').value);
  const periodInterestRate = Number(document.getElementById('period-interest-rate').value);
  const periodicPayment = Number(document.getElementById('periodic-payment').value);

  let totalDeposit = initialDeposit;
  let table = ' # \t Начало \t Прибыль \t Довложение \t Конец \n';

  for (let i = 1; i <= periodsCount; i++) {
    let profit = totalDeposit * periodInterestRate / 100;
    let endPeriodDeposit = totalDeposit + profit + periodicPayment;
    table += `${i}\t${totalDeposit.toFixed(2)}\t${profit.toFixed(2)}\t${periodicPayment.toFixed(2)}\t${endPeriodDeposit.toFixed(2)}\n`;
    totalDeposit = endPeriodDeposit;
  }

  const finalDeposit = totalDeposit.toFixed(2);
  const finalPeriodProfit = (totalDeposit - periodicPayment * (periodsCount - 1) - initialDeposit * (1 + periodInterestRate / 100) ** (periodsCount - 1)).toFixed(2);
  const finalDividends = finalPeriodProfit;

  let messageResult = `К концу срока (${periodsCount} периодов), ваш вклад будет составлять ${finalDeposit}$, учитывая ставку ${periodInterestRate}% за период. По окончанию срока вклада, размер дивидендов будет составлять ${finalDividends}$ за период. Таблица начисления процентов:\n\n<span class="ci-result__table">${table}</span>`;

  resultInfo.innerHTML = messageResult;
  console.log(messageResult);
});
