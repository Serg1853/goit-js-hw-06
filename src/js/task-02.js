const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
 console.log(ingredientsList);

const items = ingredients.map((ingridient) => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingridient;
  // const listItem = `<li class = "item"> ${ ingridient }</li>`;
  return listItem;
 });

 console.log(items);

// ingredientsList.insertAdjacentHTML("beforeend",items);
ingredientsList.append(...items);


// const listItem1 = document.createElement('li');
// listItem1.classList.add('item');
// listItem1.textContent = "Potatoes";

// console.log(listItem1);

// const listItems2 = document.createElement('li');
// listItems2.classList.add('item');
// listItems2.textContent = "Mushrooms";

// const listItems3 = document.createElement('li');
// listItems3.classList.add('item');
// listItems2.textContent = "Garlic";

// const listItems4 = document.createElement('li');
// listItems4.classList.add('item');
// listItems4.textContent = "Tomatos";

