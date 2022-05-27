// First Name Validation
var firstName = document.getElementById("firstname");

var firstNameValidation = function () {
  firstNameValue = firstName.value.trim();
  validFirstName = /^[A-Za-z]+$/;
  first__name__err = document.getElementById("first__name__err");
  

  if (firstNameValue == "") {
    first__name__err.innerHTML = "First Name is required";
  } else if (!validFirstName.test(firstNameValue)) {
    first__name__err.innerHTML = "First Name must be only string";
  } else {
    first__name__err.innerHTML = "";
    return true;
  }
};

firstName.oninput = function () {
  firstNameValidation();
};

// Last Name Validation
var lastName = document.getElementById("lastname");

var lastNameValidation = function () {
  lastNameValue = lastName.value.trim();
  validLastName = /^[A-Za-z]+$/;
  last__name__err = document.getElementById("last__name__err");

  if (lastNameValue == "") {
    last__name__err.innerHTML = "Last Name is required";
  } else if (!validLastName.test(lastNameValue)) {
    last__name__err.innerHTML = "Last Name must be only string";
  } else {
    last__name__err.innerHTML = "";
    return true;
  }
};

lastName.oninput = function () {
  lastNameValidation();
};

// Email Address Validation
var emailAddress = document.getElementById("email");
var emailAddressValidation = function () {
  emailAddressValue = emailAddress.value.trim();
  validEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email__name__err = document.getElementById("email__name__err");

  if (emailAddressValue == "") {
    email__name__err.innerHTML = "Email Address is required";
  } else if (!validEmailAddress.test(emailAddressValue)) {
    email__name__err.innerHTML = "Email Valid Format abc@gmail.com";
  } else {
    email__name__err.innerHTML = "";
    return true;
  }
};

emailAddress.oninput = function () {
  emailAddressValidation();
};

// Password Validation
var password = document.getElementById("password");

var passwordValidation = function () {
  passwordValue = password.value.trim();
  validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  password__name__err = document.getElementById("password__name__err");

  if (passwordValue == "") {
    password__name__err.innerHTML = "Password is required";
  } else if (!validPassword.test(passwordValue)) {
    password__name__err.innerHTML = "Password 8 Character EX: Saif@123";
  } else {
    password__name__err.innerHTML = "";
    return true;
  }
};

password.oninput = function () {
  passwordValidation();

  confirmPasswordValidation();
};

// Confirm Password Validation
var confirmPassword = document.getElementById("confirmpass");

var confirmPasswordValidation = function () {
  confirmPasswordValue = confirmPassword.value.trim();

  confirm__name__err = document.getElementById("confirm__name__err");
  if (confirmPasswordValue == "") {
    confirm__name__err.innerHTML = "Confirm Password is required";
  } else if (confirmPasswordValue != password.value) {
    confirm__name__err.innerHTML = "Confirm Password does not match";
  } else {
    confirm__name__err.innerHTML = "";
    return true;
  }
};

confirmPassword.oninput = function () {
  confirmPasswordValidation();
};

document.getElementById("form").onsubmit = function (e) {
  firstNameValidation();
  lastNameValidation();
  emailAddressValidation();
  passwordValidation();
  confirmPasswordValidation();

  if (
    firstNameValidation() == true &&
    lastNameValidation() == true &&
    emailAddressValidation() == true &&
    passwordValidation() == true &&
    confirmPasswordValidation() == true
  ) {
    return alert("Form Validation Success");
  } else {
    return false;
  }
};
