// Dashboard Page Functionality
class Dashboard {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupCharts();
        this.setupNotifications();
        this.loadUserData();
    }
    
    setupEventListeners() {
        // Quick action buttons
        document.querySelectorAll('.quick-action-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleQuickAction(e.currentTarget);
            });
        });
        
        // Order actions
        document.querySelectorAll('.btn-action').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleOrderAction(e.currentTarget);
            });
        });
        
        // Wishlist actions
        document.querySelectorAll('.wishlist-remove').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleWishlistRemove(e.currentTarget);
            });
        });
        
        document.querySelectorAll('.btn-move-to-bag').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleMoveToBag(e.currentTarget);
            });
        });
        
        // Quick add to bag
        document.querySelectorAll('.quick-add').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleQuickAdd(e.currentTarget);
            });
        });
        
        // Update profile button
        const updateProfileBtn = document.querySelector('.btn-update-profile');
        if (updateProfileBtn) {
            updateProfileBtn.addEventListener('click', () => {
                this.handleUpdateProfile();
            });
        }
        
        // Newsletter form
        const newsletterForm = document.getElementById('dashboard-newsletter');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                this.handleNewsletterSubmit(e);
            });
        }
        
        // Sidebar navigation
        document.querySelectorAll('.sidebar-nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                this.handleNavClick(e.currentTarget);
            });
        });
    }
    
    setupCharts() {
        // This would initialize charts using a library like Chart.js
        // For now, we'll simulate chart data loading
        console.log('Initializing dashboard charts...');
        
        // Simulate loading user engagement data
        setTimeout(() => {
            this.updateEngagementMetrics();
        }, 1000);
    }
    
    setupNotifications() {
        // Check for new notifications
        this.checkNewNotifications();
        
        // Set up notification polling (in a real app)
        setInterval(() => {
            this.checkNewNotifications();
        }, 30000); // Check every 30 seconds
    }
    
    checkNewNotifications() {
        // Simulate checking for new notifications
        const hasNewNotifications = Math.random() > 0.7;
        
        if (hasNewNotifications) {
            this.showNotificationBadge();
        }
    }
    
    showNotificationBadge() {
        const alertButton = document.querySelector('.quick-action:nth-child(1)');
        if (alertButton && !alertButton.querySelector('.notification-badge')) {
            const badge = document.createElement('span');
            badge.className = 'notification-badge';
            badge.textContent = '1';
            badge.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                background: var(--terracotta);
                color: white;
                border-radius: 50%;
                width: 18px;
                height: 18px;
                font-size: 0.7rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
            `;
            alertButton.style.position = 'relative';
            alertButton.appendChild(badge);
        }
    }
    
    loadUserData() {
        // Simulate loading user data
        console.log('Loading user dashboard data...');
        
        // Update various dashboard elements with user data
        setTimeout(() => {
            this.updateUserStats();
            this.updateRecentActivity();
        }, 500);
    }
    
    updateUserStats() {
        // Update stat cards with real data (simulated)
        const stats = {
            orders: 12,
            wishlist: 24,
            points: 1250,
            appointments: 2
        };
        
        Object.keys(stats).forEach((stat, index) => {
            const statCard = document.querySelectorAll('.stat-card')[index];
            if (statCard) {
                const numberElement = statCard.querySelector('h3');
                if (numberElement) {
                    this.animateCounter(numberElement, stats[stat], 1000);
                }
            }
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
        
        requestAnimationFrame(updateCounter);
    }
    
    updateRecentActivity() {
        // Simulate updating recent activity feed
        console.log('Updating recent activity...');
    }
    
    updateEngagementMetrics() {
        // Simulate updating engagement metrics
        console.log('Updating engagement metrics...');
    }
    
    handleQuickAction(button) {
        const action = button.querySelector('span').textContent;
        console.log(`Quick action: ${action}`);
        
        // Show loading state
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        button.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            this.showNotification(`Action "${action}" completed successfully!`, 'success');
            
            // Restore button
            button.innerHTML = originalHTML;
            button.disabled = false;
        }, 1000);
    }
    
    handleOrderAction(button) {
        const action = button.textContent;
        const orderItem = button.closest('.order-item');
        const orderName = orderItem.querySelector('h4').textContent;
        
        console.log(`Order action: ${action} for ${orderName}`);
        
        if (action === 'Track') {
            this.showNotification(`Tracking information for ${orderName}`, 'info');
        } else if (action === 'Reorder') {
            this.showNotification(`Adding ${orderName} to your cart`, 'success');
        } else if (action === 'View Details') {
            this.showNotification(`Opening order details for ${orderName}`, 'info');
        } else if (action === 'Join') {
            this.showNotification(`Joining styling session for ${orderName}`, 'success');
        } else if (action === 'Details') {
            this.showNotification(`Showing appointment details`, 'info');
        } else if (action === 'Reschedule') {
            this.showNotification(`Opening rescheduling for appointment`, 'info');
        }
    }
    
    handleWishlistRemove(button) {
        const wishlistItem = button.closest('.wishlist-item');
        const itemName = wishlistItem.querySelector('h4').textContent;
        
        // Show confirmation
        if (confirm(`Remove ${itemName} from your wishlist?`)) {
            // Add removal animation
            wishlistItem.style.opacity = '0';
            wishlistItem.style.transform = 'translateX(-100px)';
            wishlistItem.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            
            setTimeout(() => {
                wishlistItem.remove();
                this.showNotification(`${itemName} removed from wishlist`, 'info');
                
                // Update wishlist count
                this.updateWishlistCount();
            }, 300);
        }
    }
    
    handleMoveToBag(button) {
        const wishlistItem = button.closest('.wishlist-item');
        const itemName = wishlistItem.querySelector('h4').textContent;
        
        // Show loading
        button.textContent = 'Adding...';
        button.disabled = true;
        
        setTimeout(() => {
            this.showNotification(`${itemName} added to shopping bag!`, 'success');
            
            // Remove from wishlist
            wishlistItem.remove();
            this.updateWishlistCount();
            
            // Update bag count
            this.updateBagCount();
        }, 800);
    }
    
    handleQuickAdd(button) {
        const recommendationItem = button.closest('.recommendation-item');
        const itemName = recommendationItem.querySelector('h4').textContent;
        
        // Show loading animation
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-check"></i>';
            this.showNotification(`${itemName} added to shopping bag!`, 'success');
            
            // Update bag count
            this.updateBagCount();
            
            // Reset button after delay
            setTimeout(() => {
                button.innerHTML = originalHTML;
            }, 2000);
        }, 800);
    }
    
    handleUpdateProfile() {
        this.showNotification('Opening profile editor...', 'info');
        // In a real app, this would open a modal or navigate to profile page
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
            this.showNotification('Successfully subscribed to dashboard updates!', 'success');
            
            form.reset();
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);
    }
    
    handleNavClick(link) {
        const section = link.textContent.trim();
        console.log(`Navigating to: ${section}`);
        
        // Update active state
        document.querySelectorAll('.sidebar-nav a').forEach(a => {
            a.parentElement.classList.remove('active');
        });
        link.parentElement.classList.add('active');
        
        // Show loading state for the section
        this.showNotification(`Loading ${section}...`, 'info');
    }
    
    updateWishlistCount() {
        const wishlistItems = document.querySelectorAll('.wishlist-item');
        const wishlistCount = document.querySelector('.stat-card:nth-child(2) h3');
        
        if (wishlistCount) {
            this.animateCounter(wishlistCount, wishlistItems.length, 500);
        }
    }
    
    updateBagCount() {
        const bagBadge = document.querySelector('.bag-count-badge');
        const mobileBagBadge = document.querySelector('.mobile-bag-count');
        
        if (bagBadge) {
            let currentCount = parseInt(bagBadge.textContent);
            bagBadge.textContent = currentCount + 1;
            bagBadge.style.display = 'flex';
        }
        
        if (mobileBagBadge) {
            let currentCount = parseInt(mobileBagBadge.textContent);
            mobileBagBadge.textContent = currentCount + 1;
            mobileBagBadge.style.display = 'flex';
        }
    }
    
    showNotification(message, type = 'info') {
        // Use the existing notification system from shopping cart
        if (window.shoppingCart && window.shoppingCart.showNotification) {
            window.shoppingCart.showNotification(message, type);
        } else {
            // Fallback notification
            console.log(`[${type.toUpperCase()}] ${message}`);
        }
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the dashboard page
    if (document.querySelector('.dashboard-header')) {
        window.dashboard = new Dashboard();
        
        // Add some sample interactions
        console.log('Dashboard initialized successfully');
        
        // Simulate some initial notifications
        setTimeout(() => {
            if (window.shoppingCart && window.shoppingCart.showNotification) {
                window.shoppingCart.showNotification('Welcome to your personalized dashboard!', 'success');
            }
        }, 1000);
    }
});