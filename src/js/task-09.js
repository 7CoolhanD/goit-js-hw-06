const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  colorValue: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", changeBodyColor);
const randomHexColor = getRandomHexColor();

function changeBodyColor() {
  refs.body.style.backgroundColor = randomHexColor;
  refs.colorValue.textContent = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
