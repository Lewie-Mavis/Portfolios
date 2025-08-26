// === Intersection Observer Animations ===
const animatedEls = document.querySelectorAll('.slide-left, .slide-right, .fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Trigger animation when visible
    } else {
      entry.target.classList.remove('show'); // Reset when out of view (so it replays)
    }
  });
}, { threshold: 0.2 });

animatedEls.forEach(el => observer.observe(el));

// === Measurement Form Logic ===
const form = document.getElementById('measureForm');
const emailBtn = document.getElementById('emailBtn');
const printBtn = document.getElementById('printBtn');
const waBtn = document.getElementById('waBtn');

function buildSummary() {
  const data = Object.fromEntries(new FormData(form).entries());
  return `OYATO MEASUREMENT SUBMISSION
--------------------------------
Name: ${data.name || ''}
Email: ${data.email || ''}
Phone: ${data.phone || ''}
Location: ${data.location || ''}

Measurements:
Chest: ${data.chest || ''}
Waist: ${data.waist || ''}
Hips: ${data.hips || ''}
Shoulder: ${data.shoulder || ''}
Neck: ${data.neck || ''}
Sleeve: ${data.sleeve || ''}
Top Length: ${data.top_length || ''}
Trouser Length: ${data.trouser_length || ''}

Notes: ${data.notes || ''}`;
}

if (emailBtn) {
  emailBtn.addEventListener('click', () => {
    const body = encodeURIComponent(buildSummary());
    window.location.href = `mailto:orders@oyatobeespoke.com?subject=New Measurement Submission&body=${body}`;
  });
}

if (printBtn) {
  printBtn.addEventListener('click', () => window.print());
}

if (waBtn) {
  waBtn.addEventListener('click', () => {
    const text = encodeURIComponent(buildSummary());
    waBtn.href = `https://wa.me/254711190029?text=${text}`;
  });
}

// === Footer Year ===
document.getElementById('year').textContent = new Date().getFullYear();
