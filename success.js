const dismissBtn = document.querySelector('.success button');

dismissBtn.addEventListener('click', (e) => {
  e.preventDefault();

  location.pathname = '/';
});
