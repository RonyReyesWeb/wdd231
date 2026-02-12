import { openModal } from './modal.js';
import { saveSelection } from './storage.js';

const container = document.querySelector('#services-container');

async function loadServices() {
    try {
        const response = await fetch('data/services.json');
        const services = await response.json();

        services.forEach(service => {
            const card = document.createElement('article');
            card.classList.add('service-card');

            card.innerHTML = `
                <h3>${service.name}</h3>
                <p><strong>Price:</strong> $${service.price}</p>
                <p><strong>Duration:</strong> ${service.duration}</p>
                <button 
                    aria-label="View details for ${service.name}">
                    View Details
                </button>
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
