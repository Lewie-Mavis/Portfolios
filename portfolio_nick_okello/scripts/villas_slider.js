document.querySelectorAll('.next-slide').forEach((button, index) => {
    const slides = button.parentElement.querySelectorAll('.slide');
    let currentIndex = 0;

    button.addEventListener('click', () => {
        slides[currentIndex].classList.remove('active'); // Hide current slide
        currentIndex = (currentIndex + 1) % slides.length; // Get next slide
        slides[currentIndex].classList.add('active'); // Show next slide
    });
});

document.querySelectorAll('.prev-slide').forEach((button, index) => {
    const slides = button.parentElement.querySelectorAll('.slide');
    let currentIndex = 0;

    button.addEventListener('click', () => {
        slides[currentIndex].classList.remove('active'); // Hide current slide
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Get previous slide
        slides[currentIndex].classList.add('active'); // Show previous slide
    });
});

// Initialize first slide as active
document.querySelectorAll('.villa-slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;

    slides[currentIndex].classList.add('active'); // Show first slide
});
