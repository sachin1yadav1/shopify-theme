document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.custom-mobile-drawer');
  if (!container) return;

  container.querySelectorAll('.menuaccordion').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      const panel = toggle.nextElementSibling;
      if (!panel) return;
      const isOpen = toggle.classList.contains('active');
      panel.style.display = isOpen ? 'block' : 'none';
    });
  });

  // Initialize state
  container.querySelectorAll('.menuaccordion').forEach((toggle) => {
    const panel = toggle.nextElementSibling;
    if (panel) panel.style.display = toggle.classList.contains('active') ? 'block' : 'none';
  });
});