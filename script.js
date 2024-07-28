const menuToggle = document.querySelector(".mobile-nav-toggle");
const sideNav = document.querySelector(".side-nav")
const menuClose = document.querySelector(".menu-close");
const header = document.querySelector("header");


menuToggle.addEventListener("click", () => {
    sideNav.classList.toggle("active");
    document.body.classList.add("no-scroll");
})

menuClose.addEventListener("click", () => {
    sideNav.classList.remove("active");
    document.body.classList.remove("no-scroll");
})

window.addEventListener( "scroll" , () => {
    if (window.scrollY > 100) {
        header.classList.add("scroll-nav")
    } else {
        header.classList.remove("scroll-nav");
    }
})
