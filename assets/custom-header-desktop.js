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