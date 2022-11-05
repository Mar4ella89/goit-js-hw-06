const menuItemsByClass = document.querySelectorAll(".item");
console.log(menuItemsByClass);

const quantityCategory = menuItemsByClass.length;
console.log("Number of categories: ", quantityCategory);

menuItemsByClass.forEach((item) =>
  {console.log('Category: ', item.firstElementChild.textContent)
  console.log('Elements: ', item.lastElementChild.children.length)
});

