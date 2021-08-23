const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mainCon = document.querySelector(".main-container");
const footerUl= document.querySelector(".footer-ul");

let showMenu = false;

hamburgerIcon.addEventListener("click", toggleMenu);

function toggleMenu () {
  if (!showMenu) {
    hamburger.classList.add("open");
    mobileNav.classList.add("open");
    mainCon.classList.add("open");
    footerUl.classList.add("open");

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
    mainCon.classList.remove("open");
    footerUl.classList.add("open");

    showMenu = false;
  }
}