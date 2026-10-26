document.addEventListener('DOMContentLoaded', () => {
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  const dateElement = document.getElementById('current-date');
  if (dateElement) {
    const now = new Date();
    dateElement.textContent = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(now);
  }

  const cards = document.querySelectorAll('.stat-card, .score-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 80}ms`;
    card.style.animation = 'fadeUp 0.5s ease both';
  });

  const form = document.querySelector('#profile-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Saved';
        button.disabled = true;
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 1500);
      }
    });
  }
});
