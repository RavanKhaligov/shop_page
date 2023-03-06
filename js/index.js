const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");
const navbarMenu = document.querySelector(".navbar-menu")

run();
function run(){
    hamburgerMenu.addEventListener("click",toggleDropdownMenu);
}

function toggleDropdownMenu(){
    nav.classList.toggle("opened");
    navbarMenu.classList.toggle("index");
}
