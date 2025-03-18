// humberger menu
const menuButton = document.querySelector(".menu");
const menuIcon = menuButton.querySelector("i");
const menuLinks = document.querySelector(".menuLinks");

menuButton.addEventListener("click", () => {
    menuLinks.classList.toggle("show");
    menuIcon.classList.toggle("bi-list");
    menuIcon.classList.toggle("bi-x");
});


const navLinks = document.querySelectorAll(".menuLinks a");

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        event.target.classList.add("active");
    });
});

// Wayfinding - highlight active link
function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", setActiveLink);