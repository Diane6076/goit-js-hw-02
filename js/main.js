// Завдання 1
const slidInput = document.querySelector('.slider__input');
const slidImg = document.querySelector('.slider__image');

slidInput.addEventListener("slidInput", _.debounce((changer), 200))

function changer() {
    slidImg.style.width = `${slidInput.value * 5}px`;
    slidImg.style.height = `${slidInput.value * 5}px`;
}
