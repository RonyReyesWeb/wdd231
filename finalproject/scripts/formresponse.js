const params = new URLSearchParams(window.location.search);

const fullname = params.get('fullname');
const email = params.get('email');
const service = params.get('service');
const message = params.get('message');
const phone = params.get('phone');


document.getElementById('display-name').textContent = fullname;
document.getElementById('display-email').textContent = email;
document.getElementById('display-phone').textContent = phone;
document.getElementById('display-service').textContent = service;
document.getElementById('display-message').textContent = message;
