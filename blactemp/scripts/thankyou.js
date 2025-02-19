const currentUrl = window.location.href;

// divide the url into two halves
const everything = currentUrl.split('?');

//get the second part which is the relevant part
const formData = everything[1].split('&');
console.log(formData);

function show(cup) {
    formData.forEach(formParts => {
        if (formParts.startsWith(cup)) {
            labelValue = formParts.split('=')[1].replace(/%\d+/i, '@').replace(/\+/g, " ").replace(/[A-Z]+\d+\@[A-Z]+\d+.+/g, "").replace(/\@D\%.+/g,"");
        }
    })
    return labelValue;
}



const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
    <p>Thank you, <span>${show("name")}</span>, for reaching out to us.</p>
    <p>We have recorded your inquiry type as <span>${show("inquiry")}</span>.</p>
    <p>We will get back to you at <span>${show("email")}</span> as soon as possible.</p>
    <p>Your message: <span><br>${show("message")}</span></p> means a lot to us.
    <p>We are grateful you heard about us through: <span>${show("referral")}</span>.</p>
    <p>Form submitted on: <span>${show("timestamp")}</span>.</p>
    <p>For more inquiries, email us at <a href="mailto:hendrixcecil0@gmail.com">email📩</a> or call us at <a href="tel:+233550682513">Call📞</a>.</p>
`;