// Collections Page Functionality
class CollectionsPage {
    constructor() {
        this.collections = [];
        this.filteredCollections = [];
        this.currentFilter = 'all';
        
        this.init();
    }
    
    init() {
        this.loadCollections();
        this.setupEventListeners();
        this.setupCollectionSpotlight();
        this.setupCountdowns();
        this.setupStatsCounter();
    }
    
    loadCollections() {
        // Sample collections data
        this.collections = [
            {
                id: 1,
                name: "Executive Power",
                description: "Bold silhouettes and commanding presence for the boardroom leader",
                category: "new",
                items: 24,
                price: 189,
                image: "images/collections/executive-power.jpg",
                badge: "New"
            },
            {
                id: 2,
                name: "Parisian Spring",
                description: "Lightweight fabrics and fresh colors for the transitional season",
                category: "seasonal",
                items: 18,
                price: 145,
                image: "images/collections/parisian-spring.jpg",
                badge: "Seasonal"
            },
            {
                id: 3,
                name: "Heritage Tailoring",
                description: "Timeless craftsmanship meets contemporary design",
                category: "limited",
                items: 12,
                price: 295,
                image: "images/collections/heritage-tailoring.jpg",
                badge: "Limited"
            },
            {
                id: 4,
                name: "Urban Professional",
                description: "Modern cuts for the city-dwelling professional",
                category: "new",
                items: 20,
                price: 165,
                image: "images/collections/urban-professional.jpg",
                badge: "New"
            },
            {
                id: 5,
                name: "Evening Executive",
                description: "From boardroom to evening events with seamless elegance",
                category: "seasonal",
                items: 15,
                price: 225,
                image: "images/collections/evening-executive.jpg",
                badge: "Seasonal"
            },
            {
                id: 6,
                name: "Designer Collaboration",
                description: "Exclusive pieces from our partnership with leading designers",
                category: "collaboration",
                items: 8,
                price: 350,
                image: "images/collections/designer-collaboration.jpg",
                badge: "Collaboration"
            },
            {
                id: 7,
                name: "Weekend Luxe",
                description: "Sophisticated casual wear for the modern professional",
                category: "seasonal",
                items: 16,
                price: 135,
                image: "images/collections/weekend-luxe.jpg",
                badge: "Seasonal"
            },
            {
                id: 8,
                name: "Global Influencer",
                description: "International styles adapted for the professional woman",
                category: "collaboration",
                items: 22,
                price: 195,
                image: "images/collections/global-influencer.jpg",
                badge: "Collaboration"
            }
        ];
        
        this.applyFilter();
    }
    
    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('.collection-filter').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleFilterChange(e.target);
            });
        });
        
        // View collection buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.collection-view-btn')) {
                this.handleViewCollection(e.target.closest('.featured-collection-card'));
            }
        });
        
        // Notify buttons
        document.querySelectorAll('.btn-notify').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleNotifyRequest(e.target);
            });
        });
        
        // Thumbnail clicks
        document.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', (e) => {
                this.handleThumbnailClick(e.currentTarget);
            });
        });
    }
    
    handleFilterChange(button) {
        // Update active state
        document.querySelectorAll('.collection-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Apply filter
        this.currentFilter = button.dataset.filter;
        this.applyFilter();
    }
    
    applyFilter() {
        if (this.currentFilter === 'all') {
            this.filteredCollections = this.collections;
        } else {
            this.filteredCollections = this.collections.filter(collection => 
                collection.category === this.currentFilter
            );
        }
        
        this.displayCollections();
    }
    
    displayCollections() {
        const grid = document.getElementById('collections-grid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        if (this.filteredCollections.length === 0) {
            grid.innerHTML = `
                <div class="no-collections" style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                    <h3>No collections found</h3>
                    <p>Try selecting a different filter to see more collections.</p>
                </div>
            `;
            return;
        }
        
        this.filteredCollections.forEach(collection => {
            const card = this.createCollectionCard(collection);
            grid.appendChild(card);
        });
        
        // Re-initialize scroll animations
        if (typeof initScrollAnimations === 'function') {
            setTimeout(() => {
                initScrollAnimations();
            }, 100);
        }
    }
    
    createCollectionCard(collection) {
        const card = document.createElement('div');
        card.className = 'collection-card zoom-in';
        card.dataset.category = collection.category;
        
        card.innerHTML = `
            <div class="collection-card-image">
                <img src="${collection.image}" alt="${collection.name}" loading="lazy">
                ${collection.badge ? `<div class="collection-card-badge">${collection.badge}</div>` : ''}
            </div>
            <div class="collection-card-content">
                <h4>${collection.name}</h4>
                <p>${collection.description}</p>
                <div class="collection-card-meta">
                    <span class="collection-items">${collection.items} pieces</span>
                    <span class="collection-price">From €${collection.price}</span>
                </div>
            </div>
        `;
        
        // Add click event to navigate to collection
        card.addEventListener('click', () => {
            this.handleViewCollection(card);
        });
        
        return card;
    }
    
    handleViewCollection(cardElement) {
        const collectionName = cardElement.querySelector('h3, h4').textContent;
        console.log(`Viewing collection: ${collectionName}`);
        
        // In a real application, this would navigate to the collection page
        // For now, show a notification
        if (window.shoppingCart && window.shoppingCart.showNotification) {
            window.shoppingCart.showNotification(`Opening ${collectionName} collection...`, 'info');
        }
    }
    
    setupCollectionSpotlight() {
        // Set up thumbnail functionality
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.querySelector('.main-spotlight-image img');
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Update active state
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
                
                // Update main image (in a real app, this would change the image source)
                if (mainImage) {
                    // You would update the main image source here
                    // mainImage.src = thumbnail.querySelector('img').src;
                }
            });
        });
    }
    
    setupCountdowns() {
        const countdowns = document.querySelectorAll('.countdown');
        
        countdowns.forEach(countdown => {
            const targetDate = new Date(countdown.dataset.date);
            this.startCountdown(countdown, targetDate);
        });
    }
    
    startCountdown(countdownElement, targetDate) {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            
            if (distance < 0) {
                countdownElement.innerHTML = '<span class="countdown-finished">Available Now</span>';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            const daysElement = countdownElement.querySelector('.days');
            const hoursElement = countdownElement.querySelector('.hours');
            const minutesElement = countdownElement.querySelector('.minutes');
            
            if (daysElement) daysElement.textContent = this.padZero(days);
            if (hoursElement) hoursElement.textContent = this.padZero(hours);
            if (minutesElement) minutesElement.textContent = this.padZero(minutes);
        };
        
        // Update immediately and then every minute
        updateCountdown();
        setInterval(updateCountdown, 60000);
    }
    
    padZero(number) {
        return number < 10 ? '0' + number : number;
    }
    
    setupStatsCounter() {
        const stats = document.querySelectorAll('.stat-number[data-count]');
        
        stats.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            this.animateCounter(stat, target, 2000);
        });
    }
    
    animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const updateCounter = () => {
            start += increment;
            
            if (start < target) {
                element.textContent = Math.ceil(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
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
    
    handleNotifyRequest(button) {
        const collectionCard = button.closest('.upcoming-collection-card');
        const collectionName = collectionCard.querySelector('h3').textContent;
        
        // Show loading state
        const originalText = button.textContent;
        button.textContent = 'Subscribing...';
        button.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            button.textContent = 'Subscribed!';
            button.style.background = 'var(--emerald)';
            
            if (window.shoppingCart && window.shoppingCart.showNotification) {
                window.shoppingCart.showNotification(`You'll be notified when ${collectionName} launches!`, 'success');
            }
            
            // Reset after 3 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.background = '';
            }, 3000);
        }, 1500);
    }
    
    handleThumbnailClick(thumbnail) {
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
        
        // In a real application, this would update the main spotlight image
        console.log('Thumbnail clicked, would update main image');
    }
}

// Initialize collections page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the collections page
    if (document.querySelector('.collections-hero')) {
        window.collectionsPage = new CollectionsPage();
    }
});

// Newsletter form handler for collections page
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Show loading state
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Subscribing...';
            button.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                if (window.shoppingCart && window.shoppingCart.showNotification) {
                    window.shoppingCart.showNotification('Thank you for subscribing to collection updates!', 'success');
                }
                
                this.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 1500);
        });
    }
});