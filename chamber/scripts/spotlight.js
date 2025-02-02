async function fetchSpotsInfo() {
    try {
        const response = await fetch('data/members.json');
        if (response.ok) {
            const data = await response.json();
            displaySpotlight(data);
        } else {
            console.error('Failed to fetch data:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// selecting spotlight element from html to display data from members.json
const spotlightContainer = document.querySelector('#spotlight-container');

function displaySpotlight(members) {
    // Filter members to include only gold or silver members
    const filteredMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);

    // Randomly select two or three members
    const selectedMembers = [];
    const numberOfMembers = Math.floor(Math.random() * 2) + 2; // Randomly select 2 or 3 members
    while (selectedMembers.length < numberOfMembers && filteredMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredMembers.length);
        selectedMembers.push(filteredMembers.splice(randomIndex, 1)[0]);
    }

    selectedMembers.forEach(member => {
        // Create spotlight card container
        const spotlightCard = document.createElement('div');
        spotlightCard.classList.add('spotlight-card');

        // Create and populate spotlight header
        const spotlightHeader = document.createElement('div');
        spotlightHeader.classList.add('spotlight-header');

        const companyName = document.createElement('div');
        companyName.classList.add('company-name');
        companyName.innerHTML = `<p>${member.name}</p>`;

        spotlightHeader.appendChild(companyName);

        // Create spotlight content container
        const spotlightContent = document.createElement('div');
        spotlightContent.classList.add('spotlight-content');

        // Add company logo
        const spotlightLogo = document.createElement('div');
        spotlightLogo.classList.add('spotlight-logo');
        const logoImg = document.createElement('img');
        logoImg.setAttribute('src', member.image);
        logoImg.setAttribute('alt', `Logo of ${member.name}`);
        logoImg.setAttribute('loading','lazy');
        spotlightLogo.appendChild(logoImg);

        // Create and populate spotlight info
        const spotlightInfo = document.createElement('div');
        spotlightInfo.classList.add('spotlight-info');

        // Add email
        const email = document.createElement('p');
        const emailSpan = document.createElement('span');
        emailSpan.classList.add('email');
        emailSpan.innerHTML = `<span id="quantifier">Email:</span> ${member.email}`;
        email.appendChild(emailSpan);

        // Add phone number
        const phone = document.createElement('p');
        const phoneSpan = document.createElement('span');
        phoneSpan.classList.add('phone');
        phoneSpan.innerHTML = `<span id="quantifier">Phone:</span> ${member.phone}`;
        phone.appendChild(phoneSpan);

        // Add website link
        const website = document.createElement('p');
        const websiteLink = document.createElement('a');
        websiteLink.classList.add('website');
        websiteLink.setAttribute('href', member.website);
        websiteLink.setAttribute('target', '_blank');
        websiteLink.textContent = 'Visit Website';
        website.appendChild(websiteLink);

        // Add membership level
        const membershipLevel = document.createElement('p');
        const membershipLevelSpan = document.createElement('span');
        membershipLevelSpan.classList.add('membership-level');
        membershipLevelSpan.innerHTML = `<span id="quantifier">Member:</span> ${displaySymbol(member.membership_level)}`;
        membershipLevel.appendChild(membershipLevelSpan);

        // Append all info to spotlight info container
        spotlightInfo.appendChild(email);
        spotlightInfo.appendChild(phone);
        spotlightInfo.appendChild(membershipLevel);
        spotlightInfo.appendChild(website);

        // Append logo and info to spotlight content container
        spotlightContent.appendChild(spotlightLogo);
        spotlightContent.appendChild(spotlightInfo);

        // Append header and content to spotlight card
        spotlightCard.appendChild(spotlightHeader);
        spotlightCard.appendChild(spotlightContent);

        // Append spotlight card to spotlight container
        spotlightContainer.appendChild(spotlightCard);
    });
}

fetchSpotsInfo();

// function to display bronze, silver, or gold symbol based on membership level
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
