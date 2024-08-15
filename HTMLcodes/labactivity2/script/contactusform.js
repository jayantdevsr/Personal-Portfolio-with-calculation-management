
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Gather form data
    const formData = new FormData(event.target);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Display form data in the console (you can modify this part)
    console.log(formDataObject);

    // Add a success message and clear the form fields
    const successMessage = document.createElement("p");
    successMessage.textContent = "Form submitted successfully!";
    successMessage.style.color = "#007BFF";
    contactForm.appendChild(successMessage);
    contactForm.reset();
    setTimeout(() => {
      successMessage.remove();
    }, 3000); // Remove success message after 3 seconds
  });
});

