<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Title -->
  <title>The Street Hub - Login</title>

  <!-- Meta Description -->
  <meta name="description" content="The Street Hub is a strategic consulting firm empowering Fortune 500s, multinationals, and governments through leadership development and transformational change.">

  <!-- Meta Keywords (optional) -->
  <meta name="keywords" content="The Street Hub, strategic consulting, leadership development, organizational transformation, business consulting, innovation strategy, executive coaching">

  <!-- Author -->
  <meta name="author" content="The Street Hub Consulting Team">

  <!-- Robots -->
  <meta name="robots" content="index, follow">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://www.thestreethub.com/">

  <!-- Open Graph for Social Media -->
  <meta property="og:title" content="The Street Hub - Empowering Leaders & Transforming Organizations">
  <meta property="og:description" content="A premier consulting firm with 30+ years of experience guiding Fortune 500 companies, governments, and global brands toward innovation and leadership excellence.">
  <meta property="og:image" content="https://www.thestreethub.com/images/the_street_hub.jpeg">
  <meta property="og:url" content="https://www.thestreethub.com/">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="The Street Hub - Empowering Leaders & Transforming Organizations">
  <meta name="twitter:description" content="We partner with clients to drive change, develop leadership, and create lasting impact across industries.">
  <meta name="twitter:image" content="https://www.thestreethub.com/images/the_street_hub.jpeg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="images/the_street_hub.jpeg">

  <!-- Stylesheets & Fonts -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body class="login-body">


<header>
  <div class="header-container container">
    <a href="index.php" class="logo">
      <img src="images/the_street_hub.jpeg" alt="Street Hub Logo" class="logo-img">
      <span class="site-title">The Street Hub</span>
    </a>
    <!-- Your nav/menu here -->
  </div>
</header>


  <div class="login-container">
    <div class="login-card slide-up">
      <h2 class="login-title">Welcome Back</h2>
      <p class="login-subtitle">Log in to your account</p>
      <form action="login2.php" method="post" class="login-form">
        <div class="input-group">
          <label for="email">Email Address</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <div class="password-wrapper">
            <input type="password" name="password" id="password" required />
            <span class="toggle-password" onclick="togglePassword()">👁</span>
          </div>
        </div>

        <button type="submit" class="btn-login">Log In</button>
        <p class="signup-link">Don't have an account? <a href="signup.php">Sign up</a></p>
        <p class="home-link"><a href="index.php">← Back to Home Page</a></p>
      </form>
    </div>
  </div>

  <script>
    function togglePassword() {
      const passwordInput = document.getElementById("password");
      const toggleIcon = document.querySelector(".toggle-password");

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "🙈";
      } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁";
      }
    }
  </script>



</body>
</html>
