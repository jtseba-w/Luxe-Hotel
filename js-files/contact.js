const DEFAULT_RECIPIENT = "example@gmail.com";   // ← LOCKED recipient

function getFormValues() {
    const nameInput = document.getElementById("name");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const errorText = document.getElementById("error");

    const name = nameInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    let allGood = true;

    nameInput.style.border = "";
    subjectInput.style.border = "";
    messageInput.style.border = "";

    if (!name) { nameInput.style.border = "2px solid red"; allGood = false; }
    if (!subject) { subjectInput.style.border = "2px solid red"; allGood = false; }
    if (!message) { messageInput.style.border = "2px solid red"; allGood = false; }

    if (!allGood) {
        errorText.style.display = "block";
        return null;
    }

    errorText.style.display = "none";

    // Clean body message — no duplicate subject
    const fullMessage = `Name: ${name}\n\n${message}`;

    return { name, subject, message, fullMessage };
}


// EMAIL (Gmail app on mobile)
function sendEmail() {
    const values = getFormValues();
    if (!values) return;

    const mailtoURL =
        `mailto:${encodeURIComponent(DEFAULT_RECIPIENT)}` +
        `?subject=${encodeURIComponent(values.subject)}` +
        `&body=${encodeURIComponent(values.fullMessage)}`;

    const gmailWebURL =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(DEFAULT_RECIPIENT)}` +
        `&su=${encodeURIComponent(values.subject)}` +
        `&body=${encodeURIComponent(values.fullMessage)}`;

    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = mailtoURL;     // Opens Gmail app
    } else {
        window.open(gmailWebURL, "_blank");   // Opens Gmail web compose
    }
}


// WHATSAPP
function sendWhatsApp() {
    const data = getFormValues();
    if (!data) return;

    // Your WhatsApp number here
    const phoneNumber = "+256771598774";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(data.fullMessage)}`;
    window.open(url, "_blank");
}



function sendSMS() {
    const data = getFormValues();
    if (!data) return;

    // PUT YOUR SMS NUMBER HERE
    const smsNumber = "+256771598774";

    // Build SMS URL (works on Android & iPhone)
    const url = `sms:${smsNumber}?&body=${encodeURIComponent(data.fullMessage)}`;

    window.location.href = url;  // Opens the SMS app instantly
}