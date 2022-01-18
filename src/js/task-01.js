const allItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
