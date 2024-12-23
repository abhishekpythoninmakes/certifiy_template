async function loadComponent(filePath, elementId) {
    try {
      const response = await fetch(filePath);
      const content = await response.text();
      document.getElementById(elementId).innerHTML = content;
    } catch (error) {
      console.error(`Failed to load ${filePath}:`, error);
    }
  }
  
// Load navbar and footer
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("components/navbar.html", "navbar"); // Correct relative path
    loadComponent("components/footer.html", "footer"); // Update if necessary
});

  