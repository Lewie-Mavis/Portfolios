    let currentIndex = 0;
    const slides = document.querySelectorAll('.about-photo-slider .slide');
    const totalSlides = slides.length;

    // Function to show the slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        // Show the current slide
        slides[index].style.display = 'block';
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Function to move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;  // Loop back to the first slide
        showSlide(currentIndex);
    }

    // Move to the next slide every 5 seconds
    setInterval(nextSlide, 2500); // Adjust the time as necessary

    // Optionally, you can add arrows for manual navigation:
    // Add code for next/prev button functionality if needed