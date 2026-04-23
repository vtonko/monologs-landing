const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate, .card, .step, h2').forEach(el => {
  observer.observe(el);
});

window.addEventListener('load', () => {
  document.querySelectorAll('.hero .animate').forEach((el, i) => {
    setTimeout(() => el.classList.add('reveal'), i * 200);
  });
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-modal').hidden = false;
});

document.getElementById('modal-close').addEventListener('click', function() {
  document.getElementById('signup-modal').hidden = true;
});

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelectorAll('img').forEach(img => {
    img.style.transform = `translateY(${scrolled * 0.05}px)`;
  });
});
