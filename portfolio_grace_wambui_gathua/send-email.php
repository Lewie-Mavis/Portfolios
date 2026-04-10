<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Validation
    $errors = [];
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required";
    }
    if (empty($message)) {
        $errors[] = "Message is required";
    }
    
    // If no errors, send email
    if (empty($errors)) {
        
        // Email settings
        $to = "wambuigathua.va@gmail.com, lewielom@gmail.com";
        $subject = "New Contact Form Submission from " . $name;
        
        // Email headers
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        
        // Styled HTML Email Template
        $email_content = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>New Contact Form Submission</title>
            <style>
                body {
                    font-family: "Inter", Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f5f5f5;
                }
                .email-container {
                    max-width: 600px;
                    margin: 40px auto;
                    background: #ffffff;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                .email-header {
                    background: linear-gradient(135deg, #200F3B 0%, #161E85 100%);
                    padding: 30px;
                    text-align: center;
                }
                .email-header h1 {
                    color: #D1A52A;
                    margin: 0;
                    font-size: 24px;
                    font-weight: 700;
                }
                .email-header p {
                    color: rgba(255,255,255,0.8);
                    margin: 10px 0 0;
                    font-size: 14px;
                }
                .email-body {
                    padding: 30px;
                }
                .detail-item {
                    margin-bottom: 25px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 15px;
                }
                .detail-label {
                    font-weight: 700;
                    color: #200F3B;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 8px;
                }
                .detail-value {
                    color: #333;
                    font-size: 16px;
                    line-height: 1.6;
                }
                .message-box {
                    background: #F8F9FC;
                    padding: 20px;
                    border-radius: 12px;
                    border-left: 4px solid #D1A52A;
                    margin-top: 10px;
                }
                .email-footer {
                    background: #F8F9FC;
                    padding: 20px;
                    text-align: center;
                    border-top: 1px solid #eee;
                }
                .email-footer p {
                    margin: 0;
                    color: #666;
                    font-size: 12px;
                }
                .gold-text {
                    color: #D1A52A;
                }
                .button {
                    display: inline-block;
                    background: #D1A52A;
                    color: #200F3B;
                    padding: 12px 24px;
                    text-decoration: none;
                    border-radius: 30px;
                    font-weight: 600;
                    margin-top: 15px;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="email-header">
                    <h1>✨ New Contact Form Submission</h1>
                    <p>From your portfolio website</p>
                </div>
                <div class="email-body">
                    <div class="detail-item">
                        <div class="detail-label">👤 Name</div>
                        <div class="detail-value">' . $name . '</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">📧 Email</div>
                        <div class="detail-value">' . $email . '</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">💬 Message</div>
                        <div class="message-box">
                            <div class="detail-value">' . nl2br($message) . '</div>
                        </div>
                    </div>
                </div>
                <div class="email-footer">
                    <p>📅 Submitted on: ' . date("F j, Y, g:i a") . '</p>
                    <p>🌐 IP Address: ' . $_SERVER['REMOTE_ADDR'] . '</p>
                    <p style="margin-top: 15px;">&copy; ' . date("Y") . ' Grace Wambui Gathua. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
        ';
        
        // Send email
        $mail_sent = mail($to, $subject, $email_content, $headers);
        
        if ($mail_sent) {
            // Redirect with success message
            header("Location: contact-success.php");
            exit();
        } else {
            // Redirect with error message
            header("Location: contact-error.php");
            exit();
        }
        
    } else {
        // Display errors
        echo "<h2>Oops! Something went wrong:</h2>";
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>" . $error . "</li>";
        }
        echo "</ul>";
        echo "<a href='index.php#contact'>Go back to contact form</a>";
        exit();
    }
    
} else {
    // If someone tries to access this file directly
    header("Location: index.php");
    exit();
}
?>