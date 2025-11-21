// Shopping Bag Page Functionality
class ShoppingBagPage {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('shoppingCart')) || {};
        this.init();
    }
    
    init() {
        this.renderBagItems();
        this.setupEventListeners();
        this.updateOrderSummary();
    }
    
    renderBagItems() {
        const bagItemsContainer = document.getElementById('bag-items');
        const items = Object.values(this.cart);
        
        if (items.length === 0) {
            // Show empty bag message
            bagItemsContainer.innerHTML = `
                <div class="empty-bag-message">
                    <div class="empty-bag-icon">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                    <h3>Your bag is empty</h3>
                    <p>Start adding some beautiful pieces to your collection</p>
                    <a href="index.html" class="btn btn-primary">Continue Shopping</a>
                </div>
            `;
            return;
        }
        
        // Render bag items
        bagItemsContainer.innerHTML = items.map(item => this.createBagItemHTML(item)).join('');
        
        // Update items count
        document.getElementById('items-count').textContent = this.getTotalItems();
    }
    
    createBagItemHTML(item) {
        const itemTotal = item.price * item.quantity;
        return `
            <div class="bag-item" data-product-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="bag-item-image">
                <div class="bag-item-details">
                    <div class="bag-item-header">
                        <h4 class="bag-item-name">${item.name}</h4>
                        <div class="bag-item-price">€${item.price}</div>
                    </div>
                    
                    <div class="bag-item-actions">
                        <div class="quantity-controls-bag">
                            <button class="quantity-btn-bag minus" data-product="${item.id}">-</button>
                            <span class="quantity-display-bag">${item.quantity}</span>
                            <button class="quantity-btn-bag plus" data-product="${item.id}">+</button>
                        </div>
                        <button class="btn-remove-item" data-product="${item.id}">
                            <i class="fas fa-trash"></i>
                            Remove
                        </button>
                    </div>
                    
                    <div class="item-total">€${itemTotal.toFixed(2)}</div>
                </div>
            </div>
        `;
    }
    
    setupEventListeners() {
        // Quantity buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quantity-btn-bag')) {
                this.handleQuantityChange(e.target);
            }
            
            if (e.target.classList.contains('btn-remove-item')) {
                this.removeItem(e.target);
            }
            
            if (e.target.closest('.btn-remove-item')) {
                this.removeItem(e.target.closest('.btn-remove-item'));
            }
        });
        
        // Clear bag button
        const clearBagBtn = document.getElementById('clear-bag');
        if (clearBagBtn) {
            clearBagBtn.addEventListener('click', () => {
                this.clearBag();
            });
        }
        
        // Checkout button
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                this.proceedToCheckout();
            });
        }
    }
    
    handleQuantityChange(button) {
        const productId = button.dataset.product;
        const isPlus = button.classList.contains('plus');
        const quantityDisplay = button.parentElement.querySelector('.quantity-display-bag');
        const bagItem = button.closest('.bag-item');
        
        let currentQuantity = parseInt(quantityDisplay.textContent);
        
        if (isPlus) {
            currentQuantity++;
        } else {
            currentQuantity = Math.max(1, currentQuantity - 1);
        }
        
        // Update cart
        this.cart[productId].quantity = currentQuantity;
        this.saveCart();
        
        // Update UI
        quantityDisplay.textContent = currentQuantity;
        
        // Update item total
        const itemTotal = this.cart[productId].price * currentQuantity;
        bagItem.querySelector('.item-total').textContent = `€${itemTotal.toFixed(2)}`;
        
        // Add visual feedback
        bagItem.classList.add('updated');
        setTimeout(() => bagItem.classList.remove('updated'), 1000);
        
        // Update order summary
        this.updateOrderSummary();
        
        // Update header cart count
        this.updateHeaderCart();
    }
    
    removeItem(button) {
        const productId = button.dataset.product;
        const bagItem = button.closest('.bag-item');
        
        // Add removal animation
        bagItem.style.opacity = '0.5';
        bagItem.style.transform = 'translateX(-100px)';
        
        setTimeout(() => {
            delete this.cart[productId];
            this.saveCart();
            this.renderBagItems();
            this.updateOrderSummary();
            this.updateHeaderCart();
            this.showNotification('Item removed from bag', 'success');
        }, 300);
    }
    
    clearBag() {
        if (Object.keys(this.cart).length === 0) {
            this.showNotification('Your bag is already empty', 'warning');
            return;
        }
        
        if (confirm('Are you sure you want to clear your shopping bag?')) {
            this.cart = {};
            this.saveCart();
            this.renderBagItems();
            this.updateOrderSummary();
            this.updateHeaderCart();
            this.showNotification('Shopping bag cleared', 'success');
        }
    }
    
    updateOrderSummary() {
        const subtotal = this.getSubtotal();
        const shipping = this.calculateShipping(subtotal);
        const tax = this.calculateTax(subtotal);
        const total = subtotal + shipping + tax;
        
        document.getElementById('subtotal').textContent = `€${subtotal.toFixed(2)}`;
        document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `€${shipping.toFixed(2)}`;
        document.getElementById('tax').textContent = `€${tax.toFixed(2)}`;
        document.getElementById('total').textContent = `€${total.toFixed(2)}`;
        
        // Enable/disable checkout button
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.disabled = Object.keys(this.cart).length === 0;
        }
    }
    
    getSubtotal() {
        return Object.values(this.cart).reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    
    calculateShipping(subtotal) {
        return subtotal >= 100 ? 0 : 9.99;
    }
    
    calculateTax(subtotal) {
        return subtotal * 0.2; // 20% VAT
    }
    
    getTotalItems() {
        return Object.values(this.cart).reduce((total, item) => total + item.quantity, 0);
    }
    
proceedToCheckout() {
    if (Object.keys(this.cart).length === 0) {
        this.showNotification('Please add items to your bag before checkout', 'warning');
        return;
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.classList.add('loading');
    checkoutBtn.disabled = true;

    // Show notification and redirect after a very short delay
    this.showNotification('Proceeding to checkout...', 'success');
    
    setTimeout(() => {
        window.location.href = 'checkout.html';
    }, 500); // Reduced from 2000ms to 500ms
}
    
    saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
    }
    
    updateHeaderCart() {
        const totalItems = this.getTotalItems();
        
        // Update header badge
        const badge = document.querySelector('.bag-count-badge');
        if (badge) {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
        
        // Update mobile badge
        const mobileBadge = document.querySelector('.mobile-bag-count');
        if (mobileBadge) {
            mobileBadge.textContent = totalItems;
            mobileBadge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        // Add to page
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
}

// Initialize shopping bag page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize shopping bag page
    window.shoppingBagPage = new ShoppingBagPage();
    
    // Initialize animations
    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
    
    console.log('Shopping bag page initialized. Items in cart:', Object.keys(window.shoppingBagPage.cart).length);
});

// Also handle page load
window.addEventListener('load', function() {
    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
});