const params = new URLSearchParams(window.location.search);

const name = params.get('name');
const email = params.get('email');
const message = params.get('message');

document.getElementById('display-name').textContent = name;
document.getElementById('display-email').textContent = email;
document.getElementById('display-message').textContent = message;
