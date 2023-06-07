"use strict"; 
// let money = 1000 + 1040 + 416 + 1040 + 312 + 1040 + 100; 
// alert(money);

let lesson9 = 'Декораторы и переадресация вызова, call/apply';

function slow(x) {
  // здесь могут быть ресурсоёмкие вычисления
  alert(`Called with ${x}`); //1
  x = 'Anatolyj'; //4.2
  return x; 
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // если кеш содержит такой x,
      alert('Rezultat prochitan iz kesha >');
      return '>' + cache.get(x); // читаем из него результат //4.1
    }

    let result = func(x); // иначе, вызываем функцию

    cache.set(x, result); // и кешируем (запоминаем) результат
    alert(result + ' alert result'); //2
    return result + ' return result'; //3
  };
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) кешируем 1 - 2 - 3

alert( slow(1) ); // возвращаем из кеша 4.1 - 4.2
