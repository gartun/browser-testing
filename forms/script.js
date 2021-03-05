const btn = document.querySelector("button"),
  required = document.querySelectorAll("[required]");

// Blur validation
/*required.forEach((field) => {
  field.addEventListener("blur", function () {
    if (this.value.trim() === "") {
      this.classList.add("empty");
    }
  });
});*/

// Button click validation

btn.addEventListener("click", checkIfRequiredEmpty);

function checkIfRequiredEmpty(e) {
  e.preventDefault();

  let isAllFilled = false;

  for (let i = 0; i < required.length; i++) {
    const inp = required[i];

    if (inp.value.trim() === "") {
      isAllFilled = false;
      inp.classList.add("empty");
      inp.focus();
      break;
    }
    isAllFilled = true;
    inp.classList.remove("empty");
  }

  if (isAllFilled) validateInput();
}

function validateInput() {
  alert("Im here");
}
