document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

const navbuttom = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show');
});



const membersContainer = document.querySelector("#members-container");

// Fetch data
async function getMembers() {
    const response = await fetch("data/members.json"); // <-- make sure this path matches your folder
    const data = await response.json();
    console.log(data); // This will let you check if it is being fetched
    displayMembers(data.companies);
}


// Display companies
function displayMembers(companies) {
    membersContainer.innerHTML = "";

    companies.forEach(company => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <h2>${company.name}</h2>
            <p class="phone">${company.phone}</p>

            <div class="card-content">
                <img src="images/${company.image}" alt="${company.name}">
                <div class="info">
                    <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                    <p><strong>Address:</strong> ${company.address}</p>
                    <p><strong>Membership:</strong> ${membershipLevel(company.membership)}</p>
                </div>
            </div>
        `;

        membersContainer.appendChild(card);
    });
}


// Convert membership number to text
function membershipLevel(level) {
    switch (level) {
        case 1: return "Member";
        case 2: return "Silver";
        case 3: return "Gold";
        default: return "Member";
    }
}

// Grid/List toggle
const gridBtn = document.getElementById("grid-btn");
const listBtn = document.getElementById("list-btn");

gridBtn.addEventListener("click", () => {
    membersContainer.style.display = "grid";
    membersContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
});

listBtn.addEventListener("click", () => {
    membersContainer.style.display = "grid";
    membersContainer.style.gridTemplateColumns = "1fr";
});

// Run on page load
getMembers();
