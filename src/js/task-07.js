const refs = {
  inputRange: document.querySelector("#font-size-control"),
  inputValue: document.querySelector("#text"),
};
console.log((refs.inputValue.style.fontSize = `20px`));
const onRangeChange = (event) => {
  const { value } = event.target;
  refs.inputValue.style.fontSize = `${value}px`;
};

refs.inputRange.addEventListener("input", onRangeChange);
