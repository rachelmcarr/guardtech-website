// GuardTech Pest Management — reference site interactions

document.addEventListener('DOMContentLoaded', function () {
  // Transparent-to-solid header on scroll (homepage only, see body.home CSS)
  var header = document.querySelector('.site-header');
  var logo = document.getElementById('site-logo');
  if (header) {
    var updateHeaderState = function () {
      var scrolled = window.scrollY > 40;
      header.classList.toggle('scrolled', scrolled);
      if (logo) {
        var wanted = scrolled ? logo.dataset.dark : logo.dataset.light;
        if (logo.getAttribute('src') !== wanted) logo.setAttribute('src', wanted);
      }
    };
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Pest ID filter (Pest ID page)
  var filterButtons = document.querySelectorAll('.pest-filter button');
  var pestCards = document.querySelectorAll('.pest-card');
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var category = btn.getAttribute('data-category');
      pestCards.forEach(function (card) {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Contact form (reference only — no backend wired up)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('This is a reference build — connect this form to Scorpion\'s lead/CRM system.');
    });
  }
});
