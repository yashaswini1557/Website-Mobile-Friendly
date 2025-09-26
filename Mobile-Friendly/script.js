// Minimal JS: toggle navigation and add small UX touches
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  navToggle && navToggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if (mainNav) {
      mainNav.style.display = expanded ? 'none' : 'block';
    }
  });

  // Smooth scroll for internal links (works for modern browsers)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav after click
        if (window.innerWidth <= 768 && mainNav && navToggle) {
          mainNav.style.display = 'none';
          navToggle.setAttribute('aria-expanded','false');
        }
      }
    });
  });
});
