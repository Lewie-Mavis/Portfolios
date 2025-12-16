class LewieSlider {
  constructor() {
    this.slider = document.querySelector('.about-photo-slider');
    this.track = document.querySelector('.slider-track');
    this.slides = document.querySelectorAll('.slide');
    this.dots = document.querySelectorAll('.dot');
    this.prevBtn = document.querySelector('.prev');
    this.nextBtn = document.querySelector('.next');
    
    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.slideWidth = 100; // Percentage
    this.autoSlideInterval = 4000; // 4 seconds
    this.autoSlideTimer = null;
    this.isAnimating = false;
    this.animationDuration = 800; // Match CSS transition duration
    
    this.init();
  }
  
  init() {
    // Set initial state
    this.slides[0].classList.add('active');
    this.updateDots();
    
    // Event listeners
    this.prevBtn.addEventListener('click', () => this.prevSlide());
    this.nextBtn.addEventListener('click', () => this.nextSlide());
    
    // Dot navigation
    this.dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        this.goToSlide(index);
      });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
      if (e.key === 'Home') this.goToSlide(0);
      if (e.key === 'End') this.goToSlide(this.totalSlides - 1);
    });
    
    // Touch/swipe support
    this.addTouchSupport();
    
    // Start auto-slide
    this.startAutoSlide();
    
    // Pause auto-slide on hover
    this.slider.addEventListener('mouseenter', () => this.stopAutoSlide());
    this.slider.addEventListener('mouseleave', () => this.startAutoSlide());
  }
  
  updateTrackPosition() {
    this.track.style.transform = `translateX(-${this.currentIndex * this.slideWidth}%)`;
  }
  
  updateActiveSlide() {
    this.slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentIndex);
    });
  }
  
  updateDots() {
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }
  
  goToSlide(index) {
    if (this.isAnimating || index === this.currentIndex) return;
    
    this.isAnimating = true;
    
    // Update current index
    this.currentIndex = index;
    
    // Update track position
    this.updateTrackPosition();
    
    // Update active slide and dots
    this.updateActiveSlide();
    this.updateDots();
    
    // Reset animation flag
    setTimeout(() => {
      this.isAnimating = false;
    }, this.animationDuration);
    
    // Reset auto-slide timer
    this.resetAutoSlide();
  }
  
  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.totalSlides;
    this.goToSlide(nextIndex);
  }
  
  prevSlide() {
    const prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prevIndex);
  }
  
  addTouchSupport() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      this.stopAutoSlide();
    }, { passive: true });
    
    this.slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
      this.startAutoSlide();
    }, { passive: true });
  }
  
  handleSwipe(startX, endX) {
    const swipeThreshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide(); // Swipe left
      } else {
        this.prevSlide(); // Swipe right
      }
    }
  }
  
  startAutoSlide() {
    this.stopAutoSlide(); // Clear any existing timer
    this.autoSlideTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoSlideInterval);
  }
  
  stopAutoSlide() {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer);
      this.autoSlideTimer = null;
    }
  }
  
  resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const slider = new LewieSlider();
  
  // Add initial animation classes
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    setTimeout(() => {
      slide.classList.add('animate');
    }, index * 100);
  });
  
  // Initialize intersection observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        slider.startAutoSlide();
      } else {
        slider.stopAutoSlide();
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(document.querySelector('.lewie-mavis-slider-section'));
});

// Fallback for older browsers
if (!('IntersectionObserver' in window)) {
  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.lewie-mavis-slider-section');
    const sliderInstance = new LewieSlider();
    
    // Show all slides immediately as fallback
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
      slide.classList.add('animate', 'show', 'active');
    });
    
    // Start auto-slide
    sliderInstance.startAutoSlide();
  });
}