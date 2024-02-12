// Завдання 1

const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');
sliderInput.addEventListener('input', _.debounce(resizeImage, 500))
function resizeImage(event) {
    const value = event.target.value;
    const newSize = value * 3; 
    sliderImage.style.width = newSize + 'px';
    sliderImage.style.height = newSize + 'px';
  }