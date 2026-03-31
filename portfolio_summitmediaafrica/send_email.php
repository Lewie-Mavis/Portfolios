<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data
    $fullname = htmlspecialchars(strip_tags(trim($_POST['fullname'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['email'])));
    $company = htmlspecialchars(strip_tags(trim($_POST['company'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));
    
    // Email recipients
    $to = "info@summitmediaafrica.com, lewielom@gmail.com";
    
    // Email subject
    $subject = "New Contact Form Submission from Summit Media Africa";
    
    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    // Get current date and time
    date_default_timezone_set('Africa/Nairobi');
    $submission_date = date("F j, Y, g:i a");
    
    // HTML Email Template
    $email_body = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            body {
                font-family: "Inter", Arial, sans-serif;
                line-height: 1.6;
                color: #111111;
                background-color: #FEF9F0;
                margin: 0;
                padding: 0;
            }
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background: white;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            }
            .email-header {
                background: linear-gradient(135deg, #2C3E2F 0%, #1e2a20 100%);
                padding: 30px;
                text-align: center;
            }
            .email-header h1 {
                color: white;
                margin: 0;
                font-size: 28px;
                font-weight: 700;
            }
            .email-header h1 span {
                color: #E67E22;
            }
            .email-header p {
                color: rgba(255,255,255,0.8);
                margin: 10px 0 0;
                font-size: 14px;
            }
            .email-content {
                padding: 40px 30px;
            }
            .greeting {
                font-size: 18px;
                font-weight: 600;
                color: #2C3E2F;
                margin-bottom: 20px;
            }
            .message-box {
                background: #FEF9F0;
                padding: 20px;
                border-radius: 16px;
                margin: 20px 0;
                border-left: 4px solid #E67E22;
            }
            .info-table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
            }
            .info-table td {
                padding: 12px;
                border-bottom: 1px solid #f0f0f0;
            }
            .info-table td:first-child {
                font-weight: 700;
                color: #2C3E2F;
                width: 120px;
            }
            .info-table td:last-child {
                color: #555;
            }
            .badge {
                display: inline-block;
                background: #E67E22;
                color: white;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                margin-bottom: 15px;
            }
            .footer {
                background: #f9f9f9;
                padding: 25px 30px;
                text-align: center;
                border-top: 1px solid #e0e0e0;
            }
            .footer p {
                margin: 5px 0;
                font-size: 12px;
                color: #777;
            }
            .footer .logo {
                font-weight: 800;
                font-size: 18px;
                color: #2C3E2F;
                margin-bottom: 10px;
            }
            .footer .logo span {
                color: #E67E22;
            }
            .btn {
                display: inline-block;
                background: #E67E22;
                color: white;
                padding: 10px 24px;
                border-radius: 40px;
                text-decoration: none;
                margin-top: 15px;
                font-size: 14px;
            }
            hr {
                border: none;
                border-top: 1px solid #e0e0e0;
                margin: 20px 0;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="email-header">
                <h1>Summit Media <span>Africa</span></h1>
                <p>New Contact Form Submission</p>
            </div>
            
            <div class="email-content">
                <div class="badge">📬 New Inquiry</div>
                
                <div class="greeting">Hello Summit Media Team,</div>
                
                <p>You have received a new contact form submission from <strong>' . $fullname . '</strong>. Here are the details:</p>
                
                <table class="info-table">
                    <tr>
                        <td>📛 Full Name:</td>
                        <td><strong>' . $fullname . '</strong></td>
                    </tr>
                    <tr>
                        <td>📧 Email Address:</td>
                        <td><a href="mailto:' . $email . '" style="color: #E67E22;">' . $email . '</a></td>
                    </tr>
                    <tr>
                        <td>🏢 Company:</td>
                        <td>' . ($company ? $company : 'Not provided') . '</td>
                    </tr>
                    <tr>
                        <td>📅 Submitted:</td>
                        <td>' . $submission_date . '</td>
                    </tr>
                </table>
                
                <div class="message-box">
                    <strong style="color: #2C3E2F;">💬 Message:</strong>
                    <p style="margin-top: 10px; font-style: italic;">' . nl2br($message) . '</p>
                </div>
                
                <hr>
                
                <p style="font-size: 14px; color: #666;">You can reply directly to this email to contact <strong>' . $fullname . '</strong> at <a href="mailto:' . $email . '" style="color: #E67E22;">' . $email . '</a>.</p>
                
                <a href="mailto:' . $email . '" class="btn">Reply to ' . $fullname . '</a>
            </div>
            
            <div class="footer">
                <div class="logo">Summit Media <span>Africa</span></div>
                <p>Media Strategy, Buying & Analytics Experts</p>
                <p>Nairobi, Kenya | +254 716 053 969</p>
                <p style="font-size: 11px;">This is an automated message from your website contact form.</p>
            </div>
        </div>
    </body>
    </html>';
    
    // Auto-response to the user
    $user_subject = "Thank you for contacting Summit Media Africa";
    
    $user_email_body = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Summit Media Africa</title>
        <style>
            body {
                font-family: "Inter", Arial, sans-serif;
                line-height: 1.6;
                color: #111111;
                background-color: #FEF9F0;
                margin: 0;
                padding: 0;
            }
            .email-container {
                max-width: 550px;
                margin: 20px auto;
                background: white;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            }
            .email-header {
                background: linear-gradient(135deg, #2C3E2F 0%, #1e2a20 100%);
                padding: 30px;
                text-align: center;
            }
            .email-header h1 {
                color: white;
                margin: 0;
                font-size: 26px;
            }
            .email-header h1 span {
                color: #E67E22;
            }
            .email-content {
                padding: 35px 30px;
            }
            .thankyou {
                font-size: 24px;
                font-weight: 700;
                color: #E67E22;
                margin-bottom: 15px;
            }
            .footer {
                background: #f9f9f9;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                color: #777;
            }
            .btn {
                display: inline-block;
                background: #E67E22;
                color: white;
                padding: 12px 28px;
                border-radius: 40px;
                text-decoration: none;
                margin: 20px 0 10px;
            }
            hr {
                border: none;
                border-top: 1px solid #e0e0e0;
                margin: 20px 0;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="email-header">
                <h1>Summit Media <span>Africa</span></h1>
            </div>
            <div class="email-content">
                <div class="thankyou">Thank You, ' . $fullname . '! 🎉</div>
                <p>We have received your message and appreciate you reaching out to Summit Media Africa.</p>
                <p>Our team will review your inquiry and get back to you within <strong>24 hours</strong> during business days.</p>
                
                <hr>
                
                <p><strong>Here\'s what you sent us:</strong></p>
                <div style="background: #FEF9F0; padding: 15px; border-radius: 12px; margin: 15px 0;">
                    <p style="margin: 5px 0;"><strong>Message:</strong></p>
                    <p style="margin: 5px 0; font-style: italic;">' . nl2br(substr($message, 0, 200)) . (strlen($message) > 200 ? '...' : '') . '</p>
                </div>
                
                <p>In the meantime, feel free to:</p>
                <ul style="color: #555;">
                    <li>📞 Call us at <strong>+254 716 053 969</strong></li>
                    <li>🌐 Visit our website: <strong>www.summitmediaafrica.com</strong></li>
                </ul>
                
                <a href="https://wa.me/254716053969" class="btn">Chat with us on WhatsApp</a>
            </div>
            <div class="footer">
                <p>© 2026 Summit Media Africa. All rights reserved.</p>
                <p>Nairobi, Kenya | Media Strategy, Buying & Analytics Experts</p>
            </div>
        </div>
    </body>
    </html>';
    
    // Send email to admin
    $mail_sent = mail($to, $subject, $email_body, $headers);
    
    // Send auto-response to user
    $user_headers = "MIME-Version: 1.0" . "\r\n";
    $user_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $user_headers .= "From: info@summitmediaafrica.com" . "\r\n";
    $user_headers .= "Reply-To: info@summitmediaafrica.com" . "\r\n";
    
    $user_mail_sent = mail($email, $user_subject, $user_email_body, $user_headers);
    
    // Redirect back with success message
    if ($mail_sent) {
        header("Location: index.html?status=success#contact");
    } else {
        header("Location: index.html?status=error#contact");
    }
    exit();
} else {
    // If someone tries to access this file directly
    header("Location: index.html");
    exit();
}
?>