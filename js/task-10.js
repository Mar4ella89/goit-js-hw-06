function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberEl = document.querySelector("#controls input");
console.dir(inputNumberEl);

const btnCreateEl = document.querySelector("button[data-create]");
console.log(btnCreateEl);

const btnDestroyEl = document.querySelector("button[data-destroy]");
console.log(btnDestroyEl);

const boxEl = document.querySelector("#boxes");
console.log(boxEl);

const createBoxes = (amount) => {
  amount = inputNumberEl.valueAsNumber;
  let boxWidth = 30;
  let boxHeight = 30;
  
  for (let i = 0; i < amount; i += 1) {
    const newBox = `<div style='background-color:${getRandomHexColor()}; color:red; width:${boxWidth}px;
  height:${boxHeight}px;'></div>`;
    boxEl.insertAdjacentHTML("beforeend", newBox);
    boxWidth += 10;
    boxHeight += 10;
  }
  console.log(boxWidth)
};

btnCreateEl.addEventListener("click", createBoxes);

const destroyBoxes = () => {
  boxEl.innerHTML = "";
};

btnDestroyEl.addEventListener("click", destroyBoxes);