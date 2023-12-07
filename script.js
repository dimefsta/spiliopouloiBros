document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    mobileMenuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Separate function to initialize Email.js
    function initEmailJs() {
        const publicKey = "B45szz-pbyYRbZ2c6";
        emailjs.init(publicKey);
    }

    // Initialize Email.js
    initEmailJs();

    const serviceId = "service_geki7gp";
    const templateId = "template_f2rgmn5";  

    const quoteForm = document.querySelector('#quoteForm');
    const submitBtn = document.querySelector('.submit-btn');
    const nameInput = document.querySelector('#fullName');
    const emailInput = document.querySelector('#email');
    const sqmInput = document.querySelector('#squareMeters');
    const surfaceTypeInput = document.querySelector('#surfaceType');
    const locInput = document.querySelector('#location');
    const addInfoInput = document.querySelector('#additionalInfo');

    quoteForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        submitBtn.innerText = "Μισό δευτερόλεπτο...";

        const inputFields = {
            name: nameInput.value,
            email: emailInput.value,
            squareMeters: sqmInput.value,
            surfaceType: surfaceTypeInput.value,
            location: locInput.value,
            additionalInfo: addInfoInput.value,
        };

        try {
            await emailjs.send(serviceId, templateId, inputFields);
            submitBtn.innerText = "Στάλθηκε επιτυχώς";
            nameInput.value = "";
            emailInput.value = "";
            sqmInput.value = "";
            surfaceTypeInput.value = "";
            locInput.value = "";
            addInfoInput.value = "";
        } catch (error) {
            console.log(error);
            submitBtn.innerText = "Κάτι πήγε στραβά";
            // Display error message to the user if needed
        }
    });
});
