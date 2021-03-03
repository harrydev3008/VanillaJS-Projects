const memberImg = document.querySelector('#member-img')
const memberName = document.querySelector('.member-name')
const memberJob = document.querySelector('.member-job')
const memberInfo = document.querySelector('.member-info')

const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

const members = [
    {
        id: 1,
        name: "John Doe",
        job: "Web Developer",
        img: "./img/1.jpg",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod totam magni illo odit consectetur odio expedita ex the man, the myth, the legend velit quibusdam blanditiis!"
    },
    {
        id: 2,
        name: "John Cena",
        job: "Web Designer",
        img: "./img/2.jpg",
        info: "Sub morons! Dolor sit amet consectetur you can't see me elit. Quod totam magni illo odit consectetur odio expedita ex velit quibusdam blanditiis!"
    },
    {
        id: 3,
        name: "John Wick",
        job: "The Boss",
        img: "./img/3.jpg",
        info: "Lorem dolor sit amet consectetur adipisicing elit. Fury, hit me not mah dog, optio libero. Dolores voluptatibus necessitatibus laboriosam."
    }
]

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showMemberDetails(currentItem);
});

function showMemberDetails(member) {
    let item = members[member];
    memberImg.src = item.img;
    memberName.textContent = item.name;
    memberJob.textContent = item.job;
    memberInfo.textContent = item.info;
};

btnNext.addEventListener('click', () => {
    currentItem++;
    if (currentItem < members.length)
        showMemberDetails(currentItem);
    else {
        currentItem = 0;
        showMemberDetails(currentItem);
    }
});

btnPrev.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = members.length - 1;
        showMemberDetails(currentItem);
    }
    else
        showMemberDetails(currentItem);
});