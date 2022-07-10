/**
 * Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
 */

const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let total = Number(valueRef.textContent);

btnDecrementRef.addEventListener('click', () => {
  total -= 1;
  valueRef.textContent = total;
});
btnIncrement.addEventListener('click', () => {
  total += 1;
  valueRef.textContent = total;
});
