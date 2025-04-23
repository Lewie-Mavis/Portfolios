// Function to open the Become a Partner modal
function openPartnerModal() {
    document.getElementById("become-partner-modal").style.display = "flex";
}

// Function to close the Become a Partner modal
function closePartnerModal() {
    document.getElementById("become-partner-modal").style.display = "none";
}

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    const modal = document.getElementById("become-partner-modal");
    if (event.target === modal) {
        closePartnerModal();
    }
});
