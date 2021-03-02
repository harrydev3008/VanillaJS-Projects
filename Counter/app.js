let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let btnTypes = e.currentTarget.classList;

        // if (btnTypes.contains('decrease'))
        //     count--;
        // else if (btnTypes.contains('increase'))
        //     count++;
        // else
        //     count = 0;

        (btnTypes.contains('decrease') ? count-- : (btnTypes.contains('increase') ? count++ : count = 0));

        value.style.color = ((count > 0) ? "#44bd32" : (count === 0) ? "#34495e" : "#e84118");

        value.textContent = count;
    });
});