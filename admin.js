document.getElementById('signin-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check credentials
  if (username === 'admin' && password === 'admintester') {
    // Redirect to admin.html
    window.location.href = 'admindash.html';
  } else {
    // Show error message
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Invalid username or password. Please try again.';
    errorMessage.style.display = 'block';
  }
});