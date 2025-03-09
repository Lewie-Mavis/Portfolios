document.addEventListener("DOMContentLoaded", function () {
    const techCards = document.querySelectorAll(".tech-card");

    techCards.forEach((card) => {
        let randomDelay = Math.random() * 2; // Random delay between 0 and 2 seconds
        let randomDuration = 1.5 + Math.random(); // Duration between 1.5s and 2.5s for variation

        card.style.animation = `bounce ${randomDuration}s infinite ease-in-out`;
        card.style.animationDelay = `${randomDelay}s`;
    });
});
