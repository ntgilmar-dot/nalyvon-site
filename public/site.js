const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { button.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') !== 'true'; button.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); button.focus(); } });
window.matchMedia('(min-width: 1100px)').addEventListener('change', closeMenu);
