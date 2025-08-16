  // Text and Images Sliding In View - Repeat on Scroll
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.2 });

    const targets = document.querySelectorAll('.slide-in-right, .slide-in-left');
    targets.forEach(el => observer.observe(el));
  });