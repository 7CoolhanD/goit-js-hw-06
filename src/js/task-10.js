// const refs = {
//   amountValue: document.querySelector("#controls input").value,
//   creatBtn: document.querySelector("[data-create]"),
//   destroyBtn: document.querySelector("[data-destroy]"),
//   container: document.querySelector("#boxes"),
// };
// const getAmount = () => createBoxes(refs.amountValue);

// function createBoxes(amount) {
//   let baseSize = 30;

//   console.log(getAmount.map((amount) => baseSize + getAmount * 10));
// }

// refs.creatBtn.addEventListener("click", getAmount);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());

const render = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  const userValue = document.querySelector("#controls input").value;
  createBoxes(userValue);
}
// const createBoxes = (amount) => {
//   amount = userValue;
//   console.log(userValue);
//   for (let i = 0; i < amount; i += 1) {
//     const basicSize = 30;
//     const biggestSize = basicSize + i * 10;
//     const box = document.createElement("div");
//     box.setAttribute(
//       "style",
//       `width: ${biggestSize}px; height: ${biggestSize}px; background: ${getRandomHexColor()}`
//     );
//     boxes.append(box);
//   }
// };
function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
