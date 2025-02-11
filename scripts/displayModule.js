//this function takes an array, template and container to display information to
function displayMembersInfo(takesArray, template, container) {
    const html = takesArray.map(element => template(element)).join('');
    container.innerHTML = html;
}

export default displayMembersInfo;