// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close menu when a menu item is clicked (for mobile)
document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Chat Button Interaction
document.querySelector('.chat-btn').addEventListener('click', () => {
    window.open('https://wa.me/254711190029', '_blank'); // Replace with your WhatsApp link
});

// Number Counter Animation
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100; // Adjust speed

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 40); // Adjust animation speed
        } else {
            counter.innerText = target; // Ensures final number is exact
        }
    };

    // Start counting when the section is in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCount();
                observer.disconnect(); // Stop observing once counted
            }
        });
    }, { threshold: 0.5 });

    observer.observe(counter);
});

document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.1)";
        card.style.transition = "0.3s ease-in-out";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

// Add a glow effect when a service card is clicked
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        // Remove glow from all service cards
        document.querySelectorAll('.service-card').forEach(c => c.classList.remove('glow'));

        // Add glow to the clicked card
        card.classList.add('glow');
    });
});

// Select all portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Add event listener for each portfolio item
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove the glow class from all items
        portfolioItems.forEach(i => i.classList.remove('glow'));
        
        // Add the glow class to the clicked item
        item.classList.add('glow');
    });
});

// Select the logo element
const logo = document.querySelector('.logo');

// Add a click event listener to toggle the 'glowing' class
logo.addEventListener('click', function() {
    // Toggle the 'glowing' class when clicked
    logo.classList.toggle('glowing');
});

// Get the h1 element
const heroH1 = document.querySelector('.hero h1');

// Add an event listener for the click event
heroH1.addEventListener('click', function() {
    // Toggle the glow class on click
    heroH1.classList.toggle('glow');
});

