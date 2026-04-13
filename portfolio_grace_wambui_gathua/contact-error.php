<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Failed - Grace Wambui Gathua</title>
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
        .error-container {
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
        .error-icon {
            width: 80px;
            height: 80px;
            background: rgba(220, 53, 69, 0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            border: 2px solid #dc3545;
        }
        .error-icon i {
            font-size: 3rem;
            color: #dc3545;
        }
        h1 {
            color: #dc3545;
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
            .error-container {
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
    <div class="error-container">
        <div class="error-icon">
            <i class="fas fa-envelope"></i>
        </div>
        <h1>Message Failed to Send 😔</h1>
        <p>We're experiencing technical difficulties. Please try again later or contact us directly via WhatsApp or email.</p>
        <a href="index.php#contact" class="btn">Try Again</a>
    </div>
</body>
</html>