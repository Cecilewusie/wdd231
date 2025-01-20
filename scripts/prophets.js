const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cardDiv = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayProphets(data.prophets)
}

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        // create the elements
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let dateOfBirth = document.createElement('p');
        let placeOfBirth = document.createElement('p');

        // populate the heading element with the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

        // build the image element by setting the attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // append the heading and image elements to the section element
        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);

        // add the section card to the "cards" div
        cardDiv.appendChild(card);
    });
}

getProphetData();
