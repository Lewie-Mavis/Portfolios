// Admin Panel JavaScript
class AdminPanel {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupNavigation();
        this.setupAnimations();
        this.setupEventListeners();
    }
    
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const adminSections = document.querySelectorAll('.admin-section');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links and sections
                navLinks.forEach(nav => nav.parentElement.classList.remove('active'));
                adminSections.forEach(section => section.classList.remove('active'));
                
                // Add active class to clicked link
                link.parentElement.classList.add('active');
                
                // Show corresponding section
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });
    }
    
    setupAnimations() {
        // Animate elements when they come into view
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -20% 0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);
        
        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    setupEventListeners() {
        // Logout button
        const logoutBtn = document.querySelector('.admin-logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to logout?')) {
                    // Simulate logout
                    window.location.href = 'index.html';
                }
            });
        }
        
        // Quick action buttons
        const quickActionBtns = document.querySelectorAll('.quick-action-btn');
        quickActionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.textContent.trim();
                this.handleQuickAction(action);
            });
        });
    }
    
    handleQuickAction(action) {
        switch(action) {
            case 'Add New Product':
                this.navigateToSection('products');
                break;
            case 'Manage Collections':
                this.navigateToSection('collections');
                break;
            case 'View Analytics':
                this.navigateToSection('analytics');
                break;
            case 'Send Newsletter':
                this.showNewsletterModal();
                break;
        }
    }
    
    navigateToSection(sectionId) {
        const navLink = document.querySelector(`[href="#${sectionId}"]`);
        if (navLink) {
            navLink.click();
        }
    }
    
    showNewsletterModal() {
        // Simulate newsletter modal
        alert('Newsletter functionality would open here');
    }
}

// Initialize admin panel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new AdminPanel();
});

// Add some sample data updates
function updateDashboardStats() {
    // This would typically fetch real data from an API
    setInterval(() => {
        const stats = document.querySelectorAll('.stat-number');
        if (stats.length > 0) {
            // Simulate small fluctuations in numbers
            stats.forEach(stat => {
                const current = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
                const change = Math.floor(Math.random() * 10) - 2; // -2 to +7
                const newValue = Math.max(0, current + change);
                stat.textContent = stat.textContent.includes('€') 
                    ? `€${newValue.toLocaleString()}`
                    : newValue.toLocaleString();
            });
        }
    }, 10000); // Update every 10 seconds
}

// Start stats updates
updateDashboardStats();