  const counters = document.querySelectorAll('.stat-number');
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = Math.ceil(target / speed);

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = count;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      updateCount();
    });
  };

  const resetCounters = () => {
    counters.forEach(counter => {
      counter.innerText = '0';
    });
  };

  const statsSection = document.getElementById('stats');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
      } else {
        resetCounters(); // Reset when out of view to allow repeat
      }
    });
  }, {
    threshold: 0.4
  });

  observer.observe(statsSection);