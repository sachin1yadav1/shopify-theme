document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('.custom-header-desktop');
  if (!root) return;

  const canHover = window.matchMedia('(hover: hover)').matches;
  const items = root.querySelectorAll('.megamenu-hover');

  items.forEach((item) => {
    const link = item.querySelector('.dropdownmenulink');
    const dropdown = item.querySelector('.megamenudropdown');
    if (!dropdown) return;

    const open = () => item.classList.add('active');
    const close = () => item.classList.remove('active');
    const toggle = () => item.classList.toggle('active');

    if (canHover) {
      item.addEventListener('mouseenter', open);
      item.addEventListener('mouseleave', close);
    }

    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        toggle();
      });
    }

    document.addEventListener('click', (e) => {
      if (!item.contains(e.target)) close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  });
});

/* Custom Desktop Header — open megamenu on hover for pointer devices */
(function () {
  const canHover = window.matchMedia('(hover: hover)').matches;

  function bindHover(details) {
    const summary = details.querySelector('summary');
    if (!summary) return;

    // Hover open/close
    details.addEventListener('mouseenter', () => (details.open = true));
    details.addEventListener('mouseleave', () => (details.open = false));

    // Keyboard support: focus opens, leaving the component closes
    summary.addEventListener('focus', () => (details.open = true));
    details.addEventListener('focusout', (e) => {
      const active = document.activeElement;
      if (!details.contains(active)) details.open = false;
    });
  }

  function onReady() {
    if (!canHover) return; // keep click behavior on touch devices
    document
      .querySelectorAll('header-menu details.mega-menu')
      .forEach(bindHover);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

  // Desktop mega menu accessibility + hover/click handling
  (function () {
    const toggles = document.querySelectorAll('.custom-inline-menu .mega-toggle');
    toggles.forEach((btn) => {
      const menu = document.getElementById(btn.getAttribute('aria-controls'));
      if (!menu) return;
  
      const openMenu = () => {
        btn.setAttribute('aria-expanded', 'true');
        menu.hidden = false;
      };
      const closeMenu = () => {
        btn.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
      };
  
      // Click to toggle
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        expanded ? closeMenu() : openMenu();
      });
  
      // Hover open / mouseleave close
      btn.addEventListener('mouseenter', openMenu);
      menu.addEventListener('mouseleave', closeMenu);
  
      // Escape to close
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });
      menu.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeMenu();
          btn.focus();
        }
      });
  
      // Click outside closes
      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && e.target !== btn) closeMenu();
      });
    });
  })();
})();