// ==================== EMAILJS CONTACT FORM ====================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize EmailJS with your PUBLIC KEY
  emailjs.init("7Qp7wJSz_QKSLvUmL");

  // Select form elements
  const contactForm = document.querySelector('[data-form]');
  const formBtn = document.querySelector('[data-form-btn]');
  const formInputs = document.querySelectorAll('[data-form-input]');

  // Check if form exists before proceeding
  if (!contactForm || !formBtn) {
    console.error('Contact form elements not found');
    return;
  }

  // Enable button when all inputs are valid
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      if (contactForm.checkValidity()) {
        formBtn.removeAttribute('disabled');
      } else {
        formBtn.setAttribute('disabled', '');
      }
    });
  });

  // Handle form submission
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get button elements
    const btnText = formBtn.querySelector('span');
    const btnIcon = formBtn.querySelector('ion-icon');

    // UI loading state
    btnText.textContent = 'Sending...';
    btnIcon.setAttribute('name', 'hourglass-outline');
    formBtn.setAttribute('disabled', '');

    // Prepare template parameters
    const templateParams = {
      from_name: document.getElementById('from_name').value,
      from_email: document.getElementById('from_email').value,
      message: document.getElementById('message').value
    };

    // Send email via EmailJS
    emailjs
      .send(
        'service_8tjilzt',  // Your service ID
        'template_6kqvm0e', // Your template ID
        templateParams
      )
      .then(() => {
        // Success state
        btnText.textContent = 'Message Sent!';
        btnIcon.setAttribute('name', 'checkmark-outline');
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
          btnText.textContent = 'Send Message';
          btnIcon.setAttribute('name', 'paper-plane');
          formBtn.setAttribute('disabled', '');
        }, 3000);
      })
      .catch((error) => {
        // Error state
        console.error('EmailJS Error:', error);
        btnText.textContent = 'Error! Try Again';
        btnIcon.setAttribute('name', 'close-outline');

        // Reset button after 3 seconds
        setTimeout(() => {
          btnText.textContent = 'Send Message';
          btnIcon.setAttribute('name', 'paper-plane');
          formBtn.removeAttribute('disabled');
        }, 3000);
      });
  });

});