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
  const heroBg = document.querySelector('.hero-bg');
  const heroText = document.querySelector('.hero-text');
  if (heroBg) setTimeout(() => heroBg.classList.add('reveal'), 0);
  if (heroText) setTimeout(() => heroText.classList.add('reveal'), 400);
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
  document.getElementById('signup-modal').hidden = false;
});

document.getElementById('modal-close').addEventListener('click', function() {
  document.getElementById('signup-modal').hidden = true;
  document.getElementById('signup-email').value = '';
});

function updateActiveNav() {
  const sections = [
    { id: 'hero', link: 'a[href="#hero"]' },
    { id: 'features', link: 'a[href="#features"]' },
    { id: 'how-it-works', link: 'a[href="#how-it-works"]' }
  ];
  const scrollY = window.scrollY + window.innerHeight / 3;
  let current = sections[0].link;
  sections.forEach(({ id, link }) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = link;
  });
  document.querySelectorAll('.site-nav a').forEach(a => a.classList.remove('active'));
  const activeLink = document.querySelector(current);
  if (activeLink) activeLink.classList.add('active');
}

updateActiveNav();

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelectorAll('img').forEach(img => {
    img.style.transform = `translateY(${scrolled * 0.05}px)`;
  });
  updateActiveNav();
});
