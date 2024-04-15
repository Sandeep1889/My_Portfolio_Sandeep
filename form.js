document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };

    fetch("http://localhost:8080/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // This will also fail if there's no JSON in the response
      })
      .then((data) => {
        console.log("Success:", data);
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending message: " + error.message);
      });
  });
