  const faqs = document.querySelectorAll('.faq-item');

  faqs.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

      if (item.classList.contains('active')) {
        item.classList.remove('active');
        item.querySelector('.indicator').textContent = "+";
        return;
      }

      faqs.forEach(f => {
        f.classList.remove('active');
        f.querySelector('.indicator').textContent = "+";
      });

      item.classList.add('active');
      item.querySelector('.indicator').textContent = "-";
    });
  });
