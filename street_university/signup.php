<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign Up</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<div class="signup-container">
  <h2 class="signup-title">Create Your Account</h2>
  <form id="signup-form" class="signup-form">
    <input type="text" name="firstname" placeholder="First Name" required>
    <input type="text" name="lastname" placeholder="Last Name" required>
    <input type="email" name="email" placeholder="Email Address" required>

    <!-- Password Field with Eye Icon -->
<div class="password-field">
  <input type="password" name="password" id="password" placeholder="Password" required>
  <span class="toggle-password" onclick="togglePasswordVisibility()">
    <i class="fas fa-eye" id="eye-icon"></i>
  </span>
</div>


    <input type="text" name="phone" placeholder="Phone Number" required>
    <select name="country" required>
      <option value="">Select Country</option>
      <!-- Countries List -->
    </select>
    <input type="text" name="city" placeholder="City" required>
    <input type="text" name="address" placeholder="Street Address" required>
    <button type="submit">Sign Up</button>
  </form>

  <p class="signup-link">Already have an account? <a href="login.php">Login here</a></p>
</div>

<script>
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  }
</script>



  <script>
    // Populate countries dynamically
    const countries = ["Kenya", "Uganda", "Tanzania", "United States", "Canada", "United Kingdom", "Germany", "France", "India", "China", "Japan", "Brazil", "South Africa", "Australia", "Nigeria", "Ghana", "Italy", "Spain", "Netherlands", "Sweden"];
    const countrySelect = document.querySelector("select[name='country']");
    countries.forEach(country => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    });
  </script>
  
  
</body>
</html>
