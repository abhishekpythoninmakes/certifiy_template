document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
  
    // Function to animate counters
    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target"); // Target value
      const suffix = counter.getAttribute("data-suffix") || ""; // Suffix (+, %)
      let current = 0; // Start value
  
      const updateCounter = () => {
        const increment = target / 100; // Adjust increment speed
        current = Math.min(current + increment, target); // Increment value but don't exceed target
        counter.innerText = Math.ceil(current) + suffix;
  
        if (current < target) {
          requestAnimationFrame(updateCounter); // Smooth animation
        }
      };
  
      updateCounter();
    };
  
    // Observer to trigger animation when counters are in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter); // Animate counter
            observer.unobserve(counter); // Stop observing once animated
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );
  
    // Observe each counter
    counters.forEach((counter) => observer.observe(counter));
  });
  