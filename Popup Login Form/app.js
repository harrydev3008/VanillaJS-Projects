let btnPopup = document.querySelector("#open");
let btnClose = document.querySelector("#close");
let popupContainer = document.querySelector('.popup-container');
let showPassword = document.querySelector("#showPassword");
let passwordField = document.querySelector("#password");

btnPopup.addEventListener('click', () => {
    popupContainer.classList.add('active');
});

btnClose.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});

showPassword.addEventListener('click', () => {
    if (showPassword.classList.contains('fa-eye-slash')) {
        showPassword.classList.replace('fa-eye-slash', 'fa-eye');
        passwordField.setAttribute('type', 'text');
    }
    else {
        showPassword.classList.replace('fa-eye', 'fa-eye-slash')
        passwordField.setAttribute('type', 'password');
    }
});