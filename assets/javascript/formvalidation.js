    // Function to validate an individual field
    function validateField(inputElement, errorElement) {
        if (inputElement.value.trim() === "") {
          errorElement.textContent = "Please fill out this field.";
          return false;
        } else {
          errorElement.textContent = "";
          return true;
        }
      }
    
      // Function to validate email format
      function validateEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
      }
    
      // Attach blur event listeners to all fields for real-time validation
      document.getElementById("firstName").addEventListener("blur", function () {
        validateField(this, document.getElementById("firstNameError"));
      });
    
      document.getElementById("lastName").addEventListener("blur", function () {
        validateField(this, document.getElementById("lastNameError"));
      });
    
      document.getElementById("email").addEventListener("blur", function () {
        const email = this.value.trim();
        const emailError = document.getElementById("emailError");
    
        if (!email) {
          emailError.textContent = "Please fill out this field.";
        } else if (!validateEmail(email)) {
          emailError.textContent = "Please enter a valid email address.";
        } else {
          emailError.textContent = "";
        }
      });
    
      document.getElementById("phone").addEventListener("blur", function () {
        validateField(this, document.getElementById("phoneError"));
      });
    
      document.getElementById("message").addEventListener("blur", function () {
        validateField(this, document.getElementById("messageError"));
      });
    
      // Validate the entire form on submit
      document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
    
        let isValid = true;
    
        // Validate each field
        isValid = validateField(document.getElementById("firstName"), document.getElementById("firstNameError")) && isValid;
        isValid = validateField(document.getElementById("lastName"), document.getElementById("lastNameError")) && isValid;
    
        const email = document.getElementById("email").value.trim();
        const emailError = document.getElementById("emailError");
        if (!email) {
          emailError.textContent = "Please fill out this field.";
          isValid = false;
        } else if (!validateEmail(email)) {
          emailError.textContent = "Please enter a valid email address.";
          isValid = false;
        } else {
          emailError.textContent = "";
        }
    
        isValid = validateField(document.getElementById("phone"), document.getElementById("phoneError")) && isValid;
        isValid = validateField(document.getElementById("message"), document.getElementById("messageError")) && isValid;
    
        // If all fields are valid, show success message
        if (isValid) {
          document.getElementById("successMessage").style.display = "block";
          setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
          }, 3000);
    
          // Clear the form
          document.getElementById("contactForm").reset();
    
          // Clear all error messages
          document.querySelectorAll(".error").forEach((error) => {
            error.textContent = "";
          });
        }
      });
    