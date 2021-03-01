const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('#btnClickMe');
const colorCode = document.querySelector('#colorCode');
const navItems = document.querySelectorAll('.nav-item');

btn.addEventListener('click', () => {

    let hexColor = '#';

    for (let i = 0; i < 6; i++)
        hexColor += hex[getRandomNumber()];

    document.body.style.backgroundColor = hexColor;
    colorCode.textContent = hexColor;
    colorCode.style.color = hexColor;

    Array.from(navItems).forEach((item) => {
        item.style.color = hexColor;
    });

});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}