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
            labelValue = formParts.split('=')[1].replace(/%\d+/i, '@').replace(/\+/g, " ").replace(/[A-Z]+\d+\@[A-Z]+\d+.+/g, "");
        }
    })
    return labelValue;
}



const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
    <p>Thank you, <span>${show("first")}</span> <span>${show("last")}</span>, for joining us as a <span">${show("membership")}🥉</span> member!</p>
    <p>We have recorded your organizational title as <span>${show("org-title")}</span> at <span>${show("organization")}</span>.</p>
    <p>We will reach out to you at ${show("email")} or call you at ${show("phone")} if we need any further information.</p>
    <p>Your business/organization description: <span><br>${show("description")}</span></p>
    <p>Form submitted on: <span>${show("timestamp")}</span>.</p>

    <p>For more equiries, email us on <a href="mailto:hendrixcecil0@gmail.com">email📩</a> or call us on <a href="tel:+233550682513">Call📞.</a></p>
`;