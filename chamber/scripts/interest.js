import displayMembersInfo from '../../scripts/displayModule.js';
import {interest} from '../data/interest.mjs';
//displayMembersInfo takes an array, a template and a container to work

const interestCard = document.querySelector("#interest-container")
function displayInterestInfo() {
    displayMembersInfo(interest, interestTemplate, interestCard);
}

displayInterestInfo();

function interestTemplate(interest) {
    return `
        <section id="interest-card">
            <figure>
                <img src="${interest.photo}" alt="${interest.name}" width="300" height="200">
            </figure>
            <h2>${interest.name}</h2>
            <address>${interest.address}</address>
            <p>${interest.description}</p>
            <button type="button">Learn More</button>
        </section>
    `;
}
const sidebar = document.querySelector("#sidebar-content");

function displayVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();
    let message = '';

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = now - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${daysDifference} days ago.`;
        }
    }

    sidebar.innerHTML = `<p id="visitor-message">${message}</p>`;
    localStorage.setItem('lastVisit', now);
}

displayVisitMessage();