// scripts/script.js
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // ---------- HERO ROTATING BACKGROUND ----------
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  if (slides.length > 0) {
    setInterval(() => {
      slides.forEach((slide, idx) => {
        slide.classList.remove('active');
      });
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  // ---------- STICKY HEADER SCROLL EFFECT ----------
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ---------- MOBILE MENU TOGGLE (animated) ----------
  const mobileToggle = document.getElementById('mobile-menu');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      const bars = mobileToggle.querySelectorAll('.bar');
      if (mobileToggle.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });

    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        const bars = mobileToggle.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      });
    });

    document.addEventListener('click', function(event) {
      if (!mobileNav.contains(event.target) && !mobileToggle.contains(event.target) && mobileNav.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        const bars = mobileToggle.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });
  }

  // ---------- ANIMATED COUNTERS (replay each time in view) ----------
  const counters = document.querySelectorAll('.counter');

  function resetAndStartCounters(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        // Reset to zero before counting
        counter.innerText = '0';
        const target = parseInt(counter.getAttribute('data-target'));
        
        let current = 0;
        const increment = Math.ceil(target / 25); // smooth increment
        
        function updateCount() {
          current += increment;
          if (current < target) {
            counter.innerText = current;
            requestAnimationFrame(() => setTimeout(updateCount, 30));
          } else {
            counter.innerText = target;
          }
        }
        updateCount();
      }
    });
  }

  // Observe each counter individually to replay animation
  const counterObserver = new IntersectionObserver(resetAndStartCounters, {
    threshold: 0.5, // at least half visible to trigger
    rootMargin: '0px'
  });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // ---------- SCROLL REVEAL (replay animations each time) ----------
  const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove then re-add class to force re-animation
        entry.target.classList.remove('appear');
        // Force reflow
        void entry.target.offsetWidth;
        entry.target.classList.add('appear');
      } else {
        // Optional: remove appear when out of view to prepare for next entry
        entry.target.classList.remove('appear');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px' // trigger exactly when entering
  });

  fadeElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ---------- SMOOTH SCROLLING NAVIGATION ----------
  const navLinks = document.querySelectorAll('.nav-link, .footer a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href !== '#' && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ---------- PORTFOLIO FILTER (advanced feature) ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterBtns.length && portfolioItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filterValue = this.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            setTimeout(() => { item.style.opacity = '1'; }, 50);
          } else {
            item.style.opacity = '0';
            setTimeout(() => { item.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  // ---------- CONTACT FORM SUBMIT ----------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for reaching out. A partner will respond within 4 hours.');
      contactForm.reset();
    });
  }

  // ---------- initial load: manually trigger any visible counters and fade elements ----------
  // (the observers will handle them immediately if already visible)
});