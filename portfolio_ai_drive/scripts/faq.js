const faqItems = document.querySelectorAll('.ai-drive-faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.ai-drive-faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
