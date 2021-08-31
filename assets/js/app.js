// Hamburger Animation 
const burgerMenu = document.querySelector('.burger_menu');
const burgerMenuOpen = document.querySelector('.burger_menuOpen');
const itemSlide = document.querySelector('.list_menu');
const itemSlideOpen = document.querySelector('.list_menuActive');

burgerMenu.addEventListener('click', hamburgerMenu);
function hamburgerMenu() {
    burgerMenu.classList.toggle("active");
    itemSlide.classList.toggle('list_menuActive');
}