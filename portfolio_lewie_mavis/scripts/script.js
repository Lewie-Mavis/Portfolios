// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close menu when a menu item is clicked (for mobile)
document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Chat Button Interaction
document.querySelector('.chat-btn').addEventListener('click', () => {
    window.open('https://wa.me/254711190029', '_blank'); // Replace with your WhatsApp link
});



document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.1)";
        card.style.transition = "0.3s ease-in-out";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

// Add a glow effect when a service card is clicked
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        // Remove glow from all service cards
        document.querySelectorAll('.service-card').forEach(c => c.classList.remove('glow'));

        // Add glow to the clicked card
        card.classList.add('glow');
    });
});

// Select all portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Add event listener for each portfolio item
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove the glow class from all items
        portfolioItems.forEach(i => i.classList.remove('glow'));
        
        // Add the glow class to the clicked item
        item.classList.add('glow');
    });
});

// Select the logo element
const logo = document.querySelector('.logo');

// Add a click event listener to toggle the 'glowing' class
logo.addEventListener('click', function() {
    // Toggle the 'glowing' class when clicked
    logo.classList.toggle('glowing');
});

// Get the h1 element
const heroH1 = document.querySelector('.hero h1');

// Add an event listener for the click event
heroH1.addEventListener('click', function() {
    // Toggle the glow class on click
    heroH1.classList.toggle('glow');
});



// Founder section specific animations
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effect to achievement badges
  const achievementBadges = document.querySelectorAll('.achievement-badge');
  achievementBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
      const achievement = this.getAttribute('data-achievement');
      this.style.transform = 'translateY(-8px) scale(1.05)';
      this.style.boxShadow = '0 15px 30px rgba(0, 247, 255, 0.25)';
      
      // Add achievement tooltip
      const tooltip = document.createElement('div');
      tooltip.className = 'achievement-tooltip';
      tooltip.textContent = achievement;
      tooltip.style.cssText = `
        position: absolute;
        top: -45px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(30, 42, 68, 0.95);
        color: #00f7ff;
        padding: 8px 20px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        white-space: nowrap;
        border: 1px solid rgba(0, 247, 255, 0.3);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 1000;
      `;
      this.appendChild(tooltip);
    });
    
    badge.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
      const tooltip = this.querySelector('.achievement-tooltip');
      if (tooltip) tooltip.remove();
    });
  });
  
  // Add image hover effects
  const founderImage = document.querySelector('.founder-image');
  if (founderImage) {
    founderImage.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
      
      // Enhance particle animation on hover
      const particles = this.parentElement.querySelectorAll('.particle');
      particles.forEach(particle => {
        particle.style.animation = 'founder-particle-float 2s ease-in-out infinite';
      });
      
      // Enhance glow effect
      const glow = this.parentElement.querySelector('.image-glow-effect');
      if (glow) {
        glow.style.opacity = '0.7';
        glow.style.filter = 'blur(15px)';
      }
    });
    
    founderImage.addEventListener('mouseleave', function() {
      this.style.transform = '';
      
      const particles = this.parentElement.querySelectorAll('.particle');
      particles.forEach(particle => {
        particle.style.animation = 'founder-particle-float 8s ease-in-out infinite';
      });
      
      const glow = this.parentElement.querySelector('.image-glow-effect');
      if (glow) {
        glow.style.opacity = '0.5';
        glow.style.filter = 'blur(10px)';
      }
    });
  }
  
  // Add ripple effect to action buttons
  const actionButtons = document.querySelectorAll('.portfolio-button, .connect-button');
  actionButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        top: ${y}px;
        left: ${x}px;
        pointer-events: none;
        z-index: 1;
      `;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Add expertise tags hover effect
  const expertiseTags = document.querySelectorAll('.expertise-tag');
  expertiseTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.1)';
      this.style.boxShadow = '0 10px 20px rgba(0, 247, 255, 0.15)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
  
  // Animate timeline dots
  const timelineDots = document.querySelectorAll('.timeline-dot');
  timelineDots.forEach((dot, index) => {
    dot.style.animationDelay = `${index * 0.5}s`;
  });
  
  // Add parallax effect to image on scroll
  const founderSection = document.getElementById('meet-founder-section');
  if (founderSection) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      const sectionTop = founderSection.offsetTop;
      const sectionHeight = founderSection.offsetHeight;
      
      // Calculate scroll percentage within section
      const scrollPercent = Math.max(0, Math.min(1, 
        (scrollPosition - sectionTop + window.innerHeight) / (sectionHeight + window.innerHeight)
      ));
      
      // Apply subtle parallax to image
      const imageFrame = founderSection.querySelector('.founder-image-frame');
      if (imageFrame) {
        const parallaxValue = scrollPercent * 30;
        imageFrame.style.transform = `translateY(${parallaxValue}px)`;
      }
    });
  }
});

// Update the intersection observer to handle founder section
// Add this to your existing fadeObserver callback function:

// In your existing fadeObserver code, add this condition:
if (entry.target.closest('#meet-founder-section')) {
  const founderSection = document.getElementById('meet-founder-section');
  
  if (founderSection && !founderSection.classList.contains('animated')) {
    founderSection.classList.add('animated');
    
    // Stagger animations for founder section
    const founderElements = founderSection.querySelectorAll('.fade-up, .zoom-in, .rotate-in, .blur-in, .flip-in, .skew-in');
    founderElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('show');
      }, index * 80);
    });
    
    // Special animation for achievement badges
    const achievementBadges = founderSection.querySelectorAll('.achievement-badge');
    achievementBadges.forEach((badge, index) => {
      setTimeout(() => {
        badge.classList.add('show');
      }, index * 150);
    });
  } else {
    entry.target.classList.add('show');
  }
}


