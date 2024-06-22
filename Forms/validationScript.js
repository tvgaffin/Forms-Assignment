// JavaScript code for form validation

// Function to validate form input
function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting

  // Retrieve the input field value
  var inputValue = document.getElementById('inputField').value;

  // Regular expression pattern for alphanumeric input
  var alphanumericPattern = /^[a-z0-9]+$/i;

  // Check if the input value matches the pattern
  if (alphanumericPattern.test(inputValue)) {
      // Valid input: display confirmation
      alert('Input is valid. The form will be submitted (but not actually processed).');
      // Optionally, you can submit the form programmatically if needed
      // event.target.submit();
  } else {
      // Invalid input: display error message
      alert('Input is invalid. Please enter alphanumeric characters only.');
  }
}

// Attach the validation function to the form's submit event
document.getElementById('myForm').addEventListener('submit', validateForm);
