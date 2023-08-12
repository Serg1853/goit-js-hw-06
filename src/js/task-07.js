// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const textControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = textControl.value + 'px';

textControl.addEventListener('input', textControlFn);

function textControlFn(event) {
  text.style.fontSize = `${textControl.value}px`;
}
