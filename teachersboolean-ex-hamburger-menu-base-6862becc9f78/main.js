// ref

const menuToggle = document.querySelector('.header-right > a');
const hamburgerMenu = document.querySelector ('.hamburger-menu');
const closeButton = document.querySelector ('.close');



menuToggle.addEventListener('click', function() {
    hamburgerMenu.classList.add ('active');
});

closeButton.addEventListener('click', function() {
    hamburgerMenu.classList.remove ('active');
});






