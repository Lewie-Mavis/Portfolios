<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
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
    
    if (empty($errors)) {
        // Email recipients
        $to = "info.maherconsultinggroup@gmail.com, lewiemog@gmail.com";
        
        // Email subject
        $subject = "New Contact Form Submission from " . $name;
        
        // Email headers
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        // HTML email body for admin
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
                    background-color: #f5f7fa;
                    margin: 0;
                    padding: 20px;
                }
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: #ffffff;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .email-header {
                    background: linear-gradient(135deg, #0F4C5C 0%, #1A5F70 100%);
                    padding: 30px;
                    text-align: center;
                }
                .email-header img {
                    max-width: 80px;
                    margin-bottom: 15px;
                }
                .email-header h1 {
                    color: #ffffff;
                    margin: 0;
                    font-size: 24px;
                    font-weight: 700;
                }
                .email-header p {
                    color: rgba(255,255,255,0.9);
                    margin: 10px 0 0;
                    font-size: 14px;
                }
                .email-body {
                    padding: 40px 30px;
                }
                .greeting {
                    font-size: 18px;
                    color: #1A2C3A;
                    margin-bottom: 25px;
                    font-weight: 600;
                }
                .details-table {
                    width: 100%;
                    margin: 20px 0;
                    border-collapse: collapse;
                }
                .details-table td {
                    padding: 12px 0;
                    border-bottom: 1px solid #e0e5e8;
                }
                .details-table td:first-child {
                    font-weight: 700;
                    color: #0F4C5C;
                    width: 120px;
                }
                .details-table td:last-child {
                    color: #5A6E7A;
                }
                .message-box {
                    background: #f5f7fa;
                    padding: 20px;
                    border-radius: 12px;
                    margin: 20px 0;
                    border-left: 4px solid #F2992E;
                }
                .message-box p {
                    margin: 0;
                    color: #1A2C3A;
                    line-height: 1.6;
                }
                .footer {
                    background: #f5f7fa;
                    padding: 20px 30px;
                    text-align: center;
                    border-top: 1px solid #e0e5e8;
                }
                .footer p {
                    margin: 5px 0;
                    color: #5A6E7A;
                    font-size: 12px;
                }
                .badge {
                    display: inline-block;
                    background: #43B05C;
                    color: white;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                }
                .social-links {
                    margin-top: 15px;
                }
                .social-links a {
                    color: #0F4C5C;
                    text-decoration: none;
                    margin: 0 8px;
                    font-size: 18px;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="email-header">
                    <img src="https://www.maherconsulting.com/images/logo.jpg" alt="Maher Consulting Group" style="border-radius: 12px;">
                    <h1>New Client Inquiry</h1>
                    <p>Contact Form Submission</p>
                </div>
                <div class="email-body">
                    <div class="greeting">
                        Hello Maher Consulting Team, <span class="badge">New Lead</span>
                    </div>
                    <p style="color: #5A6E7A; margin-bottom: 25px;">A potential client has reached out through the website contact form. Here are the details:</p>
                    
                    <table class="details-table">
                        <tr>
                            <td>👤 Full Name:</td>
                            <td><strong>' . $name . '</strong></td>
                        </tr>
                        <tr>
                            <td>📧 Email Address:</td>
                            <td><a href="mailto:' . $email . '" style="color: #F2992E; text-decoration: none;">' . $email . '</a></td>
                        </tr>
                        <tr>
                            <td>📞 Phone Number:</td>
                            <td>' . (!empty($phone) ? $phone : 'Not provided') . '</td>
                        </tr>
                        <tr>
                            <td>📅 Submitted:</td>
                            <td>' . date('F j, Y, g:i a') . '</td>
                        </tr>
                    </table>
                    
                    <div class="message-box">
                        <strong style="color: #0F4C5C; display: block; margin-bottom: 10px;">💬 Message:</strong>
                        <p>' . nl2br($message) . '</p>
                    </div>
                    
                    <div style="background: #FFF8F0; padding: 15px; border-radius: 12px; margin-top: 20px;">
                        <p style="margin: 0; color: #F2992E; font-size: 14px;">
                            <strong>📌 Quick Actions:</strong><br>
                            • Reply directly to this email to contact the client<br>
                            • Call: ' . (!empty($phone) ? $phone : 'No phone provided') . '<br>
                            • Add to CRM for follow-up
                        </p>
                    </div>
                </div>
                <div class="footer">
                    <p><strong>Maher Consulting Group Ltd</strong></p>
                    <p>Empowering MSMEs for a Sustainable Future</p>
                    <p>📞 +254 703612358 | ✉️ info.maherconsultinggroup@gmail.com</p>
                    <div class="social-links">
                        <a href="#">🔗 LinkedIn</a> | <a href="#">🐦 Twitter</a> | <a href="#">📘 Facebook</a>
                    </div>
                    <p style="margin-top: 15px;">This is an automated message from your website contact form.</p>
                </div>
            </div>
        </body>
        </html>';
        
        // Auto-response email to the client
        $client_subject = "Thank you for contacting Maher Consulting Group";
        $client_headers = "MIME-Version: 1.0" . "\r\n";
        $client_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $client_headers .= "From: Maher Consulting Group <info.maherconsultinggroup@gmail.com>" . "\r\n";
        $client_headers .= "Reply-To: info.maherconsultinggroup@gmail.com" . "\r\n";
        
        $client_body = '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You - Maher Consulting Group</title>
            <style>
                body {
                    font-family: "Inter", Arial, sans-serif;
                    background-color: #f5f7fa;
                    margin: 0;
                    padding: 20px;
                }
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: #ffffff;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .email-header {
                    background: linear-gradient(135deg, #0F4C5C 0%, #1A5F70 100%);
                    padding: 40px 30px;
                    text-align: center;
                }
                .email-header img {
                    max-width: 80px;
                    margin-bottom: 15px;
                    border-radius: 12px;
                }
                .email-header h1 {
                    color: #ffffff;
                    margin: 0;
                    font-size: 28px;
                    font-weight: 700;
                }
                .email-body {
                    padding: 40px 30px;
                }
                .thank-you {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .thank-you i {
                    font-size: 60px;
                    color: #43B05C;
                }
                .thank-you h2 {
                    color: #0F4C5C;
                    margin: 15px 0 10px;
                }
                .response-time {
                    background: #FFF8F0;
                    padding: 15px;
                    border-radius: 12px;
                    text-align: center;
                    margin: 25px 0;
                    border-left: 4px solid #F2992E;
                }
                .info-box {
                    background: #f5f7fa;
                    padding: 20px;
                    border-radius: 12px;
                    margin: 20px 0;
                }
                .footer {
                    background: #f5f7fa;
                    padding: 20px 30px;
                    text-align: center;
                }
                .btn {
                    display: inline-block;
                    background: #F2992E;
                    color: white;
                    padding: 12px 30px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 600;
                    margin-top: 20px;
                }
                .social-links a {
                    color: #0F4C5C;
                    text-decoration: none;
                    margin: 0 8px;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="email-header">
                    <img src="https://www.maherconsulting.com/images/logo.jpg" alt="Maher Consulting Group">
                    <h1>Thank You for Reaching Out!</h1>
                </div>
                <div class="email-body">
                    <div class="thank-you">
                        <i>📧</i>
                        <h2>We\'ve Received Your Message</h2>
                        <p style="color: #5A6E7A;">Dear ' . $name . ',</p>
                    </div>
                    
                    <p>Thank you for contacting <strong>Maher Consulting Group</strong>. We appreciate your interest in our business consulting services.</p>
                    
                    <div class="response-time">
                        <strong>⏱️ Response Time:</strong> Our team typically responds within 24 business hours.
                    </div>
                    
                    <div class="info-box">
                        <strong>📋 Here\'s what you can expect:</strong><br><br>
                        ✓ A confirmation of your inquiry from our team<br>
                        ✓ Initial consultation scheduling (if requested)<br>
                        ✓ Tailored solution discussion based on your needs<br>
                        ✓ Follow-up within 24 hours
                    </div>
                    
                    <div style="background: #E8F5E9; padding: 15px; border-radius: 12px; margin: 20px 0;">
                        <strong style="color: #43B05C;">💡 Quick Tip:</strong><br>
                        While you wait, feel free to explore our services section to learn more about how we can help transform your business.
                    </div>
                    
                    <a href="https://www.maherconsulting.com" class="btn">Visit Our Website</a>
                </div>
                <div class="footer">
                    <p><strong>Maher Consulting Group Ltd</strong><br>
                    Empowering MSMEs for a Sustainable Future</p>
                    <p>📞 +254 703612358 | ✉️ info.maherconsultinggroup@gmail.com</p>
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/ireen-muthoni-kiambi-2651611b6?utm_source=share_via&utm_content=profile&utm_medium=member_android">LinkedIn</a> | <a href="#">Twitter</a> | <a href="https://www.facebook.com/profile.php?id=61588035435671">Facebook</a>
                    </div>
                    <p style="font-size: 11px; margin-top: 15px;">© ' . date('Y') . ' Maher Consulting Group. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>';
        
        // Send emails
        $admin_sent = mail($to, $subject, $email_body, $headers);
        $client_sent = mail($email, $client_subject, $client_body, $client_headers);
        
        if ($admin_sent && $client_sent) {
            $response = ['success' => true, 'message' => 'Thank you! Your message has been sent successfully.'];
        } else {
            $response = ['success' => false, 'message' => 'Sorry, there was an error sending your message. Please try again.'];
        }
    } else {
        $response = ['success' => false, 'message' => implode(', ', $errors)];
    }
    
    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?>