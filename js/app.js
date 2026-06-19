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
