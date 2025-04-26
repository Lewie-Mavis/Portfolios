  function openGetStartedModal() {
    document.getElementById("get-started-modal").style.display = "flex";
  }

  function closeGetStartedModal() {
    document.getElementById("get-started-modal").style.display = "none";
  }

  // Optional: close modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById("get-started-modal");
    if (event.target === modal) {
      closeGetStartedModal();
    }
  };