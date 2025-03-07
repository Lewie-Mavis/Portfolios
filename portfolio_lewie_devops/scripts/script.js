// Scroll Animations - Fade in when sections come into view
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const options = {
        threshold: 0.5, // Trigger animation when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scroll to sections
    const scrollLinks = document.querySelectorAll('nav ul li a');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        });
    });

    
});
// script.js

const form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    button.disabled = true; // Disable button to prevent multiple submissions

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            form.reset(); // Reset the form
        } else {
            alert('There was an error, please try again.');
        }
    })
    .catch(error => {
        alert('An error occurred: ' + error);
    })
    .finally(() => {
        button.disabled = false; // Enable button after form submission
    });
});
