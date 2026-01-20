const spotlightContainer = document.getElementById("spotlight-container");

async function getSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();

        const eligibleMembers = data.companies.filter(c => c.membership === 2 || c.membership === 3);

        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

        const spotlightMembers = shuffled.slice(0, 3);

        displaySpotlights(spotlightMembers);

    } catch (error) {
        console.error("Error fetching spotlight members:", error);
    }
}

function displaySpotlights(members) {
    spotlightContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name}" class="spotlight-logo">
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership: ${membershipLevel(member.membership)}</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

function membershipLevel(level) {
    switch (level) {
        case 1: return "Member";
        case 2: return "Silver";
        case 3: return "Gold";
        default: return "Member";
    }
}

getSpotlights();
