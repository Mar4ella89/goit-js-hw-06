function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
console.log(bodyEl);

const valueColorEl = document.querySelector('span.color')

const changeBgColorBody = () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`
  console.log(valueColorEl.textContent = getRandomHexColor());
 }

bodyEl.addEventListener('click', changeBgColorBody)