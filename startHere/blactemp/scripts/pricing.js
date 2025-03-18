import { pricingData } from "../data/pricing.mjs";
import displayMembersInfo from "../../scripts/displayModule.js";

// templates to use
// price template
function pricingTemplate(pricingOffers) {
    return `
            <div class="pricing-and-offers">
              <div class="pricing-item">
                <h3>${pricingOffers.eventType}</h3>
                <h4>$${pricingOffers.price}</h4>
                <div class="expand-offers"><i class="bi-arrows-angle-expand">click</i></div>
              </div>
                <a href="#referred"><button type="button">Book Us</button></a>
            </div><!-- End Pricing Item -->
    `
}

// dialog template
function dialogTemplate(dialogOffers) {
    return `
            <button class="close-button"><i class="bi-x"></i></button>
            <h1>${dialogOffers.eventType}</h1>
            <p>${dialogOffers.offers}</p>
    `
}


function displayPriceOffers() {
    displayMembersInfo(pricingData, pricingTemplate, document.querySelector(".price-container"))
}

displayPriceOffers();

const dialogDetails = document.querySelectorAll(".expand-offers");
const modal = document.querySelector(".price-dialog");

dialogDetails.forEach((button, index) => {
    button.addEventListener('click', () => {
        displayMembersInfo([pricingData[index]], dialogTemplate, modal);
        modal.showModal();
        
        const closeButton = modal.querySelector(".close-button");
        closeButton.addEventListener('click', () => {
            modal.close();
        });
    });
});

//showing form modal
const bookingDialog = document.querySelector(".booking-dialog");
const showBookingDialogBtn = document.querySelector("#showDialog");
const closeBookingDialogBtn = document.querySelector("#closeBook")

showBookingDialogBtn.addEventListener('click', () => {
    bookingDialog.showModal();
})

closeBookingDialogBtn.addEventListener('click', () => {
    bookingDialog.close();
})

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});