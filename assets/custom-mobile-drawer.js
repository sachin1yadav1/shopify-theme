/* Custom Mobile Drawer — lightweight accordion behavior */
(function () {
  function initAccordion(root) {
    const acc = root.querySelectorAll('.menuaccordion');
    acc.forEach((trigger) => {
      const panel = trigger.nextElementSibling;
      if (!panel) return;

      // Initialize any pre-marked active accordion
      if (trigger.classList.contains('active')) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }

      trigger.addEventListener('click', () => {
        const opening = !trigger.classList.contains('active');

        // Close any other open panels
        acc.forEach((t) => {
          if (t !== trigger) {
            t.classList.remove('active');
            const p = t.nextElementSibling;
            if (p) p.style.maxHeight = null;
          }
        });

        trigger.classList.toggle('active', opening);
        panel.style.maxHeight = opening ? panel.scrollHeight + 'px' : null;
      });
    });
  }

  function onReady() {
    const drawer = document.getElementById('menu-drawer');
    if (!drawer) return;
    const custom = drawer.querySelector('.custom-mobile-drawer');
    if (!custom) return;
    initAccordion(custom);
    // Mobile drawer accordion + focus management
    (function () {
      const drawer = document.getElementById('custom-mobile-drawer');
      if (!drawer) return;
  
      drawer.querySelectorAll('.accordion__trigger').forEach((btn) => {
        const panel = btn.nextElementSibling;
        if (!panel) return;
        btn.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
  
        btn.addEventListener('click', () => {
          const open = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!open));
          panel.hidden = open;
        });
  
        btn.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            btn.setAttribute('aria-expanded', 'false');
            panel.hidden = true;
            btn.focus();
          }
        });
      });
    })();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();