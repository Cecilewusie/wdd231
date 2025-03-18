document.getElementById('scheduleForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventType = document.getElementById('eventType').value;

    const calendlyEventURL = eventType === "meeting"
        ? "https://calendly.com/darl-white/book-day-and-time-with-blacq-shot"
        : "https://calendly.com/darl-white/book-day-and-time-with-blacq-shot";

    // Redirect the user to the Calendly scheduling page with pre-filled details
    const schedulingURL = `${calendlyEventURL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;

    window.location.href = schedulingURL;
});