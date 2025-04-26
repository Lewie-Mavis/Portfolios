<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['email'])) {
    $email = $_POST['email'];

    $to = "contact@gacc.com"; // Replace with your org email
    $subject = "New Join Request";
    $message = "A new user wants to join. Their email is: $email";
    $headers = "From: no-reply@gacc.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Your request has been sent!'); window.history.back();</script>";
    } else {
        echo "<script>alert('Failed to send. Please try again later.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Invalid submission.'); window.history.back();</script>";
}
?>
