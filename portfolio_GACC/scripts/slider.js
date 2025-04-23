let currentIndex = 0;
const slides = document.querySelectorAll('.about-photo-slider .slide');
const totalSlides = slides.length;

// Function to show the slide
function showSlide(index) {
    // Hide all slides by setting their opacity to 0
    slides.forEach(slide => {
        slide.style.opacity = '0';
    });

    // Show the current slide by setting its opacity to 1
    slides[index].style.opacity = '1';
}

// Show the first slide initially
showSlide(currentIndex);

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;  // Loop back to the first slide
    showSlide(currentIndex);
}

// Move to the next slide every 3 seconds (3000ms)
setInterval(nextSlide, 3000); // Adjust the time as necessary