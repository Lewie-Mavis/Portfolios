document.addEventListener('DOMContentLoaded', () => {

  /* ================================
     SCROLL ANIMATIONS
  ================================ */
  const animationClasses = [
    'slide-left','slide-right','slide-up','slide-down',
    'slide-up-left','slide-up-right','slide-down-left','slide-down-right',
    'fade-in','fade-up','fade-down','fade-left','fade-right','blur-in',
    'scale-in','scale-up','zoom-in','zoom-out','pulse','elastic',
    'rotate-in','rotate-in-right','rotate-up','rotate-down','rotate-y',
    'flip-x','flip-y','flip-xy',
    'bounce-in','float-in','shimmer','glow-in','tilt-in',
    'reveal-left','reveal-down',
    'text-reveal'
  ];

  const selector = animationClasses.map(cls => `.${cls}`).join(', ');
  const animatedElements = document.querySelectorAll(selector);

  animatedElements.forEach(el => el.classList.add('animate'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.05 });

  animatedElements.forEach(el => observer.observe(el));

  /* ================================
     HERO TYPING EFFECT
  ================================ */
  const heroTexts = [
    "Innovative Solutions for a Digital World",
    "Modern IT Solutions for Your Business",
    "Cutting-Edge Technology for a New Era",
    "Smart Digital Experiences That Inspire"
  ];

  let heroIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const heroTypingEl = document.getElementById("hero-typing");

  if (heroTypingEl) {
    function typeHeroText() {
      const currentText = heroTexts[heroIndex];

      if (!isDeleting) {
        heroTypingEl.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
          isDeleting = true;
          setTimeout(typeHeroText, 1000);
          return;
        }
      } else {
        heroTypingEl.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          heroIndex = (heroIndex + 1) % heroTexts.length;
        }
      }

      setTimeout(typeHeroText, isDeleting ? 50 : 120);
    }

    setTimeout(typeHeroText, 700);
  }

  /* ================================
     HEADER STAGGER ANIMATION
  ================================ */
  const headerElements = document.querySelectorAll('header .animate');
  headerElements.forEach((el, index) => {
    setTimeout(() => el.classList.add('show'), index * 100);
  });

});
