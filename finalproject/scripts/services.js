import { openModal } from './modal.js';
import { saveSelection } from './storage.js';

const container = document.querySelector('#services-container');

async function loadServices() {
    try {
        const response = await fetch('data/services.json');
        const services = await response.json();

        services.forEach(service => {
            const card = document.createElement('div');
            card.innerHTML = `
                <h3>${service.name}</h3>
                <p>Price: $${service.price}</p>
                <p>Duration: ${service.duration}</p>
                <button>View Details</button>
            `;

            card.querySelector('button').addEventListener('click', () => {
                openModal(service);
                saveSelection(service.name);
            });

            container.appendChild(card);
        });

    } catch (error) {
        container.textContent = 'Unable to load services.';
    }
}

loadServices();
