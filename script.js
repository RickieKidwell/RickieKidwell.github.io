// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Smooth scroll for same-page links
for (const a of document.querySelectorAll('a[href^="#"]')) {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')?.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Handle the 3-second intro overlay lifecycle
const intro = document.getElementById('intro');
if (intro) {
  // Fallback removal after 3s
  setTimeout(() => intro.classList.add('hidden'), 3000);
  // If animationend fires earlier/later, hide then
  intro.addEventListener('animationend', () => intro.classList.add('hidden'));
}
