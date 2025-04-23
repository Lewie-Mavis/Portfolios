function openJoinModal(eventTitle) {
    const modal = document.getElementById("join-event-modal");
    const titleElement = document.getElementById("join-event-title");
    if (titleElement && eventTitle) {
        titleElement.innerText = `Join: ${eventTitle}`;
    }
    modal.style.display = "flex";
}

function closeJoinModal() {
    document.getElementById("join-event-modal").style.display = "none";
}

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    const modal = document.getElementById("join-event-modal");
    if (event.target === modal) {
        closeJoinModal();
    }
});

