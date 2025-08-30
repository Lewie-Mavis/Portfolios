document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const options = { threshold: 0.5 };

  const startCounting = (counter) => {
    let start = 0;
    const target = +counter.getAttribute("data-target");
    const increment = Math.ceil(target / 100); // speed factor

    const updateCount = () => {
      if (start < target) {
        start += increment;
        counter.innerText = start > target ? target : start;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const counter = entry.target;

      if (entry.isIntersecting) {
        // reset before each new animation
        counter.innerText = "0";
        startCounting(counter);
      } else {
        // reset to 0 when leaving viewport
        counter.innerText = "0";
      }
    });
  }, options);

  counters.forEach((counter) => observer.observe(counter));
});