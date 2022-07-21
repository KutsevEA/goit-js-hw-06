const allCategories = document.querySelector(`#categories`).children;

console.log(`Number of categories: ${allCategories.length}`);
console.log(``);

const item = document.querySelectorAll(`.item`);

for (let i = 0; i < item.length; i += 1) {
  console.log(`Category: ${item[i].firstElementChild.textContent} `);
  console.log(`Elements: ${item[i].querySelectorAll(`li`).length}`);
  console.log(``);
}
