// Завдання 2
// const box = document.getElementById('box');

//   const debounceMove = _.debounce((event) => {
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;
//     const translateX = mouseX - box.offsetWidth / 2;
//     const translateY = mouseY - box.offsetHeight / 2;

//     box.style.transform = `translate(${translateX}px, ${translateY}px)`;
//   }, 100); 
//   document.addEventListener('mousemove', debounceMove);



const box = document.querySelector('#box');
const boxAll = document.querySelector('#boxall')

boxAll.addEventListener('mouse',  _.debounce((event) => {
 box.style.left = `${event.offsetX}px`;
 box.style.top = `${event.offsetY}px`;
  
}));
