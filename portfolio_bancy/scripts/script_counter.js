function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    let start = 0;
    const increment = target / 200; // Slower animation

    const updateCounter = () => {
        start += increment;
        if (start < target) {
            counter.innerText = Math.ceil(start);
            setTimeout(updateCounter, 15); // Slower update rate
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
}

const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));
