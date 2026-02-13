const params = new URLSearchParams(window.location.search);

const fullname = params.get('fullname');
const email = params.get('email');
const message = params.get('message');

document.getElementById('display-name').textContent = fullname;
document.getElementById('display-email').textContent = email;
document.getElementById('display-message').textContent = message;
