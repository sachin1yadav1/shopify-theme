document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.custom-header-desktop .megamenu-hover');
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector('.dropdownmenulink');
    let closeTimer;

    function open() {
      clearTimeout(closeTimer);
      dropdown.classList.add('active');
    }

    function scheduleClose() {
      closeTimer = setTimeout(() => dropdown.classList.remove('active'), 150);
    }

    dropdown.addEventListener('mouseenter', open);
    dropdown.addEventListener('mouseleave', scheduleClose);

    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
      });
    }
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
})();