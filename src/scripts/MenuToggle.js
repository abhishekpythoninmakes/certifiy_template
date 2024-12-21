//for resposive screen on navbar 
// Menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility on click
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});