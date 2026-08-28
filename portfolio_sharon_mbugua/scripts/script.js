// scripts/script.js
document.addEventListener('DOMContentLoaded', function() {
  // ---- HAMBURGER MENU ----
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  const closeBtn = document.getElementById('close-menu');

  function toggleMenu(open) {
    if (open) {
      navbar.classList.add('open');
      hamburger.classList.add('active');
    } else {
      navbar.classList.remove('open');
      hamburger.classList.remove('active');
    }
  }

  if (hamburger && navbar) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = navbar.classList.contains('open');
      toggleMenu(!isOpen);
    });
  }

  if (closeBtn && navbar) {
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu(false);
    });
  }

  // Close menu when a nav link is clicked
  if (navbar) {
    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });
  }

  // Close menu on outside click
  document.addEventListener('click', function(e) {
    if (navbar && !navbar.contains(e.target) && !hamburger.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // ---- HEADER SCROLL EFFECT (background only, no height change) ----
  const header = document.getElementById('site-header');

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ---- ACTIVE NAV LINK ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-list a');

  function updateActiveLink() {
    let current = '';
    const scrollPosition = window.scrollY + 120;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  window.addEventListener('load', updateActiveLink);

  // ---- SCROLL ANIMATION (slide-up) - always animate when in view ----
  const slideElements = document.querySelectorAll('.slide-up');

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    slideElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const threshold = 80;
      if (rect.top < windowHeight - threshold && rect.bottom > threshold) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }

  checkVisibility();

  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        checkVisibility();
        ticking = false;
      });
      ticking = true;
    }
  });

  window.addEventListener('resize', checkVisibility);

  // ---- COUNTER ANIMATION (By the Numbers) ----
  const numberElements = document.querySelectorAll('.number-value');
  let countersAnimated = {};

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * target);
      
      element.textContent = currentValue;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    }
    
    requestAnimationFrame(updateCounter);
  }

  function checkCounters() {
    numberElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const threshold = 100;
      const isVisible = rect.top < windowHeight - threshold && rect.bottom > threshold;
      const id = el.getAttribute('data-target');
      
      if (isVisible && !countersAnimated[id]) {
        countersAnimated[id] = true;
        el.textContent = '0';
        animateCounter(el);
      } else if (!isVisible && countersAnimated[id]) {
        countersAnimated[id] = false;
        el.textContent = '0';
      }
    });
  }

  let counterTicking = false;
  window.addEventListener('scroll', function() {
    if (!counterTicking) {
      window.requestAnimationFrame(function() {
        checkCounters();
        counterTicking = false;
      });
      counterTicking = true;
    }
  });

  window.addEventListener('resize', checkCounters);
  
  setTimeout(checkCounters, 300);

  // ---- CONTACT FORM HANDLER (MOVED INSIDE DOMContentLoaded) ----
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
      
      // Get form data
      const formData = new FormData(this);
      
      // Send AJAX request
      fetch('send_email.php', {
        method: 'POST',
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Show success message
          formSuccess.style.display = 'block';
          formSuccess.innerHTML = `
            <div class="success-content">
              <i class="fas fa-check-circle"></i>
              <h3>Message Sent Successfully!</h3>
              <p>${data.message}</p>
            </div>
          `;
          // Reset form
          contactForm.reset();
          // Scroll to success message
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          // Show error
          alert(data.message);
        }
      })
      .catch(error => {
        alert('There was an error sending your message. Please try again or contact Sharon directly at +254 722 791 432.');
      })
      .finally(() => {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message <i class="fas fa-arrow-right"></i>';
      });
    });
  }
});