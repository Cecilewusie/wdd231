const year = document.querySelector("#currentyear");
const todaysdates = new Date();
year.textContent = `${todaysdates.getFullYear()}`;

const modified = document.querySelector("#date-modified");
modified.innerHTML = `Last modified: ${document.lastModified}`;