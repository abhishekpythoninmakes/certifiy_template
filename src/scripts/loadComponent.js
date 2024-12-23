// function loadComponent(file, elementId) {
//     fetch(file)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Failed to load ${file}: ${response.statusText}`);
//         }
//         return response.text();
//       })
//       .then(html => {
//         document.getElementById(elementId).innerHTML = html;
//       })
//       .catch(error => console.error(error));
//   }
  
//   // Load the navbar and footer
//   window.addEventListener("DOMContentLoaded", () => {
//     loadComponent("src/components/navbar.html", "navbar");
//     loadComponent("src/components/footer.html", "footer");
//   });
  