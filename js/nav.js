// This is for only navbar section

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});



// This is for Custom Carosol Effect

const carouselInner = document.querySelector('.carousel-inner');
    const totalImages = carouselInner.children.length;
    let currentPosition = 0;

    function swipeCarousel() {
      // Update the current position
      currentPosition++;

      // If we have reached the end of the images
      if (currentPosition === totalImages) {
        // Reset to the first image after the transition
        setTimeout(() => {
          carouselInner.style.transition = 'none'; // Disable transition for instant jump
          currentPosition = 0; // Reset position to the first image
          carouselInner.style.transform = `translateX(0%)`; // Move back to the start
        }, 1000); // Wait for the transition to finish
      } else {
        // Apply the transition for the next image
        carouselInner.style.transition = 'transform 1s ease-in-out';
        carouselInner.style.transform = `translateX(-${currentPosition * 100}%)`;
      }
    }

    // Set the interval for 3 seconds between transitions
    setInterval(swipeCarousel, 3000);
