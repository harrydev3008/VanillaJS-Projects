const deg = 6;

const hourClockwise = document.querySelector('#hour-clockwise')
const minuteClockwise = document.querySelector('#minute-clockwise')
const secondClockwise = document.querySelector('#second-clockwise')

const bgToggle = document.querySelector('#background-toggle');
const curMode = document.querySelector('#mode');

setInterval(() => {
    let curDate = new Date();
    let curHour = curDate.getHours() * 30;
    let curMinute = curDate.getMinutes() * deg;
    let curSecond = curDate.getSeconds() * deg;
    hourClockwise.style.transform = `rotateZ(${(curHour) + (curMinute / 12)}deg)`;
    minuteClockwise.style.transform = `rotateZ(${curMinute}deg)`;
    secondClockwise.style.transform = `rotateZ(${curSecond}deg)`;
});

bgToggle.addEventListener('click', () => {
    if (bgToggle.checked) {
        curMode.textContent = 'dark mode';
        curMode.style.color = '#f5f5f5';
        document.documentElement.style.setProperty('--primary-color', '#222f3e')
    }
    else {
        curMode.textContent = 'light mode';
        curMode.style.color = '#777';
        document.documentElement.style.setProperty('--primary-color', '#dcdde1');
    }
})