const logo = document.getElementById("logo-container");
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        navbar.classList.add("scrolled");
        logo.classList.add("sticky");
    } else {
        navbar.classList.remove("scrolled");
        logo.classList.remove("sticky");
    }
});
