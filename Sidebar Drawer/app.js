const toggleIcon = document.querySelector('#toggle-icon');
const container = document.querySelector('.container');
const sidebarToggle = document.querySelector('.sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
    container.classList.toggle('active');
    toggleIcon.classList.contains('fa-angle-right') ? toggleIcon.classList.replace('fa-angle-right', 'fa-angle-left') : toggleIcon.classList.replace('fa-angle-left', 'fa-angle-right');
})