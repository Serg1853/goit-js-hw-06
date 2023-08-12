const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", validFn);

function validFn(event) {
    if (event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
}

