// humberger menu
const hamburgerMenu = document.querySelector(".menu");
const navB = document.querySelector("#animatemenu");

// adding event listners to hamburger menu
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle("show");
    navB.classList.toggle("show");
});

const navLinks = document.querySelectorAll("#header-nav a");

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        event.target.classList.add("active");
    });
});

//selecting card element from html to display data from members.json
const cardDiv = document.querySelector("#cards");

//fetching and displaying data from members.json using async/await
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) { 
    members.forEach(member => {
        // create the elements
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let description = document.createElement('p');
        let visit = document.createElement('a');
        let membershipLevel = document.createElement('p');

        // populate the heading element with the member's full name
        fullName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        description.textContent = `Goal: ${member.description}`;
        membershipLevel.textContent = `Membership Level: ${displaySymbol(member.membership_level)}`;

        // building attributes for the website or visit
        visit.setAttribute('href', member.website);
        visit.setAttribute('target', '_blank');
        visit.textContent = 'Visit Website';

        // build the image element by setting the attributes
        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '300');

        // set class Attribute to the description element
        description.setAttribute('class', 'goal');
        membershipLevel.setAttribute('class', 'membership');

        // setting id attribute for card element
        card.setAttribute('id', `section-from-derictory`);


        // append the heading and image elements to the section element
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(description);
        card.appendChild(membershipLevel);
        card.appendChild(visit);
        

        // add the section card to the "cards" div
        cardDiv.appendChild(card);
    });
}

// function to display bronze,silver or gold symbol based on membership level, bronze for level 1,one bronze one silver for level 2 member, and one bronze, one silver and gold for level 3 member
function displaySymbol(memLevel) {
    let symbol = '';
    if (memLevel === 1) {
        symbol = '🥉 - bronze.';
    } else if (memLevel === 2) {
        symbol = '🥉🥈 - silver.';
    } else {
        symbol = '🥉🥈🥇 - Gold.';
    }
    return symbol;
}

fetchMembers();

const gridView = document.querySelector("#grid");
const listView = document.querySelector("#list");

gridView.addEventListener('click', () => {
    cardDiv.classList.remove('list');
    cardDiv.classList.add('grid');
});

listView.addEventListener('click', () => {
    cardDiv.classList.remove('grid');
    cardDiv.classList.add('list');
}   );

