// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️ Light Mode';
  } else {
    themeToggleBtn.textContent = '🌙 Dark Mode';
  }

  // Toggle theme on button click
  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = '☀️ Light Mode';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggleBtn.textContent = '🌙 Dark Mode';
      localStorage.setItem('theme', 'light');
    }
  });

  // Simple contact form submission handling
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Here you can add actual form submission logic
    alert('Thank you for contacting me, ' + contactForm.name.value + '! I will get back to you soon.');
    contactForm.reset();
  });
});




document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');
  const messageBox = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    // STRONG validation patterns
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'.\s-]{2,50}$/; // allows names like "O'Connor", "Ana María"
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name || !email || !message) {
      showMessage('Please fill out all fields.', 'red');
      return;
    }

    if (!nameRegex.test(name)) {
      showMessage('Please enter a valid name (letters, spaces, apostrophes, 2-50 characters).', 'red');
      return;
    }

    if (!emailRegex.test(email)) {
      showMessage('Please enter a valid email address.', 'red');
      return;
    }

    if (message.length < 10) {
      showMessage('Message should be at least 10 characters long.', 'red');
      return;
    }

    // Success
    showMessage('Your message has been sent successfully!', 'green');
    form.reset();
  });

  function showMessage(msg, color) {
    messageBox.textContent = msg;
    messageBox.style.color = color;
  }
});







/**jquery */

$(document).ready(function() {
  const $scrollTopBtn = $('#scrollTopBtn');
  const $scrollBottomBtn = $('#scrollBottomBtn');

  // Scroll to top
  $scrollTopBtn.on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
  });

  // Scroll to bottom
  $scrollBottomBtn.on('click', function() {
    $('html, body').animate({ scrollTop: $(document).height() }, 'smooth');
  });
});

