const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  colorValue: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorValue.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
