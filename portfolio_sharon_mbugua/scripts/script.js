// scripts/script.js
document.addEventListener('DOMContentLoaded', function() {
  
  // ======================================================
  // HAMBURGER MENU - Full Working Solution
  // ======================================================
  
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  const closeBtn = document.getElementById('close-menu');
  const body = document.body;
  
  // Function to open the menu
  function openMenu() {
    navbar.classList.add('open');
    hamburger.classList.add('active');
    body.classList.add('menu-open');
  }
  
  // Function to close the menu
  function closeMenu() {
    navbar.classList.remove('open');
    hamburger.classList.remove('active');
    body.classList.remove('menu-open');
  }
  
  // Function to toggle the menu
  function toggleMenu() {
    const isOpen = navbar.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  
  // 1. Hamburger button click
  if (hamburger && navbar) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
  }
  
  // 2. Close button click
  if (closeBtn && navbar) {
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeMenu();
    });
  }
  
  // 3. Close menu when a nav link is clicked
  if (navbar) {
    const navLinks = navbar.querySelectorAll('.nav-list a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });
  }
  
  // 4. Close menu when clicking outside (on the overlay/backdrop)
  if (navbar) {
    navbar.addEventListener('click', function(e) {
      // Only close if clicking on the backdrop itself (not on menu content)
      if (e.target === navbar) {
        closeMenu();
      }
    });
  }
  
  // 5. Close menu on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navbar && navbar.classList.contains('open')) {
      closeMenu();
    }
  });
  
  // 6. Close menu on window resize (if switching from mobile to desktop)
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navbar && navbar.classList.contains('open')) {
      closeMenu();
    }
  });
  
  
  // ======================================================
  // HEADER SCROLL EFFECT
  // ======================================================
  
  const header = document.getElementById('site-header');
  
  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  
  // ======================================================
  // ACTIVE NAV LINK
  // ======================================================
  
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-list a');
  
  function updateActiveLink() {
    let current = '';
    const scrollPosition = window.scrollY + 120;
    
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveLink);
  window.addEventListener('load', updateActiveLink);
  
  
  // ======================================================
  // SCROLL ANIMATION (slide-up)
  // ======================================================
  
  const slideElements = document.querySelectorAll('.slide-up');
  
  function checkVisibility() {
    const windowHeight = window.innerHeight;
    slideElements.forEach(function(el) {
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
  
  
  // ======================================================
  // COUNTER ANIMATION (By the Numbers)
  // ======================================================
  
  const numberElements = document.querySelectorAll('.number-value');
  let countersAnimated = {};
  
  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quart for smooth deceleration
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
    numberElements.forEach(function(el) {
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
  
  // Initial check after a short delay
  setTimeout(checkCounters, 300);
  
});