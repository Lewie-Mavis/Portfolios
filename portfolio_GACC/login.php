<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gacc";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle login request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"] ?? '';
    $password = $_POST["password"] ?? '';

    // Prepare the SQL statement
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $email, $password);

    // Execute the query
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if a matching user was found
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        $message = "Login successful! Welcome, " . htmlspecialchars($user['firstname']) . " " . htmlspecialchars($user['lastname']) . ".";
    } else {
        $message = "Invalid email or password.";
    }

    // Close statement
    $stmt->close();
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css"> <!-- Assuming your CSS is in styles.css -->
    <style>
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
            width: 100%;
            max-width: 400px;
        }

        /* Styling the form */
        form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        form input {
            padding: 10px;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        form button {
            padding: 12px;
            background-color: #c98d26;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
        }

        form button:hover {
            background-color: #b3771e;
        }

        /* Styling the success/error message */
        .message {
            padding: 15px;
            background-color: #f8d7da;
            color: #721c24;
            border-radius: 5px;
            font-size: 1.1rem;
            margin-bottom: 20px;
        }

        .success {
            background-color: #28a745;
            color: white;
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
        <!-- Display success or error message -->
        <?php if (!empty($message)): ?>
            <div class="message <?php echo (strpos($message, "Invalid") !== false) ? '' : 'success'; ?>">
                <?php echo $message; ?>
            </div>
        <?php endif; ?>

        <!-- Optional: link to home page -->
        <a href="index.php" class="btn">Home Page</a>
    </div>
</div>

</body>
</html>
