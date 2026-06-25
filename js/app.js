// LuxeVoyage Kenya — Main JS

// === CONTACT FORM VALIDATION ===
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;

    if (name.length < 2) {
      showError('name', 'Please enter your full name (at least 2 characters).');
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }

    if (message.length < 10) {
      showError('message', 'Please enter a message (at least 10 characters).');
      valid = false;
    }

    if (valid) {
      const submitBtn = document.getElementById('contactSubmit');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      setTimeout(function () {
        form.innerHTML = '<div class="alert alert-success"><strong>Thank you!</strong> Your enquiry has been received. A LuxeVoyage specialist will contact you within 24 hours.</div>';
      }, 800);
    }
  });

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('is-invalid');
    const error = document.createElement('div');
    error.className = 'invalid-feedback';
    error.textContent = message;
    field.parentNode.appendChild(error);
  }

  function clearErrors() {
    document.querySelectorAll('.is-invalid').forEach(function (el) {
      el.classList.remove('is-invalid');
    });
    document.querySelectorAll('.invalid-feedback').forEach(function (el) {
      el.remove();
    });
  }
});

// === GALLERY FILTER ===
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

// === SCROLL REVEAL ===
document.addEventListener('DOMContentLoaded', function () {
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(function (el) { observer.observe(el); });
});

// === DARK MODE TOGGLE ===
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;

  const saved = localStorage.getItem('lv-theme');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    toggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('lv-theme', isDark ? 'dark' : 'light');
  });
});

// === HERO SLIDESHOW ===
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('heroDots');
  if (!slides.length || !dotsContainer) return;

  let current = 0;
  let autoInterval;

  slides.forEach(function (_, i) {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', function () { goTo(i); });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.hero-dot');

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo((current + 1) % slides.length); }
  function prev() { goTo((current - 1 + slides.length) % slides.length); }

  function startAuto() {
    stopAuto();
    autoInterval = setInterval(next, 6000);
  }
  function stopAuto() { clearInterval(autoInterval); }

  document.querySelector('.hero-arrow-next').addEventListener('click', function () { next(); startAuto(); });
  document.querySelector('.hero-arrow-prev').addEventListener('click', function () { prev(); startAuto(); });

  const hero = document.getElementById('heroCarousel');
  hero.addEventListener('mouseenter', stopAuto);
  hero.addEventListener('mouseleave', startAuto);

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stopAuto(); else startAuto();
  });

  startAuto();
});

// === PARALLAX SCROLL EFFECT ===
document.addEventListener('DOMContentLoaded', function () {
  const parallaxSections = document.querySelectorAll('.parallax-section');
  if (!parallaxSections.length) return;

  function updateParallax() {
    parallaxSections.forEach(function (section) {
      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > winH) return;

      const scrollProgress = (rect.top + rect.height / 2) / winH;
      const speed = 0.35;
      const yOffset = (scrollProgress - 0.5) * speed * 100;
      section.style.backgroundPositionY = 'calc(50% + ' + yOffset + 'px)';
    });
    requestAnimationFrame(updateParallax);
  }
  requestAnimationFrame(updateParallax);
});

// === BACK TO TOP ===
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    btn.style.display = window.scrollY > 400 ? 'block' : 'none';
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
