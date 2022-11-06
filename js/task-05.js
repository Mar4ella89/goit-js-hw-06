const inputNameEl = document.querySelector("input#name-input");

const outputNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", handleInput);

function handleInput(event) {
       
    if (event.currentTarget.value === "") {
        return outputNameEl.textContent = "Anonymous"
    }
    
    return outputNameEl.textContent = event.currentTarget.value.trim();
}