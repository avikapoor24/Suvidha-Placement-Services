document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch form input values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const cvFile = document.getElementById("cv").files[0];

    // Perform validation (optional)
    // For example, you can check the file type and size before submission

    // Submit the form data to the server (you can use AJAX/fetch to send data)
    // Replace "your-server-endpoint" with the actual URL where you want to handle form data on the server
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("cv", cvFile);

    fetch("your-server-endpoint", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server, e.g., show a success message
        alert("Registration successful!");
        document.getElementById("registrationForm").reset(); // Reset the form
    })
    .catch(error => {
        // Handle errors, e.g., show an error message
        alert("An error occurred. Please try again later.");
    });
});
