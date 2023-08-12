const textInput = document.querySelector("#name-input");
// console.log(textInput);
const textOutput = document.querySelector("#name-output");
// console.log(textOutput);

textInput.addEventListener("input", textInputChange);
function textInputChange(evt) {
    textOutput.textContent = evt.currentTarget.value;
    if (evt.currentTarget.value === "") {
      textOutput.textContent = 'Anonymous';  
    }
}

