let container = document.querySelector('.img-container');
let img = document.querySelector('img');
let zoomXTime = document.querySelector('#zoom-time');
let range = document.querySelector('#zoom-range');

container.addEventListener('mousemove', (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = `scale(${zoomXTime.value})`;
});

container.addEventListener('mouseleave', () => {
    img.style.transformOrigin = `center center`;
    img.style.transform = `scale(1)`;
});

zoomXTime.addEventListener('input', () => {
    range.textContent = `${zoomXTime.value}x`;
});