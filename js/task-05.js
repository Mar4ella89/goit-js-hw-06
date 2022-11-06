// Напиши скрипт который, при наборе
// текста в инпуте input#name-input
// (событие input), подставляет его
// текущее значение в span#name-output.
// Если инпут пустой, в спане должна
// отображаться строка "Anonymous".

const inputNameEl = document.querySelector("input#name-input");

const outputNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", handleInput);

function handleInput(event) {
       
    if (event.currentTarget.value === "") {
        return outputNameEl.textContent = "Anonymous"
    }
    
    return outputNameEl.textContent = event.currentTarget.value;
}