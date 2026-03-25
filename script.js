function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function trackPackage() {
  let id = document.getElementById("trackingId").value;
  let result = document.getElementById("result");

  if(id === "") {
    result.innerText = "Please enter Tracking ID";
  } else {
    result.innerText = "Package is in transit 🚚";
  }
}

function loginUser() {
  alert("Login Successful!");
  return false;
}

function registerUser() {
  alert("Registration Successful!");
  return false;
}

function showPayment() {
  alert("Redirecting to Payment...");
}