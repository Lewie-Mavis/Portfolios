<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['email'])) {
    $email = $_POST['email'];

    $to = "contact@gacc.com"; // Organization's email (replace with your email)
    $subject = "New Newsletter Subscription";
    $message = "A new user subscribed to the newsletter. Their email is: $email";
    $headers = "From: no-reply@gacc.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Thank you for subscribing!'); window.history.back();</script>";
    } else {
        echo "<script>alert('Failed to send. Please try again later.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Invalid submission.'); window.history.back();</script>";
}
?>
