const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

/**
 * Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
 * после чего вставит все li за одну операцию в список ul.ingredients.
 * Для создания DOM-узлов используй document.createElement().
 */

const listRef = document.querySelector('#ingredients');
let ul = [];
ingredients.map(element => {
  const listItem = document.createElement('li');
  listItem.textContent = element;
  ul.push(listItem);
});

listRef.append(...ul);
