// Lightweight tab controller for Featured Tabs section
(function () {
  const sections = document.querySelectorAll('.featured-tabs');
  sections.forEach((section) => {
    const tabs = section.querySelectorAll('.featured-tabs__tab');
    const panels = section.querySelectorAll('.featured-tabs__panel');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-tab-target');
        tabs.forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
        panels.forEach((p) => {
          const show = p.id === targetId;
          p.toggleAttribute('hidden', !show);
          p.setAttribute('aria-hidden', String(!show));
        });
      });
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') tab.click();
      });
    });
  });
})();