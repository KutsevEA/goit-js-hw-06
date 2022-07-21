const controller = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

controller.addEventListener(`input`, fn => {text.style.fontSize = `${controller.valueAsNumber}px`});
