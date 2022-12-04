const form = document.querySelector("#contact-form");
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
    textArea.style.display = "none";
  } else {
    textArea.style.display = "block";
  }
}

if (checkValue(fullName.value, 4) && validateEmail(email.value) && checkValue(textArea.value, 5)) {
  messageSent.innerHTML = `<div id="messageSent"> Message sent </div>`;
  messageSent.style.display = "block";
  form.reset();
}

form.addEventListener("submit", validateInput);

console.log(button, validateInput);

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
