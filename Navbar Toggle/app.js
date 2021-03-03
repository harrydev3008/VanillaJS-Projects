const navbarToggle = document.querySelector('#navbar-toggle');
const navbar = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('nav-links-show');
    navbarToggle.classList.toggle('navbar-toggle-close');
})