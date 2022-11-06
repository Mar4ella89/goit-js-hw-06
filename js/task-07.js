const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

const onChangeInput = (event) => {
  const currentFontSize = event.currentTarget.value;
  return (textEl.style.fontSize = `${currentFontSize}px`);
};

inputEl.addEventListener("input", onChangeInput);
