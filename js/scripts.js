(function () {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');
  let telInput = document.querySelector('#contact-no');
  let messageInput = document.querySelector('#message-area');

  function showError(input, message) {
    let formContainer = input.parentElement;

    let error = formContainer.querySelector('.error-message');
    if (error) {
      formContainer.removeChild(error);
    }

    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      input.parentNode.insertBefore(error, input.nextSibling);
    }
  }

  function validateEmail() {
    let value = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      showError(emailInput, 'Email is a required field.');
      return false;
    }

    if (emailRegex.test(value) === false) {
      showError(emailInput, 'You must enter a valid email address.');
      return false;
    }

    showError(emailInput, null);
    return true;
  }

  function validateNo() {
    const phoneRegex = /^\d{10}$/;
    let value = telInput.value;

    if (!value) {
      showError(telInput, 'Telephone is a required field.');
      return false;
    }

    if (!phoneRegex.test(value)) {
      showError(telInput, 'Please enter a valid 10-digit number.');
      return false;
    }
    showError(telInput, null);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidNo = validateNo();
    return isValidEmail && isValidNo;
  }

  // Initialize EmailJS
  emailjs.init('NKsUA2M8D6DI6xETy'); // Replace with your EmailJS public key

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    if (validateForm()) {
      // Collect form data
      const email = emailInput.value;
      const telephone = telInput.value;
      const message = messageInput.value;
      // Send email using EmailJS
      emailjs
        .send('service_ivfq4ys', 'template_ix663r9', {
          contact_email: email,
          contact_no: telephone,
          message: message,
        })
        .then(function (response) {
          alert('Message sent successfully!');
          form.reset(); // Reset the form after successful submission
        })
        .catch(function (error) {
          alert('Failed to send the message. Please try again.');
        });
    } else {
      console.log('Form validation failed'); // Debugging log
    }
  });

  emailInput.addEventListener('input', validateEmail);
  telInput.addEventListener('input', validateNo);
})();
