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
  if (mail.validity.valueMissing) {
    mailError.textContent = mail.validationMessage;
  } else if (mail.validity.typeMismatch) {
    // If the field doesn't contain an "email" address
    // display the following error message.
    mailError.textContent = mail.validationMessage;
  } else if (mail.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    mailError.textContent = mail.validationMessage;
  }

  // Set the styling appropriately
  mailError.className = "error active";
}
