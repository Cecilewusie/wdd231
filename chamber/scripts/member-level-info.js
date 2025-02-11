const membershipLevels = [
    {
        type: 'Non profit Membership Level',
        cost: 0,
        benefits: [
            'Access to special events',
            'Basic training sessions',
            'Event discounts'
        ]
    },
    {
        type: 'Bronze Membership Level',
        cost: 100,
        benefits: [
            'Access to special events',
            'Basic training sessions',
            'Event discounts',
            'Advertising opportunities'
        ]
    },
    {
        type: 'Silver Membership Level',
        cost: 250,
        benefits: [
            'Access to special events',
            'Advanced training sessions',
            'Event discounts',
            'Advertising opportunities',
            'Spotlight positions on the home page'
        ]
    },
    {
        type: 'Gold Membership Level',
        cost: 500,
        benefits: [
            'Access to special events',
            'Premium training sessions',
            'Event discounts',
            'Advertising opportunities',
            'Spotlight positions on the home page',
            'Exclusive networking events'
        ]
    }
];

const cardDiv = document.querySelector("#membership-level-card");

function membershipTemplate(member) {
    if(member.cost === 0) {
        return `
                <section class="non-profit-color">
                    <p>${member.type}</p>
                    <button type="button" id="representBtn"> Learn More</button>
                </section>
        `;
    } 
    else if (member.cost === 100) {
        return `
                <section class="bronze-color">
                    <p>${member.type}</p>
                    <button type="button" id="representBtn"> Learn More</button>
                </section>
        `;       
    }
    else if (member.cost === 250) {
        return `
                <section class="silver-color">
                    <p>${member.type}</p>
                    <button type="button" id="representBtn"> Learn More</button>
                </section>
        `;       
    }
    else if (member.cost === 500) {
        return `
                <section class="gold-color">
                    <p>${member.type}</p>
                    <button type="button" id="representBtn"> Learn More</button>
                </section>
        `;       
    }        
}

function dialogTemplate(member) {
    return `    
                <button type="button" class="close-button">❌</button>     
                <h3>${member.type}</h3>
                <p>With a monthly payment of <span class="amount">$${member.cost}</span> you get to enjoy these benefits</p>
                <ul class="benefits"> ${member.benefits.map(element => {
                    return `<li>➡️${element}</li>`;
                }).join("")}</ul>               
    `
}

function displayMembersInfo(takesArray, template, container) {
    const html = takesArray.map(element => template(element)).join('');
    container.innerHTML = html;
}

displayMembersInfo(membershipLevels, membershipTemplate, cardDiv);

const dialogDetails = document.querySelectorAll("#representBtn");
const modal = document.querySelector(".members-dialog");

dialogDetails.forEach((button, index) => {
    button.addEventListener('click', () => {
        displayMembersInfo([membershipLevels[index]], dialogTemplate, modal);
        modal.showModal();
        
        const closeButton = modal.querySelector(".close-button");
        closeButton.addEventListener('click', () => {
            modal.close();
        });
    });
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});