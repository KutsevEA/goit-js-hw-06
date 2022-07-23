const inputEl = document.querySelector(`#validation-input`);

function validation() {
  if (inputEl.value.length < inputEl.getAttribute('data-length')) {
    inputEl.classList.add(`invalid`);
  } else inputEl.classList.add(`valid`);
}

inputEl.addEventListener(`blur`, validation);
inputEl.addEventListener(`focus`, () => {inputEl.classList.remove(`invalid`); inputEl.classList.remove(`valid`); });
