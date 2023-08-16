document.addEventListener("DOMContentLoaded", function () {
    const usernameSpan = document.getElementById("username");
    const logoutLink = document.getElementById("logout");
  
    // Fetch the username from the server or session storage
    const username = sessionStorage.getItem("username");
    if (username) {
      usernameSpan.textContent = username;
    } else {
      // Redirect to login if no username is found
      window.location.href = "loginPage.html";
    }
  
    // Handle logout
    logoutLink.addEventListener("click", function (event) {
      event.preventDefault();
      sessionStorage.removeItem("username");
      window.location.href = "loginPage.html";
    });
  });
  