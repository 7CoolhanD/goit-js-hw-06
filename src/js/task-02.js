const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemList = document.querySelector("#ingredients");
const listElements = ingredients.map((el) => {
  const listEl = document.createElement("li");
  listEl.textContent = el;
  return listEl;
});

itemList.append(...listElements);

// ingredients.forEach((element) => {
//   // const listEl = document.createElement("li");
//   // listEl.append(element);
//   console.log(element);
// });
// ingredients.element;
// //
