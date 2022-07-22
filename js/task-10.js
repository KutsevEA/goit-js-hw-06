function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const allBtn = document.querySelectorAll(`button`);
const createBtn = allBtn[0]
const destroyBtn = allBtn[1]
const userBox = document.querySelector(`#boxes`);
const input = document.querySelector(`#controls`).firstElementChild;

createBtn.addEventListener(`click`, createBoxes
) 
destroyBtn.addEventListener(`click`, destroyBoxes
)

function createBoxes(amount) {
  console.log(`createBoxes`);

  let b = 20;

  for (let i = 0; i < input.value; i += 1) {
    const galleria = document.createElement('div');
    b = b + 10

    galleria.style.width = `${b}px`
    galleria.style.height = `${b}px`;
    galleria.style.backgroundColor = getRandomHexColor();

    console.log(galleria);
    userBox.append(galleria);
  }
}

function destroyBoxes() {
  userBox.innerHTML = ``;
};

