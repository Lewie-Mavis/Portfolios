<?php
require_once 'config/db_config.php';

// New password
$username = 'admin';
$new_password = 'Admin@123';
$hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

// Update the password
$stmt = $conn->prepare("UPDATE users SET password = ? WHERE username = ?");
$stmt->bind_param("ss", $hashed_password, $username);

if ($stmt->execute()) {
    echo "Password updated successfully!<br>";
    echo "Username: admin<br>";
    echo "Password: Admin@123<br>";
    echo "<a href='admin/login.php'>Go to Login Page</a>";
} else {
    echo "Error updating password: " . $conn->error;
}

$stmt->close();
$conn->close();
?>