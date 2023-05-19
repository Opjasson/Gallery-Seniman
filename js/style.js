// Toggle class active
const navbarnav = document.querySelector('.navbar-nav');
// Ketika menu diklik
document.querySelector('#menu').onclick = () => {
    navbarnav.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan navbar
const menu = document.querySelector ('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});