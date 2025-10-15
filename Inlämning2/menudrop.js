// menudrop.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobileMenuBtn');
  const overlay = document.getElementById('mobileMenuOverlay');
  const closeBtn = document.getElementById('mobileMenuClose');

  function openMenu() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent background scroll
    // focus first link for accessibility
    const firstLink = overlay.querySelector('.mobile-menu-content a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // restore scroll
    btn.focus();
  }

  btn.addEventListener('click', () => {
    if (overlay.classList.contains('active')) closeMenu();
    else openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);

  // close overlay when clicking outside content
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMenu();
  });

  // close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeMenu();
    }
  });
});
