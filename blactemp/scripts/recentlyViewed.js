document.addEventListener("DOMContentLoaded", () => {
    const recentlyViewedContainer = document.querySelector("#recently-viewed-container");

    // Retrieve the recently viewed image information from local storage
    const recentlyViewedImage = JSON.parse(localStorage.getItem("recentlyViewedImage"));

    if (recentlyViewedImage) {
        recentlyViewedContainer.innerHTML = `
            <a href="${recentlyViewedImage.src}" data-lightbox="mygallery" data-title="${recentlyViewedImage.title}">
                <img src="${recentlyViewedImage.src}" alt="${recentlyViewedImage.title}" loading="lazy">
            </a>
        `;
    } else {
        recentlyViewedContainer.innerHTML = "";
    }
});