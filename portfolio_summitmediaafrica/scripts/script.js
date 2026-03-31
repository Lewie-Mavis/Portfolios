// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (hamburger) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});

// ========== IMPROVED INTERSECTION OBSERVER - ANIMATES EVERY TIME SECTION IS IN VIEW ==========
// Select all elements with animation classes
const slideElements = document.querySelectorAll('.slide-up, .slide-down, .slide-left, .slide-right');

// Create observer with options that DON'T unobserve - keeps watching forever
// This allows animations to trigger every time element enters viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is entering viewport - add visible class to trigger animation
      entry.target.classList.add('visible');
    } else {
      // Element is leaving viewport - remove visible class
      // This allows animation to trigger again when scrolling back
      entry.target.classList.remove('visible');
    }
  });
}, { 
  threshold: 0.2,  // Trigger when 20% of element is visible
  rootMargin: "0px 0px -30px 0px"  // Small offset for smoother trigger
});

// Observe all animated elements (keep observing permanently)
slideElements.forEach(el => observer.observe(el));

// ========== STAGGERED ANIMATIONS FOR CARDS (Sequential entrance) ==========
function applyStaggeredAnimations() {
  // For leadership cards
  const leaderCards = document.querySelectorAll('.leadership-grid .leader-card');
  leaderCards.forEach((card, index) => {
    card.classList.add(`stagger-${(index % 4) + 1}`);
  });
  
  // For service cards
  const serviceCards = document.querySelectorAll('.services-grid .service-card');
  serviceCards.forEach((card, index) => {
    card.classList.add(`stagger-${(index % 4) + 1}`);
  });
  
  // For principle cards
  const principleCards = document.querySelectorAll('.principles-grid .principle-card');
  principleCards.forEach((card, index) => {
    card.classList.add(`stagger-${(index % 4) + 1}`);
  });
  
  // For testimonial cards
  const testimonialCards = document.querySelectorAll('.testimonial-grid .testimonial-card');
  testimonialCards.forEach((card, index) => {
    card.classList.add(`stagger-${(index % 4) + 1}`);
  });
  
  // For stat items
  const statItems = document.querySelectorAll('.stats-grid .stat-item');
  statItems.forEach((item, index) => {
    item.classList.add(`stagger-${(index % 4) + 1}`);
  });
}

// ========== COUNTER ANIMATION FOR "BY THE NUMBERS" SECTION ==========
const statNumbers = document.querySelectorAll('.stat-number');
let numbersAnimated = false;

function animateNumbers() {
  // Check if numbers section is in view
  const numbersSection = document.getElementById('numbers');
  if (!numbersSection) return;
  
  const sectionPos = numbersSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;
  
  // If numbers section is in view and not yet animated
  if (sectionPos < screenPos - 50 && !numbersAnimated) {
    statNumbers.forEach(stat => {
      const finalValue = stat.getAttribute('data-count');
      if (!finalValue) return;
      
      let count = 0;
      let suffix = '';
      let targetNum = parseInt(finalValue);
      
      // Handle suffix like M+ or just +
      if (finalValue.includes('M+')) {
        suffix = 'M+';
      } else if (finalValue.includes('+')) {
        suffix = '+';
      }
      
      if (isNaN(targetNum)) targetNum = 100;
      
      const increment = Math.ceil(targetNum / 45);
      const updateCounter = () => {
        count += increment;
        if (count >= targetNum) {
          stat.innerText = targetNum + suffix;
          clearInterval(interval);
        } else {
          stat.innerText = count + suffix;
        }
      };
      const interval = setInterval(updateCounter, 20);
    });
    numbersAnimated = true;
  }
  
  // Reset animation flag when section scrolls out of view
  if (sectionPos > screenPos || sectionPos < -numbersSection.offsetHeight) {
    numbersAnimated = false;
  }
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type) {
  // Remove any existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      <span>${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Add styles dynamically if not already added
  if (!document.querySelector('#notification-styles')) {
    const notificationStyle = document.createElement('style');
    notificationStyle.id = 'notification-styles';
    notificationStyle.textContent = `
      .notification {
        position: fixed;
        top: 100px;
        right: 30px;
        z-index: 10000;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        min-width: 300px;
        max-width: 400px;
        overflow: hidden;
        animation: slideInRight 0.5s ease;
      }
      .notification-content {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 16px 20px;
      }
      .notification-success {
        border-left: 4px solid #25D366;
      }
      .notification-success i {
        color: #25D366;
        font-size: 1.5rem;
      }
      .notification-error {
        border-left: 4px solid #dc3545;
      }
      .notification-error i {
        color: #dc3545;
        font-size: 1.5rem;
      }
      .notification-content span {
        flex: 1;
        color: #333;
        font-size: 0.9rem;
        line-height: 1.4;
      }
      .notification-close {
        background: none;
        border: none;
        font-size: 1.3rem;
        cursor: pointer;
        color: #999;
        transition: color 0.3s;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .notification-close:hover {
        color: #333;
      }
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
      @media (max-width: 768px) {
        .notification {
          left: 20px;
          right: 20px;
          min-width: auto;
          top: 80px;
        }
      }
    `;
    document.head.appendChild(notificationStyle);
  }
  
  // Auto remove after 5 seconds
  const timer = setTimeout(() => {
    if (notification && notification.parentNode) {
      notification.style.animation = 'slideOutRight 0.5s ease';
      setTimeout(() => {
        if (notification && notification.parentNode) {
          notification.remove();
        }
      }, 500);
    }
  }, 5000);
  
  // Close button functionality
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    clearTimeout(timer);
    notification.style.animation = 'slideOutRight 0.5s ease';
    setTimeout(() => {
      if (notification && notification.parentNode) {
        notification.remove();
      }
    }, 500);
  });
}

// ========== CONTACT FORM HANDLER ==========
// Check for URL parameters on page load (for PHP redirect feedback)
const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get('status');

if (status === 'success') {
  showNotification('✅ Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
  // Remove the status parameter from URL without refreshing
  window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
} else if (status === 'error') {
  showNotification('❌ Oops! Something went wrong. Please try again or call us directly.', 'error');
  window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
}

// Note: The form now submits to PHP, so we don't prevent default
// The PHP script handles the email sending and redirects back with status

// ========== SMOOTH SCROLLING WITH OFFSET ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === "#" || href === "") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Close mobile menu if open
      if (hamburger && hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    }
  });
});

// ========== SCROLL EVENT HANDLER ==========
window.addEventListener('scroll', () => {
  animateNumbers();
  
  // Sticky header shadow effect
  const header = document.querySelector('.site-header');
  if (header) {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 8px 25px rgba(0,0,0,0.05)';
    } else {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.03)';
    }
  }
});

// ========== INITIALIZE ON PAGE LOAD ==========
window.addEventListener('load', () => {
  // Apply staggered animations
  applyStaggeredAnimations();
  
  // Check initial visibility for all animated elements
  slideElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 50 && rect.bottom > 50;
    if (isVisible) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
  
  // Trigger number animation if visible on load
  animateNumbers();
});

// ========== RE-OBSERVE NEW DYNAMIC ELEMENTS ==========
// Watch for dynamically added content and observe new animated elements
const bodyObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1) { // Element node
        // Check if the added node itself has animation classes
        if (node.classList && (node.classList.contains('slide-up') || 
            node.classList.contains('slide-down') || 
            node.classList.contains('slide-left') || 
            node.classList.contains('slide-right'))) {
          observer.observe(node);
        }
        // Also check children for animated elements
        if (node.querySelectorAll) {
          const animatedChildren = node.querySelectorAll('.slide-up, .slide-down, .slide-left, .slide-right');
          animatedChildren.forEach(child => observer.observe(child));
        }
      }
    });
  });
});

bodyObserver.observe(document.body, { childList: true, subtree: true });

// ========== ADDITIONAL: THROTTLE SCROLL EVENT FOR BETTER PERFORMANCE ==========
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      // Check visibility for elements that might have been missed during fast scroll
      slideElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 50 && rect.bottom > 50;
        if (isVisible) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
      ticking = false;
    });
    ticking = true;
  }
});

console.log("Summit Media Africa — Enhanced continuous animations active (triggers every time section is in view)");