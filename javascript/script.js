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

  
});




 document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('contactForm');
      const nameField = document.getElementById('name');
      const emailField = document.getElementById('email');
      const messageField = document.getElementById('message');
      const messageBox = document.getElementById('formMessage');

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        messageBox.textContent = ''; // Clear previous message

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();

        // Validation patterns
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'.\s-]{2,50}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Validate fields
        if (!name || !email || !message) {
          showMessage('⚠️ Please fill out all fields.', 'red');
          return;
        }

        if (!nameRegex.test(name)) {
          showMessage('⚠️ Name must be 2–50 characters and contain only letters, spaces, hyphens, or apostrophes.', 'red');
          return;
        }

        if (!emailRegex.test(email)) {
          showMessage('⚠️ Please enter a valid email address (e.g., you@example.com).', 'red');
          return;
        }

        if (message.length < 10) {
          showMessage('⚠️ Message must be at least 10 characters long. Please add more details.', 'red');
          return;
        }

        // If all valid
        showMessage('✅ Thank you! Your message has been sent successfully.', 'green');
        form.reset();
      });

      function showMessage(msg, color) {
        messageBox.textContent = msg;
        messageBox.style.color = color;
      }
    });

// document.addEventListener('DOMContentLoaded', () => {
//   const scrollTopBtn = document.getElementById('scrollTopBtn');
//   const scrollBottomBtn = document.getElementById('scrollBottomBtn');

//   // Scroll to top
//   scrollTopBtn.addEventListener('click', () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });

//   // Scroll to bottom
//   scrollBottomBtn.addEventListener('click', () => {
//     window.scrollTo({
//       top: document.body.scrollHeight,
//       behavior: 'smooth'
//     });
//   });
// });




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

