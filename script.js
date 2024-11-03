// Login form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "admin" && password === "password") {
      window.location.href = "detection.html"; // Redirect to the main page
    } else {
      document.getElementById("loginError").textContent = "Invalid username or password";
    }
  });
  
  
  