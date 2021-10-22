// ref

const hamburger = document.querySelector('.header-right > a');
const navMenu = document.querySelector('.hamburger-menu');


hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('hamburger-menu.active');
})






