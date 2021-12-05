const inputValue = document.querySelector("#validation-input");

inputValue.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputValueLength = event.currentTarget.value.length;
  if (inputValueLength === Number(inputValue.dataset.length)) {
    inputValue.classList.add("valid");
    inputValue.classList.remove("invalid");
  } else {
    inputValue.classList.remove("valid");
    inputValue.classList.add("invalid");
  }
}
