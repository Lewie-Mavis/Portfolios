<?php
// send_email.php - Contact Form Handler for Sharon Mbugua
// Enable error display for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// SMTP Settings for Sharon's email
$smtp_host = "cs2.rcnoc.com";
$smtp_port = 465;
$smtp_username = "contact@lewiemavis.com";
$smtp_password = "Lewielom122215#";

// Recipient emails - Send to both Sharon and Lewie
$to_emails = array(
    "swmbugua@gmail.com",  // Sharon's email
    "lewielom@gmail.com"   // Lewie's email (for backup)
);

$response = array('success' => false, 'message' => '');

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Get form data
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Validation
    $errors = array();
    
    if (strlen($name) < 2) {
        $errors[] = "Name is required (minimum 2 characters)";
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email address is required";
    }
    
    if (strlen($message) < 10) {
        $errors[] = "Please provide more details about your situation (minimum 10 characters)";
    }
    
    // If no errors, try to send email
    if (empty($errors)) {
        
        // Include PHPMailer files - Updated path for Sharon's website root
        require_once 'PHPMailer/src/PHPMailer.php';
        require_once 'PHPMailer/src/SMTP.php';
        require_once 'PHPMailer/src/Exception.php';
        
        // Create PHPMailer object
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = $smtp_host;
            $mail->SMTPAuth = true;
            $mail->Username = $smtp_username;
            $mail->Password = $smtp_password;
            $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = $smtp_port;
            $mail->SMTPDebug = 0;
            $mail->CharSet = 'UTF-8';
            
            // Recipients - Send to multiple recipients
            $mail->setFrom($smtp_username, "Sharon Mbugua Coaching");
            
            // Add all recipients
            foreach ($to_emails as $recipient) {
                $mail->addAddress($recipient);
            }
            
            $mail->addReplyTo($email, $name);
            
            // Email Subject
            $mail->Subject = "New Inquiry from $name - Career Redesign Coaching";
            
            // HTML Email Body with Sharon's Theme Colors
            $mail->isHTML(true);
            $mail->Body = '
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body {
                        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                        line-height: 1.6;
                        color: #2e2a27;
                        background-color: #f5f0e8;
                        margin: 0;
                        padding: 0;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 20px auto;
                        background: #ffffff;
                        border-radius: 24px;
                        overflow: hidden;
                        box-shadow: 0 8px 30px rgba(45, 90, 39, 0.08);
                        border: 1px solid rgba(45, 90, 39, 0.06);
                    }
                    .email-header {
                        background: linear-gradient(135deg, #2d5a27 0%, #1a3d17 100%);
                        padding: 30px 35px;
                        text-align: center;
                        border-bottom: 4px solid #c4a882;
                    }
                    .email-header h1 {
                        color: #f5f0e8;
                        margin: 0;
                        font-size: 22px;
                        font-weight: 700;
                        letter-spacing: -0.02em;
                    }
                    .email-header p {
                        color: rgba(245, 240, 232, 0.7);
                        margin: 6px 0 0;
                        font-size: 14px;
                        font-weight: 300;
                    }
                    .email-content {
                        padding: 35px;
                    }
                    .greeting {
                        font-size: 18px;
                        font-weight: 600;
                        color: #2d5a27;
                        margin-bottom: 5px;
                    }
                    .sub-greeting {
                        color: #5a4a3d;
                        font-size: 14px;
                        margin-bottom: 20px;
                    }
                    .project-details {
                        background: #f5f0e8;
                        border-radius: 16px;
                        padding: 20px 24px;
                        margin-bottom: 25px;
                        border-left: 4px solid #2d5a27;
                    }
                    .detail-row {
                        display: flex;
                        margin-bottom: 12px;
                        padding-bottom: 12px;
                        border-bottom: 1px solid rgba(45, 90, 39, 0.06);
                    }
                    .detail-row:last-child {
                        border-bottom: none;
                        margin-bottom: 0;
                        padding-bottom: 0;
                    }
                    .detail-label {
                        font-weight: 600;
                        width: 100px;
                        color: #8B6B4A;
                        font-size: 13px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .detail-value {
                        flex: 1;
                        color: #2e2a27;
                        font-weight: 500;
                    }
                    .detail-value a {
                        color: #2d5a27;
                        text-decoration: none;
                    }
                    .detail-value a:hover {
                        color: #1a3d17;
                        text-decoration: underline;
                    }
                    .message-box {
                        background: #faf8f5;
                        border-radius: 16px;
                        padding: 20px 24px;
                        margin-top: 20px;
                        border: 1px solid rgba(45, 90, 39, 0.06);
                    }
                    .message-box h3 {
                        margin: 0 0 8px 0;
                        color: #2d5a27;
                        font-size: 14px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .message-box p {
                        margin: 0;
                        color: #3d332b;
                        line-height: 1.7;
                        font-size: 15px;
                    }
                    .action-box {
                        margin-top: 20px;
                        padding: 16px 20px;
                        background: rgba(45, 90, 39, 0.04);
                        border-radius: 12px;
                        border-left: 4px solid #c4a882;
                    }
                    .action-box p {
                        margin: 0;
                        color: #5a4a3d;
                        font-size: 13px;
                    }
                    .action-box strong {
                        color: #2d5a27;
                    }
                    .email-footer {
                        background: #f5f0e8;
                        padding: 20px 35px;
                        text-align: center;
                        border-top: 1px solid rgba(45, 90, 39, 0.06);
                    }
                    .email-footer p {
                        margin: 0;
                        color: #8B6B4A;
                        font-size: 12px;
                        font-weight: 500;
                        letter-spacing: 0.3px;
                    }
                    .email-footer .brand {
                        color: #2d5a27;
                        font-weight: 600;
                    }
                    .badge {
                        display: inline-block;
                        background: #2d5a27;
                        color: #f5f0e8;
                        padding: 2px 12px;
                        border-radius: 50px;
                        font-size: 11px;
                        font-weight: 600;
                        letter-spacing: 0.3px;
                    }
                    .divider {
                        height: 2px;
                        background: linear-gradient(90deg, #2d5a27, #c4a882, #2d5a27);
                        opacity: 0.15;
                        margin: 20px 0;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <h1>✦ New Coaching Inquiry</h1>
                        <p>From ' . htmlspecialchars($name) . '</p>
                    </div>
                    
                    <div class="email-content">
                        <p class="greeting">Hello Sharon,</p>
                        <p class="sub-greeting">You have received a new inquiry through your website contact form.</p>
                        
                        <div class="divider"></div>
                        
                        <div class="project-details">
                            <div class="detail-row">
                                <div class="detail-label">👤 Name</div>
                                <div class="detail-value"><strong>' . htmlspecialchars($name) . '</strong></div>
                            </div>
                            <div class="detail-row">
                                <div class="detail-label">📧 Email</div>
                                <div class="detail-value"><a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a></div>
                            </div>
                            <div class="detail-row">
                                <div class="detail-label">📅 Date</div>
                                <div class="detail-value">' . date('F j, Y \a\t g:i A') . '</div>
                            </div>
                        </div>
                        
                        <div class="message-box">
                            <h3>💬 Message</h3>
                            <p>' . nl2br(htmlspecialchars($message)) . '</p>
                        </div>
                        
                        <div class="action-box">
                            <p>📌 <strong>Action Required:</strong> Respond to this inquiry within 24 hours to provide the support they need.</p>
                        </div>
                    </div>
                    
                    <div class="email-footer">
                        <p><span class="brand">Sharon Mbugua</span> · Life Strategist &amp; Career Redesign Coach</p>
                        <p style="margin-top: 4px; color: #b5a99d; font-size: 11px;">🌐 coachelevate.com · IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . '</p>
                        <p style="margin-top: 6px; color: #b5a99d; font-size: 10px;">This inquiry was sent from your website contact form</p>
                    </div>
                </div>
            </body>
            </html>';
            
            // Plain text version for email clients that don't support HTML
            $mail->AltBody = "New Coaching Inquiry\n\n";
            $mail->AltBody .= "Name: $name\n";
            $mail->AltBody .= "Email: $email\n";
            $mail->AltBody .= "Date: " . date('F j, Y \a\t g:i A') . "\n\n";
            $mail->AltBody .= "Message:\n$message\n\n";
            $mail->AltBody .= "---\n";
            $mail->AltBody .= "Sharon Mbugua · Life Strategist & Career Redesign Coach\n";
            $mail->AltBody .= "IP: {$_SERVER['REMOTE_ADDR']}";
            
            $mail->send();
            $response['success'] = true;
            $response['message'] = "✅ Thank you $name! Your message has been sent successfully. Sharon will get back to you within 24 hours.";
            
        } catch (Exception $e) {
            $response['success'] = false;
            $response['message'] = "❌ Message could not be sent. Please try again or contact Sharon directly at +254 722 791 432.";
        }
        
    } else {
        $response['success'] = false;
        $response['message'] = "❌ Please fix the following errors:<br>• " . implode("<br>• ", $errors);
    }
    
    // Check if this is an AJAX request or regular form submission
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        // Return JSON response for AJAX
        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        // Regular form submission - redirect back to the page
        $redirect_url = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '/';
        if ($response['success']) {
            header("Location: $redirect_url?status=success&message=" . urlencode($response['message']));
        } else {
            header("Location: $redirect_url?status=error&message=" . urlencode($response['message']));
        }
    }
    exit;
}
?>