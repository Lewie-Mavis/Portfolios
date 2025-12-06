// Smooth Left and Right Animations
const elementsToObserve = document.querySelectorAll('.slide-left, .slide-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2
});

elementsToObserve.forEach(el => observer.observe(el));

// Enhanced fade-up animations with smart staggering
const fadeElements = document.querySelectorAll('.fade-up, .fade-down, .zoom-in, .rotate-in, .blur-in, .skew-in, .flip-in');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Smart staggering for about section elements
      if (entry.target.closest('#about')) {
        const aboutSection = document.getElementById('about');
        
        if (aboutSection && !aboutSection.classList.contains('animated')) {
          aboutSection.classList.add('animated');
          
          // Stagger animations for about section
          const aboutElements = aboutSection.querySelectorAll('.fade-up, .zoom-in, .rotate-in, .blur-in, .flip-in, .skew-in');
          aboutElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('show');
            }, index * 100);
          });
          
          // Special animation for tech badges
          const techBadges = aboutSection.querySelectorAll('.tech-badge');
          techBadges.forEach((badge, index) => {
            setTimeout(() => {
              badge.classList.add('show');
            }, index * 200);
          });
        } else {
          entry.target.classList.add('show');
        }
      }
      // Smart staggering for service items
      else if (entry.target.classList.contains('service-item')) {
        const serviceItems = document.querySelectorAll('.service-item');
        const index = Array.from(serviceItems).indexOf(entry.target);
        const delay = index * 100;
        
        setTimeout(() => {
          entry.target.classList.add('show');
          
          const childElements = entry.target.querySelectorAll('.fade-up, .zoom-in, .rotate-in');
          childElements.forEach((child, childIndex) => {
            setTimeout(() => {
              child.classList.add('show');
            }, delay + (childIndex * 50));
          });
        }, delay);
      }
      // Smart staggering for portfolio items
      else if (entry.target.classList.contains('portfolio-item')) {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        const index = Array.from(portfolioItems).indexOf(entry.target);
        const delay = index * 100;
        
        setTimeout(() => {
          entry.target.classList.add('show');
          
          const childElements = entry.target.querySelectorAll('.fade-up, .zoom-in');
          childElements.forEach((child, childIndex) => {
            setTimeout(() => {
              child.classList.add('show');
            }, delay + (childIndex * 50));
          });
        }, delay);
      }
      // Regular animation for other elements
      else {
        entry.target.classList.add('show');
      }
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => fadeObserver.observe(el));

// Additional animations for about section
document.addEventListener('DOMContentLoaded', function() {
  // Add interactive hover effects to tech badges
  const techBadges = document.querySelectorAll('.tech-badge');
  techBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
      const tech = this.getAttribute('data-tech');
      this.style.transform = 'translateX(-5px) scale(1.05)';
      this.style.boxShadow = '0 10px 20px rgba(0, 247, 255, 0.2)';
      
      // Add tooltip effect
      const tooltip = document.createElement('div');
      tooltip.className = 'tech-tooltip';
      tooltip.textContent = tech;
      tooltip.style.cssText = `
        position: absolute;
        top: -35px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(30, 42, 68, 0.95);
        color: #00f7ff;
        padding: 5px 15px;
        border-radius: 15px;
        font-size: 0.8rem;
        white-space: nowrap;
        border: 1px solid rgba(0, 247, 255, 0.3);
        z-index: 1000;
      `;
      this.appendChild(tooltip);
    });
    
    badge.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
      const tooltip = this.querySelector('.tech-tooltip');
      if (tooltip) tooltip.remove();
    });
  });
  
  // Add click animation to consultation button
  const consultationBtn = document.querySelector('.btn-consultation');
  if (consultationBtn) {
    consultationBtn.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
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
  }
  
  // Animate image particles
  const aboutImage = document.querySelector('.about-image');
  if (aboutImage) {
    aboutImage.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
      
      // Animate particles
      const particles = this.parentElement.querySelectorAll('.particle');
      particles.forEach(particle => {
        particle.style.animation = 'particle-float 1.5s ease-in-out infinite';
      });
    });
    
    aboutImage.addEventListener('mouseleave', function() {
      this.style.transform = '';
      
      const particles = this.parentElement.querySelectorAll('.particle');
      particles.forEach(particle => {
        particle.style.animation = 'particle-float 6s ease-in-out infinite';
      });
    });
  }
  
  // Add CSS for ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});


// Simple Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    // Simple scroll animation
    function initSimpleAnimations() {
        const animatedElements = document.querySelectorAll('.info-card, .form-card, .stat-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => observer.observe(el));
    }
    
    initSimpleAnimations();
    
    // Form character counter
    const messageInput = document.getElementById('message');
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            const charCount = document.querySelector('.char-count');
            if (charCount) {
                charCount.textContent = `${this.value.length}/500 characters`;
            }
            
            // Simple validation
            if (this.value.length > 500) {
                this.value = this.value.substring(0, 500);
            }
        });
    }
    
    // Simple form submission
    const contactForm = document.getElementById('contact-form-simple');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('.submit-btn');
            
            if (submitBtn) {
                // Show loading state
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = `
                    <i class="fas fa-spinner fa-spin"></i>
                    Sending...
                `;
                submitBtn.disabled = true;
                
                // Reset after 2 seconds (simulate send)
                setTimeout(() => {
                    // In production, remove this and let FormSubmit handle it
                    alert('Message sent successfully! I\'ll get back to you soon.');
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
    
    // Simple hover effects
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#ffffff';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = 'var(--primary-color)';
        });
    });
    
    // Simple social icon hover
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Simple input focus effects
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});

// Smooth scroll to contact
document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            window.scrollTo({
                top: contactSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});



// Enhanced animation handling for contact section
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations for contact section
    initContactAnimations();
    
    // Form character counter
    const messageInput = document.getElementById('message');
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            const charCount = document.querySelector('.char-count');
            if (charCount) {
                charCount.textContent = `${this.value.length}/500 characters`;
            }
            
            if (this.value.length > 500) {
                this.value = this.value.substring(0, 500);
            }
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contact-form-simple');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('.submit-btn');
            
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = `
                    <i class="fas fa-spinner fa-spin"></i>
                    Sending...
                `;
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Message sent successfully! I\'ll get back to you soon.');
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
    
    // Add hover animations
    const infoCard = document.querySelector('.info-card');
    const formCard = document.querySelector('.form-card');
    const statItems = document.querySelectorAll('.stat-item');
    
    if (infoCard) {
        infoCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        infoCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    if (formCard) {
        formCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        formCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.stat-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(10deg)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.stat-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Animation initialization function
function initContactAnimations() {
    // Select all animated elements in contact section
    const animatedElements = document.querySelectorAll('#contact .slide-left, #contact .slide-right, #contact .fade-up, #contact .zoom-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delay based on element type
                const element = entry.target;
                
                // Remove any existing show class first
                element.classList.remove('show');
                
                // Force reflow
                void element.offsetWidth;
                
                // Add show class with animation
                setTimeout(() => {
                    element.classList.add('show');
                }, 10);
                
                // Unobserve after animation
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

// Smooth scroll to contact
document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            window.scrollTo({
                top: contactSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Trigger animations when scrolled to
            setTimeout(() => {
                initContactAnimations();
            }, 500);
        }
    });
});



// Premium Footer Animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize footer animations
    initFooterAnimations();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize current year
    const yearSpan = document.getElementById('current-year-footer');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Newsletter form
    const newsletterBtn = document.querySelector('.newsletter-btn');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const emailInput = document.querySelector('.newsletter-email');
            if (emailInput && emailInput.value) {
                // Simple email validation
                if (validateEmail(emailInput.value)) {
                    // Show success animation
                    this.innerHTML = '<i class="fas fa-check"></i>';
                    this.style.background = '#4CAF50';
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        this.innerHTML = '<i class="fas fa-paper-plane"></i>';
                        this.style.background = '#00f7ff';
                        emailInput.value = '';
                        
                        // Show notification
                        showNotification('Subscribed successfully!');
                    }, 2000);
                } else {
                    showNotification('Please enter a valid email address', 'error');
                }
            } else {
                showNotification('Please enter your email address', 'error');
            }
        });
    }
    
    // Add hover animations to social cards
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.social-card-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(10deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.social-card-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Add hover effects to service tags
    const serviceTags = document.querySelectorAll('.service-tag');
    serviceTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add animation to logo on hover
    const brandLogo = document.querySelector('.brand-logo');
    if (brandLogo) {
        brandLogo.addEventListener('mouseenter', function() {
            const glow = this.querySelector('.logo-glow');
            if (glow) {
                glow.style.animation = 'logo-pulse 1s ease-in-out infinite';
            }
        });
        
        brandLogo.addEventListener('mouseleave', function() {
            const glow = this.querySelector('.logo-glow');
            if (glow) {
                glow.style.animation = 'logo-pulse 3s ease-in-out infinite';
            }
        });
    }
    
    // Smooth scroll for footer links
    document.querySelectorAll('#premium-footer a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Change the IntersectionObserver settings for footer
function initFooterAnimations() {
    const animatedElements = document.querySelectorAll('#premium-footer .slide-left, #premium-footer .slide-right, #premium-footer .fade-up, #premium-footer .zoom-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove any existing show class first
                entry.target.classList.remove('show');
                void entry.target.offsetWidth; // Force reflow
                
                // Add show class with very small delay
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, 10);
            }
        });
    }, {
        threshold: 0.01, // Changed from 0.1 to 0.01
        rootMargin: '0px 0px 0px 0px' // Changed from '-100px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `footer-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
        animation-fill-mode: forwards;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Add notification animations CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
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
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);



// Testimonials Carousel and Animations
document.addEventListener('DOMContentLoaded', function() {
    initTestimonialsCarousel();
    initTestimonialAnimations();
    initTestimonialHoverEffects();
});

function initTestimonialsCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    
    // Function to update carousel
    function updateCarousel(index) {
        // Update active testimonial
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
                
                // Add entrance animation for active card
                testimonial.style.animation = 'cardEntrance 0.6s ease forwards';
            } else {
                testimonial.style.animation = '';
            }
        });
        
        // Update active dot
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
        
        currentIndex = index;
    }
    
    // Next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const nextIndex = (currentIndex + 1) % testimonials.length;
            updateCarousel(nextIndex);
            
            // Add click animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
    // Previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            updateCarousel(prevIndex);
            
            // Add click animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
    // Dot click events
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            updateCarousel(index);
            
            // Add click animation
            this.style.transform = 'scale(1.5)';
            setTimeout(() => {
                this.style.transform = 'scale(1.2)';
            }, 200);
        });
    });
    
    // Auto rotate every 8 seconds
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel(nextIndex);
    }, 8000);
    
    // Add CSS for card entrance animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cardEntrance {
            0% {
                opacity: 0.6;
                transform: translateY(20px) scale(0.95);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

function initTestimonialAnimations() {
    // Special handling for testimonials section animations
    const testimonialSection = document.getElementById('testimonials');
    
    if (testimonialSection) {
        const testimonialObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    testimonialSection.classList.add('animated');
                    
                    // Trigger animations for particles
                    const particles = testimonialSection.querySelectorAll('.testimonial-particle');
                    particles.forEach(particle => {
                        particle.style.opacity = '1';
                    });
                    
                    // Trigger animations for quote symbols
                    const quoteSymbols = testimonialSection.querySelectorAll('.quote-symbol');
                    quoteSymbols.forEach(symbol => {
                        symbol.classList.add('show');
                    });
                    
                    // Stagger animations for testimonial cards
                    const cards = testimonialSection.querySelectorAll('.testimonial-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('show');
                        }, index * 100);
                    });
                    
                    // Stagger animations for stats
                    const statItems = testimonialSection.querySelectorAll('.stat-item');
                    statItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('show');
                        }, index * 150);
                    });
                    
                    // Don't unobserve so animations can play again
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        testimonialObserver.observe(testimonialSection);
    }
}

function initTestimonialHoverEffects() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        // Add mouse move parallax effect
        card.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            const centerX = cardRect.width / 2;
            const centerY = cardRect.height / 2;
            
            const rotateY = (x - centerX) / 25;
            const rotateX = (centerY - y) / 25;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            
            // Dynamic shadow
            const shadowX = (x - centerX) / 10;
            const shadowY = (y - centerY) / 10;
            this.style.boxShadow = `
                ${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.4),
                0 0 0 1px rgba(0, 247, 255, 0.3),
                0 0 40px rgba(0, 247, 255, 0.1)
            `;
        });
        
        // Reset on mouse leave
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('active')) {
                this.style.transform = 'translateY(-10px) rotateX(5deg)';
                this.style.boxShadow = `
                    0 25px 60px rgba(0, 0, 0, 0.4),
                    0 0 0 1px rgba(0, 247, 255, 0.3),
                    0 0 40px rgba(0, 247, 255, 0.1)
                `;
            } else {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
        
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            // Create ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 247, 255, 0.1);
                transform: scale(0);
                animation: testimonial-ripple 0.6s linear;
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
        
        // Add glow effect to avatar on hover
        const avatar = card.querySelector('.avatar-image');
        if (avatar) {
            card.addEventListener('mouseenter', function() {
                avatar.style.transform = 'scale(1.1)';
                avatar.style.boxShadow = '0 0 20px rgba(0, 247, 255, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                avatar.style.transform = '';
                avatar.style.boxShadow = '';
            });
        }
    });
    
    // Add CSS for testimonial ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes testimonial-ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// Add to your existing fadeObserver callback function:
// Update the existing fadeObserver to handle testimonials section
const existingFadeObserver = fadeObserver; // Your existing fadeObserver

// Wrap the existing callback to add testimonials handling
const originalCallback = fadeObserver._callback;
fadeObserver._callback = function(entries) {
    entries.forEach(entry => {
        if (entry.target.closest('#testimonials')) {
            // Handle testimonials section specifically
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        } else {
            // Call original callback for other sections
            originalCallback.call(this, [entry]);
        }
    });
};



// Enhanced Online Presence Section Animations with Restartable Counters
(() => {
  'use strict';
  
  // Cache DOM elements
  const section = document.getElementById('online-presence-section');
  if (!section) return;
  
  // Track counter states to prevent multiple animations
  const counterStates = new Map();
  
  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Initialize section
  function initEnhancedPresenceSection() {
    if (prefersReducedMotion) {
      // Skip animations if user prefers reduced motion
      skipAnimations();
      return;
    }
    
    // Add section to existing fade observer
    addToExistingObserver();
    
    // Initialize counters with restart capability
    initRestartableCounters();
    
    // Initialize hover effects
    initEnhancedHoverEffects();
    
    // Initialize image effects
    initEnhancedImageEffects();
    
    // Initialize scroll-triggered effects
    initScrollEffects();
    
    // Add CSS for enhanced animations
    addEnhancedAnimationStyles();
  }
  
  // Add section elements to existing fade observer
  function addToExistingObserver() {
    const existingObserver = window.fadeObserver;
    if (!existingObserver) return;
    
    // Get all animated elements in this section
    const animatedElements = section.querySelectorAll(
      '.slide-left, .slide-right, .fade-up, .zoom-in, .rotate-in, .blur-in, .flip-in, .skew-in'
    );
    
    // Observe each element
    animatedElements.forEach(el => {
      existingObserver.observe(el);
    });
  }
  
  // Restartable counters that trigger on each view
  function initRestartableCounters() {
    const counters = section.querySelectorAll('.stat-number');
    if (!counters.length) return;
    
    // Store original values
    counters.forEach(counter => {
      const originalValue = counter.textContent;
      counter.dataset.original = originalValue;
      counterStates.set(counter, {
        isAnimating: false,
        animationId: null
      });
    });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target') || '0');
          const state = counterStates.get(counter);
          
          // Reset counter to original value
          if (!state.isAnimating) {
            counter.textContent = counter.dataset.original || '0';
            counter.classList.remove('completed', 'animating');
            
            // Reset progress bar
            const statCard = counter.closest('.stat-card');
            if (statCard) {
              removeExistingProgressBar(statCard);
              setTimeout(() => animateProgressBar(statCard), 100);
            }
            
            // Start animation
            animateRestartableCounter(counter, target);
          }
        } else {
          // Section out of view - stop animation if running
          const counter = entry.target;
          const state = counterStates.get(counter);
          
          if (state.isAnimating && state.animationId) {
            cancelAnimationFrame(state.animationId);
            state.isAnimating = false;
            state.animationId = null;
          }
        }
      });
    }, { 
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    });
    
    counters.forEach(counter => observer.observe(counter));
  }
  
  function animateRestartableCounter(element, target) {
    const state = counterStates.get(element);
    if (state.isAnimating) return;
    
    state.isAnimating = true;
    element.classList.add('animating');
    
    let startTime = null;
    const duration = 1800; // 1.8 seconds for smoother animation
    const startValue = parseInt(element.textContent) || 0;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      element.textContent = currentValue;
      
      if (progress < 1) {
        state.animationId = requestAnimationFrame(animate);
      } else {
        // Animation complete
        element.textContent = target;
        element.classList.add('completed');
        element.classList.remove('animating');
        state.isAnimating = false;
        state.animationId = null;
        
        // Add celebration effect
        addCelebrationEffect(element);
      }
    };
    
    state.animationId = requestAnimationFrame(animate);
  }
  
  function removeExistingProgressBar(element) {
    const existingBars = element.querySelectorAll('.stat-progress');
    existingBars.forEach(bar => bar.remove());
  }
  
  function animateProgressBar(element) {
    const progressBar = document.createElement('div');
    progressBar.className = 'stat-progress';
    progressBar.style.cssText = `
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #00f7ff, #00bcd4);
      border-radius: 0 0 12px 12px;
      transition: width 1.8s cubic-bezier(0.34, 1.56, 0.64, 1);
      z-index: 1;
    `;
    
    element.appendChild(progressBar);
    
    // Trigger animation
    requestAnimationFrame(() => {
      progressBar.style.width = '100%';
    });
    
    // Remove after animation
    setTimeout(() => {
      if (progressBar.parentNode) {
        progressBar.style.opacity = '0';
        progressBar.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
          if (progressBar.parentNode) {
            progressBar.remove();
          }
        }, 500);
      }
    }, 2500);
  }
  
  function addCelebrationEffect(element) {
    const statCard = element.closest('.stat-card');
    if (!statCard) return;
    
    // Create particle effect
    for (let i = 0; i < 3; i++) {
      createParticle(statCard);
    }
    
    // Add subtle scale animation to the card
    statCard.style.transform = 'scale(1.05)';
    setTimeout(() => {
      statCard.style.transform = 'scale(1)';
      statCard.style.transition = 'transform 0.3s ease';
    }, 300);
  }
  
  function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'stat-particle';
    
    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 600 + 400;
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: #00f7ff;
      border-radius: 50%;
      pointer-events: none;
      z-index: 2;
      opacity: 0.8;
      animation: particleFloat ${duration}ms ease-out forwards;
    `;
    
    // Random starting position around the counter
    const startX = 50 + (Math.random() * 20 - 10);
    const startY = 50 + (Math.random() * 20 - 10);
    
    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;
    
    container.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.remove();
      }
    }, duration);
  }
  
  // Enhanced hover effects with parallax
  function initEnhancedHoverEffects() {
    // Add parallax effect to image container
    const imageContainer = section.querySelector('.image-container');
    if (imageContainer) {
      imageContainer.addEventListener('mousemove', (e) => {
        if (prefersReducedMotion) return;
        
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = (x - centerX) / 40;
        const rotateX = (centerY - y) / 40;
        
        imageContainer.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
        `;
      });
      
      imageContainer.addEventListener('mouseleave', () => {
        imageContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    }
    
    // Enhanced CTA button effects
    const ctaButton = section.querySelector('.presence-cta');
    if (ctaButton) {
      // Glow effect on hover
      ctaButton.addEventListener('mouseenter', () => {
        ctaButton.classList.add('glowing');
      });
      
      ctaButton.addEventListener('mouseleave', () => {
        ctaButton.classList.remove('glowing');
      });
      
      // Ripple effect on click
      ctaButton.addEventListener('click', function(e) {
        createRippleEffect(this, e);
        
        // Add bounce effect
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 300);
      });
    }
    
    // Benefit cards hover effect
    const benefitItems = section.querySelectorAll('.benefit-item');
    benefitItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.benefit-icon');
        if (icon) {
          icon.style.transform = 'scale(1.2) rotate(10deg)';
          icon.style.transition = 'transform 0.3s ease';
        }
      });
      
      item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.benefit-icon');
        if (icon) {
          icon.style.transform = 'scale(1) rotate(0)';
        }
      });
    });
  }
  
  function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.4);
      width: ${size}px;
      height: ${size}px;
      top: ${y}px;
      left: ${x}px;
      transform: scale(0);
      animation: enhancedRipple 0.6s linear;
      pointer-events: none;
      z-index: 1;
    `;
    
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
  
  // Enhanced image loading and effects
  function initEnhancedImageEffects() {
    const image = section.querySelector('.presence-image');
    if (!image) return;
    
    // Add loaded class when image loads
    if (image.complete) {
      onImageLoaded(image);
    } else {
      image.addEventListener('load', () => onImageLoaded(image));
      image.addEventListener('error', () => onImageError(image));
    }
    
    // Add shimmer effect to image container
    const imageContainer = section.querySelector('.image-container');
    if (imageContainer) {
      const shimmer = document.createElement('div');
      shimmer.className = 'image-shimmer';
      shimmer.style.cssText = `
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
          transparent, 
          rgba(255, 255, 255, 0.1), 
          transparent);
        animation: shimmer 2s infinite;
        pointer-events: none;
        z-index: 2;
      `;
      
      imageContainer.appendChild(shimmer);
    }
  }
  
  function onImageLoaded(img) {
    img.classList.add('loaded');
    
    // Add subtle scale animation
    setTimeout(() => {
      img.style.transition = 'transform 0.5s ease';
    }, 100);
  }
  
  function onImageError(img) {
    console.warn('Image failed to load:', img.src);
    img.style.opacity = '1';
  }
  
  // Scroll-triggered effects
  function initScrollEffects() {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateOnScroll = () => {
      const scrolled = window.scrollY;
      const sectionTop = section.offsetTop;
      const windowHeight = window.innerHeight;
      
      // Parallax effect for background
      if (scrolled > sectionTop - windowHeight && scrolled < sectionTop + section.offsetHeight) {
        const parallaxValue = (scrolled - sectionTop) * 0.1;
        section.style.setProperty('--parallax-y', `${parallaxValue}px`);
      }
      
      lastScrollY = scrolled;
      ticking = false;
    };
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    });
  }
  
  // Add enhanced animation styles
  function addEnhancedAnimationStyles() {
    if (document.getElementById('enhanced-presence-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'enhanced-presence-styles';
    style.textContent = `
      /* Enhanced ripple effect */
      @keyframes enhancedRipple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
      
      /* Shimmer effect */
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      /* Particle animation */
      @keyframes particleFloat {
        0% {
          transform: translate(0, 0) scale(1);
          opacity: 0.8;
        }
        100% {
          transform: translate(
            ${Math.random() * 60 - 30}px, 
            ${Math.random() * -60 - 20}px
          ) scale(0);
          opacity: 0;
        }
      }
      
      /* CTA glow effect */
      .presence-cta.glowing {
        box-shadow: 0 0 20px rgba(0, 247, 255, 0.6),
                    0 0 40px rgba(0, 247, 255, 0.3);
      }
      
      .presence-cta.clicked {
        animation: ctaBounce 0.3s ease;
      }
      
      @keyframes ctaBounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(0.95); }
      }
      
      /* Stat counter states */
      .stat-number.animating {
        color: #00f7ff;
        text-shadow: 0 0 10px rgba(0, 247, 255, 0.3);
      }
      
      .stat-number.completed {
        position: relative;
        color: #00f7ff;
      }
      
      .stat-number.completed::after {
        content: '';
        position: absolute;
        right: -15px;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background: #00f7ff;
        border-radius: 50%;
        animation: pulseDot 1s infinite;
      }
      
      @keyframes pulseDot {
        0%, 100% { 
          opacity: 0.5; 
          transform: translateY(-50%) scale(1);
          box-shadow: 0 0 5px rgba(0, 247, 255, 0.5);
        }
        50% { 
          opacity: 1; 
          transform: translateY(-50%) scale(1.3);
          box-shadow: 0 0 10px rgba(0, 247, 255, 0.8);
        }
      }
      
      /* Parallax variable */
      #online-presence-section {
        --parallax-y: 0px;
      }
      
      .presence-bg {
        transform: translateY(var(--parallax-y));
        transition: transform 0.1s linear;
      }
      
      /* Stat card animation */
      .stat-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      /* Floating tags animation enhancement */
      .floating-tag {
        transition: all 0.3s ease;
      }
      
      .floating-tag:hover {
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 5px 15px rgba(0, 247, 255, 0.3);
      }
    `;
    
    document.head.appendChild(style);
  }
  
  // Skip animations for reduced motion preference
  function skipAnimations() {
    const animatedElements = section.querySelectorAll(
      '.slide-left, .slide-right, .fade-up, .zoom-in, .rotate-in, .blur-in, .flip-in, .skew-in'
    );
    
    animatedElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
      el.classList.add('show');
    });
    
    // Also set counters to their target values
    const counters = section.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = counter.getAttribute('data-target');
      if (target) {
        counter.textContent = target;
      }
    });
  }
  
  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEnhancedPresenceSection);
  } else {
    initEnhancedPresenceSection();
  }
  
  // Export cleanup function
  window.cleanupEnhancedPresence = function() {
    // Clean up event listeners
    const imageContainer = section.querySelector('.image-container');
    const ctaButton = section.querySelector('.presence-cta');
    const benefitItems = section.querySelectorAll('.benefit-item');
    
    if (imageContainer) {
      imageContainer.replaceWith(imageContainer.cloneNode(true));
    }
    
    if (ctaButton) {
      ctaButton.replaceWith(ctaButton.cloneNode(true));
    }
    
    benefitItems.forEach(item => {
      item.replaceWith(item.cloneNode(true));
    });
    
    // Cancel any running animations
    counterStates.forEach((state, counter) => {
      if (state.animationId) {
        cancelAnimationFrame(state.animationId);
      }
    });
    
    counterStates.clear();
  };
})();

// Image preloading with priority
(function preloadPriorityImages() {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      const links = [
        { href: 'images/online_presence.avif', type: 'image/avif' },
        { href: 'images/online_presence.webp', type: 'image/webp' }
      ];
      
      links.forEach(link => {
        const preload = document.createElement('link');
        preload.rel = 'preload';
        preload.as = 'image';
        preload.href = link.href;
        preload.type = link.type;
        preload.crossOrigin = 'anonymous';
        document.head.appendChild(preload);
      });
    }, { timeout: 2000 });
  }
})();

// Performance monitoring for animations
if (typeof PerformanceObserver !== 'undefined') {
  const animationObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 100) {
        console.warn('Slow animation detected:', entry.name, entry.duration);
      }
    }
  });
  
  animationObserver.observe({ entryTypes: ['animation'] });
}

// Add this function to integrate with your existing fadeObserver
function integrateWithExistingObserver() {
  // Make sure our counters work with the existing system
  if (window.fadeObserver) {
    const counters = document.querySelectorAll('#online-presence-section .stat-number');
    counters.forEach(counter => {
      // Ensure counters animate when their parent elements are in view
      const parentCard = counter.closest('.stat-card');
      if (parentCard) {
        // Add a data attribute to track if counter has animated
        parentCard.dataset.counterAnimated = 'false';
        
        // Observe the parent card with existing observer
        window.fadeObserver.observe(parentCard);
      }
    });
  }
}

// Call integration on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', integrateWithExistingObserver);
} else {
  integrateWithExistingObserver();
}






// Enhanced Animation System for Tech Trends & AI Drive Sections
(function() {
  'use strict';
  
  // Performance optimization
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Cache DOM elements
  const sections = ['tech-trends', 'ai-drive-section'];
  const sectionElements = {};
  
  // Initialize sections
  function initEnhancedSections() {
    if (prefersReducedMotion) {
      skipAllAnimations();
      return;
    }
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      
      sectionElements[sectionId] = {
        section,
        counters: section.querySelectorAll('.stat-number'),
        particles: section.querySelectorAll('.particle'),
        animations: new Set()
      };
      
      // Initialize counters
      initSectionCounters(sectionId);
      
      // Initialize hover effects
      initSectionHoverEffects(sectionId);
      
      // Initialize intersection observer
      initSectionObserver(sectionId);
    });
  }
  
  // Initialize counters with optimized animation
  function initSectionCounters(sectionId) {
    const { section, counters } = sectionElements[sectionId];
    if (!counters.length) return;
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 1800;
      
      // Store initial value
      counter.textContent = '0';
      
      // Create intersection observer for each counter
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(counter, target, duration);
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  }
  
  // Optimized counter animation
  function animateCounter(element, target, duration) {
    const startTime = performance.now();
    const startValue = 0;
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutExpo for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutExpo);
      
      element.textContent = currentValue;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
        element.classList.add('completed');
      }
    }
    
    requestAnimationFrame(updateCounter);
  }
  
  // Initialize hover effects
  function initSectionHoverEffects(sectionId) {
    const { section } = sectionElements[sectionId];
    
    // Enhanced button hover effects
    const buttons = section.querySelectorAll('.tech-trends-button, .ai-drive-button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
      });
    });
    
    // Card hover effects
    const cards = section.querySelectorAll('.trend-item, .ai-feature');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateX(10px)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateX(0)';
      });
    });
  }
  
  // Initialize section observer
  function initSectionObserver(sectionId) {
    const { section } = sectionElements[sectionId];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('active');
          
          // Trigger staggered animations for children
          const animatedChildren = section.querySelectorAll('.slide-left, .slide-right, .fade-up, .zoom-in, .bounce-in');
          animatedChildren.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('show');
            }, index * 50);
          });
          
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(section);
  }
  
  // Skip all animations for reduced motion preference
  function skipAllAnimations() {
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      
      // Show all elements immediately
      const animatedElements = section.querySelectorAll('.slide-left, .slide-right, .slide-bottom, .fade-up, .zoom-in, .rotate-in, .blur-in, .skew-in, .flip-in, .bounce-in, .float-in, .flip-3d, .wave-in');
      animatedElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.classList.add('show');
      });
      
      // Set counter values immediately
      const counters = section.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = counter.getAttribute('data-target');
        if (target) counter.textContent = target;
      });
    });
  }
  
  // Cleanup function
  function cleanupSections() {
    Object.values(sectionElements).forEach(({ animations }) => {
      animations.forEach(animationId => {
        cancelAnimationFrame(animationId);
      });
    });
  }
  
  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEnhancedSections);
  } else {
    initEnhancedSections();
  }
  
  // Export cleanup function
  window.cleanupEnhancedSections = cleanupSections;
})();

// Image optimization and preloading
(function() {
  'use strict';
  
  // Critical images to preload
  const criticalImages = [
    'images/11.webp',
    'images/ai_drive.webp'
  ];
  
  // Preload critical images with requestIdleCallback
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }, { timeout: 2000 });
  }
  
  // Lazy load images with IntersectionObserver
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('.trends-image, .ai-image');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('src');
          
          // Load image if not already loaded
          if (!img.complete) {
            img.loading = 'lazy';
            img.addEventListener('load', () => {
              img.classList.add('loaded');
            });
            
            img.addEventListener('error', () => {
              console.warn('Failed to load image:', src);
            });
          }
          
          imageObserver.unobserve(img);
        }
      });
    }, { threshold: 0.1 });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
})();

