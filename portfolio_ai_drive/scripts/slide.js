  // Smooth Left and Right Animations — run every time on scroll into view
  const elementsToObserve = document.querySelectorAll('.slide-left, .slide-right');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2
  });

  elementsToObserve.forEach(el => observer.observe(el));