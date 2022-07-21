let counterValue = 0;

const decrementBtn = document.querySelector(`#counter`).firstElementChild;
const incrementBtn = document.querySelector(`#counter`).lastElementChild;
const counter = document.querySelector(`#value`);

decrementBtn.addEventListener('click', function () {
    counterValue -= 1;
    counter.textContent = counterValue;
});
incrementBtn.addEventListener('click', function () {
    counterValue += 1;
    counter.textContent = counterValue;
});
