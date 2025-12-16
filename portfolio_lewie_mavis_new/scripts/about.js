// Add this to your slide.js or create a separate about-animations.js

// Staggered animations for About section
function initAboutAnimations() {
  // Animate title words
  const titleWords = document.querySelectorAll('.title-word');
  titleWords.forEach((word, index) => {
    word.style.setProperty('--delay', index * 200);
    word.classList.add('fade-up', 'animate');
  });
  
  // Animate paragraphs with icons
  const paragraphWrappers = document.querySelectorAll('.paragraph-wrapper');
  paragraphWrappers.forEach((wrapper, index) => {
    wrapper.style.setProperty('--delay', (index + 3) * 200);
    wrapper.classList.add('animate');
  });
  
  // Animate photo and description
  const photo = document.querySelector('.about-photo');
  const description = document.querySelector('.description-content');
  
  if (photo) photo.classList.add('animate');
  if (description) description.classList.add('animate');
  
  // Animate CTA button and stats
  const ctaWrapper = document.querySelector('.cta-wrapper');
  if (ctaWrapper) {
    ctaWrapper.classList.add('animate');
  }
  
  // Counter animation for stats
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current);
    }, 16);
  });
}

// Initialize when section is in view
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      initAboutAnimations();
      aboutObserver.unobserve(entry.target); // Run once
    }
  });
}, { threshold: 0.2 });

// Observe about section
const aboutSection = document.getElementById('about');
if (aboutSection) {
  aboutObserver.observe(aboutSection);
}

// Add hover effect to photo
document.addEventListener('DOMContentLoaded', () => {
  const aboutPhoto = document.querySelector('.about-photo');
  if (aboutPhoto) {
    aboutPhoto.addEventListener('mouseenter', () => {
      aboutPhoto.classList.add('hover');
    });
    aboutPhoto.addEventListener('mouseleave', () => {
      aboutPhoto.classList.remove('hover');
    });
  }
});