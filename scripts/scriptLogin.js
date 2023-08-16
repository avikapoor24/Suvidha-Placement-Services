document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const messageDiv = document.getElementById("message");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform AJAX request to your server for authentication
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Store the username in session storage
        sessionStorage.setItem("username", username);
        messageDiv.textContent = "Login successful!";
        // Redirect to dashboard page
        window.location.href = "HRdashboard.html";
      } else {
        messageDiv.textContent = data.message || "Login failed";
      }
    } catch (error) {
      console.error("Error:", error);
      messageDiv.textContent = "An error occurred";
    }
  });
});
