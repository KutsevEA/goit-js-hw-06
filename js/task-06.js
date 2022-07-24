const inputEl = document.querySelector(`#validation-input`);

const lengthValue = Number(inputEl.getAttribute('data-length'));

function validation() {
  if (inputEl.value.length === lengthValue) {
    inputEl.classList.add(`valid`);
  } else inputEl.classList.add(`invalid`);
}

inputEl.addEventListener(`blur`, validation);
inputEl.addEventListener(`focus`, () => {
  inputEl.classList.remove(`invalid`);
  inputEl.classList.remove(`valid`);
});
