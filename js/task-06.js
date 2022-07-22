const input = document.querySelector(`#validation-input`);

function validation() {
  if (input.value.length < 6) {
    input.classList.add(`invalid`);
  } else input.classList.add(`valid`);
}

input.addEventListener(`blur`, validation);
input.addEventListener(`focus`, () => {input.classList.remove(`invalid`); input.classList.remove(`valid`); });
