// join.js

// 1. Set the hidden timestamp when the form loads
document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // 2. Animate membership cards on page load
    const cards = document.querySelectorAll('.membership-card');
    cards.forEach((card, index) => {
        setTimeout(() => card.classList.add('show'), index * 200);
    });

    // 3. Modal functionality
    const modalLinks = document.querySelectorAll('.membership-card button');
    modalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const modalId = e.target.parentElement.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'block';
        });
    });

    // Close buttons inside modals
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    // Close modal if clicking outside modal content
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // 4. Current year and last modified in footer
    const year = document.getElementById("currentyear");
    const lastMod = document.getElementById("lastModified");
    if (year) year.textContent = new Date().getFullYear();
    if (lastMod) lastMod.textContent = `Last Modified: ${document.lastModified}`;
});




// thankyou.js


// Get form data from URL query string
document.addEventListener('DOMContentLoaded', () => {
    const myInfo = new URLSearchParams(window.location.search);

    const resultsContainer = document.getElementById('results');
    if (!resultsContainer) return;

    // Populate the results div with submitted data
    resultsContainer.innerHTML = `
        <div class="member-card">
            <p>We received your application to join the chamber of commerce!</p>
            <p><strong>Full Name:</strong> ${myInfo.get('first')} ${myInfo.get('last')}</p>
            <p><strong>Phone Number:</strong> ${myInfo.get('phone')}</p>
            <p><strong>Email Address:</strong> ${myInfo.get('email')}</p>
            <p><strong>Organization:</strong> ${myInfo.get('organization')}</p>
            <p><strong>Organizational Title:</strong> ${myInfo.get('title')}</p>
            <p><strong>Description:</strong> ${myInfo.get('description')}</p>
            <p><strong>Membership:</strong> ${myInfo.get('membership')}</p>
            <p><strong>Submission Timestamp:</strong> ${myInfo.get('timestamp')}</p>
        </div>
    `;

    // Optional: highlight the member card for effect
    const card = resultsContainer.querySelector('.member-card');
    if (card) {
        card.style.opacity = 0;
        setTimeout(() => card.style.opacity = 1, 200);
    }
});
