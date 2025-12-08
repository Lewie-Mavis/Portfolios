// World-Class Image Slider with Synchronized Transitions
let currentIndex = 0;
let isAnimating = false;
const slides = document.querySelectorAll('.about-photo-slider .slide');
const totalSlides = slides.length;

// Advanced transition pairs (leave animation, enter animation)
const transitionPairs = [
    {
        name: 'Crossfade',
        leave: 'crossfade-leave',
        enter: 'crossfade-enter'
    },
    {
        name: 'Slide Right',
        leave: 'slide-left-leave',
        enter: 'slide-right-enter'
    },
    {
        name: 'Slide Left',
        leave: 'slide-right-leave',
        enter: 'slide-left-enter'
    },
    {
        name: 'Slide Up',
        leave: 'slide-down-leave',
        enter: 'slide-up-enter'
    },
    {
        name: 'Slide Down',
        leave: 'slide-up-leave',
        enter: 'slide-down-enter'
    },
    {
        name: 'Zoom',
        leave: 'zoom-out-leave',
        enter: 'zoom-in-enter'
    },
    {
        name: 'Rotate',
        leave: 'rotate-out-leave',
        enter: 'rotate-in-enter'
    },
    {
        name: 'Flip',
        leave: 'flip-out-leave',
        enter: 'flip-in-enter'
    },
    {
        name: 'Cube',
        leave: 'cube-out-leave',
        enter: 'cube-in-enter'
    },
    {
        name: 'Coverflow',
        leave: 'coverflow-out-leave',
        enter: 'coverflow-in-enter'
    },
    {
        name: 'Glitch',
        leave: 'glitch-out-leave',
        enter: 'glitch-in-enter'
    },
    {
        name: 'Morph',
        leave: 'morph-out-leave',
        enter: 'morph-in-enter'
    },
    {
        name: 'Bounce',
        leave: 'bounce-out-leave',
        enter: 'bounce-in-enter'
    },
    {
        name: 'Elastic',
        leave: 'zoom-out-leave',
        enter: 'elastic-in-enter'
    },
    {
        name: 'Swirl',
        leave: 'swirl-out-leave',
        enter: 'swirl-in-enter'
    },
    {
        name: 'Blur',
        leave: 'blur-out-leave',
        enter: 'blur-in-enter'
    }
];

// Get random transition pair
function getRandomTransition() {
    return transitionPairs[Math.floor(Math.random() * transitionPairs.length)];
}

// Initialize slider
function initializeSlider() {
    // Set up 3D perspective
    const slider = document.querySelector('.about-photo-slider');
    slider.style.perspective = '1000px';
    slider.style.transformStyle = 'preserve-3d';
    
    // Initialize slides
    slides.forEach((slide, index) => {
        slide.style.transformStyle = 'preserve-3d';
        slide.style.backfaceVisibility = 'hidden';
        
        if (index === 0) {
            slide.classList.add('active');
            slide.style.opacity = '1';
            slide.style.zIndex = '2';
        } else {
            slide.style.opacity = '0';
            slide.style.zIndex = '1';
        }
    });
    
    // Add navigation
    addNavigation();
    
    // Add transition indicator
    addTransitionIndicator();
    
    // Add progress dots
    addProgressDots();
    
    // Add custom cursor
    addCustomCursor();
    
    // Auto-advance with transitions
    startAutoAdvance();
    
    // Preload images
    preloadImages();
}

// Show slide with synchronized transitions
function showSlide(nextIndex, transitionPair = null) {
    if (isAnimating || nextIndex === currentIndex) return;
    
    isAnimating = true;
    const transition = transitionPair || getRandomTransition();
    
    const currentSlide = slides[currentIndex];
    const nextSlide = slides[nextIndex];
    
    // Update z-index
    currentSlide.style.zIndex = '2';
    nextSlide.style.zIndex = '3';
    
    // Add transition classes
    currentSlide.classList.add('leaving');
    nextSlide.classList.add('entering');
    
    // Apply leave animation to current slide
    currentSlide.classList.add(transition.leave);
    
    // Apply enter animation to next slide
    nextSlide.classList.add(transition.enter);
    
    // Update progress dots
    updateProgressDots(nextIndex);
    
    // Show transition name
    showTransitionName(transition.name);
    
    // Create particle effects for specific transitions
    if (['Zoom', 'Rotate', 'Cube', 'Bounce', 'Elastic'].includes(transition.name)) {
        createParticleEffect(currentSlide, 'leave');
        createParticleEffect(nextSlide, 'enter');
    }
    
    // Update state after animations complete
    const duration = 800; // Match CSS animation duration
    
    setTimeout(() => {
        // Clean up classes
        currentSlide.classList.remove('active', 'leaving', transition.leave);
        nextSlide.classList.remove('entering', transition.enter);
        
        // Reset styles
        currentSlide.style.opacity = '0';
        currentSlide.style.transform = '';
        currentSlide.style.zIndex = '1';
        
        // Activate new slide
        nextSlide.classList.add('active');
        nextSlide.style.opacity = '1';
        nextSlide.style.zIndex = '2';
        
        currentIndex = nextIndex;
        isAnimating = false;
        
        // Update slider state for accessibility
        updateSliderState();
        
    }, duration);
}

// Create particle effect
function createParticleEffect(element, type) {
    const particles = 20;
    const colors = ['#00f7ff', '#00bcd4', '#0097a7', '#006064'];
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'transition-particle';
        
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 1000 + 500;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${type === 'enter' ? 0 : 0.8};
            z-index: 1000;
            pointer-events: none;
            animation: particleExplosion ${duration}ms ease-out forwards;
            box-shadow: 0 0 ${size}px ${color};
        `;
        
        element.appendChild(particle);
        
        // Animate particle
        setTimeout(() => {
            if (type === 'enter') {
                particle.style.opacity = '0.8';
                particle.style.transform = `
                    translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)
                    scale(${Math.random() * 2 + 1})
                `;
            }
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, duration + 100);
        }, 50);
    }
}

// Add navigation arrows
function addNavigation() {
    const slider = document.querySelector('.about-photo-slider');
    
    const navContainer = document.createElement('div');
    navContainer.className = 'slider-nav';
    navContainer.style.cssText = `
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        z-index: 100;
        pointer-events: none;
    `;
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.className = 'slider-btn prev-btn';
    prevBtn.setAttribute('aria-label', 'Previous slide');
    prevBtn.setAttribute('title', 'Previous slide');
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.className = 'slider-btn next-btn';
    nextBtn.setAttribute('aria-label', 'Next slide');
    nextBtn.setAttribute('title', 'Next slide');
    
    // Add click handlers
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(prevIndex, transitionPairs[1]); // Slide Right transition
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const nextIndex = (currentIndex + 1) % totalSlides;
        showSlide(nextIndex, transitionPairs[2]); // Slide Left transition
    });
    
    // Add hover effects
    [prevBtn, nextBtn].forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.2)';
            btn.style.boxShadow = '0 0 30px rgba(0, 247, 255, 0.6)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = 'none';
        });
    });
    
    navContainer.appendChild(prevBtn);
    navContainer.appendChild(nextBtn);
    slider.appendChild(navContainer);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(prevIndex, transitionPairs[1]);
        } else if (e.key === 'ArrowRight') {
            const nextIndex = (currentIndex + 1) % totalSlides;
            showSlide(nextIndex, transitionPairs[2]);
        } else if (e.key === ' ') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % totalSlides;
            showSlide(nextIndex);
        }
    });
}

// Add progress dots
function addProgressDots() {
    const slider = document.querySelector('.about-photo-slider');
    
    const progressContainer = document.createElement('div');
    progressContainer.className = 'slider-progress';
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('data-index', i);
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.setAttribute('title', `Slide ${i + 1}`);
        
        dot.addEventListener('click', () => {
            if (i !== currentIndex) {
                const transition = getRandomTransition();
                showSlide(i, transition);
            }
        });
        
        progressContainer.appendChild(dot);
    }
    
    slider.appendChild(progressContainer);
}

// Update progress dots
function updateProgressDots(index) {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Add transition indicator
function addTransitionIndicator() {
    const slider = document.querySelector('.about-photo-slider');
    
    const indicator = document.createElement('div');
    indicator.className = 'transition-indicator';
    indicator.innerHTML = '<i class="fas fa-magic"></i> <span class="transition-name"></span>';
    
    slider.appendChild(indicator);
    
    // Show on hover
    slider.addEventListener('mouseenter', () => {
        indicator.classList.add('show');
    });
    
    slider.addEventListener('mouseleave', () => {
        indicator.classList.remove('show');
    });
}

// Show transition name
function showTransitionName(name) {
    const indicator = document.querySelector('.transition-indicator .transition-name');
    if (indicator) {
        indicator.textContent = name;
        
        // Pulse animation
        indicator.style.animation = 'none';
        setTimeout(() => {
            indicator.style.animation = 'pulse 0.5s ease';
        }, 10);
    }
}

// Add custom cursor
function addCustomCursor() {
    if (window.matchMedia('(pointer: fine)').matches) {
        const cursor = document.createElement('div');
        cursor.className = 'slider-cursor';
        document.body.appendChild(cursor);
        
        const slider = document.querySelector('.about-photo-slider');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        slider.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            slider.style.cursor = 'none';
        });
        
        slider.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            slider.style.cursor = 'default';
        });
        
        // Hide cursor on touch devices
        slider.addEventListener('touchstart', () => {
            cursor.style.display = 'none';
        });
        
        slider.addEventListener('touchend', () => {
            cursor.style.display = 'block';
        });
    }
}

// Start auto advance
function startAutoAdvance() {
    let interval = 5000; // 5 seconds
    
    const advance = () => {
        if (!document.hidden && !isAnimating) {
            const nextIndex = (currentIndex + 1) % totalSlides;
            showSlide(nextIndex);
        }
    };
    
    let autoInterval = setInterval(advance, interval);
    
    // Pause on hover
    const slider = document.querySelector('.about-photo-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        autoInterval = setInterval(advance, interval);
    });
    
    // Pause when page is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(autoInterval);
        } else {
            autoInterval = setInterval(advance, interval);
        }
    });
}

// Preload images
function preloadImages() {
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) {
            const preloadImg = new Image();
            preloadImg.src = img.src;
        }
    });
}

// Update slider state for accessibility
function updateSliderState() {
    const slider = document.querySelector('.about-photo-slider');
    slider.setAttribute('aria-live', 'polite');
    slider.setAttribute('aria-atomic', 'true');
    slider.setAttribute('aria-label', `Slide ${currentIndex + 1} of ${totalSlides}`);
    
    slides.forEach((slide, index) => {
        slide.setAttribute('aria-hidden', index !== currentIndex);
        slide.setAttribute('aria-label', `Slide ${index + 1}`);
    });
}

// Touch swipe support
function addTouchSupport() {
    const slider = document.querySelector('.about-photo-slider');
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const xDiff = touchStartX - touchEndX;
        const yDiff = touchStartY - touchEndY;
        
        // Horizontal swipe (primary)
        if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > swipeThreshold) {
            if (xDiff > 0) {
                // Swipe left
                const nextIndex = (currentIndex + 1) % totalSlides;
                showSlide(nextIndex, transitionPairs[2]); // Slide Left
            } else {
                // Swipe right
                const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                showSlide(prevIndex, transitionPairs[1]); // Slide Right
            }
        }
        // Vertical swipe (secondary)
        else if (Math.abs(yDiff) > swipeThreshold) {
            if (yDiff > 0) {
                // Swipe up
                const nextIndex = (currentIndex + 1) % totalSlides;
                showSlide(nextIndex, transitionPairs[3]); // Slide Down
            } else {
                // Swipe down
                const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                showSlide(prevIndex, transitionPairs[4]); // Slide Up
            }
        }
    }
}

// Mouse wheel support
function addMouseWheelSupport() {
    const slider = document.querySelector('.about-photo-slider');
    let wheelTimeout;
    
    slider.addEventListener('wheel', (e) => {
        e.preventDefault();
        
        if (wheelTimeout || isAnimating) return;
        
        if (e.deltaY > 0) {
            // Scroll down
            const nextIndex = (currentIndex + 1) % totalSlides;
            showSlide(nextIndex, transitionPairs[5]); // Zoom
        } else {
            // Scroll up
            const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(prevIndex, transitionPairs[5]); // Zoom
        }
        
        wheelTimeout = setTimeout(() => {
            wheelTimeout = null;
        }, 800);
    }, { passive: false });
}

// Fullscreen support
function addFullscreenSupport() {
    const slider = document.querySelector('.about-photo-slider');
    
    // Double click for fullscreen
    slider.addEventListener('dblclick', () => {
        if (!document.fullscreenElement) {
            if (slider.requestFullscreen) {
                slider.requestFullscreen();
            } else if (slider.webkitRequestFullscreen) {
                slider.webkitRequestFullscreen();
            } else if (slider.msRequestFullscreen) {
                slider.msRequestFullscreen();
            }
            
            slider.classList.add('fullscreen');
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            
            slider.classList.remove('fullscreen');
        }
    });
    
    // Fullscreen change event
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            slider.classList.remove('fullscreen');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
    addTouchSupport();
    addMouseWheelSupport();
    addFullscreenSupport();
    updateSliderState();
    
    // Add loading state
    const slider = document.querySelector('.about-photo-slider');
    slider.classList.add('loading');
    
    // Remove loading state when all images are loaded
    Promise.all(Array.from(slides).map(slide => {
        const img = slide.querySelector('img');
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve);
        });
    })).then(() => {
        slider.classList.remove('loading');
    });
});

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    const slider = document.querySelector('.about-photo-slider');
    if (document.hidden) {
        slider.style.animationPlayState = 'paused';
    } else {
        slider.style.animationPlayState = 'running';
    }
});

// Export for global access
window.imageSlider = {
    showSlide,
    getRandomTransition,
    nextSlide: () => {
        const nextIndex = (currentIndex + 1) % totalSlides;
        showSlide(nextIndex);
    },
    prevSlide: () => {
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(prevIndex);
    },
    goToSlide: (index) => {
        if (index >= 0 && index < totalSlides) {
            showSlide(index);
        }
    }
};