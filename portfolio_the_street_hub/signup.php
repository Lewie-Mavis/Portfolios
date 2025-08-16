<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Title -->
  <title>The Street Hub - Sign Up</title>

  <!-- Meta Description -->
  <meta name="description" content="Join The Street Hub - a premier consulting firm empowering leaders and transforming organizations.">

  <!-- Author -->
  <meta name="author" content="The Street Hub Consulting Team">

  <!-- Robots -->
  <meta name="robots" content="index, follow">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://www.thestreethub.com/signup.php">

  <!-- Open Graph -->
  <meta property="og:title" content="Sign Up - The Street Hub">
  <meta property="og:description" content="Create your account and be part of a leading global consulting network.">
  <meta property="og:image" content="https://www.thestreethub.com/images/the_street_hub.jpeg">
  <meta property="og:url" content="https://www.thestreethub.com/signup.php">
  <meta property="og:type" content="website">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Sign Up - The Street Hub">
  <meta name="twitter:description" content="Join our platform and gain access to transformational tools and strategies.">
  <meta name="twitter:image" content="https://www.thestreethub.com/images/the_street_hub.jpeg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="images/the_street_hub.jpeg">

  <!-- Fonts & Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="css/styles.css">
</head>
<body class="signup-body">

<header>
  <div class="header-container container">
    <a href="index.php" class="logo">
      <img src="images/the_street_hub.jpeg" alt="Street Hub Logo" class="logo-img">
      <span class="site-title">The Street Hub</span>
    </a>
    <!-- Your nav/menu here -->
  </div>
</header>


<div class="signup-container">
  <div class="signup-card slide-up">
    <h2 class="signup-title">Create Account</h2>
    <p class="signup-subtitle">Join The Street Hub today</p>
    <form action="signup2.php" method="post" class="signup-form">
      <div class="input-group">
        <label for="fullname">Full Name</label>
        <input type="text" name="fullname" id="fullname" required />
      </div>

      <div class="input-group">
        <label for="phone">Phone Number</label>
        <input type="tel" name="phone" id="phone" required pattern="[0-9+ ]+" placeholder="+254 712 345678" />
      </div>

      <div class="input-group">
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" required />
      </div>

      <div class="input-group">
        <label for="password">Password</label>
        <div class="password-wrapper">
          <input type="password" name="password" id="password" required />
          <span class="toggle-password" onclick="togglePassword('password', this)">👁</span>
        </div>
      </div>

      <div class="input-group">
        <label for="confirm_password">Confirm Password</label>
        <div class="password-wrapper">
          <input type="password" name="confirm_password" id="confirm_password" required />
          <span class="toggle-password" onclick="togglePassword('confirm_password', this)">👁</span>
        </div>
      </div>

      <button type="submit" class="btn-signup">Sign Up</button>

      <p class="login-link">Already have an account? <a href="login.php">Log in</a></p>
      <p class="home-link"><a href="index.php">← Back to Home Page</a></p>
    </form>
  </div>
</div>

<script>
  function togglePassword(fieldId, toggleIcon) {
    const input = document.getElementById(fieldId);
    if (input.type === "password") {
      input.type = "text";
      toggleIcon.textContent = "🙈";
    } else {
      input.type = "password";
      toggleIcon.textContent = "👁";
    }
  }
</script>


</body>
</html>
