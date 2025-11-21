// Order Confirmation Page Functionality
class OrderConfirmationPage {
    constructor() {
        this.orderData = this.getOrderData();
        this.init();
    }
    
    init() {
        if (!this.orderData) {
            // Redirect to home if no order data found
            window.location.href = 'index.html';
            return;
        }
        
        this.renderOrderDetails();
        this.setupEventListeners();
        this.startOrderTracking();
    }
    
    getOrderData() {
        // First try to get the latest order from localStorage
        try {
            const latestOrder = localStorage.getItem('latestOrder');
            if (latestOrder) {
                console.log('Found latest order:', JSON.parse(latestOrder));
                return JSON.parse(latestOrder);
            }
        } catch (error) {
            console.error('Error getting latest order:', error);
        }
        
        // Fallback to orders array
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        console.log('Orders in localStorage:', orders);
        
        if (orders.length === 0) {
            // For demo purposes, create a sample order if none exists
            console.log('No orders found, creating sample order');
            return this.createSampleOrder();
        }
        
        // Return the most recent order
        const latestOrder = orders[orders.length - 1];
        console.log('Using latest order from array:', latestOrder);
        return latestOrder;
    }
    
    createSampleOrder() {
        // Create a sample order that matches your checkout data structure
        return {
            orderId: 'FF' + Date.now(),
            timestamp: new Date().toISOString(),
            items: {
                'item1': {
                    name: 'Emilia Jumpsuit',
                    price: 245,
                    quantity: 1,
                    image: 'images/jumpsuit2.webp',
                    id: 'item1'
                },
                'item2': {
                    name: 'Sophie Blazer',
                    price: 189,
                    quantity: 1,
                    image: 'images/blazer1.webp',
                    id: 'item2'
                }
            },
            shipping: {
                email: 'customer@example.com',
                firstName: 'Marie',
                lastName: 'Curie',
                address: '123 Science Avenue',
                city: 'Paris',
                postalCode: '75008',
                country: 'FR',
                phone: '+33 1 23 45 67 89'
            },
            payment: {
                method: 'card',
                details: {
                    cardName: 'Marie Curie',
                    cardNumber: '**** **** **** 1234'
                }
            },
            totals: {
                subtotal: 434,
                shipping: 0,
                tax: 86.80,
                total: 520.80
            }
        };
    }
    
    renderOrderDetails() {
        this.renderOrderId();
        this.renderOrderItems();
        this.renderOrderTotals();
        this.renderShippingInfo();
        this.renderPaymentInfo();
        this.renderDeliveryEstimate();
    }
    
    renderOrderId() {
        document.getElementById('order-id').textContent = this.orderData.orderId;
    }
    
    renderOrderItems() {
        const itemsContainer = document.getElementById('confirmation-items');
        const items = Object.values(this.orderData.items);
        
        if (items.length === 0) {
            itemsContainer.innerHTML = '<p>No items in order</p>';
            return;
        }
        
        itemsContainer.innerHTML = items.map(item => this.createOrderItemHTML(item)).join('');
    }
    
    createOrderItemHTML(item) {
        const itemTotal = item.price * item.quantity;
        // Use the same structure as checkout page, don't include size since it's not collected
        return `
            <div class="order-item">
                <img src="${item.image}" alt="${item.name}" class="order-item-image">
                <div class="order-item-details">
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-meta">
                        <span>Qty: ${item.quantity}</span>
                        <span class="order-item-price">€${itemTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderOrderTotals() {
        // Check if totals exist, use calculated values if not
        let subtotal, shipping, tax, total;
        
        if (this.orderData.totals) {
            ({ subtotal, shipping, tax, total } = this.orderData.totals);
        } else {
            // Calculate totals from items
            subtotal = Object.values(this.orderData.items).reduce((sum, item) => sum + (item.price * item.quantity), 0);
            shipping = subtotal >= 100 ? 0 : 9.99;
            tax = subtotal * 0.2;
            total = subtotal + shipping + tax;
        }
        
        document.getElementById('confirmation-subtotal').textContent = `€${subtotal.toFixed(2)}`;
        document.getElementById('confirmation-shipping').textContent = shipping === 0 ? 'FREE' : `€${shipping.toFixed(2)}`;
        document.getElementById('confirmation-tax').textContent = `€${tax.toFixed(2)}`;
        document.getElementById('confirmation-total').textContent = `€${total.toFixed(2)}`;
    }
    
    renderShippingInfo() {
        const { shipping } = this.orderData;
        
        if (!shipping) {
            document.getElementById('shipping-address-details').innerHTML = '<p>No shipping information available</p>';
            return;
        }
        
        const addressContainer = document.getElementById('shipping-address-details');
        
        addressContainer.innerHTML = `
            <div class="address-details">
                <strong>${shipping.firstName} ${shipping.lastName}</strong><br>
                ${shipping.address}<br>
                ${shipping.city}, ${shipping.postalCode}<br>
                ${this.getCountryName(shipping.country)}<br>
                ${shipping.phone}<br>
                ${shipping.email}
            </div>
        `;
    }
    
    renderPaymentInfo() {
        const { payment } = this.orderData;
        const paymentContainer = document.getElementById('payment-method');
        
        if (!payment) {
            paymentContainer.innerHTML = '<p>No payment information available</p>';
            return;
        }
        
        let paymentHTML = '';
        
        switch(payment.method) {
            case 'card':
                paymentHTML = `
                    <div class="payment-method-display">
                        <i class="fas fa-credit-card"></i>
                        <div class="payment-details">
                            <strong>Credit/Debit Card</strong>
                            ${payment.details ? `
                                <span>${payment.details.cardName || ''}</span>
                                <span>${payment.details.cardNumber || ''}</span>
                            ` : '<span>Card payment</span>'}
                        </div>
                    </div>
                `;
                break;
            case 'paypal':
                paymentHTML = `
                    <div class="payment-method-display">
                        <i class="fab fa-paypal"></i>
                        <div class="payment-details">
                            <strong>PayPal</strong>
                            <span>Payment completed via PayPal</span>
                        </div>
                    </div>
                `;
                break;
            case 'apple-pay':
                paymentHTML = `
                    <div class="payment-method-display">
                        <i class="fab fa-apple-pay"></i>
                        <div class="payment-details">
                            <strong>Apple Pay</strong>
                            <span>Payment completed via Apple Pay</span>
                        </div>
                    </div>
                `;
                break;
            default:
                paymentHTML = `
                    <div class="payment-method-display">
                        <i class="fas fa-credit-card"></i>
                        <div class="payment-details">
                            <strong>${payment.method || 'Unknown'}</strong>
                            <span>Payment completed</span>
                        </div>
                    </div>
                `;
        }
        
        paymentContainer.innerHTML = paymentHTML;
        
        // Billing address (same as shipping for now)
        const billingContainer = document.getElementById('billing-address-details');
        if (this.orderData.shipping) {
            billingContainer.innerHTML = document.getElementById('shipping-address-details').innerHTML;
        } else {
            billingContainer.innerHTML = '<p>Same as shipping address</p>';
        }
    }
    
    renderDeliveryEstimate() {
        const orderDate = new Date(this.orderData.timestamp || new Date());
        const deliveryDate = new Date(orderDate);
        deliveryDate.setDate(deliveryDate.getDate() + 5); // 5 business days
        
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = deliveryDate.toLocaleDateString('en-US', options);
        
        document.getElementById('delivery-date').textContent = formattedDate;
        document.getElementById('delivery-estimate').textContent = formattedDate;
        
        // Update order time
        const orderTime = orderDate.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        document.getElementById('order-time').textContent = `Today at ${orderTime}`;
    }
    
    getCountryName(countryCode) {
        const countries = {
            'FR': 'France',
            'DE': 'Germany',
            'IT': 'Italy',
            'ES': 'Spain',
            'UK': 'United Kingdom',
            'US': 'United States',
            'CA': 'Canada'
        };
        return countries[countryCode] || countryCode;
    }
    
    setupEventListeners() {
        // Print receipt
        document.getElementById('print-receipt').addEventListener('click', () => {
            this.printReceipt();
        });
        
        // Track order
        document.getElementById('track-order').addEventListener('click', () => {
            this.trackOrder();
        });
    }
    
    printReceipt() {
        const printBtn = document.getElementById('print-receipt');
        const originalText = printBtn.innerHTML;
        
        printBtn.classList.add('loading');
        printBtn.disabled = true;
        
        // Simulate processing delay
        setTimeout(() => {
            window.print();
            
            printBtn.classList.remove('loading');
            printBtn.disabled = false;
            printBtn.innerHTML = originalText;
            
            this.showNotification('Receipt is ready for printing', 'success');
        }, 1000);
    }
    
    trackOrder() {
        const trackBtn = document.getElementById('track-order');
        const originalText = trackBtn.innerHTML;
        
        trackBtn.classList.add('loading');
        trackBtn.disabled = true;
        
        // Simulate tracking lookup
        setTimeout(() => {
            this.showNotification('Tracking information will be available once your order ships!', 'info');
            
            trackBtn.classList.remove('loading');
            trackBtn.disabled = false;
            trackBtn.innerHTML = originalText;
        }, 1500);
    }
    
    startOrderTracking() {
        // Simulate order status updates
        this.simulateOrderProgress();
    }
    
    simulateOrderProgress() {
        // Update processing step after a delay
        setTimeout(() => {
            this.updateOrderStatus('shipped');
        }, 5000); // 5 seconds for demo
        
        // Update shipped step after another delay
        setTimeout(() => {
            this.updateOrderStatus('delivered');
        }, 10000); // 10 seconds for demo
    }
    
    updateOrderStatus(status) {
        const steps = document.querySelectorAll('.step');
        
        switch(status) {
            case 'shipped':
                if (steps[1]) {
                    steps[1].classList.remove('active');
                    steps[1].classList.add('completed');
                }
                if (steps[2]) {
                    steps[2].classList.add('active');
                }
                this.showNotification('Your order has shipped! Tracking information is now available.', 'success');
                break;
            case 'delivered':
                if (steps[2]) {
                    steps[2].classList.remove('active');
                    steps[2].classList.add('completed');
                }
                if (steps[3]) {
                    steps[3].classList.add('active');
                }
                this.showNotification('Your order has been delivered!', 'success');
                break;
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
        
        // Add styles if not already added
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
                .notification-info { background: var(--charcoal); }
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
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideInRight 0.3s ease reverse';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
        
        // Close on click
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }
    
    // Analytics and tracking
    trackConfirmationView() {
        // In a real implementation, this would send data to your analytics platform
        console.log('Order confirmation viewed:', this.orderData.orderId);
        
        // Example: Send to Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'purchase', {
                transaction_id: this.orderData.orderId,
                value: this.orderData.totals ? this.orderData.totals.total : 0,
                currency: 'EUR',
                items: Object.values(this.orderData.items).map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                }))
            });
        }
    }
}

// Initialize order confirmation page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize order confirmation page
    window.orderConfirmationPage = new OrderConfirmationPage();
    
    // Initialize animations
    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
    
    // Track the confirmation view
    window.orderConfirmationPage.trackConfirmationView();
    
    console.log('Order confirmation page initialized');
});

// Also handle page load
window.addEventListener('load', function() {
    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
});