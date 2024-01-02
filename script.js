const input = document.querySelector('.newsletter-form input');
const form = document.querySelector('.newsletter-form');
const button = document.querySelector('.newsletter-form button');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  const emailInput = form.querySelector('input[name="email"]');

  const email = emailInput.value;

  // Perform email validation
  if (!validateEmail(email)) {
    // Show an error message or handle the invalid email case
    input.classList.add('error');
    return;
  }

  // Add "clicked" class and change inner text
  button.classList.add('clicked');
  button.innerText = 'Subscribed!';

  // Redirect to success.html after a delay
  setTimeout(() => {
    window.location.href = form.getAttribute('action');
  }, 2000);
});

function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}
