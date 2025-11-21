// Look of the Week Page Functionality
class LookOfTheWeek {
    constructor() {
        this.currentTip = 1;
        this.savedLook = false;
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupImageZoom();
        this.setupShareModal();
        this.setupQuantityControls();
        this.setupColorAndSizeSelection();
    }
    
    setupEventListeners() {
        // Thumbnail clicks
        document.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', (e) => {
                this.handleThumbnailClick(e.currentTarget);
            });
        });
        
        // Shop entire look button
        const shopEntireLookBtn = document.getElementById('shop-entire-look');
        if (shopEntireLookBtn) {
            shopEntireLookBtn.addEventListener('click', () => {
                this.handleShopEntireLook();
            });
        }
        
        // Save look button
        const saveLookBtn = document.getElementById('save-look');
        if (saveLookBtn) {
            saveLookBtn.addEventListener('click', () => {
                this.handleSaveLook(saveLookBtn);
            });
        }
        
        // Share look button
        const shareLookBtn = document.getElementById('share-look');
        if (shareLookBtn) {
            shareLookBtn.addEventListener('click', () => {
                this.handleShareLook();
            });
        }
        
        // Tip cards
        document.querySelectorAll('.tip-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.handleTipClick(e.currentTarget);
            });
        });
        
        // Newsletter form
        const newsletterForm = document.getElementById('look-newsletter');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                this.handleNewsletterSubmit(e);
            });
        }
        
        // Add to bag buttons
        document.querySelectorAll('.btn-add-to-bag').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleAddToBag(e.currentTarget);
            });
        });
    }
    
    setupImageZoom() {
        const zoomBtn = document.getElementById('zoom-btn');
        const zoomModal = document.getElementById('zoom-modal');
        const zoomClose = document.getElementById('zoom-close');
        const zoomedImage = document.getElementById('zoomed-image');
        const mainImage = document.getElementById('main-look-img');
        
        if (zoomBtn && zoomModal && zoomClose && zoomedImage && mainImage) {
            zoomBtn.addEventListener('click', () => {
                zoomedImage.src = mainImage.src;
                zoomModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            zoomClose.addEventListener('click', () => {
                zoomModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            zoomModal.addEventListener('click', (e) => {
                if (e.target === zoomModal) {
                    zoomModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Close on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
                    zoomModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    }
    
    setupShareModal() {
        const shareModal = document.getElementById('share-modal');
        const shareClose = document.getElementById('share-close');
        const shareOptions = document.querySelectorAll('.share-option');
        
        if (shareModal && shareClose) {
            shareClose.addEventListener('click', () => {
                shareModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            shareModal.addEventListener('click', (e) => {
                if (e.target === shareModal) {
                    shareModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Share option clicks
            shareOptions.forEach(option => {
                option.addEventListener('click', () => {
                    this.handleShareOption(option);
                });
            });
            
            // Close on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && shareModal.classList.contains('active')) {
                    shareModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    }
    
    setupQuantityControls() {
        document.querySelectorAll('.quantity-controls').forEach(controls => {
            const plusBtn = controls.querySelector('.quantity-btn.plus');
            const minusBtn = controls.querySelector('.quantity-btn.minus');
            const display = controls.querySelector('.quantity-display');
            
            if (plusBtn && minusBtn && display) {
                plusBtn.addEventListener('click', () => {
                    let quantity = parseInt(display.textContent);
                    quantity++;
                    display.textContent = quantity;
                });
                
                minusBtn.addEventListener('click', () => {
                    let quantity = parseInt(display.textContent);
                    if (quantity > 1) {
                        quantity--;
                        display.textContent = quantity;
                    }
                });
            }
        });
    }
    
    setupColorAndSizeSelection() {
        // Color options
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const parent = e.currentTarget.closest('.color-options');
                parent.querySelectorAll('.color-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                e.currentTarget.classList.add('active');
            });
        });
        
        // Size options
        document.querySelectorAll('.size-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const parent = e.currentTarget.closest('.size-options');
                parent.querySelectorAll('.size-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                e.currentTarget.classList.add('active');
            });
        });
    }
    
    handleThumbnailClick(thumbnail) {
        const imageUrl = thumbnail.dataset.image;
        const mainImage = document.getElementById('main-look-img');
        const zoomedImage = document.getElementById('zoomed-image');
        
        if (mainImage && imageUrl) {
            // Update active state
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            thumbnail.classList.add('active');
            
            // Update main image
            mainImage.src = imageUrl;
            
            // Update zoomed image if modal is open
            if (zoomedImage) {
                zoomedImage.src = imageUrl;
            }
        }
    }
    
    handleShopEntireLook() {
        console.log('Shopping entire look...');
        
        // Show loading state
        const button = document.getElementById('shop-entire-look');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding Items...';
        button.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            if (window.shoppingCart && window.shoppingCart.showNotification) {
                window.shoppingCart.showNotification('All look items added to your shopping bag!', 'success');
            }
            
            // Reset button
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    }
    
    handleSaveLook(button) {
        if (this.savedLook) {
            // Unsaving
            this.savedLook = false;
            button.innerHTML = '<i class="far fa-heart"></i> Save to Wishlist';
            button.style.background = '';
            
            if (window.shoppingCart && window.shoppingCart.showNotification) {
                window.shoppingCart.showNotification('Look removed from your wishlist', 'info');
            }
        } else {
            // Saving
            this.savedLook = true;
            button.innerHTML = '<i class="fas fa-heart"></i> Saved to Wishlist';
            button.style.background = 'var(--emerald)';
            
            if (window.shoppingCart && window.shoppingCart.showNotification) {
                window.shoppingCart.showNotification('Look saved to your wishlist!', 'success');
            }
        }
    }
    
    handleShareLook() {
        const shareModal = document.getElementById('share-modal');
        if (shareModal) {
            shareModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    handleShareOption(option) {
        const platform = option.dataset.platform;
        const lookUrl = window.location.href;
        const lookTitle = 'Femme Forward - Look of the Week: The Parisian Executive';
        
        let shareUrl = '';
        
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(lookUrl)}`;
                break;
            case 'pinterest':
                shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(lookUrl)}&description=${encodeURIComponent(lookTitle)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(lookUrl)}&text=${encodeURIComponent(lookTitle)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(lookUrl)}`;
                break;
            case 'email':
                shareUrl = `mailto:?subject=${encodeURIComponent(lookTitle)}&body=${encodeURIComponent(`Check out this week's featured look: ${lookUrl}`)}`;
                break;
            case 'link':
                navigator.clipboard.writeText(lookUrl).then(() => {
                    if (window.shoppingCart && window.shoppingCart.showNotification) {
                        window.shoppingCart.showNotification('Link copied to clipboard!', 'success');
                    }
                });
                return;
        }
        
        if (shareUrl && platform !== 'link') {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
        
        // Close modal
        const shareModal = document.getElementById('share-modal');
        if (shareModal) {
            shareModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
    
    handleTipClick(card) {
        const tipNumber = card.dataset.tip;
        
        // Update active state
        document.querySelectorAll('.tip-card').forEach(tipCard => {
            tipCard.classList.remove('active');
        });
        card.classList.add('active');
        
        // Update visual
        this.updateTipVisual(tipNumber);
    }
    
    updateTipVisual(tipNumber) {
        const tipVisual = document.getElementById('tip-visual');
        const tipCaption = document.getElementById('tip-caption');
        
        if (tipVisual && tipCaption) {
            const tipData = {
                '1': {
                    image: 'images/look-week/tip-1.jpg',
                    caption: 'Perfect blazer fit with proper sleeve length and shoulder alignment'
                },
                '2': {
                    image: 'images/look-week/tip-2.jpg',
                    caption: 'Strategic accessorizing with one statement piece and minimal accents'
                },
                '3': {
                    image: 'images/look-week/tip-3.jpg',
                    caption: 'Sophisticated color coordination using a maximum of three colors'
                },
                '4': {
                    image: 'images/look-week/tip-4.jpg',
                    caption: 'Seamless transition from day to evening with simple adjustments'
                }
            };
            
            if (tipData[tipNumber]) {
                tipVisual.src = tipData[tipNumber].image;
                tipCaption.textContent = tipData[tipNumber].caption;
            }
        }
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
                window.shoppingCart.showNotification('Thank you for subscribing to Look of the Week updates!', 'success');
            }
            
            form.reset();
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);
    }
    
    handleAddToBag(button) {
        const productCard = button.closest('.look-item-card');
        const productName = productCard.querySelector('h3').textContent;
        const quantity = productCard.querySelector('.quantity-display').textContent;
        
        // Show loading state
        const originalText = button.textContent;
        button.textContent = 'Adding...';
        button.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            if (window.shoppingCart && window.shoppingCart.showNotification) {
                window.shoppingCart.showNotification(`${quantity} ${productName}(s) added to bag!`, 'success');
            }
            
            // Reset button
            button.textContent = originalText;
            button.disabled = false;
            
            // Show success feedback
            button.style.background = 'var(--emerald)';
            setTimeout(() => {
                button.style.background = '';
            }, 2000);
        }, 1000);
    }
}

// Initialize Look of the Week page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the Look of the Week page
    if (document.querySelector('.look-hero')) {
        window.lookOfTheWeek = new LookOfTheWeek();
    }
});