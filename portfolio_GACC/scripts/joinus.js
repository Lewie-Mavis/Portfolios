// Function to open the Join Us modal
function openJoinUsModal() {
    document.getElementById("join-us-modal").style.display = "flex";
}

// Function to close the Join Us modal
function closeJoinUsModal() {
    document.getElementById("join-us-modal").style.display = "none";
}

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    const modal = document.getElementById("join-us-modal");
    if (event.target === modal) {
        closeJoinUsModal();
    }
});
