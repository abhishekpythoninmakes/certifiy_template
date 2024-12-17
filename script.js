const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Add event listener to all option buttons
document.querySelectorAll('.select-option').forEach(button => {
    button.addEventListener('click', () => {
        // Remove selected class from all buttons
        document.querySelectorAll('.select-option').forEach(btn => btn.classList.remove('text-[#e5c200]', 'underline', 'font-bold'));

        // Add selected class to the clicked button
        button.classList.add('text-[#e5c200]', 'underline', 'font-bold');
        
        // Show the corresponding content (you can modify the logic to show content dynamically)
        document.querySelector('.selected-option-content').classList.remove('hidden');
    });
});
