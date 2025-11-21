// Checkout Page Functionality
class CheckoutPage {
    constructor() {
        this.currentStep = 1;
        this.cart = JSON.parse(localStorage.getItem('shoppingCart')) || {};
        this.orderData = {
            shipping: {},
            payment: {},
            items: this.cart
        };
        this.init();
    }
    
    init() {
        this.renderOrderSummary();
        this.setupEventListeners();
        this.setupFormValidation();
        this.updateProgress();
    }
    
    renderOrderSummary() {
        const itemsContainer = document.getElementById('checkout-items');
        const items = Object.values(this.cart);
        
        if (items.length === 0) {
            // Redirect to shopping bag if cart is empty
            window.location.href = 'shopping-bag.html';
            return;
        }
        
        itemsContainer.innerHTML = items.map(item => this.createOrderItemHTML(item)).join('');
        this.updateOrderTotals();
    }
    
    createOrderItemHTML(item) {
        const itemTotal = item.price * item.quantity;
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
    
    updateOrderTotals() {
        const subtotal = this.getSubtotal();
        const shipping = this.calculateShipping(subtotal);
        const tax = this.calculateTax(subtotal);
        const total = subtotal + shipping + tax;
        
        document.getElementById('checkout-subtotal').textContent = `€${subtotal.toFixed(2)}`;
        document.getElementById('checkout-shipping').textContent = shipping === 0 ? 'FREE' : `€${shipping.toFixed(2)}`;
        document.getElementById('checkout-tax').textContent = `€${tax.toFixed(2)}`;
        document.getElementById('checkout-total').textContent = `€${total.toFixed(2)}`;
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
    
    setupEventListeners() {
        // Navigation between steps
        document.getElementById('next-to-payment').addEventListener('click', () => {
            if (this.validateShippingForm()) {
                this.goToStep(2);
            }
        });
        
        document.getElementById('back-to-shipping').addEventListener('click', () => {
            this.goToStep(1);
        });
        
        // Payment method selection
        document.querySelectorAll('.payment-method input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.handlePaymentMethodChange(e.target.value);
            });
        });
        
        // Form submission
        document.getElementById('checkout-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleOrderSubmission();
        });
        
        // Input formatting
        this.setupInputFormatting();
    }
    
    setupInputFormatting() {
        // Card number formatting
        const cardNumberInput = document.getElementById('cardNumber');
        if (cardNumberInput) {
            cardNumberInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
                e.target.value = formattedValue.substring(0, 19);
            });
        }
        
        // Expiry date formatting
        const expiryInput = document.getElementById('expiryDate');
        if (expiryInput) {
            expiryInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/[^0-9]/g, '');
                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value.substring(0, 5);
            });
        }
        
        // CVV formatting
        const cvvInput = document.getElementById('cvv');
        if (cvvInput) {
            cvvInput.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '').substring(0, 4);
            });
        }
    }
    
    setupFormValidation() {
        // Real-time validation
        const shippingInputs = document.querySelectorAll('#shipping-section input, #shipping-section select');
        shippingInputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
        
        const paymentInputs = document.querySelectorAll('#payment-section input');
        paymentInputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        const formGroup = field.closest('.form-group');
        
        // Remove previous validation states
        formGroup.classList.remove('success', 'error');
        
        if (!value) {
            formGroup.classList.add('error');
            return false;
        }
        
        // Specific field validations
        switch(field.id) {
            case 'email':
                if (!this.isValidEmail(value)) {
                    formGroup.classList.add('error');
                    return false;
                }
                break;
            case 'phone':
                if (!this.isValidPhone(value)) {
                    formGroup.classList.add('error');
                    return false;
                }
                break;
            case 'cardNumber':
                if (!this.isValidCardNumber(value)) {
                    formGroup.classList.add('error');
                    return false;
                }
                break;
            case 'expiryDate':
                if (!this.isValidExpiryDate(value)) {
                    formGroup.classList.add('error');
                    return false;
                }
                break;
            case 'cvv':
                if (!this.isValidCVV(value)) {
                    formGroup.classList.add('error');
                    return false;
                }
                break;
        }
        
        formGroup.classList.add('success');
        return true;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }
    
    isValidCardNumber(cardNumber) {
        const cleaned = cardNumber.replace(/\s/g, '');
        return cleaned.length >= 13 && cleaned.length <= 19 && /^\d+$/.test(cleaned);
    }
    
    isValidExpiryDate(expiryDate) {
        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) return false;
        
        const [month, year] = expiryDate.split('/').map(Number);
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;
        
        if (month < 1 || month > 12) return false;
        if (year < currentYear || (year === currentYear && month < currentMonth)) return false;
        
        return true;
    }
    
    isValidCVV(cvv) {
        return /^\d{3,4}$/.test(cvv);
    }
    
    validateShippingForm() {
        const requiredFields = document.querySelectorAll('#shipping-section [required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            this.showNotification('Please fill in all required shipping fields correctly', 'error');
        }
        
        return isValid;
    }
    
    validatePaymentForm() {
        const paymentMethodElement = document.querySelector('input[name="paymentMethod"]:checked');
        
        if (!paymentMethodElement) {
            this.showNotification('Please select a payment method', 'error');
            return false;
        }
        
        const paymentMethod = paymentMethodElement.value;
        
        if (paymentMethod === 'card') {
            const requiredFields = document.querySelectorAll('#card-form [required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!this.validateField(field)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                this.showNotification('Please fill in all required payment fields correctly', 'error');
                return false;
            }
        }
        
        return true;
    }
    
    goToStep(step) {
        // Hide current step
        document.querySelector('.form-section.active').classList.remove('active');
        document.querySelector('.progress-step.active').classList.remove('active');
        
        // Show new step
        this.currentStep = step;
        document.getElementById(`${this.getStepName(step)}-section`).classList.add('active');
        document.querySelectorAll('.progress-step')[step - 1].classList.add('active');
        
        // Update progress bar animation
        this.updateProgress();
        
        // Scroll to top of form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    getStepName(step) {
        const steps = ['shipping', 'payment', 'confirmation'];
        return steps[step - 1];
    }
    
    updateProgress() {
        const progressSteps = document.querySelectorAll('.progress-step');
        progressSteps.forEach((step, index) => {
            if (index < this.currentStep) {
                step.classList.add('completed');
            } else {
                step.classList.remove('completed');
            }
        });
    }
    
    handlePaymentMethodChange(method) {
        // Hide all payment forms
        document.querySelectorAll('.payment-form').forEach(form => {
            form.classList.remove('active');
        });
        
        // Show selected payment form
        document.getElementById(`${method}-form`).classList.add('active');
        
        // Update active payment method styling
        document.querySelectorAll('.payment-method').forEach(pm => {
            pm.classList.remove('active');
        });
        document.querySelector(`.payment-method[data-method="${method}"]`).classList.add('active');
    }
    
    async handleOrderSubmission() {
        console.log('Order submission started...');
        
        if (!this.validatePaymentForm()) {
            console.log('Payment form validation failed');
            return;
        }
        
        const placeOrderBtn = document.getElementById('place-order');
        placeOrderBtn.classList.add('loading');
        placeOrderBtn.disabled = true;
        
        try {
            // Collect form data
            this.collectOrderData();
            console.log('Order data collected:', this.orderData);
            
            // Save order data immediately to localStorage
            this.saveOrderData();
            
            // Simulate API call
            await this.submitOrder();
            
            // Show success and redirect
            this.showNotification('Order placed successfully!', 'success');
            
            setTimeout(() => {
                // Clear cart and redirect to confirmation page
                this.clearCart();
                console.log('Redirecting to confirmation page...');
                window.location.href = 'order-confirmation.html';
            }, 1500);
            
        } catch (error) {
            console.error('Order submission error:', error);
            this.showNotification('There was an error processing your order. Please try again.', 'error');
            placeOrderBtn.classList.remove('loading');
            placeOrderBtn.disabled = false;
        }
    }
    
collectOrderData() {
    try {
        // Collect shipping data - get all shipping input fields directly
        const shippingFields = document.querySelectorAll('#shipping-section input, #shipping-section select');
        const shippingData = {};
        
        shippingFields.forEach(field => {
            if (field.name) {
                // Handle checkboxes differently
                if (field.type === 'checkbox') {
                    shippingData[field.name] = field.checked;
                } else {
                    shippingData[field.name] = field.value;
                }
            }
        });
        
        this.orderData.shipping = shippingData;
        
        // Collect payment data
        const paymentMethodElement = document.querySelector('input[name="paymentMethod"]:checked');
        if (!paymentMethodElement) {
            throw new Error('No payment method selected');
        }
        
        const paymentMethod = paymentMethodElement.value;
        this.orderData.payment = { method: paymentMethod };
        
        if (paymentMethod === 'card') {
            // Collect card payment data directly from fields
            const cardFields = document.querySelectorAll('#card-form input');
            const paymentDetails = {};
            
            cardFields.forEach(field => {
                if (field.name && field.value) {
                    paymentDetails[field.name] = field.value;
                }
            });
            
            // Mask card number for security
            if (paymentDetails.cardNumber) {
                const cardNumber = paymentDetails.cardNumber.replace(/\s/g, '');
                const lastFour = cardNumber.slice(-4);
                paymentDetails.cardNumber = `**** **** **** ${lastFour}`;
            }
            
            this.orderData.payment.details = paymentDetails;
        }
        
        // Add order totals
        const subtotal = this.getSubtotal();
        const shipping = this.calculateShipping(subtotal);
        const tax = this.calculateTax(subtotal);
        const total = subtotal + shipping + tax;
        
        this.orderData.totals = {
            subtotal: subtotal,
            shipping: shipping,
            tax: tax,
            total: total
        };
        
        // Add order ID and timestamp
        this.orderData.orderId = this.generateOrderId();
        this.orderData.timestamp = new Date().toISOString();
        
        console.log('Final order data:', this.orderData);
        
    } catch (error) {
        console.error('Error collecting order data:', error);
        throw error;
    }
}
    
    saveOrderData() {
        try {
            // Save to localStorage for the confirmation page to access
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(this.orderData);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Also save as latest order for easy access
            localStorage.setItem('latestOrder', JSON.stringify(this.orderData));
            
            console.log('Order data saved to localStorage');
            console.log('Latest order:', this.orderData);
            
        } catch (error) {
            console.error('Error saving order data:', error);
            throw error;
        }
    }
    
    generateOrderId() {
        return 'FF' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
    }
    
    async submitOrder() {
        // Simulate API call delay
        return new Promise((resolve) => {
            setTimeout(() => {
                // For demo purposes, always succeed
                console.log('Order submitted successfully');
                resolve();
            }, 1000);
        });
    }
    
    clearCart() {
        localStorage.removeItem('shoppingCart');
        
        // Update header cart count
        const badge = document.querySelector('.bag-count-badge');
        if (badge) {
            badge.style.display = 'none';
        }
        
        const mobileBadge = document.querySelector('.mobile-bag-count');
        if (mobileBadge) {
            mobileBadge.style.display = 'none';
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
}

// Initialize checkout page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize checkout page
    window.checkoutPage = new CheckoutPage();
    
    // Initialize animations
    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
    
    console.log('Checkout page initialized. Items in cart:', Object.keys(window.checkoutPage.cart).length);
});

// Also handle page load
window.addEventListener('load', function() {
    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
});