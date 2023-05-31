// LOGIN FORM
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // const userCircle = document.querySelector('.user-name');
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        // If response is okay, take the first string of the username and append it to circle
        // userCircle.innerText = email.substring(0,1);
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  // SIGN UP FORM
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // const userCircle = document.querySelector('.user-name');
  
    if (email && username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        // userCircle.innerText = email.substring(0,1);
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login')?.addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup')?.addEventListener('submit', signupFormHandler);