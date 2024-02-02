// Завдання 1

// const sliderInput = document.querySelector('.slider__input');
//   const sliderImage = document.querySelector('.slider__image');

//   const debounceResize = _.debounce(() => {
//     const value = sliderInput.value;
//     const newSize = value * 3; 
//     sliderImage.style.width = newSize + 'px';
//   }, 300);
//   sliderInput.addEventListener('input', debounceResize);

const slidInput = document.querySelector('.slider__input');
const slidImg = document.querySelector('.slider__image');

slidInput.addEventListener('input', _.debounce((slidImgfunct), 300))

function slidImgfunct() {
    slidImg.style.rotate = `${slidInput.value}deg`;
}
