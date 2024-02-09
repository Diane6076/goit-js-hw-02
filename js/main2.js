// Завдання 2

const box = document.querySelector('#box');
const boxAll = document.querySelector('#boxall')

boxAll.addEventListener('mouse',  _.debounce((event) => {
 box.style.left = `${event.offsetX}px`;
 box.style.top = `${event.offsetY}px`;
}, 100));
