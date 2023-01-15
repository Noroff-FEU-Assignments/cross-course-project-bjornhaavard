const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const textArea = document.querySelector("#text");
const textError = document.querySelector("#textError");
const button = document.querySelector("#submit");
const messageSent = document.querySelector("#messageSent");

function validateInput(event) {
  event.preventDefault();
  if (checkValue(fullName.value, 4)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkValue(textArea.value, 5)) {
    textError.style.display = "none";
  } else {
    textError.style.display = "block";
  }

  if (checkValue(fullName.value, 4) && validateEmail(email.value) && checkValue(textArea.value, 5)) {
    messageSent.innerHTML = `<div><div id="messageSent"> Message successfully sent, 
                              you will be redirected to the homepage
                              </div>
                              </div>`;

    messageSent.style.display = "block";
    form.reset();
    setTimeout(() => {
      // messageSent.style.display = "none";
      document.location.href = "/index.html";
    }, 5000);
  }
}

form.addEventListener("submit", validateInput);

function checkValue(value, char) {
  if (value.trim().length >= char) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
