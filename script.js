// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Form validation flags
    let isValid = true;

    // Validate Name
    if (!name) {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Message
    if (!message) {
        messageError.textContent = 'Message is required.';
        isValid = false;
    }

    // If form is valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        this.submit();
    }
});

// Dynamic Content Display (
    const aboutMeText = document.getElementById('aboutMeText');
    const toggleButton = document.getElementById('toggleButton');
    
    toggleButton.addEventListener('click', function() {
      if (toggleButton.textContent === 'Show More') {
        aboutMeText.style.display = 'block';
        toggleButton.textContent = 'Show Less';
      } else {
        aboutMeText.style.display = 'none';
        toggleButton.textContent = 'Show More';
      }
    });
    
    // Initially display only the first two sentences
 

const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');

menuButton.addEventListener('click', function() {
  if (mainNav.style.display === 'block') {
    mainNav.style.display = 'none';
    menuButton.textContent = 'Menu';
  } else {
    mainNav.style.display = 'block';
    menuButton.textContent = 'Close';
  }
});


