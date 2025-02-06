const currentUrl = window.location.href;
console.log(currentUrl);

// divide the url into two halves
const everything = currentUrl.split('?');
console.log(everything);

//get the second part which is the relevant part
const formData = everything[1].split('&');
console.log(formData);

function show(cup) {
    formData.forEach(formParts => {
        if (formParts.startsWith(cup)) {
            labelValue = formParts.split('=')[1].replace(/%\d+/i, '@').replace(/\+/g, " ");
        }
    })
    return labelValue;
}



const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
    <p>Appointment for ${show("first")} ${show("last")}</p>
    <p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")} temple.</p>
    <p>Your Phone: ${show("phone")}</p>
    <p>Your Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
`;