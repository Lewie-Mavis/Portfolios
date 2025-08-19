<?php
// Start the session
session_start();

// Database connection
$host = "localhost:3306";
$username = "africa30_lewie";
$password = "lewielom122215"; // Change if needed
$database = "africa30_africanlegends_db"; // Update this if needed

$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Retrieve and sanitize input
$email = htmlspecialchars($_POST['email']);
$password = $_POST['password']; // Plaintext as per your setup

// Prepare and execute query
$sql = "SELECT fullname FROM users WHERE email = ? AND password = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($fullname);
    $stmt->fetch();

    // Store the user details in session
    $_SESSION['user_logged_in'] = true;
    $_SESSION['username'] = $fullname;

    $message = "✅ Welcome back, $fullname!";
    $success = true;
} else {
    $message = "❌ Incorrect email or password.";
    $success = false;
}

$stmt->close();
$conn->close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login Status - African Legends Publishing</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  :root {
    --brand-primary: #7A1113;  /* Rich Maroon */
    --brand-dark: #520d0e;
    --text-main: #333;
    --text-muted: #666;
    --white: #ffffff;
    --error-red: #c0392b;
    --radius: 12px;
    --shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--brand-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: var(--white);
    animation: fadeInBody 0.6s ease-in-out;
  }

  .response-card {
    background: var(--white);
    color: var(--text-main);
    border-radius: var(--radius);
    padding: 50px 40px;
    max-width: 520px;
    width: 90%;
    text-align: center;
    box-shadow: var(--shadow);
    animation: fadeInUp 0.8s ease forwards;
    transform: translateY(30px);
    opacity: 0;
  }

  .response-card h1 {
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: 700;
    color: <?= $success ? '#7A1113' : 'var(--error-red)' ?>;
  }

  .response-card p {
    font-size: 17px;
    color: var(--text-muted);
    margin-bottom: 30px;
  }

  .response-card a {
    display: inline-block;
    margin: 10px;
    padding: 12px 24px;
    border-radius: 50px;
    background-color: var(--brand-primary);
    color: var(--white);
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 10px rgba(122, 17, 19, 0.3);
  }

  .response-card a:hover {
    background-color: var(--brand-dark);
    transform: translateY(-2px);
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  @keyframes fadeInUp {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeInBody {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    .response-card {
      padding: 35px 25px;
    }

    .response-card h1 {
      font-size: 24px;
    }

    .response-card p {
      font-size: 16px;
    }

    .response-card a {
      font-size: 14px;
      padding: 10px 20px;
    }
  }
</style>

</head>
<body>
<div class="response-card">
  <h1><?php echo $message; ?></h1>

  <?php if ($success): ?>
    <div class="button-group">
      <a href="index.php">🏠 Go to Homepage</a>
    </div>
  <?php else: ?>
    <p>Need to try again or sign up for an account?</p>
    <div class="button-group">
      <a href="login.php">🔑 Try Login Again</a>
      <a href="signup.php">✍️ Create Account</a>
    </div>
  <?php endif; ?>
</div>
</body>
</html>
