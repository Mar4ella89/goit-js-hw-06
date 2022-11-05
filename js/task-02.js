const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItems = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  console.log(itemEl);
  return itemEl;
});

const listId = document.querySelector("#ingredients");
console.log(listId);

listId.append(...listItems);