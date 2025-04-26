<?php
// Database connection details
$servername = "localhost"; // Change to your server address
$username = "root";        // Database username
$password = "";            // Database password
$dbname = "gacc";   // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$successMessage = '';
$errorMessage = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form values
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Simple validation for matching passwords
    if ($password !== $confirm_password) {
        $errorMessage = "Passwords do not match!";
    } else {
        // Check if email already exists
        $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $errorMessage = "This email is already taken. Please use a different one.";
        } else {
            // If email doesn't exist, insert the new user
            $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, email, phone, password) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("sssss", $firstname, $lastname, $email, $phone, $password);

            if ($stmt->execute()) {
                $successMessage = "Account created successfully! You can now log in.";
            } else {
                $errorMessage = "Error: " . $stmt->error;
            }
        }

        $stmt->close();
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up - Success</title>
    <link rel="stylesheet" href="styles.css"> <!-- Assuming your CSS is in styles.css -->
    <style>
        /* Add specific styles for the success message */
        .success-message {
            background-color: #28a745;
            color: white;
            padding: 15px;
            text-align: center;
            border-radius: 8px;
            font-size: 1.2rem;
            margin-top: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* Add specific styles for the error message */
        .error-message {
            background-color: #f8d7da;
            color: #721c24;
            padding: 15px;
            text-align: center;
            border-radius: 8px;
            font-size: 1.2rem;
            margin-top: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* Center the content on the page */
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
        }

        .message-box {
            background-color: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        /* Add space between the success message and the login button */
        .message-box a.btn {
            margin-top: 20px; /* Add some space between the message and button */
            display: inline-block; /* Ensure the button stays on a separate line */
        }

        .btn {
            padding: 10px;
            background-color: #1b5738;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin-top: 15px;
        }

        .btn:hover {
            background-color: #c98d26;
        }

    </style>
</head>
<body>

<div class="container">
    <div class="message-box">
        <!-- Display the success or error message -->
        <?php if ($successMessage): ?>
            <div class="success-message">
                <?php echo $successMessage; ?>
            </div>
        <?php endif; ?>

        <?php if ($errorMessage): ?>
            <div class="error-message">
                <?php echo $errorMessage; ?>
            </div>
			<a href="index.php" class="btn">Go Back</a>
        <?php endif; ?>

        <!-- Optional: link to home page -->
        <?php if ($successMessage): ?>
            <a href="index.php" class="btn">Go to Login</a>
        <?php endif; ?>
    </div>
</div>

</body>
</html>
