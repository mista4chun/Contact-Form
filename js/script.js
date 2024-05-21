document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    let formIsValid = true;

    // Function to handle errors
    function handleError(input, errorMessageId) {
      input.classList.add('border-red-500');
      input.classList.remove('border-mediumGrey');
      document.getElementById(errorMessageId).classList.remove('hidden');
      input.setAttribute('aria-invalid', 'true');
    }

    // Function to clear errors
    function clearError(input, errorMessageId) {
      input.classList.remove('border-red-500');
      input.classList.add('border-mediumGrey');
      document.getElementById(errorMessageId).classList.add('hidden');
      input.removeAttribute('aria-invalid');
    }

    // Validation logic
    const name = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const queryType = document.querySelector('input[name="queryType"]:checked');
    const message = document.getElementById('message');
    const consent = document.getElementById('consent');

    if (!name.value) {
      formIsValid = false;
      handleError(name, 'nameError');
    } else {
      clearError(name, 'nameError');
    }
    if (!lastName.value) {
      formIsValid = false;
      handleError(lastName, 'lastNameError');
    } else {
      clearError(lastName, 'lastNameError');
    }

    if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      formIsValid = false;
      handleError(email, 'emailError');
    } else {
      clearError(email, 'emailError');
    }

    if (!queryType) {
      formIsValid = false;
      document.getElementById('queryTypeError').classList.remove('hidden');
    } else {
      document.getElementById('queryTypeError').classList.add('hidden');
    }

    if (!message.value) {
      formIsValid = false;
      handleError(message, 'messageError');
    } else {
      clearError(message, 'messageError');
    }

    if (!consent.checked) {
      formIsValid = false;
      document.getElementById('consentError').classList.remove('hidden');
      consent.setAttribute('aria-invalid', 'true');
    } else {
      document.getElementById('consentError').classList.add('hidden');
      consent.removeAttribute('aria-invalid');
    }

    // Show success message if the form is valid
    if (formIsValid) {
      const toast = document.getElementById('toast');
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);

      // Reset the form
      event.target.reset();
    }
  });
