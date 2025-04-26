<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Organization's email to receive messages
    $to = "contact@gacc.com"; // Change this to your organization's email address
    $subject = "New Contact Us Message";
    $body = "You have received a new message from your website contact form.\n\n".
            "Name: $name\n".
            "Email: $email\n\n".
            "Message:\n$message";

    // Set headers for the email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Thank you for getting in touch! We will respond soon.'); window.location.href = 'contact.html';</script>";
    } else {
        echo "<script>alert('Failed to send. Please try again later.'); window.location.href = 'contact.html';</script>";
    }
} else {
    echo "<script>alert('Invalid submission.'); window.location.href = 'contact.html';</script>";
}
?>
