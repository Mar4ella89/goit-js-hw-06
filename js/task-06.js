const validationEl = document.querySelector("#validation-input");

const validValueLength = Number(validationEl.dataset.length);

const onInput = (event) => {
  const inputValueLength = event.currentTarget.value.trim().length;
  if (inputValueLength < validValueLength) {
    validationEl.classList.remove("valid");
    return validationEl.classList.add("invalid");
  }
  validationEl.classList.remove("invalid");
  return validationEl.classList.add("valid");
};

validationEl.addEventListener("blur", onInput);
