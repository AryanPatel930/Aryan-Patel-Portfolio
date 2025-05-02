document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-container').forEach((carousel) => {
      const slide = carousel.querySelector('.carousel-slide');
      const images = slide.children;
      let currentIndex = 0;
      let transitioning = false;
  
      // Clone first image and append it to the end
      const firstClone = images[0].cloneNode(true);
      slide.appendChild(firstClone);
  
      const totalSlides = slide.children.length;
  
      // Function to update transform
      const updateSlide = () => {
        slide.style.transition = 'transform 0.5s ease-in-out';
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
      };
  
      const resetToStart = () => {
        slide.style.transition = 'none';
        slide.style.transform = 'translateX(0%)';
        currentIndex = 0;
      };
  
      // Auto scroll every 4 seconds
      setInterval(() => {
        if (transitioning) return;
  
        currentIndex++;
        updateSlide();
        transitioning = true;
  
        // After transition ends, check if we're on the clone
        slide.addEventListener('transitionend', () => {
          if (currentIndex === totalSlides - 1) {
            resetToStart();
          }
          transitioning = false;
        }, { once: true });
      }, 4000);
    });
  });
  