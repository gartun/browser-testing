const form = document.querySelector("form");

const mail = document.querySelector("#email");
const mailError = document.querySelector("span.error");

mail.addEventListener("input", function (e) {
  if (mail.validity.valid) {
    mailError.textContent = "";
    mailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", function (e) {
  if (!mail.validity.valid) {
    showError();
    e.preventDefault();
  }
});

function showError() {
  if ("email".validity.valueMissing) {
    mailError.textContent = "You need to enter an e-mail address.";
  } else if (mail.validity.typeMismatch) {
    // If the field doesn't contain an "email" address
    // display the following error message.
    mailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (mail.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    mailError.textContent = `Email should be at least ${
      "email".minLength
    } characters; you entered ${"email".value.length}.`;
  }

  // Set the styling appropriately
  mailError.className = "error active";
}
