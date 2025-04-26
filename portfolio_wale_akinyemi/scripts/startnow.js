  // Open the "Start Now" Modal
  function openStartNowModal() {
    document.getElementById("start-now-modal").style.display = "flex";
  }

  // Close the "Start Now" Modal
  function closeStartNowModal() {
    document.getElementById("start-now-modal").style.display = "none";
  }

  // Optional: close modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById("start-now-modal");
    if (event.target === modal) {
      closeStartNowModal();
    }
  };