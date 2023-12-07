// Add this code to change the logo size dynamically
const logoImage = document.getElementById('logoImage');
logoImage.classList.add('bigger');

const quoteForm = document.querySelector('#quoteForm');
const submitBtn = document.querySelector('.submit-btn');
const nameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const sqmInput = document.querySelector('#squareMeters');
const surfaceTypeInput = document.querySelector('#surfaceType');
const locInput = document.querySelector('#location');
const addInfoInput = document.querySelector('#additionalInfo');



const publicKey = "B45szz-pbyYRbZ2c6";
const serviceId = "service_geki7gp";
const templateId = "template_f2rgmn5";


// Initialize Email.js with your user ID
emailjs.init(publicKey);

quoteForm.addEventListener("submit", e => {
    e.preventDefault();
    submitBtn.innerText = "Μισό δευτερόλεπτο...";

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        squareMeters: sqmInput.value,
        surfaceType: surfaceTypeInput.value,
        location: locInput.value,
        additionalInfo: addInfoInput.value
    }

    emailjs.send(serviceId,templateId,inputFields)
        .then(() => {
            submitBtn.innerttext = "Εστάλη επιτυχώς";
            nameInput.value = "";
            emailInput.value = "";
            sqmInput.value = "";
            surfaceTypeInput.value = "";
            locInput.value = "";
            addInfoInput.value = "";            
        },  (error)  => {
                console.log(error);

                submitBtn.innerText = "Κάτι πήγε στραβά"
        });
});