// Shop Page Functionality
class ShopPage {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.filters = {
            category: [],
            size: [],
            color: [],
            price: { min: 0, max: 500 },
            occasion: []
        };
        this.sortBy = 'featured';
        
        this.init();
    }
    
    init() {
        this.loadProducts();
        this.setupEventListeners();
        this.setupMobileFilters();
        this.updateProductCount();
    }
    
    loadProducts() {
        // In a real application, this would be an API call
        // For now, we'll use sample data
        this.products = [
            {
                id: 1,
                name: "Emilia Jumpsuit",
                price: 245,
                originalPrice: null,
                category: "jumpsuits",
                sizes: ["xs", "s", "m", "l"],
                colors: ["black", "navy"],
                occasions: ["office", "meetings", "events"],
                image: "images/jumpsuit2.webp",
                badge: "new"
            },
            {
                id: 2,
                name: "Sophie Blazer",
                price: 189,
                originalPrice: null,
                category: "suits",
                sizes: ["xs", "s", "m", "l", "xl"],
                colors: ["black", "navy", "beige"],
                occasions: ["office", "meetings"],
                image: "images/blazer1.webp",
                badge: null
            },
            {
                id: 3,
                name: "Charlotte Dress",
                price: 165,
                originalPrice: 195,
                category: "dresses",
                sizes: ["s", "m", "l"],
                colors: ["black", "red", "green"],
                occasions: ["office", "events", "evening"],
                image: "images/dress2.webp",
                badge: "sale"
            },
            {
                id: 4,
                name: "Isabelle Top",
                price: 89,
                originalPrice: null,
                category: "tops",
                sizes: ["xs", "s", "m", "l", "xl"],
                colors: ["white", "black", "navy"],
                occasions: ["office", "meetings"],
                image: "images/top2.webp",
                badge: null
            },
            {
                id: 5,
                name: "Executive Suit Set",
                price: 345,
                originalPrice: null,
                category: "suits",
                sizes: ["s", "m", "l"],
                colors: ["navy", "black"],
                occasions: ["office", "meetings"],
                image: "images/suits1.webp",
                badge: "new"
            },
            {
                id: 6,
                name: "Parisian Jumpsuit",
                price: 275,
                originalPrice: 325,
                category: "jumpsuits",
                sizes: ["xs", "s", "m"],
                colors: ["black", "white"],
                occasions: ["events", "evening"],
                image: "images/jumpsuit1.jpeg",
                badge: "sale"
            },
            {
                id: 7,
                name: "Boardroom Dress",
                price: 195,
                originalPrice: null,
                category: "dresses",
                sizes: ["xs", "s", "m", "l"],
                colors: ["navy", "black", "red"],
                occasions: ["office", "meetings"],
                image: "images/dress1.webp",
                badge: null
            },
            {
                id: 8,
                name: "Silk Blouse",
                price: 125,
                originalPrice: null,
                category: "tops",
                sizes: ["xs", "s", "m", "l"],
                colors: ["white", "beige", "black"],
                occasions: ["office", "meetings", "events"],
                image: "images/top1.webp",
                badge: null
            },
            // Add more products as needed...
        ];
        
        // Duplicate products to have more for demonstration
        for (let i = 9; i <= 24; i++) {
            const original = this.products[(i - 1) % 8];
            this.products.push({
                ...original,
                id: i,
                name: `${original.name} ${Math.floor((i - 1) / 8) + 1}`
            });
        }
        
        this.applyFilters();
    }
    
    setupEventListeners() {
        // Filter checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.handleFilterChange());
        });
        
        // Price range
        const minPriceInput = document.getElementById('min-price');
        const maxPriceInput = document.getElementById('max-price');
        const rangeMin = document.querySelector('.range-min');
        const rangeMax = document.querySelector('.range-max');
        
        if (minPriceInput && maxPriceInput && rangeMin && rangeMax) {
            minPriceInput.addEventListener('input', () => this.handlePriceChange());
            maxPriceInput.addEventListener('input', () => this.handlePriceChange());
            rangeMin.addEventListener('input', () => this.handleRangeChange());
            rangeMax.addEventListener('input', () => this.handleRangeChange());
        }
        
        // Sort options
        const sortSelect = document.getElementById('sort-by');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortBy = e.target.value;
                this.applyFilters();
            });
        }
        
        // Clear filters
        const clearFiltersBtn = document.querySelector('.clear-filters');
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => this.clearFilters());
        }
        
        // Pagination
        document.querySelectorAll('.pagination-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handlePagination(e));
        });
        
        document.querySelectorAll('.pagination-number').forEach(number => {
            number.addEventListener('click', (e) => this.handlePageNumber(e));
        });
    }
    
    setupMobileFilters() {
        const mobileFilterBtn = document.querySelector('.mobile-filter-btn');
        const mobileFilterOverlay = document.querySelector('.mobile-filter-overlay');
        const mobileFilterClose = document.querySelector('.mobile-filter-close');
        const applyFiltersBtn = document.querySelector('.apply-filters');
        const clearFiltersMobileBtn = document.querySelector('.clear-filters-mobile');
        
        if (mobileFilterBtn && mobileFilterOverlay) {
            mobileFilterBtn.addEventListener('click', () => {
                mobileFilterOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
        
        if (mobileFilterClose && mobileFilterOverlay) {
            mobileFilterClose.addEventListener('click', () => {
                mobileFilterOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
        
        if (mobileFilterOverlay) {
            mobileFilterOverlay.addEventListener('click', (e) => {
                if (e.target === mobileFilterOverlay) {
                    mobileFilterOverlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
        
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', () => {
                mobileFilterOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                this.handleFilterChange();
            });
        }
        
        if (clearFiltersMobileBtn) {
            clearFiltersMobileBtn.addEventListener('click', () => {
                this.clearFilters();
                mobileFilterOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
        
        // Copy desktop filters to mobile
        this.setupMobileFilterContent();
    }
    
    setupMobileFilterContent() {
        const mobileFilterContent = document.querySelector('.mobile-filter-content');
        const desktopSidebar = document.querySelector('.shop-sidebar');
        
        if (mobileFilterContent && desktopSidebar) {
            // Clone the filter groups (excluding the header)
            const filterGroups = desktopSidebar.querySelectorAll('.filter-group');
            mobileFilterContent.innerHTML = '';
            
            filterGroups.forEach(group => {
                mobileFilterContent.appendChild(group.cloneNode(true));
            });
            
            // Re-attach event listeners for mobile filters
            mobileFilterContent.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    // Sync with desktop filters
                    const desktopCheckbox = document.querySelector(`input[name="${checkbox.name}"][value="${checkbox.value}"]`);
                    if (desktopCheckbox) {
                        desktopCheckbox.checked = checkbox.checked;
                    }
                });
            });
            
            // Price range for mobile
            const mobilePriceInputs = mobileFilterContent.querySelectorAll('.price-inputs input');
            const mobileRangeInputs = mobileFilterContent.querySelectorAll('.price-slider input[type="range"]');
            
            if (mobilePriceInputs.length >= 2 && mobileRangeInputs.length >= 2) {
                mobilePriceInputs[0].addEventListener('input', () => this.handlePriceChange());
                mobilePriceInputs[1].addEventListener('input', () => this.handlePriceChange());
                mobileRangeInputs[0].addEventListener('input', () => this.handleRangeChange());
                mobileRangeInputs[1].addEventListener('input', () => this.handleRangeChange());
            }
        }
    }
    
    handleFilterChange() {
        this.updateFilters();
        this.applyFilters();
    }
    
    updateFilters() {
        // Category
        this.filters.category = Array.from(document.querySelectorAll('input[name="category"]:checked'))
            .map(checkbox => checkbox.value);
        
        // Size
        this.filters.size = Array.from(document.querySelectorAll('input[name="size"]:checked'))
            .map(checkbox => checkbox.value);
        
        // Color
        this.filters.color = Array.from(document.querySelectorAll('input[name="color"]:checked'))
            .map(checkbox => checkbox.value);
        
        // Occasion
        this.filters.occasion = Array.from(document.querySelectorAll('input[name="occasion"]:checked'))
            .map(checkbox => checkbox.value);
        
        // Price (from inputs)
        const minPriceInput = document.getElementById('min-price');
        const maxPriceInput = document.getElementById('max-price');
        
        if (minPriceInput && maxPriceInput) {
            this.filters.price.min = parseInt(minPriceInput.value) || 0;
            this.filters.price.max = parseInt(maxPriceInput.value) || 500;
        }
    }
    
    handlePriceChange() {
        const minPriceInput = document.getElementById('min-price');
        const maxPriceInput = document.getElementById('max-price');
        
        if (minPriceInput && maxPriceInput) {
            const minPrice = parseInt(minPriceInput.value) || 0;
            const maxPrice = parseInt(maxPriceInput.value) || 500;
            
            // Update range sliders
            const rangeMin = document.querySelector('.range-min');
            const rangeMax = document.querySelector('.range-max');
            
            if (rangeMin && rangeMax) {
                rangeMin.value = minPrice;
                rangeMax.value = maxPrice;
                this.updateSliderTrack();
            }
            
            this.filters.price.min = minPrice;
            this.filters.price.max = maxPrice;
            this.applyFilters();
        }
    }
    
    handleRangeChange() {
        const rangeMin = document.querySelector('.range-min');
        const rangeMax = document.querySelector('.range-max');
        const minPriceInput = document.getElementById('min-price');
        const maxPriceInput = document.getElementById('max-price');
        
        if (rangeMin && rangeMax && minPriceInput && maxPriceInput) {
            const minVal = parseInt(rangeMin.value);
            const maxVal = parseInt(rangeMax.value);
            
            // Ensure min doesn't exceed max
            if (minVal > maxVal) {
                rangeMin.value = maxVal;
                minPriceInput.value = maxVal;
            } else {
                minPriceInput.value = minVal;
            }
            
            // Ensure max doesn't go below min
            if (maxVal < minVal) {
                rangeMax.value = minVal;
                maxPriceInput.value = minVal;
            } else {
                maxPriceInput.value = maxVal;
            }
            
            this.updateSliderTrack();
            
            this.filters.price.min = parseInt(minPriceInput.value);
            this.filters.price.max = parseInt(maxPriceInput.value);
            this.applyFilters();
        }
    }
    
    updateSliderTrack() {
        const rangeMin = document.querySelector('.range-min');
        const rangeMax = document.querySelector('.range-max');
        const sliderTrack = document.querySelector('.slider-track');
        
        if (rangeMin && rangeMax && sliderTrack) {
            const minVal = parseInt(rangeMin.value);
            const maxVal = parseInt(rangeMax.value);
            const minPercent = (minVal / 500) * 100;
            const maxPercent = (maxVal / 500) * 100;
            
            sliderTrack.style.left = `${minPercent}%`;
            sliderTrack.style.right = `${100 - maxPercent}%`;
        }
    }
    
    applyFilters() {
        this.filteredProducts = this.products.filter(product => {
            // Category filter
            if (this.filters.category.length > 0 && !this.filters.category.includes(product.category)) {
                return false;
            }
            
            // Size filter
            if (this.filters.size.length > 0 && !this.filters.size.some(size => product.sizes.includes(size))) {
                return false;
            }
            
            // Color filter
            if (this.filters.color.length > 0 && !this.filters.color.some(color => product.colors.includes(color))) {
                return false;
            }
            
            // Price filter
            if (product.price < this.filters.price.min || product.price > this.filters.price.max) {
                return false;
            }
            
            // Occasion filter
            if (this.filters.occasion.length > 0 && !this.filters.occasion.some(occasion => product.occasions.includes(occasion))) {
                return false;
            }
            
            return true;
        });
        
        // Apply sorting
        this.sortProducts();
        
        // Update display
        this.updateProductCount();
        this.displayProducts();
        this.updatePagination();
    }
    
    sortProducts() {
        switch (this.sortBy) {
            case 'newest':
                // Assuming newer products have higher IDs
                this.filteredProducts.sort((a, b) => b.id - a.id);
                break;
            case 'price-low':
                this.filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                this.filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'featured':
            default:
                // Default order (could be based on featured property)
                break;
        }
    }
    
    displayProducts() {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;
        
        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);
        
        productsGrid.innerHTML = '';
        
        if (productsToShow.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                    <h3>No products found</h3>
                    <p>Try adjusting your filters to see more results.</p>
                    <button class="btn btn-primary clear-filters">Clear All Filters</button>
                </div>
            `;
            
            // Add event listener to the clear filters button
            const clearFiltersBtn = productsGrid.querySelector('.clear-filters');
            if (clearFiltersBtn) {
                clearFiltersBtn.addEventListener('click', () => this.clearFilters());
            }
            
            return;
        }
        
        productsToShow.forEach(product => {
            const productCard = this.createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
        // Re-initialize scroll animations for new products
        if (typeof initScrollAnimations === 'function') {
            setTimeout(() => {
                initScrollAnimations();
            }, 100);
        }
    }
    
    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card flip-in';
        
        const badgeHTML = product.badge ? `<div class="product-badge ${product.badge}">${product.badge}</div>` : '';
        const originalPriceHTML = product.originalPrice ? `<span class="original-price">€${product.originalPrice}</span>` : '';
        
        card.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${badgeHTML}
            </div>
            <div class="product-info">
                <h3 class="fade-in delay-200">${product.name}</h3>
                <div class="product-price fade-in delay-300">
                    <span class="current-price">€${product.price}</span>
                    ${originalPriceHTML}
                </div>
                <div class="product-quantity fade-in delay-400">
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" data-product="${product.id}">-</button>
                        <span class="quantity-display" data-product="${product.id}">0</span>
                        <button class="quantity-btn plus" data-product="${product.id}">+</button>
                    </div>
                    <div class="price-display" data-product="${product.id}">€0</div>
                </div>
                <button class="btn-add-to-bag fade-in delay-500" 
                        data-product="${product.id}" 
                        data-price="${product.price}" 
                        data-name="${product.name}">
                    Add to Shopping Bag
                </button>
            </div>
        `;
        
        // Add event listeners for quantity controls and add to bag
        this.setupProductCardEvents(card, product);
        
        return card;
    }
    
    setupProductCardEvents(card, product) {
        const plusBtn = card.querySelector('.quantity-btn.plus');
        const minusBtn = card.querySelector('.quantity-btn.minus');
        const quantityDisplay = card.querySelector('.quantity-display');
        const priceDisplay = card.querySelector('.price-display');
        const addToBagBtn = card.querySelector('.btn-add-to-bag');
        
        let quantity = 0;
        
        plusBtn.addEventListener('click', () => {
            quantity++;
            quantityDisplay.textContent = quantity;
            priceDisplay.textContent = `€${quantity * product.price}`;
            addToBagBtn.disabled = false;
            minusBtn.disabled = false;
        });
        
        minusBtn.addEventListener('click', () => {
            if (quantity > 0) {
                quantity--;
                quantityDisplay.textContent = quantity;
                priceDisplay.textContent = `€${quantity * product.price}`;
                
                if (quantity === 0) {
                    addToBagBtn.disabled = true;
                    minusBtn.disabled = true;
                }
            }
        });
        
        addToBagBtn.addEventListener('click', () => {
            if (quantity > 0 && window.shoppingCart) {
                // Simulate adding to cart
                window.shoppingCart.showNotification(`${quantity} ${product.name}(s) added to bag!`, 'success');
                
                // Reset quantity
                quantity = 0;
                quantityDisplay.textContent = '0';
                priceDisplay.textContent = '€0';
                addToBagBtn.disabled = true;
                minusBtn.disabled = true;
                
                // Show feedback
                addToBagBtn.textContent = '✓ Added!';
                addToBagBtn.classList.add('added');
                
                setTimeout(() => {
                    addToBagBtn.textContent = 'Add to Shopping Bag';
                    addToBagBtn.classList.remove('added');
                }, 2000);
            }
        });
    }
    
    updateProductCount() {
        const countElement = document.getElementById('products-count');
        if (countElement) {
            countElement.textContent = this.filteredProducts.length;
        }
    }
    
    updatePagination() {
        const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
        const paginationNumbers = document.querySelector('.pagination-numbers');
        const prevBtn = document.querySelector('.pagination-btn.prev');
        const nextBtn = document.querySelector('.pagination-btn.next');
        
        if (!paginationNumbers || !prevBtn || !nextBtn) return;
        
        // Update pagination numbers
        paginationNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const number = document.createElement('span');
            number.className = `pagination-number ${i === this.currentPage ? 'active' : ''}`;
            number.textContent = i;
            number.addEventListener('click', () => this.goToPage(i));
            paginationNumbers.appendChild(number);
        }
        
        // Update button states
        prevBtn.disabled = this.currentPage === 1;
        nextBtn.disabled = this.currentPage === totalPages || totalPages === 0;
    }
    
    handlePagination(e) {
        const btn = e.currentTarget;
        if (btn.classList.contains('prev')) {
            this.goToPage(this.currentPage - 1);
        } else if (btn.classList.contains('next')) {
            this.goToPage(this.currentPage + 1);
        }
    }
    
    handlePageNumber(e) {
        const pageNumber = parseInt(e.target.textContent);
        this.goToPage(pageNumber);
    }
    
    goToPage(page) {
        const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
        if (page < 1 || page > totalPages) return;
        
        this.currentPage = page;
        this.displayProducts();
        this.updatePagination();
        
        // Scroll to top of products
        const productsGrid = document.getElementById('products-grid');
        if (productsGrid) {
            productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    clearFilters() {
        // Uncheck all checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Reset price range
        const minPriceInput = document.getElementById('min-price');
        const maxPriceInput = document.getElementById('max-price');
        const rangeMin = document.querySelector('.range-min');
        const rangeMax = document.querySelector('.range-max');
        
        if (minPriceInput && maxPriceInput && rangeMin && rangeMax) {
            minPriceInput.value = 0;
            maxPriceInput.value = 500;
            rangeMin.value = 0;
            rangeMax.value = 500;
            this.updateSliderTrack();
        }
        
        // Reset filters
        this.filters = {
            category: [],
            size: [],
            color: [],
            price: { min: 0, max: 500 },
            occasion: []
        };
        
        // Reset sort
        const sortSelect = document.getElementById('sort-by');
        if (sortSelect) {
            sortSelect.value = 'featured';
            this.sortBy = 'featured';
        }
        
        // Reset pagination
        this.currentPage = 1;
        
        // Apply changes
        this.applyFilters();
    }
}

// Initialize shop page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the shop page
    if (document.querySelector('.shop-section')) {
        window.shopPage = new ShopPage();
    }
});