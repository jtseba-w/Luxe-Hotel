const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.onclick = () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
};