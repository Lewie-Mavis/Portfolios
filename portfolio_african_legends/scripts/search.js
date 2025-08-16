  function searchSection(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('[id]');
    
    let found = false;

    sections.forEach(section => {
      if (section.id.toLowerCase().includes(query)) {
        section.scrollIntoView({ behavior: 'smooth' });
        found = true;
      }
    });

    if (!found) {
      alert('Section not found.');
    }

    return false;
  }