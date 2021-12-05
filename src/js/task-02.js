const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemList = document.querySelector("#ingredients");
ingredients.forEach((element) => {
  const listEl = document.createElement("li");
  listEl.append(element);
  itemList.appendChild(listEl);
});
