const a = document.querySelector('#a');

a.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "http://google.com";
  });