(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.querySelector('.sr-only').textContent = open ? 'Open navigation menu' : 'Close navigation menu';
    navLinks.classList.toggle('open', !open);
  });

  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    navLinks?.classList.remove('open');
  }));

  const triggers = [...document.querySelectorAll('.accordion-trigger')];
  triggers.forEach(trigger => trigger.addEventListener('click', () => {
    const opening = trigger.getAttribute('aria-expanded') !== 'true';
    triggers.forEach(item => {
      const panel = document.getElementById(item.getAttribute('aria-controls'));
      item.setAttribute('aria-expanded', 'false');
      item.querySelector('.expand-label').textContent = 'Expand';
      panel.hidden = true;
    });
    if (opening) {
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      trigger.setAttribute('aria-expanded', 'true');
      trigger.querySelector('.expand-label').textContent = 'Close';
      panel.hidden = false;
    }
  }));

  document.getElementById('current-year').textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: .08 });
    revealItems.forEach(item => observer.observe(item));
  }

  const navAnchors = [...document.querySelectorAll('.nav-links a')];
  const sections = navAnchors.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const setActive = () => {
    const point = window.scrollY + 130;
    let current = sections[0]?.id;
    sections.forEach(section => { if (section.offsetTop <= point) current = section.id; });
    navAnchors.forEach(link => {
      const active = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    });
  };
  setActive();
  window.addEventListener('scroll', setActive, { passive: true });
})();
