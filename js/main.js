// Завдання 1
const slidInput = document.querySelector('.slider__input');
const slidImg = document.querySelector('.slider__image');

slidInput.addEventListener('slidInput', _.debounce(changer, 500))
// slidInput.addEventListener("slidInput", _.debounce(changer, 200) )

function changer(slidInput) {
    slidImg.style.width = `${slidInput.target.value * 5}px`;
    slidImg.style.height = `${slidInput.target.value * 5}px`;
}
