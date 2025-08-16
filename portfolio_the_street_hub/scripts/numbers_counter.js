  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Lower is faster

    // Animate numbers
    const animateCounters = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = Math.ceil(target / speed);

        const updateCount = () => {
          count += increment;
          if (count < target) {
            counter.innerText = count;
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    };

    // Reset counters to 0
    const resetCounters = () => {
      counters.forEach(counter => {
        counter.innerText = '0';
      });
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
        } else {
          resetCounters();
        }
      });
    }, {
      threshold: 0.3
    });

    const section = document.querySelector('#numbers');
    if (section) observer.observe(section);
  });