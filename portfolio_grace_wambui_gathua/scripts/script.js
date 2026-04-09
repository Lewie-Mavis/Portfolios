// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================
    // 0. SCROLL POSITION RESTORATION ON REFRESH
    // ========================
    // Allow browser to restore scroll position naturally
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
    }
    
    // Save scroll position before page unload (refresh)
    window.addEventListener('beforeunload', function() {
        sessionStorage.setItem('scrollPosition', window.scrollY);
    });
    
    // Restore scroll position after page load
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition && parseInt(savedScrollPosition) > 0) {
        setTimeout(() => {
            window.scrollTo(0, parseInt(savedScrollPosition));
            sessionStorage.removeItem('scrollPosition');
        }, 100);
    }
    
    // Handle hash links without forcing scroll to top
    if (window.location.hash) {
        const hash = window.location.hash;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            setTimeout(() => {
                const header = document.querySelector('.sticky-header');
                const headerHeight = header ? header.offsetHeight : 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 150);
        }
    }
    
    // ========================
    // 1. MOBILE MENU TOGGLE (Enhanced with hamburger animation)
    // ========================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileNav.classList.toggle('active');
            
            // Animate the hamburger icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
        
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                document.body.style.overflow = '';
            });
        });
        
        document.addEventListener('click', function(event) {
            if (mobileNav && mobileMenuBtn && !mobileNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                    document.body.style.overflow = '';
                }
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                document.body.style.overflow = '';
            }
        });
    }
    
    // ========================
    // 2. SMOOTH SCROLL FOR ANCHOR LINKS (Fixed for sticky header)
    // ========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "#" || href === "") return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                
                // Get header height for offset
                const header = document.querySelector('.sticky-header');
                const headerHeight = header ? header.offsetHeight : 80;
                
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without causing scroll
                history.pushState(null, null, href);
                
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                    document.body.style.overflow = '';
                }
            }
        });
    });
    
    // ========================
    // 3. STICKY HEADER SCROLL EFFECT (Add scrolled class)
    // ========================
    const header = document.querySelector('.sticky-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // ========================
    // 4. DYNAMIC MAIN PADDING (Prevent content from hiding under fixed header)
    // ========================
    function adjustMainPadding() {
        const header = document.querySelector('.sticky-header');
        const main = document.querySelector('main');
        if (header && main) {
            const headerHeight = header.offsetHeight;
            main.style.paddingTop = headerHeight + 'px';
        }
    }
    
    // Call on load and resize
    adjustMainPadding();
    window.addEventListener('resize', adjustMainPadding);
    
    // ========================
    // 5. SCROLL-TRIGGERED SLIDE ANIMATIONS (Optimized)
    // ========================
    const animatedSections = document.querySelectorAll('.slide-animate');
    
    function isElementInViewport(el, offset = 100) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight - offset && rect.bottom >= offset;
    }
    
    let visibleStatus = new Map();
    
    function checkSlideAnimations() {
        animatedSections.forEach(section => {
            const isVisible = isElementInViewport(section, 120);
            const wasVisible = visibleStatus.get(section) || false;
            
            if (isVisible && !wasVisible) {
                section.classList.add('visible');
                visibleStatus.set(section, true);
            } else if (!isVisible && wasVisible) {
                section.classList.remove('visible');
                visibleStatus.set(section, false);
            }
        });
    }
    
    animatedSections.forEach(section => {
        visibleStatus.set(section, false);
    });
    
    // ========================
    // 6. ANIMATED NUMBERS COUNTER
    // ========================
    const numberElements = document.querySelectorAll('.number-value');
    let numbersAnimationActive = false;
    
    function animateCounter(element, target, duration = 1500) {
        let startTime = null;
        
        function updateCounter(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuad = 1 - (1 - progress) * (1 - progress);
            const currentCount = Math.floor(easeOutQuad * target);
            element.textContent = currentCount;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    function checkAndAnimateNumbers() {
        const numbersSection = document.getElementById('numbers');
        if (!numbersSection) return;
        
        const isInView = isElementInViewport(numbersSection, 150);
        
        if (isInView && !numbersAnimationActive) {
            numbersAnimationActive = true;
            
            numberElements.forEach(counter => {
                counter.textContent = '0';
            });
            
            numberElements.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'), 10);
                if (!isNaN(target)) {
                    animateCounter(counter, target, 1600);
                }
            });
        } else if (!isInView && numbersAnimationActive) {
            numbersAnimationActive = false;
            numberElements.forEach(counter => {
                counter.textContent = '0';
            });
        }
    }
    
    // ========================
    // 7. CONTACT FORM HANDLER
    // ========================
    const contactForm = document.querySelector('#inquiryForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Message Sent ✓';
            submitBtn.style.background = '#25D366';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2000);
        });
    }
    
    // ========================
    // 8. EVENT LISTENERS (Optimized with requestAnimationFrame)
    // ========================
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                checkSlideAnimations();
                checkAndAnimateNumbers();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial triggers
    setTimeout(() => {
        checkSlideAnimations();
        checkAndAnimateNumbers();
    }, 100);
    
    // Ensure hero is visible from the start
    const hero = document.querySelector('#home');
    if (hero && hero.classList.contains('slide-animate')) {
        hero.classList.add('visible');
        visibleStatus.set(hero, true);
    }
    
    // Re-trigger on resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            checkSlideAnimations();
            checkAndAnimateNumbers();
            adjustMainPadding();
        }, 150);
    });
    
    console.log('Portfolio website fully loaded with scroll position preservation');
});