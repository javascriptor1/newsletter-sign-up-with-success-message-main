"use strict";
const submitButton = document.querySelector("#submit-button");
const subscriptionForm = document.querySelector("#subscribing-form");
const successDiv = document.querySelector("#success-div");
const mainContainer = document.getElementsByTagName("main");
const dismissButton = document.querySelector("#dismiss-button");
const userEmailSuccess = document.querySelector("#userEmail");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector("#error-message");

subscriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInputValue = document.querySelector("#email").value;
  if (emailInputValue === "") {
    showError();
    return;
  }

  if (validateEmail(emailInputValue)) {
    successDiv.classList.remove("hidden");
    successDiv.classList.add("flex");
    mainContainer[0].classList.add("hidden");
    userEmailSuccess.textContent = emailInputValue;
    errorMessage.classList.add("hidden");
  } else {
    showError();
  }
});

// dismiss button functionality
dismissButton.addEventListener("click", () => {
  successDiv.classList.add("hidden");
  mainContainer[0].classList.remove("hidden");
});

// function to validate email address using regular expression pattern
function validateEmail(email_id) {
  const regex_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex_pattern.test(email_id)) {
    return true;
  } else {
    return false;
  }
}

// function to show error messages
function showError() {
  errorMessage.classList.remove("hidden");
  emailInput.classList.add("input-error");
}
