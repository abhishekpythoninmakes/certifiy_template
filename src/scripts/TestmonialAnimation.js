const swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto", // Show central card clearly
  coverflowEffect: {
    rotate: 0, // No rotation
    stretch: 0, // Adjust spacing
    depth: 200, // Perspective depth
    modifier: 1.5, // Scaling intensity
    slideShadows: false, // Disable shadows
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});