// About Page Functionality
class AboutPage {
    constructor() {
        this.currentTestimonial = 0;
        this.testimonials = [];
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupCounters();
        this.setupTestimonials();
        this.setupTimelineAnimations();
    }
    
    setupEventListeners() {
        // Testimonial slider controls
        const prevBtn = document.querySelector('.slider-prev');
        const nextBtn = document.querySelector('.slider-next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.prevTestimonial();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextTestimonial();
            });
        }
        
        // Newsletter form
        const newsletterForm = document.getElementById('about-newsletter');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                this.handleNewsletterSubmit(e);
            });
        }
        
        // Team member hover effects
        document.querySelectorAll('.team-member').forEach(member => {
            member.addEventListener('mouseenter', () => {
                this.handleTeamMemberHover(member);
            });
        });
    }
    
    setupCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            this.animateCounter(counter, target, 2000);
        });
    }
    
    animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const updateCounter = () => {
            start += increment;
            
            if (start < target) {
                element.textContent = Math.ceil(start).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };
        
        // Start animation when element comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    }
    
    setupTestimonials() {
        this.testimonials = document.querySelectorAll('.testimonial');
        this.showTestimonial(this.currentTestimonial);
        
        // Auto-advance testimonials
        setInterval(() => {
            this.nextTestimonial();
        }, 5000);
    }
    
    showTestimonial(index) {
        this.testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        if (this.testimonials[index]) {
            this.testimonials[index].classList.add('active');
        }
    }
    
    nextTestimonial() {
        this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
        this.showTestimonial(this.currentTestimonial);
    }
    
    prevTestimonial() {
        this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
        this.showTestimonial(this.currentTestimonial);
    }
    
    setupTimelineAnimations() {
        // Add intersection observer for timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, {
            threshold: 0.3
        });
        
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            if (item.classList.contains('slide-in-left')) {
                item.style.transform = 'translateX(-50px)';
            } else {
                item.style.transform = 'translateX(50px)';
            }
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });
    }
    
    handleTeamMemberHover(member) {
        // Add any additional hover effects if needed
        console.log('Team member hover:', member.querySelector('h3').textContent);
    }
    
    handleNewsletterSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.querySelector('input[type="email"]').value;
        
        // Show loading state
        const button = form.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Subscribing...';
        button.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            if (window.shoppingCart && window.shoppingCart.showNotification) {
                window.shoppingCart.showNotification('Thank you for subscribing to Femme Forward updates!', 'success');
            }
            
            form.reset();
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);
    }
}

// Initialize about page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the about page
    if (document.querySelector('.about-hero')) {
        window.aboutPage = new AboutPage();
    }
});

// Additional scroll animations for about page
document.addEventListener('DOMContentLoaded', function() {
    // Custom intersection observer for sustainability stats
    const sustainabilityStats = document.querySelectorAll('.sustainability-stat .stat-number');
    
    if (sustainabilityStats.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.count);
                    let start = 0;
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    
                    const updateCounter = () => {
                        start += increment;
                        
                        if (start < target) {
                            entry.target.textContent = Math.ceil(start);
                            requestAnimationFrame(updateCounter);
                        } else {
                            entry.target.textContent = target;
                        }
                    };
                    
                    requestAnimationFrame(updateCounter);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        sustainabilityStats.forEach(stat => {
            statsObserver.observe(stat);
        });
    }
});