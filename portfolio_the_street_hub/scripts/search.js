  document.getElementById('sectionSearchForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    const input = document.getElementById('sectionSearchInput').value.trim().toLowerCase();

    if (!input) return;

    // Normalize input, try to match it to an existing ID
    const target = document.getElementById(input);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Section not found. Please try: about, services, values, contact.');
    }
  });