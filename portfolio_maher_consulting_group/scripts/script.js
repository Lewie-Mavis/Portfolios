// ========== MOBILE MENU TOGGLE WITH OVERLAY ==========
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        const icon = mobileToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Close mobile menu when clicking outside (on overlay)
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
});

// ========== STICKY HEADER SCROLL EFFECT WITH SHRINK ==========
const header = document.querySelector('.sticky-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for header styling
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Update header shadow
    if (currentScroll > 100) {
        header.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
    }
});

// ========== ACTIVE MENU HIGHLIGHT ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function updateActiveMenu() {
    const scrollPosition = window.scrollY + 120; // Offset for header
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Throttle scroll event for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = requestAnimationFrame(() => {
        updateActiveMenu();
    });
});

// ========== INTERSECTION OBSERVER FOR SLIDE ANIMATIONS (RE-ANIMATE ON SCROLL) ==========
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add revealed class when element comes into view
            entry.target.classList.add('revealed');
        } else {
            // Remove revealed class when element leaves viewport (so it can animate again)
            entry.target.classList.remove('revealed');
        }
    });
}, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ========== NUMBER COUNTING ANIMATION (WITH RE-ANIMATION SUPPORT) ==========
const numberSection = document.getElementById('numbers');
const statNumbers = document.querySelectorAll('.stat-number');

const countUp = (element, target) => {
    let current = 0;
    const increment = target / 60;
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.innerText = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.innerText = target;
        }
    };
    updateCounter();
};

// Store original values and reset function
const resetNumbers = () => {
    statNumbers.forEach(num => {
        const target = parseInt(num.getAttribute('data-target'), 10);
        num.innerText = '0';
        num.setAttribute('data-counted', 'false');
    });
};

const startCounting = () => {
    statNumbers.forEach(num => {
        // Only count if not already counted in this view cycle
        if (num.getAttribute('data-counted') !== 'true') {
            const target = parseInt(num.getAttribute('data-target'), 10);
            countUp(num, target);
            num.setAttribute('data-counted', 'true');
        }
    });
};

// Reset counting flag when numbers section leaves viewport
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Reset all numbers to 0 and start counting fresh
            resetNumbers();
            startCounting();
        } else {
            // Reset the counted flag so numbers will animate again when scrolled back
            statNumbers.forEach(num => {
                num.setAttribute('data-counted', 'false');
                num.innerText = '0';
            });
        }
    });
}, { threshold: 0.4 });

if (numberSection) {
    numberObserver.observe(numberSection);
}

// ========== SMOOTH SCROLLING FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const targetElement = document.querySelector(href);
        if (targetElement) {
            e.preventDefault();
            const headerOffset = 90;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Update URL without jumping
            history.pushState(null, null, href);
        }
    });
});

// ========== CONTACT FORM HANDLER WITH AJAX ==========
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        
        try {
            const response = await fetch('contact.php', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                formFeedback.style.color = '#28a745';
                formFeedback.innerHTML = '✓ ' + result.message;
                contactForm.reset();
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    formFeedback.innerHTML = '';
                }, 5000);
            } else {
                formFeedback.style.color = '#dc3545';
                formFeedback.innerHTML = '❌ ' + result.message;
                
                setTimeout(() => {
                    formFeedback.innerHTML = '';
                }, 5000);
            }
        } catch (error) {
            formFeedback.style.color = '#dc3545';
            formFeedback.innerHTML = '❌ Network error. Please try again.';
            
            setTimeout(() => {
                formFeedback.innerHTML = '';
            }, 5000);
        } finally {
            // Restore button
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
}

// ========== CHAT BUTTON FUNCTIONALITY (WhatsApp) ==========
const chatButton = document.getElementById('chatButton');
if (chatButton) {
    chatButton.addEventListener('click', () => {
        // WhatsApp phone number (formatted without special characters)
        const phoneNumber = '254703612358';
        // Create WhatsApp URL with pre-filled message
        const message = encodeURIComponent('Hello! I would like to get more information about your consulting services.');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    });
}

// ========== INITIAL CHECK FOR VISIBLE ELEMENTS ==========
window.addEventListener('load', () => {
    // Check for visible elements on load
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
            el.classList.add('revealed');
        }
    });
    
    // Set active menu based on initial scroll position
    updateActiveMenu();
});

// ========== DYNAMIC YEAR FOR COPYRIGHT ==========
const copyrightPara = document.querySelector('.copyright p');
if (copyrightPara) {
    const currentYear = new Date().getFullYear();
    copyrightPara.innerHTML = copyrightPara.innerHTML.replace('2026', currentYear);
}

// ========== PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN ==========
const disableBodyScroll = () => {
    if (navMenu && navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

// Watch for menu class changes
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            disableBodyScroll();
        }
    });
});

if (navMenu) {
    observer.observe(navMenu, { attributes: true });
}

