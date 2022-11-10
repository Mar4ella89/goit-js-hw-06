function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberEl = document.querySelector("#controls input");

const btnCreateEl = document.querySelector("button[data-create]");

const btnDestroyEl = document.querySelector("button[data-destroy]");

const boxEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  amount = inputNumberEl.valueAsNumber;
  let boxWidth = 30;
  let boxHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBox = `<div style='background-color:${getRandomHexColor()}; width:${boxWidth}px;
  height:${boxHeight}px;'></div>`;
    boxEl.insertAdjacentHTML("beforeend", newBox);
    boxWidth += 10;
    boxHeight += 10;
  }
};

btnCreateEl.addEventListener("click", createBoxes);

const destroyBoxes = () => {
  boxEl.innerHTML = "";
};

btnDestroyEl.addEventListener("click", destroyBoxes);
