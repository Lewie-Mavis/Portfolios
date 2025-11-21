// Authentication Pages JavaScript
class AuthForms {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupPasswordToggles();
        this.setupFormValidation();
        this.setupPasswordStrength();
        this.setupSocialAuth();
        this.setupAnimations();
    }
    
    setupPasswordToggles() {
        const toggleButtons = document.querySelectorAll('.password-toggle');
        
        toggleButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = button.getAttribute('data-target');
                const passwordInput = document.getElementById(targetId);
                const icon = button.querySelector('i');
                
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    passwordInput.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        });
    }
    
    setupPasswordStrength() {
        const passwordInput = document.getElementById('password');
        if (!passwordInput) return;
        
        passwordInput.addEventListener('input', () => {
            this.updatePasswordStrength(passwordInput.value);
        });
    }
    
    updatePasswordStrength(password) {
        const strengthBar = document.querySelector('.strength-fill');
        const strengthText = document.querySelector('.strength-text');
        if (!strengthBar || !strengthText) return;
        
        let strength = 0;
        
        // Length check
        if (password.length >= 8) strength += 1;
        
        // Lowercase check
        if (/[a-z]/.test(password)) strength += 1;
        
        // Uppercase check
        if (/[A-Z]/.test(password)) strength += 1;
        
        // Number check
        if (/[0-9]/.test(password)) strength += 1;
        
        // Special character check
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        
        // Cap strength at 4
        strength = Math.min(strength, 4);
        
        // Update visual feedback
        strengthBar.setAttribute('data-strength', strength);
        
        // Update text feedback
        const messages = {
            0: 'Very weak',
            1: 'Weak',
            2: 'Fair',
            3: 'Good',
            4: 'Strong'
        };
        
        strengthText.textContent = messages[strength];
    }
    
    setupFormValidation() {
        const signupForm = document.getElementById('signupForm');
        const loginForm = document.getElementById('loginForm');
        
        if (signupForm) {
            signupForm.addEventListener('submit', this.handleSignup.bind(this));
        }
        
        if (loginForm) {
            loginForm.addEventListener('submit', this.handleLogin.bind(this));
        }
    }
    
    handleSignup(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (data.password !== data.confirmPassword) {
            this.showMessage('Passwords do not match', 'error');
            return;
        }
        
        if (data.password.length < 8) {
            this.showMessage('Password must be at least 8 characters long', 'error');
            return;
        }
        
        if (!data.terms) {
            this.showMessage('Please accept the Terms of Service', 'error');
            return;
        }
        
        // Simulate API call
        this.showLoading(e.target.querySelector('.auth-btn'));
        
        setTimeout(() => {
            this.hideLoading(e.target.querySelector('.auth-btn'));
            this.showMessage('Account created successfully! Redirecting...', 'success');
            
            // Redirect to login page after successful signup
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        }, 2000);
    }
    
    handleLogin(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Simulate API call
        this.showLoading(e.target.querySelector('.auth-btn'));
        
        setTimeout(() => {
            this.hideLoading(e.target.querySelector('.auth-btn'));
            this.showMessage('Login successful! Redirecting...', 'success');
            
            // Redirect to appropriate page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }, 1500);
    }
    
    showLoading(button) {
        const text = button.querySelector('.btn-text');
        const icon = button.querySelector('.btn-icon');
        
        button.disabled = true;
        text.textContent = 'Processing...';
        icon.className = 'fas fa-spinner fa-spin';
    }
    
    hideLoading(button) {
        const text = button.querySelector('.btn-text');
        const icon = button.querySelector('.btn-icon');
        
        button.disabled = false;
        text.textContent = button.closest('form').id === 'signupForm' ? 'Create Account' : 'Sign In';
        icon.className = 'fas fa-arrow-right';
    }
    
    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.auth-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageEl = document.createElement('div');
        messageEl.className = `auth-message auth-message-${type}`;
        messageEl.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle"></i>
            <span>${message}</span>
        `;
        
        // Add styles
        const styles = `
            .auth-message {
                position: fixed;
                top: 2rem;
                right: 2rem;
                padding: 1rem 1.5rem;
                border-radius: 12px;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                z-index: 1000;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            .auth-message-success {
                background: var(--emerald);
                color: white;
            }
            .auth-message-error {
                background: #e74c3c;
                color: white;
            }
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        
        // Add styles if not already added
        if (!document.querySelector('#auth-message-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'auth-message-styles';
            styleSheet.textContent = styles;
            document.head.appendChild(styleSheet);
        }
        
        document.body.appendChild(messageEl);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.style.animation = 'slideInRight 0.3s ease reverse';
                setTimeout(() => messageEl.remove(), 300);
            }
        }, 5000);
    }
    
    setupSocialAuth() {
        const socialButtons = document.querySelectorAll('.social-btn');
        
        socialButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const provider = button.classList.contains('google-btn') ? 'Google' : 'Facebook';
                this.showMessage(`${provider} authentication would open here`, 'success');
            });
        });
    }
    
    setupAnimations() {
        // Initialize stagger animations
        const staggerContainers = document.querySelectorAll('.stagger-children');
        
        staggerContainers.forEach(container => {
            container.classList.add('animated');
        });
        
        // Ensure form is visible on load
        setTimeout(() => {
            const formSide = document.querySelector('.auth-form-side');
            if (formSide) {
                formSide.scrollTop = 0;
            }
        }, 100);
        
        // Add intersection observer for scroll animations
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
        
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new AuthForms();
});