function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_nktihpg","template_i5xcozj",parms).then(alert("Email Sent Successfully!"))
}
