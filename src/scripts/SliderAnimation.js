let currentIndex = 0;

  function slideTestimonials() {
    const slider = document.getElementById("reviewSlider");
    const testimonials = slider.children;
    const totalTestimonials = testimonials.length;

    // Calculate the next index
    currentIndex = (currentIndex + 1) % totalTestimonials;

    // Translate the slider to show the next testimonial
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Set an interval to slide testimonials every 3 seconds
  setInterval(slideTestimonials, 3000);