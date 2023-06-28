const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const myDiv = document.querySelector(".scroll");
const myElement = myDiv.querySelector("a");

window.addEventListener("scroll", function() {
    myElement.classList.toggle("up", window.scrollY > 800);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let click = document.querySelector('.navbar');

click.onclick = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

