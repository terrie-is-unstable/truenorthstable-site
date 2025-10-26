// Mobile nav toggle for small screens.
// Expects: 
//  - a button.nav-toggle with [aria-expanded]
//  - a .nav element that should gain the .nav--open class when visible
const __init = () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  const setOpen = (isOpen) => {
    toggle.setAttribute('aria-expanded', String(isOpen));
    nav.classList.toggle('nav--open', isOpen);
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  
  // Close menu when a nav link is clicked on small screens
  nav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 720px)').matches) setOpen(false);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
});

// Run immediately or on DOMContentLoaded depending on readiness
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', __init);
} else {
  __init();
}
