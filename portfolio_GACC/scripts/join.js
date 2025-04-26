function openGetStartedModal() {
    const modal = document.getElementById("get-started-modal");
    modal.style.display = "flex";
}

function closeGetStartedModal() {
    document.getElementById("get-started-modal").style.display = "none";
}

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    const modal = document.getElementById("get-started-modal");
    if (event.target === modal) {
        closeGetStartedModal();
    }
});
