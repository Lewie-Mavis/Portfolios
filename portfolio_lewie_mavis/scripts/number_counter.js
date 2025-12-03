// Enhanced number counter with animations
const numbersCounters = document.querySelectorAll('#numbers .count');
const numbersSectionObserverTarget = document.querySelector('#numbers');
let countingInProgress = false;
let animationTimeout;

// Function to animate all counters in the numbers section
function animateNumbersCounters() {
    if (countingInProgress) return;
    countingInProgress = true;
    
    numbersCounters.forEach((numbersCounter, index) => {
        numbersCounter.innerText = '0'; // Reset on each view
        const numbersTarget = +numbersCounter.getAttribute('data-target');
        let numbersCurrent = 0;
        const numbersIncrement = numbersTarget / 100;
        
        // Add animation class to parent card
        const card = numbersCounter.closest('.number-card');
        if (card) {
            card.classList.add('counting-active');
            card.classList.remove('counting-complete');
        }

        // Stagger the counting animation
        const updateNumbersCount = () => {
            if (numbersCurrent < numbersTarget) {
                numbersCurrent += numbersIncrement;
                numbersCounter.innerText = Math.ceil(numbersCurrent);
                
                // Add subtle pulse effect while counting
                numbersCounter.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    numbersCounter.style.transform = 'scale(1)';
                }, 50);
                
                setTimeout(updateNumbersCount, 20 + (index * 5));
            } else {
                numbersCounter.innerText = numbersTarget;
                // Final celebration effect
                numbersCounter.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    numbersCounter.style.transform = 'scale(1)';
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
        setTimeout(updateNumbersCount, index * 200);
    });
    
    // Add particle animation to cards
    document.querySelectorAll('.number-card').forEach((card, index) => {
        setTimeout(() => {
            card.style.setProperty('--particle-x', `${Math.random() * 100}%`);
            card.style.setProperty('--particle-y', `${Math.random() * 100}%`);
        }, index * 100);
    });
    
    // Reset the flag after all animations complete (longest animation is about 2.2 seconds)
    setTimeout(() => {
        countingInProgress = false;
    }, 3000);
}

// Function to reset counters
function resetNumbersCounters() {
    numbersCounters.forEach(numbersCounter => {
        numbersCounter.innerText = '0';
        const card = numbersCounter.closest('.number-card');
        if (card) {
            card.classList.remove('counting-active', 'counting-complete');
        }
    });
}

// Observer for #numbers section visibility
const numbersSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Clear any existing timeout to prevent double triggering
            clearTimeout(animationTimeout);
            
            // Reset counters first to ensure they start from 0
            resetNumbersCounters();
            
            // Start counting animation after a small delay
            animationTimeout = setTimeout(() => {
                animateNumbersCounters();
            }, 300);
        } else {
            // When section leaves viewport, reset the flag so it can animate again
            countingInProgress = false;
            
            // Optionally reset counters when leaving viewport
            // Comment this out if you want numbers to stay at their counted values
            resetNumbersCounters();
        }
    });
}, { 
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
});

numbersSectionObserver.observe(numbersSectionObserverTarget);

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
`;
document.head.appendChild(counterStyle);

// Add to window object for debugging
window.numbersCounter = {
    reset: resetNumbersCounters,
    animate: animateNumbersCounters,
    isCounting: () => countingInProgress
};