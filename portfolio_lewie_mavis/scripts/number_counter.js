// Enhanced number counter with animations - Works on both desktop and mobile
const numbersCounters = document.querySelectorAll('#numbers .count');
const numbersSection = document.getElementById('numbers');
let countingInProgress = false;
let animationTimeout;

// Check if we're on mobile
const isMobile = () => window.innerWidth <= 768;

// Function to animate all counters
function animateNumbersCounters() {
    if (countingInProgress) return;
    countingInProgress = true;
    
    numbersCounters.forEach((counter, index) => {
        counter.innerText = '0'; // Reset on each view
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const increment = target / (isMobile() ? 50 : 100); // Faster for mobile
        
        // Add animation class to parent card
        const card = counter.closest('.number-card');
        if (card) {
            card.classList.add('counting-active');
            card.classList.remove('counting-complete');
        }

        // Stagger the counting animation
        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                
                // Add subtle pulse effect while counting
                counter.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    counter.style.transform = 'scale(1)';
                }, 50);
                
                setTimeout(updateCount, isMobile() ? 30 : 20 + (index * 5));
            } else {
                counter.innerText = target;
                // Final celebration effect
                counter.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    counter.style.transform = 'scale(1)';
                }, 300);
                
                // Remove counting class after completion
                if (card) {
                    setTimeout(() => {
                        card.classList.remove('counting-active');
                        card.classList.add('counting-complete');
                    }, 500);
                }
            }
        };

        // Delay start for staggered effect
        setTimeout(updateCount, index * (isMobile() ? 100 : 200));
    });
    
    // Add particle animation to cards
    document.querySelectorAll('.number-card').forEach((card, index) => {
        setTimeout(() => {
            card.style.setProperty('--particle-x', `${Math.random() * 100}%`);
            card.style.setProperty('--particle-y', `${Math.random() * 100}%`);
        }, index * 100);
    });
    
    // Reset the flag after all animations complete
    setTimeout(() => {
        countingInProgress = false;
    }, isMobile() ? 2000 : 3000);
}

// Function to reset counters
function resetNumbersCounters() {
    numbersCounters.forEach(counter => {
        counter.innerText = '0';
        const card = counter.closest('.number-card');
        if (card) {
            card.classList.remove('counting-active', 'counting-complete');
        }
    });
}

// Enhanced Observer with better mobile support
const numbersSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Clear any existing timeout
            clearTimeout(animationTimeout);
            
            // Reset counters
            resetNumbersCounters();
            
            // Start animation after delay
            animationTimeout = setTimeout(() => {
                animateNumbersCounters();
            }, 300);
        } else {
            countingInProgress = false;
        }
    });
}, { 
    threshold: isMobile() ? 0.1 : 0.3, // Lower threshold for mobile
    rootMargin: isMobile() ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
});

// Start observing
if (numbersSection) {
    numbersSectionObserver.observe(numbersSection);
}

// Fallback: Also trigger on scroll for mobile
let scrollTriggered = false;
window.addEventListener('scroll', () => {
    if (scrollTriggered || !numbersSection) return;
    
    const rect = numbersSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Check if section is at least 30% visible
    const isVisible = rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.3;
    
    if (isVisible && !countingInProgress && !scrollTriggered) {
        scrollTriggered = true;
        resetNumbersCounters();
        setTimeout(() => {
            animateNumbersCounters();
        }, 300);
    }
});

// Also check on page load if section is already visible
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (!numbersSection) return;
        
        const rect = numbersSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isAlreadyVisible = rect.top >= 0 && rect.top <= windowHeight;
        
        if (isAlreadyVisible && !countingInProgress) {
            resetNumbersCounters();
            setTimeout(() => {
                animateNumbersCounters();
            }, 500);
        }
    }, 1000);
});

// Add CSS for counting animations
const counterStyle = document.createElement('style');
counterStyle.textContent = `
    .number-card.counting-active {
        animation: counting-pulse 1s ease-in-out infinite alternate;
    }
    
    .number-card.counting-complete {
        border-color: rgba(0, 247, 255, 0.4);
        box-shadow: 0 0 30px rgba(0, 247, 255, 0.2);
    }
    
    @keyframes counting-pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 247, 255, 0.2);
        }
        100% {
            box-shadow: 0 0 0 10px rgba(0, 247, 255, 0);
        }
    }
    
    /* Mobile-specific optimizations */
    @media (max-width: 768px) {
        .number-content h3 {
            font-size: 2.5rem !important;
        }
        
        .number-card {
            transform: translateZ(0);
            will-change: transform;
        }
    }
`;
document.head.appendChild(counterStyle);

// Add to window object for debugging (optional - can be removed)
window.numbersCounter = {
    reset: resetNumbersCounters,
    animate: animateNumbersCounters,
    isCounting: () => countingInProgress
};