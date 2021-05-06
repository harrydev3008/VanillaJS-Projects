const WIDTH = 800
const HEIGHT = 400

const container = document.querySelector('.slide-container')
const images = document.querySelectorAll('.slide')

const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

container.style.width = images.length * WIDTH
container.style.height = HEIGHT

var idx = 0;

function imgSlide() {
    container.style.transform = `translateX(-${idx * WIDTH}px)`;
}

function prev() {
    if (idx === 0)
        idx = images.length - 1;
    else
        idx--;
    imgSlide();
}

function next() {
    if (idx < images.length - 1)
        idx++;
    else
        idx = 0;
    imgSlide();
}

btnPrev.addEventListener('click', () => {
    prev();
})

btnNext.addEventListener('click', () => {
    next();
})

setInterval(() => {
    next();
}, 3500)