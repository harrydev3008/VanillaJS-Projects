const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

const progressBar = document.querySelector('#progress');
const circles = document.querySelectorAll('.progress__circle');

let currentActiveCircle = 1;

btnNext.addEventListener('click', () => {
    currentActiveCircle++;

    if (currentActiveCircle > circles.length)
        currentActiveCircle = circles.length;

    updateProgress();
})

btnPrev.addEventListener('click', () => {
    currentActiveCircle--;

    if (currentActiveCircle < 1)
        currentActiveCircle = 1;

    updateProgress();
})

// As we didn't assign value for idx,
// the default value will be 0, so idx will be in range [0, circles.length - 1]
function updateProgress() {
    circles.forEach((circle, circleIdx) => {
        // since idx < currentActiveIndex and the circle at idx already has active class, so it wont have any affect
        if (circleIdx < currentActiveCircle)
            circle.classList.add('active');
        else
            circle.classList.remove('active');
    });

    let actives = document.querySelectorAll('.active');

    progressBar.style.width = `${(actives.length - 1) / (circles.length - 1) * 100}%`;

    if (currentActiveCircle === 1)
        btnPrev.disabled = true;
    else if (currentActiveCircle === circles.length)
        btnNext.disabled = true;
    else {
        btnNext.disabled = false;
        btnPrev.disabled = false;
    }
}