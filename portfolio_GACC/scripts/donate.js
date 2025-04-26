// Function to open the Donate Now modal
function openDonateModal() {
    document.getElementById("donate-modal").style.display = "flex";
}

// Function to close the Donate Now modal
function closeDonateModal() {
    document.getElementById("donate-modal").style.display = "none";
}

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    const modal = document.getElementById("donate-modal");
    if (event.target === modal) {
        closeDonateModal();
    }
});
