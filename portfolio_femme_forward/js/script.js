// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Animation Observer - UPDATED with newsletter exception
const initScrollAnimations = function() {
    // Animation classes to watch for
    const animationClasses = [
        'animate-on-scroll',
        'slide-in-left',
        'slide-in-right',
        'slide-up',
        'slide-down',
        'fade-in',
        'zoom-in',
        'zoom-out',
        'flip-in',
        'bounce-in',
        'rotate-in',
        'stagger-children'
    ];
    
    // Create a selector for all elements with animation classes
    const selector = animationClasses.map(cls => `.${cls}`).join(', ');
    const animatedElements = document.querySelectorAll(selector);
    
    // Options for the Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };
    
    // Create the Intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'animated' class when element comes into view
                entry.target.classList.add('animated');
                
                // If it's a stagger container, animate its children
                if (entry.target.classList.contains('stagger-children')) {
                    const children = entry.target.children;
                    for (let i = 0; i < children.length; i++) {
                        setTimeout(() => {
                            children[i].classList.add('animated');
                        }, (i + 1) * 100);
                    }
                }
            } else {
                // Don't remove 'animated' class from newsletter form
                if (!entry.target.classList.contains('newsletter-form')) {
                    entry.target.classList.remove('animated');
                    
                    // Also remove from stagger children (except newsletter)
                    if (entry.target.classList.contains('stagger-children') && 
                        !entry.target.closest('.newsletter')) {
                        const children = entry.target.children;
                        for (let i = 0; i < children.length; i++) {
                            children[i].classList.remove('animated');
                        }
                    }
                }
            }
        });
    }, observerOptions);
    
    // Observe each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
};

// Mobile Menu Navigation with Auto-Close
class MobileMenuNavigation {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupMobileMenuLinks();
        this.setupSectionNavigation();
    }
    
    setupMobileMenuLinks() {
        const mobileMenuLinks = document.querySelectorAll('.mobile-nav-menu a');
        const mobileAuthLinks = document.querySelectorAll('.mobile-auth-btn, .mobile-additional-links a');
        
        // Handle navigation menu links
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Check if it's an internal section link (starts with #)
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    this.navigateToSection(href);
                }
                // For other links (like index.html), let them work normally but close menu
                else {
                    this.closeMobileMenu();
                }
            });
        });
        
        // Handle auth and additional links
        mobileAuthLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
    }
    
    setupSectionNavigation() {
        // Also handle desktop navigation for consistency
        const desktopNavLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        desktopNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToSection(link.getAttribute('href'));
            });
        });
    }
    
    navigateToSection(sectionId) {
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            // Close mobile menu first
            this.closeMobileMenu();
            
            // Calculate the position to scroll to (account for fixed header)
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;
            
            // Smooth scroll to section
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    closeMobileMenu() {
        const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
        if (mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            document.body.classList.remove('mobile-menu-open');
        }
    }
}

// Enhanced Mobile Menu Functionality
const enhanceMobileMenu = function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    
    if (mobileMenuBtn && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            document.body.classList.add('mobile-menu-open');
        });
    }
    
    if (mobileMenuClose && mobileMenuOverlay) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            document.body.classList.remove('mobile-menu-open');
        });
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                document.body.classList.remove('mobile-menu-open');
            }
        });
    }
    
    // Close mobile menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
            if (mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                document.body.classList.remove('mobile-menu-open');
            }
        }
    });
};

// Account Dropdown - Always show all options
class AccountDropdown {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupDropdown();
        this.setupMobileAccountAccess();
    }
    
    setupDropdown() {
        const accountDropdown = document.querySelector('.account-dropdown');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        
        if (!accountDropdown || !dropdownMenu) return;
        
        let hideTimeout;
        
        accountDropdown.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.transform = 'translateY(0)';
        });
        
        accountDropdown.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            }, 300);
        });
        
        dropdownMenu.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
        });
        
        dropdownMenu.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            }, 300);
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!accountDropdown.contains(e.target)) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            }
        });
    }
    
    setupMobileAccountAccess() {
        // Add account access to mobile menu
        const mobileAuthSection = document.querySelector('.mobile-auth-section');
        if (mobileAuthSection) {
            // Replace the existing auth buttons with comprehensive account access
            mobileAuthSection.innerHTML = `
                <h4>Account</h4>
                <div class="mobile-auth-buttons">
                    <a href="dashboard.html" class="mobile-auth-btn btn-dashboard">
                        <i class="fas fa-tachometer-alt"></i>
                        Dashboard
                    </a>
                    <a href="profile.html" class="mobile-auth-btn btn-profile">
                        <i class="fas fa-user-edit"></i>
                        My Profile
                    </a>
                    <a href="orders.html" class="mobile-auth-btn btn-orders">
                        <i class="fas fa-shopping-bag"></i>
                        My Orders
                    </a>
                    <a href="wishlist.html" class="mobile-auth-btn btn-wishlist">
                        <i class="far fa-heart"></i>
                        Wishlist
                    </a>
                    <a href="login.html" class="mobile-auth-btn btn-login">
                        <i class="fas fa-sign-in-alt"></i>
                        Sign In
                    </a>
                    <a href="signup.html" class="mobile-auth-btn btn-signup">
                        <i class="fas fa-user-plus"></i>
                        Create Account
                    </a>
                </div>
            `;
            
            // Add click handlers for mobile account links
            const mobileAccountLinks = document.querySelectorAll('.mobile-auth-btn');
            mobileAccountLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });
        }
    }
    
    closeMobileMenu() {
        const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
        if (mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            document.body.classList.remove('mobile-menu-open');
        }
    }
}

// Contact Form Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formProps = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Success message
            alert('Thank you for your message! We will get back to you within 24 hours.');
            
            // Reset form
            this.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            console.log('Contact form submitted:', formProps);
        }, 2000);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    
    // Initialize mobile menu navigation
    new MobileMenuNavigation();
    
    // Initialize account dropdown (always shows all options)
    new AccountDropdown();
    
    // Enhance mobile menu functionality
    enhanceMobileMenu();
    
    // Fix any existing mobile menu initialization
    const existingMobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (existingMobileMenuBtn && !existingMobileMenuBtn.hasAttribute('data-enhanced')) {
        existingMobileMenuBtn.setAttribute('data-enhanced', 'true');
    }
    
    // Special handling for newsletter form animations
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        setTimeout(() => {
            newsletterForm.classList.add('animated');
        }, 600);
    }
});

// Re-initialize animations when page is fully loaded
window.addEventListener('load', function() {
    initScrollAnimations();
});

// Fix for HTML syntax error in mobile menu button
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn && !mobileMenuBtn.innerHTML.includes('fa-bars')) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Language and currency change handlers
const languageSelect = document.getElementById('language');
const currencySelect = document.getElementById('currency');
const mobileLanguageSelect = document.getElementById('mobile-language');
const mobileCurrencySelect = document.getElementById('mobile-currency');

if (languageSelect) {
    languageSelect.addEventListener('change', function() {
        console.log('Language changed to:', this.value);
    });
}

if (currencySelect) {
    currencySelect.addEventListener('change', function() {
        console.log('Currency changed to:', this.value);
    });
}

if (mobileLanguageSelect) {
    mobileLanguageSelect.addEventListener('change', function() {
        console.log('Mobile language changed to:', this.value);
    });
}

if (mobileCurrencySelect) {
    mobileCurrencySelect.addEventListener('change', function() {
        console.log('Mobile currency changed to:', this.value);
    });
}

// Product action handlers
document.addEventListener('DOMContentLoaded', function() {
    const wishlistButtons = document.querySelectorAll('.product-action-btn .fa-heart');
    const searchButtons = document.querySelectorAll('.product-action-btn .fa-search');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            if (this.classList.contains('far')) {
                this.classList.remove('far');
                this.classList.add('fas');
                this.style.color = 'var(--terracotta)';
                console.log(`Added ${productName} to wishlist`);
            } else {
                this.classList.remove('fas');
                this.classList.add('far');
                this.style.color = '';
                console.log(`Removed ${productName} from wishlist`);
            }
        });
    });
    
    searchButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            console.log(`Quick view for ${productName}`);
        });
    });
});

// Newsletter form handler
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        console.log('Newsletter subscription for:', email);
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Numbers Counter Functionality
class NumbersCounter {
    constructor() {
        this.counters = [];
        this.hasCounted = false;
        this.init();
    }
    
    init() {
        this.setupCounters();
        this.setupIntersectionObserver();
    }
    
    setupCounters() {
        const counterElements = document.querySelectorAll('.number-count');
        
        counterElements.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
            
            this.counters.push({
                element: counter,
                target: target,
                duration: duration,
                counted: false
            });
        });
    }
    
    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.3
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startCounting();
                } else {
                    // Reset counters when section leaves view
                    this.resetCounters();
                }
            });
        }, options);
        
        const numbersSection = document.querySelector('.numbers-section');
        if (numbersSection) {
            observer.observe(numbersSection);
        }
    }
    
    startCounting() {
        this.counters.forEach(counterData => {
            if (!counterData.counted) {
                this.animateCounter(counterData);
                counterData.counted = true;
            }
        });
    }
    
    resetCounters() {
        this.counters.forEach(counterData => {
            counterData.counted = false;
            counterData.element.textContent = '0';
        });
    }
    
    animateCounter(counterData) {
        const { element, target, duration } = counterData;
        let start = 0;
        const increment = target / (duration / 16); // 60fps
        const isPercentage = target <= 100;
        
        const updateCounter = () => {
            start += increment;
            
            if (start < target) {
                let displayValue;
                if (isPercentage) {
                    displayValue = Math.ceil(start);
                } else {
                    // Format large numbers with commas
                    displayValue = Math.ceil(start).toLocaleString();
                }
                
                element.textContent = displayValue;
                requestAnimationFrame(updateCounter);
            } else {
                let finalValue;
                if (isPercentage) {
                    finalValue = target;
                } else {
                    finalValue = target.toLocaleString();
                }
                
                // Add plus sign for large numbers (except percentages)
                if (target > 1000 && !isPercentage) {
                    finalValue = target.toLocaleString() + '+';
                } else if (isPercentage) {
                    finalValue = target + '%';
                }
                
                element.textContent = finalValue;
            }
        };
        
        requestAnimationFrame(updateCounter);
    }
}

// Initialize numbers counter when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new NumbersCounter();
});

// Also initialize when page loads completely
window.addEventListener('load', function() {
    setTimeout(() => {
        if (document.querySelector('.numbers-section')) {
            new NumbersCounter();
        }
    }, 100);
});


// Enhanced Shopping Cart Functionality
class ShoppingCart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('shoppingCart')) || {};
        this.init();
    }
    
    init() {
        this.updateCartDisplay();
        this.setupEventListeners();
        this.initializeProductQuantities();
    }
    
    setupEventListeners() {
        // Quantity buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quantity-btn')) {
                this.handleQuantityChange(e.target);
            }
            
            if (e.target.classList.contains('btn-add-to-bag')) {
                this.addToCart(e.target);
            }
        });
    }
    
    initializeProductQuantities() {
        // Initialize all quantity displays to 0
        const quantityDisplays = document.querySelectorAll('.quantity-display');
        const priceDisplays = document.querySelectorAll('.price-display');
        const addToBagBtns = document.querySelectorAll('.btn-add-to-bag');
        
        quantityDisplays.forEach(display => {
            display.textContent = '0';
        });
        
        priceDisplays.forEach(display => {
            display.textContent = '€0';
        });
        
        addToBagBtns.forEach(btn => {
            btn.disabled = true;
        });
    }
    
    handleQuantityChange(button) {
        const productId = button.dataset.product;
        const isPlus = button.classList.contains('plus');
        const quantityDisplay = document.querySelector(`.quantity-display[data-product="${productId}"]`);
        const priceDisplay = document.querySelector(`.price-display[data-product="${productId}"]`);
        const addToBagBtn = document.querySelector(`.btn-add-to-bag[data-product="${productId}"]`);
        
        let currentQuantity = parseInt(quantityDisplay.textContent);
        
        if (isPlus) {
            currentQuantity++;
        } else {
            currentQuantity = Math.max(0, currentQuantity - 1);
        }
        
        quantityDisplay.textContent = currentQuantity;
        
        // Update price display
        const price = parseFloat(addToBagBtn.dataset.price);
        const totalPrice = currentQuantity * price;
        priceDisplay.textContent = `€${totalPrice}`;
        
        // Enable/disable add to bag button and minus button
        addToBagBtn.disabled = currentQuantity === 0;
        
        const minusBtn = document.querySelector(`.quantity-btn.minus[data-product="${productId}"]`);
        if (minusBtn) {
            minusBtn.disabled = currentQuantity === 0;
        }
    }
    
    addToCart(button) {
        const productId = button.dataset.product;
        const productName = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        const quantityDisplay = document.querySelector(`.quantity-display[data-product="${productId}"]`);
        const quantity = parseInt(quantityDisplay.textContent);
        
        if (quantity === 0) {
            this.showNotification('Please select at least 1 item', 'warning');
            return;
        }
        
        // Add to cart
        if (this.cart[productId]) {
            this.cart[productId].quantity += quantity;
        } else {
            this.cart[productId] = {
                name: productName,
                price: price,
                quantity: quantity,
                image: this.getProductImage(productId),
                id: productId
            };
        }
        
        // Save to localStorage
        this.saveCart();
        
        // Update UI
        this.updateCartDisplay();
        
        // Show feedback
        this.showAddToCartFeedback(button);
        
        // Reset quantity
        this.resetQuantity(productId);
        
        // Show success notification
        this.showNotification(`${quantity} ${productName}(s) added to bag!`, 'success');
    }
    
    getProductImage(productId) {
        const imageMap = {
            'emilia-jumpsuit': 'images/jumpsuit2.webp',
            'sophie-blazer': 'images/blazer1.webp',
            'charlotte-dress': 'images/dress2.webp',
            'isabelle-top': 'images/top2.webp'
        };
        return imageMap[productId] || 'images/placeholder.jpg';
    }
    
    showAddToCartFeedback(button) {
        const originalText = button.textContent;
        button.textContent = '✓ Added!';
        button.classList.add('added');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('added');
        }, 2000);
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        // Add styles for notification
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: var(--charcoal);
                    color: var(--ivory);
                    padding: 1rem 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    max-width: 300px;
                    animation: slideInRight 0.3s ease;
                }
                .notification-success { background: var(--emerald); }
                .notification-warning { background: var(--terracotta); }
                .notification-close {
                    background: none;
                    border: none;
                    color: inherit;
                    font-size: 1.2rem;
                    cursor: pointer;
                    padding: 0;
                    margin-left: auto;
                }
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(notification);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideInRight 0.3s ease reverse';
                setTimeout(() => notification.remove(), 300);
            }
        }, 3000);
        
        // Close on click
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }
    
    resetQuantity(productId) {
        const quantityDisplay = document.querySelector(`.quantity-display[data-product="${productId}"]`);
        const priceDisplay = document.querySelector(`.price-display[data-product="${productId}"]`);
        const addToBagBtn = document.querySelector(`.btn-add-to-bag[data-product="${productId}"]`);
        const minusBtn = document.querySelector(`.quantity-btn.minus[data-product="${productId}"]`);
        
        quantityDisplay.textContent = '0';
        priceDisplay.textContent = '€0';
        addToBagBtn.disabled = true;
        if (minusBtn) minusBtn.disabled = true;
    }
    
    updateCartDisplay() {
        const totalItems = this.getTotalItems();
        this.updateCartIcon(totalItems);
        this.updateMobileCartIcon(totalItems);
    }
    
    getTotalItems() {
        return Object.values(this.cart).reduce((total, item) => total + item.quantity, 0);
    }
    
    updateCartIcon(totalItems) {
        const cartIcon = document.querySelector('.shopping-bag-count');
        if (!cartIcon) return;
        
        const badge = cartIcon.querySelector('.bag-count-badge');
        if (badge) {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }
    
    updateMobileCartIcon(totalItems) {
        const mobileCartIcon = document.querySelector('.mobile-shopping-bag-link .mobile-bag-count');
        if (mobileCartIcon) {
            mobileCartIcon.textContent = totalItems;
            mobileCartIcon.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }
    
    saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
    }
    
    getCart() {
        return this.cart;
    }
    
    clearCart() {
        this.cart = {};
        this.saveCart();
        this.updateCartDisplay();
    }
    
    removeItem(productId) {
        delete this.cart[productId];
        this.saveCart();
        this.updateCartDisplay();
    }
    
    getTotalPrice() {
        return Object.values(this.cart).reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}

// Initialize shopping cart when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize shopping cart
    window.shoppingCart = new ShoppingCart();
    
    console.log('Shopping cart initialized. Current cart:', window.shoppingCart.getCart());
    
    // Test: Log when items are added (for debugging)
    const originalAddToCart = window.shoppingCart.addToCart;
    window.shoppingCart.addToCart = function(button) {
        console.log('Adding item to cart:', {
            productId: button.dataset.product,
            name: button.dataset.name,
            price: button.dataset.price
        });
        originalAddToCart.call(this, button);
        console.log('Updated cart:', this.getCart());
    };
});