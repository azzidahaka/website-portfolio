(function () {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');
  let telInput = document.querySelector('#contact-no');

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
      formContainer.appendChild(error);
    }
  }

  function validateEmail(){
    let value = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }

    if (!emailRegex.test(emailInput)) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validateNo() {
    const phoneRegex = /^\d{10}$/;
    let value = telInput.value;
    if (!value) {
      showErrorMessage(telInput, 'Password is a required field.');
      return false;
    }

    if (!phoneRegex.test(telInput)) {
      showErrorMessage(telInput, 'Valid number please');

      return false;
    }

    showErrorMessage(telInput, null);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidNo = validateNo();
    return isValidEmail && isValidNo;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  })

  emailInput.addEventListener('input', validateEmail);
  telInput.addEventListener('input', validateNo);

})();

// // Validate email address
// function validateEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Validate telephone number
// function validatePhoneNumber(phoneNumber) {
//     const phoneRegex = /^\d{10}$/;
//     return phoneRegex.test(phoneNumber);
// }

// // Usage example
// const email = "example@example.com";
// const phoneNumber = "1234567890";

// console.log(validateEmail(email)); // Output: true
// console.log(validatePhoneNumber(phoneNumber)); // Output: true
