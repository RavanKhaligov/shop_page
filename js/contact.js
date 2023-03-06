const contactForm = document.querySelector(".form-div form");
const name = document.querySelector(".name");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
run();
function run(){
    contactForm.addEventListener("submit",handleSubmit);
}
function handleSubmit(e){
    let nameValue = name.value,
    phoneValue = phone.value,
    emailValue = email.value,
    messageValue = message.value;
    if (nameValue.trim() && phoneValue.trim() && emailValue.trim() && messageValue.trim()){
        alert("Message was sent successfully");
        name.value = "";
        phone.value = "";
        email.value = "";
        message.value = "";
    }
    else{
        alert("Please fill all gaps correctly");
    }
    e.preventDefault();
}