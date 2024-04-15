`use strict`;

const subscribeBtn = document.querySelector(".subscribe-btn");
const dismissBtn = document.querySelector(".dismiss-btn");

const emailInput = document.getElementById("email");
const errorMsg = document.querySelector(".invalid");

// *************************
// Containers
const newsLetterContainer = document.querySelector(".newsletter-container");
const confirmationBox = document.querySelector(".confirmation-box");
// *************************

// email pattern
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// state variable
let valid;

// Adding action to input button to vlidate email

const validate = function (event) {
  // checking if user entered valid email
  valid = emailPattern.test(emailInput.value);
  if (!valid) {
    emailInput.classList.remove("sucess");
    emailInput.classList.add("error");
    errorMsg.classList.remove("hide");
  } else {
    errorMsg.classList.add("hide");
    emailInput.classList.add("sucess");
    emailInput.classList.remove("error");
  }
};

emailInput.addEventListener("change", validate);

// function to submit the newsletter
const submit = function () {
  if (valid) {
    setTimeout(() => {
      newsLetterContainer.classList.add("hide");
      confirmationBox.classList.remove("hide");
    }, "200");
    emailInput.value = "";
  } else {
    alert("Enter valid email to submit");
  }
};
// Event listener to the subscribe button

subscribeBtn.addEventListener("click", submit);

// function to dismiss Message
const dismissMsg = function () {
  setTimeout(() => {
    confirmationBox.classList.add("hide");
    newsLetterContainer.classList.remove("hide");
    emailInput.classList.remove("sucess");
    emailInput.classList.remove("error");
  }, "200");
};

// Adding event of dismiss button

dismissBtn.addEventListener("click", dismissMsg);
