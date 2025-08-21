// Show welcome alert
window.onload = function() {
  const myName = document.getElementById("myName").innerText;
  alert("Welcome to " + myName + "'s Portfolio!");
};

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = "";

  // Name validation
  if (name.length < 3) {
    msg = "Name must be at least 3 characters long.";
  }
  // Email format validation
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg = "Enter a valid email address.";
  }
  // Message length validation
  else if (message.length < 10) {
    msg = "Message must be at least 10 characters long.";
  } 
  else {
    msg = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }

  document.getElementById("formMsg").innerText = msg;
});
