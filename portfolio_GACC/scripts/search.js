    const searchInput = document.querySelector('.search-box');

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim().toLowerCase();
            const targetSection = document.getElementById(query);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Section not found.');
            }
        }
    });