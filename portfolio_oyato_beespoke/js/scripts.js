// === Intersection Observer Animations ===
const animatedEls = document.querySelectorAll('.slide-left, .slide-right, .fade-up');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
    else entry.target.classList.remove('show');
  });
}, { threshold: 0.2 });
animatedEls.forEach(el => io.observe(el));

// === Measurement Form Logic ===
const form = document.getElementById('measureForm');
const emailBtn = document.getElementById('emailBtn');
const printBtn = document.getElementById('printBtn');
const waBtn = document.getElementById('waBtn');
const fileInput = form.querySelector("input[type='file']");

function buildSummary() {
  const data = Object.fromEntries(new FormData(form).entries());
  let summary = `OYATO MEASUREMENT SUBMISSION%0D%0A--------------------------------%0D%0A`;
  summary += `Name: ${data.name || ''}%0D%0AEmail: ${data.email || ''}%0D%0APhone: ${data.phone || ''}%0D%0ALocation: ${data.location || ''}%0D%0A%0D%0A`;
  summary += `Measurements:%0D%0AChest: ${data.chest || ''}%0D%0AWaist: ${data.waist || ''}%0D%0AHips: ${data.hips || ''}%0D%0AShoulder: ${data.shoulder || ''}%0D%0ANeck: ${data.neck || ''}%0D%0ASleeve: ${data.sleeve || ''}%0D%0ATop Length: ${data.top_length || ''}%0D%0ATrouser Length: ${data.trouser_length || ''}%0D%0A%0D%0A`;
  summary += `Notes: ${data.notes || ''}%0D%0A`;

  if (fileInput && fileInput.files.length > 0) {
    summary += `%0D%0AReference File: ${fileInput.files[0].name}`;
  }
  return summary;
}

// Email
emailBtn?.addEventListener('click', () => {
  const body = buildSummary();
  window.location.href = `mailto:orders@oyatobeespoke.com?subject=New Measurement Submission&body=${body}`;
});

// Print (whole page with form values)
    printBtn.addEventListener('click', () => {
      window.print();
    });


// WhatsApp
waBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  const text = buildSummary();
  window.open(`https://wa.me/254701628414?text=${text}`, "_blank");
});

// === File Preview ===
fileInput?.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    fileInput.insertAdjacentHTML("afterend", `<p class="mt-2 text-xs text-gray-400">Selected: ${fileName}</p>`);
  }
});

// === Footer Year ===
document.getElementById('year').textContent = new Date().getFullYear();
