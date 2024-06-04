const scriptURL = 'https://script.google.com/macros/s/AKfycbzayms-5oJUQXWr7O_7OHmes44k_iofJOsbtnDy0dl6_X7hBUiaS462VWMtrQO-vx92ww/exec';
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});
