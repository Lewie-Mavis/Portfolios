const slider = document.querySelector('.gallery-slider');
const totalItems = document.querySelectorAll('.slider-item').length;

let index = 0;
let autoSlideInterval;

// Function to move to the next item
function moveToNextSlide() {
    if (index < totalItems - 1) {
        index++;
        updateSliderPosition(true); // Regular transition
    } else {
        index = 0;
        updateSliderPosition(false); // No transition when wrapping around
    }
    updateActiveSlide();
}

// Function to update the slider's position
function updateSliderPosition(withTransition) {
    const slideWidth = document.querySelector('.slider-item').offsetWidth;
    if (withTransition) {
        slider.style.transition = 'transform 0.3s ease-in-out'; // Enable transition
    } else {
        slider.style.transition = 'none'; // Disable transition for wrap-around
    }
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Update active class for tech name visibility
function updateActiveSlide() {
    const slides = document.querySelectorAll('.slider-item');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Start the auto-sliding every 3 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds
}

// Stop the auto-sliding
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Pause the slider on hover and resume after hover ends
const gallerySliderContainer = document.querySelector('.gallery-slider-container');
gallerySliderContainer.addEventListener('mouseover', stopAutoSlide);
gallerySliderContainer.addEventListener('mouseout', startAutoSlide);

// Initialize the auto-slide functionality
startAutoSlide();
