const scriptURL = 'https://script.google.com/macros/s/AKfycbwI3IkunceUOjIjle6jMb8Uo6lZijQffPcfAUW3r_vb-DfzudK-cpTFV__aYE5OItjK/exec';
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});
