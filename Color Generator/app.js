const colors = ["#2ecc71", "#d35400", "#1abc9c", "#3498db", "#9b59b6",
    "#ff3838", "#40407a", "#706fd3", "#ff793f", "#33d9b2"];
const btn = document.querySelector('#btnClickMe');
const colorCode = document.querySelector('#colorCode');
const navItems = document.querySelectorAll('.nav-item');

btn.addEventListener('click', () => {
    let randomNumber = getRandomNumber(colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    colorCode.textContent = colors[randomNumber];
    colorCode.style.color = colors[randomNumber];

    Array.from(navItems).forEach((item) => {
        item.style.color = colors[randomNumber];
    });

});

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}