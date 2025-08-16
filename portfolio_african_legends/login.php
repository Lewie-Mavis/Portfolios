<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>African Legends Publishing | Login</title>

  <meta name="description" content="Login to African Legends Publishing to access your account and contribute to the future of African storytelling." />
  <meta name="keywords" content="African Publishing, Login, African Authors" />
  <meta name="author" content="African Legends Publishing" />
  <link rel="canonical" href="https://www.africanlegends.africa/login.php" />

  <meta property="og:title" content="Login - African Legends Publishing" />
  <meta property="og:description" content="Secure login for African Legends Publishing contributors and authors." />
  <meta property="og:image" content="https://www.africanlegends.africa/images/african-legends.jpg" />
  <meta property="og:url" content="https://www.africanlegends.africa/login.php" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Login - African Legends Publishing" />
  <meta name="twitter:description" content="Secure login for African Legends Publishing contributors and authors." />
  <meta name="twitter:image" content="https://www.africanlegends.africa/images/african-legends.jpg" />

  <link rel="icon" type="image/png" href="images/african-legends.jpg" />

  <!-- Icons and Fonts -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

  <!-- Main Stylesheet -->
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="stylesheet" href="css/login.css" />
</head>

<body>

  <!-- Header -->
  <header>
    <div class="logo-container" onclick="window.location.href='index.php'">
      <img src="images/african-legends.jpg" alt="African Legends Logo" class="logo">
      <div class="logo-text">African Legends</div>
    </div>
  </header>

<section class="login-section">
  <div class="login-container">
    <h2>Welcome Back</h2>
    <p>Log in to continue your journey with African Legends</p>

    <form class="login-form" action="login2.php" method="post">
      <div class="form-group">
        <input type="email" name="email" placeholder="Email Address" required />
      </div>

      <div class="form-group password-group">
        <input type="password" name="password" id="password" placeholder="Password" required />
        <i class="fa fa-eye toggle-password" toggle="#password"></i>
      </div>

      <button type="submit" class="btn-submit">Login</button>
    </form>

    <div class="login-footer">
      <p>Don't have an account? <a href="signup.php">Sign Up</a></p>
      <a href="index.php" class="back-home-link">← Go Back Home</a>
    </div>
  </div>
</section>


<script>
  const toggles = document.querySelectorAll(".toggle-password");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const input = document.querySelector(toggle.getAttribute("toggle"));
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      toggle.classList.toggle("fa-eye");
      toggle.classList.toggle("fa-eye-slash");
    });
  });
</script>


</body>
</html>

