// Navbar and footer component is global so that we can access them in other pages
loadComponent= async (filePath, elementId, callback)=> {
    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const content = await response.text();
      document.getElementById(elementId).innerHTML = content;
  
      // Call the callback function (if provided) after loading
      if (callback) callback();
    } catch (error) {
      document.getElementById(elementId).innerHTML = `<p style="color: red;">Failed to load content.</p>`;
      console.error(`Failed to load ${filePath}:`, error);
    }
  }
  
  // Load navbar and footer
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("components/navbar.html", "navbar", () => {
      // Initialize the menu toggle functionality only after the navbar is loaded
      const menuToggle = document.getElementById("menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");
  
      if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }
    });
  
    loadComponent("components/footer.html", "footer");
  });


  
// used to change the active state of navbar pages color
  document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('#navbar a'); // Adjust the selector if necessary
    const currentPath = window.location.pathname;

    navbarLinks.forEach(link => {
        // Remove 'active' class from all links
        link.classList.remove('#active');

        // Add 'active' class to the link that matches the current path
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('#active');
        }
    });
});

  


