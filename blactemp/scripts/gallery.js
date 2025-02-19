import { mediaData } from "../data/gallery.mjs";
import displayMembersInfo from "../../scripts/displayModule.js";

function createMediaItem(media) {
    return `
        <a href="${media.src}" data-lightbox="mygallery" data-title="${media.title}" class="media-item">
            <img src="${media.src}" alt="${media.title}" loading="lazy">
        </a>
    `;
}

function displayGallery() {
    displayMembersInfo(mediaData, createMediaItem, document.querySelector("#media-gallery"));

    // Add event listeners to media items
    const mediaItems = document.querySelectorAll(".media-item");
    mediaItems.forEach(item => {
        item.addEventListener("click", (event) => {
            const mediaSrc = event.currentTarget.href;
            const mediaTitle = event.currentTarget.getAttribute("data-title");

            // Store the recently viewed image information in local storage
            localStorage.setItem("recentlyViewedImage", JSON.stringify({ src: mediaSrc, title: mediaTitle }));
        });
    });
}

displayGallery();
