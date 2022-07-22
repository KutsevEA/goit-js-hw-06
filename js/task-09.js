function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(`.change-color`);
const colorValueOnScreen = document.querySelector(`.color`);
const body = document.querySelector(`body`);

changeColorBtn.addEventListener(`click`, () => {

  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorValueOnScreen.textContent = `${getRandomHexColor()}`;
}
)