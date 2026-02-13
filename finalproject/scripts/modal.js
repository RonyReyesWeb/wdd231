const modal = document.querySelector('#service-modal');
const content = document.querySelector('#modal-content');
const closeBtn = document.querySelector('#close-modal');

export function openModal(service) {
    content.innerHTML = `
    <h3>${service.name}</h3>

    <p><strong>Ideal for:</strong> ${service.idealFor}</p>
    <p><strong>Delivery:</strong> ${service.deliveryType}</p>
    <p><strong>Support Included:</strong> ${service.supportIncluded ? 'Yes' : 'No'}</p>

    <p><strong>Features:</strong></p>
    <ul>
        ${service.features.map(f => `<li>${f}</li>`).join('')}
    </ul>
    `;

    modal.showModal();
}

closeBtn.addEventListener('click', () => modal.close());
