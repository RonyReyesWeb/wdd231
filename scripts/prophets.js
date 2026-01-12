const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function GetProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

GetProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h1');
        let bornday = document.createElement('h2');
        let borncity = document.createElement('h3');

        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        bornday.textContent = `Date of Birth: ${prophet.birthdate}`;
        borncity.textContent = `City of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute(
            'alt',
            `Portrait of ${prophet.name} ${prophet.lastname}`
        );
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(bornday);
        card.appendChild(borncity);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
};
