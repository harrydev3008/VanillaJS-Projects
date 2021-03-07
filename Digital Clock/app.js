const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov"
];

const dates = ["sun", "mon", "tue", "wed", "thur",
    "fri", "sat"
];

const curDate = new Date();

const curHour = document.querySelector('#hour');
const curMinute = document.querySelector('#minute');
const curSecond = document.querySelector('#second');

const curDateOfMonth = document.querySelector('#date-of-month');
const curMonth = document.querySelector('#month');
const curYear = document.querySelector('#year');

setInterval(() => {
    const curTime = new Date();
    curHour.textContent = (curTime.getHours() > 9 ? curTime.getHours() : '0' + curTime.getHours());
    curMinute.textContent = (curTime.getMinutes() > 9 ? curTime.getMinutes() : '0' + curTime.getMinutes());
    curSecond.textContent = (curTime.getSeconds() > 9 ? curTime.getSeconds() : '0' + curTime.getSeconds());
}, 1);

let upDateCurrentDate = () => {
    curDateOfMonth.textContent = `${curDate.getDate()}, `;
    curMonth.textContent = months[curDate.getMonth()];
    curYear.textContent = curDate.getFullYear();

    document.getElementById(`${dates[curDate.getDay()]}`).style.color = '#fff';
}

upDateCurrentDate();