
function displayProjectInfo() {
    const projectTitle = document.createElement("p");
    projectTitle.textContent = "wdd231 Class Project";

    const name = document.createElement("p");
    name.textContent = "Cecil Ewusie";

    // creating date object
    const todaysdates = new Date();

    const copyRight = document.createElement("p");
    copyRight.innerHTML = `&copy; <span>${todaysdates.getFullYear()}</span> Blacq Shot Chamber of Commerce`;

    const dateModified = document.createElement("p");
    dateModified.textContent = `Last Modified: ${document.lastModified}`;
    dateModified.setAttribute("class", "last-modified");

    const project = document.querySelector(".class-project");
    project.appendChild(projectTitle);
    project.appendChild(name);
    project.appendChild(copyRight);
    project.appendChild(dateModified);
}

displayProjectInfo();