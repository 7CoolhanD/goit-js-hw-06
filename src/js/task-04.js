const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const counterValue = document.querySelector("#value");
let value = 0;
decrementBtn.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
  console.log(counterValue.textContent);
});
incrementBtn.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
  console.log(counterValue.textContent);
});
