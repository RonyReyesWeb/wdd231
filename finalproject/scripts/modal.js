const modal = document.querySelector('#service-modal');
const content = document.querySelector('#modal-content');
const closeBtn = document.querySelector('#close-modal');

export function openModal(service) {
    content.innerHTML = `
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <p>Category: ${service.category}</p>
        <p><strong>Duration:</strong> ${service.duration}</p>
    `;
    modal.showModal();
}

closeBtn.addEventListener('click', () => modal.close());
