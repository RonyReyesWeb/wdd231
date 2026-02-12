const hamburger = document.querySelector('.mobile-wireframe .hamburger');
const navLinks = document.querySelector('.mobile-wireframe .nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});