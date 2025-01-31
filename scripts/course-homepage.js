// humberger menu
const hamburgerMenu = document.querySelector(".menu");
const navB = document.querySelector("#header-nav")

// adding event listners to hamburger menu
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle("show");
    navB.classList.toggle("show");
});

const navLinks = document.querySelectorAll("#header-nav a");

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        event.target.classList.add("active");
    });
});
