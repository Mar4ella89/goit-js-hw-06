let counterValue = 0;

const decrementBtnEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);
console.log(decrementBtnEl);
const incrementBtnEl = document.querySelector(
  '#counter button[data-action="increment"]'
);
console.log(incrementBtnEl);
const valueEl = document.querySelector("#value");
console.log(valueEl);

decrementBtnEl.addEventListener("click", () => {
   counterValue -= 1;
   return valueEl.textContent = counterValue;
});

incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;
  return valueEl.textContent = counterValue;
});
