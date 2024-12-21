const testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;

// Function to update the active testimonial and set next/prev positions
const updateTestimonials = () => {
  testimonials.forEach((testimonial, index) => {
    // Remove all active, prev, next classes
    testimonial.classList.remove("active", "prev", "next");

    // Determine the current, previous, and next testimonials
    if (index === currentIndex) {
      testimonial.classList.add("active"); // Center testimonial
    } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
      testimonial.classList.add("prev"); // Left testimonial
    } else if (index === (currentIndex + 1) % testimonials.length) {
      testimonial.classList.add("next"); // Right testimonial
    }
  });
};

// Function to move the testimonials and update their positions
const moveToNextTestimonial = () => {
  // Move the current testimonial to the left (end of the row)
  const currentTestimonial = testimonials[currentIndex];
  currentTestimonial.classList.add('prev');
  currentTestimonial.classList.remove('active');
  
  // Update the index for the next testimonial
  currentIndex = (currentIndex + 1) % testimonials.length;

  // Make the next testimonial the center
  const nextTestimonial = testimonials[currentIndex];
  nextTestimonial.classList.add('active');
  nextTestimonial.classList.remove('next');
  
  // Update the previous (left) testimonial and the next (right) testimonial
  updateTestimonials();
};

// Auto-slide every 3 seconds
const startAutoSlide = () => {
  setInterval(moveToNextTestimonial, 3000);
};

// Initialize Slider
updateTestimonials();
startAutoSlide();
