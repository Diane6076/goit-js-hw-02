// Завдання 2
const box = document.getElementById('box');

function moveBox(event) {
  box.style.left = `${event.clientX}px`;
  box.style.top = `${event.clientY}px`;
};

document.addEventListener('mousemove', _.debounce(moveBox, 100))