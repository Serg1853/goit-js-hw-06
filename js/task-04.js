const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;



decrementBtn.addEventListener('click', decrementFn)
  function decrementFn () {
  counterValue -= 1;
  value.textContent = counterValue;
};

incrementBtn.addEventListener('click', incrementFn)
function incrementFn() {
  counterValue += 1;
  value.textContent = counterValue;
};
