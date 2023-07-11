const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById("ingredients");

const listElem = ingredients.map(elem => {
  const liEl = document.createElement("li");
  liEl.className = "item";
  liEl.textContent = elem;
  return liEl;
})

list.append(...listElem);
list.style.listStyle = "none";
