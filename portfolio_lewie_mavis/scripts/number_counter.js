class NumberCounter {
  constructor() {
    this.counters = document.querySelectorAll('.count');
    this.section = document.querySelector('#numbers');
    this.hasAnimated = false;
    this.observer = null;
    
    this.init();
  }
  
  init() {
    // Reset all counters
    this.resetCounters();
    
    // Create intersection observer
    this.createObserver();
  }
  
  resetCounters() {
    this.counters.forEach(counter => {
      counter.textContent = '0';
      counter.classList.remove('animating');
    });
  }
  
  createObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.startCounting();
          this.hasAnimated = true;
        } else if (!entry.isIntersecting) {
          // Reset for re-animation when section leaves view
          this.resetCounters();
          this.hasAnimated = false;
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    });
    
    this.observer.observe(this.section);
  }
  
  startCounting() {
    this.counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
          counter.classList.add('animating');
          setTimeout(() => {
            counter.classList.remove('animating');
          }, 500);
        }
      };
      
      // Start animation
      requestAnimationFrame(updateCounter);
    });
  }
  
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const numberCounter = new NumberCounter();
  
  // Re-initialize if needed (for single page apps)
  window.reinitializeNumberCounter = () => {
    numberCounter.destroy();
    return new NumberCounter();
  };
});

// Fallback for older browsers
if (!('IntersectionObserver' in window)) {
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    
    const startCounting = () => {
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
            counter.classList.add('animating');
          }
        };
        
        updateCounter();
      });
    };
    
    // Start counting immediately as fallback
    startCounting();
  });
}