/**
 * Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.
 */

const inputRef = document.querySelector('input');
const btnCreateBoxes = document.querySelector('button[data-action="render"]');
const btnDeleteBoxes = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

function createBoxes(quantity) {
  let boxes = [];
  for (let i = 1; i <= quantity; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomColor();
    box.style.height = 20 + 10 * i + 'px';
    box.style.width = 20 + 10 * i + 'px';
    boxes.push(box);
  }
  return boxes;
}

function getRandomColor() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
}

let quantity = 0;

inputRef.addEventListener('input', event => {
  quantity = event.target.value;
});

btnCreateBoxes.addEventListener('click', event => {
  if (quantity < 1) {
    console.log('enter a number');
  }
  boxesRef.append(...createBoxes(quantity));
});

btnDeleteBoxes.addEventListener('click', event => {
  const newBoxesRef = document.querySelectorAll('#boxes>div');

  newBoxesRef.forEach(elem => elem.remove());
});
