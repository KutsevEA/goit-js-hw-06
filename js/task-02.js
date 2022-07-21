const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = ingredients.map(ingredient => {
  const element = document.createElement(`li`);
  element.textContent = ingredient;
  return element
})

document.querySelector(`#ingredients`).append(...elements);
