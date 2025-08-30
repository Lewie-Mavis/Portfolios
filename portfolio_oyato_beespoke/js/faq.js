document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".faq-answer");
    const symbol = item.querySelector(".symbol");

    // If open, close it
    if (answer.classList.contains("max-h-[999px]")) {
      answer.classList.remove("max-h-[999px]");
      answer.classList.add("max-h-0");
      symbol.textContent = "+";
    } else {
      // Close all others first
      document.querySelectorAll(".faq-answer").forEach(a => {
        a.classList.remove("max-h-[999px]");
        a.classList.add("max-h-0");
      });
      document.querySelectorAll(".symbol").forEach(s => s.textContent = "+");

      // Open current
      answer.classList.remove("max-h-0");
      answer.classList.add("max-h-[999px]");
      symbol.textContent = "−";
    }
  });
});
