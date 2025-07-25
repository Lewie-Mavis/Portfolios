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



document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.1)";
        card.style.transition = "0.3s ease-in-out";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

