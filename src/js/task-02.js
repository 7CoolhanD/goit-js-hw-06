const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemList = document.querySelector("#ingredients");
// const listEl = document.createElement("li");
ingredients.forEach((element) => {
  const listEl = document.createElement("li");
  listEl.append(element);

  itemList.appendChild(listEl);
});
