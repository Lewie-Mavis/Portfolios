<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Sent - Grace Wambui Gathua</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #0a0a2a 0%, #12123a 50%, #0d0d30 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .success-container {
            max-width: 500px;
            width: 100%;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 28px;
            padding: 50px 40px;
            text-align: center;
            border: 1px solid rgba(209, 165, 42, 0.3);
            animation: fadeInUp 0.6s ease;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .success-icon {
            width: 80px;
            height: 80px;
            background: rgba(209, 165, 42, 0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            border: 2px solid var(--primary-gold);
        }
        .success-icon i {
            font-size: 3rem;
            color: #D1A52A;
        }
        h1 {
            color: #D1A52A;
            font-size: 1.8rem;
            margin-bottom: 15px;
        }
        p {
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .btn {
            display: inline-block;
            background: #D1A52A;
            color: #200F3B;
            padding: 14px 32px;
            text-decoration: none;
            border-radius: 40px;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .btn:hover {
            background: #FFD700;
            transform: translateY(-3px);
        }
        @media (max-width: 768px) {
            .success-container {
                padding: 40px 25px;
            }
            h1 {
                font-size: 1.5rem;
            }
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="success-container">
        <div class="success-icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <h1>Message Sent Successfully! 🎉</h1>
        <p>Thank you for reaching out! I've received your message and will get back to you within 24 hours.</p>
        <a href="index.php" class="btn">Return to Homepage</a>
    </div>
</body>
</html>