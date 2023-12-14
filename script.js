var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var textError = document.getElementById("text-error");
var submitError = document.getElementById("submit-error");

//onsubmit
var success = document.getElementById("success");

function validateName() {
  var name = document.getElementById("name-input").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is  required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Full name is required";
    return false;
  }
  nameError.innerHTML =
    '<i class="fa-solid fa-check" style="color: #0fae47;"></i>';
  return true;
}

function validatePhone() {
  var phone = document.getElementById("phone-input").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "please enter phone number";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "please enter 10 digit phone number";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please";
    return false;
  }
  phoneError.innerHTML =
    '<i class="fa-solid fa-check" style="color: #0fae47;"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("email-input").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    emailError.innerHTML = "Email is Invalid";
    return false;
  }
  emailError.innerHTML =
    '<i class="fa-solid fa-check" style="color: #0fae47;"></i>';
  return true;
}

function validateText() {
  var text = document.getElementById("text-input").value;
  var required = 20;
  var left = required - text.length;

  if (left > 0) {
    textError.innerHTML = left + " Characters minimum required";
    return false;
  }
  textError.innerHTML =
    '<i class="fa-solid fa-check" style="color: #0fae47;"></i>';
  return true;
}

function validateForm() {
  if (
    !validateEmail() ||
    !validateName() ||
    !validatePhone() ||
    !validateText()
  ) {
    submitError.innerHTML = "Please Fill all the fields and fix Errors";
    submitError.style.display = "block";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  form.style.display = "none";
  success.style.display = "block";
  return true;
}



//Subscribe to form
const scriptURL = 'https://script.google.com/macros/s/AKfycby-SDUh2zLz4hOxXYV6v5AzH6jlJ2liL0zK7lzx8bs0f5CcfdvecdQTWU8XhmYPOX_m/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
