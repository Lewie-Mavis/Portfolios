<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nawirizz Organics </title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">


</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo">Nawirizz Organics</a>
    <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#products">Our Products</a>
        <a href="#numbers">Numbers</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="menu-toggle" onclick="toggleMenu()">
        <i class="fas fa-bars"></i> <!-- Hamburger Icon -->
    </div>
</header>

<script>
document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

</script>	

    <!-- Hero Section -->
<section class="hero">
    <div class="hero-content">
        <h1>Welcome to Nawirizz Organics</h1>
        <p>Natural Hair & Skincare | Pure Ingredients | Beauty Rooted in Nature</p>
        <div class="button-container">
            <a href="#contact" class="cta-button">Get In Touch</a>
            <a href="#products" class="services-button">Explore Our Products</a>
        </div>
    </div>
</section>


	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
  gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
</script>



   <!-- About Section -->
<section id="about">
    <h2 class="section-title">About Us</h2>
    <div class="about-content">
        <div class="about-photo">
            <img src="images/about.jpeg" alt="Nawirizz Organics">
        </div>
        <div class="about-description">
            <p>Welcome to <strong>Nawirizz Organics</strong>, your trusted source for natural and organic hair and skincare. We are passionate about creating products that celebrate the beauty of nature while nourishing your body from the outside in. Each of our formulations is crafted with love, using ethically sourced, chemical-free ingredients that are kind to your skin, your hair, and the planet.</p>
            <p>Our mission is to empower individuals to embrace their natural beauty through clean, effective, and sustainable self-care rituals. Whether you're starting a new wellness journey or deepening your commitment to organic living, Nawirizz Organics is here to support you every step of the way.</p>
            
            <a href="#contact" class="btn-consultation">Get in Touch</a>
        </div>
    </div>
</section>



<!-- Products Section -->
<section id="products" class="products-section">
    <h2 class="section-title">Our Products</h2>

    <!-- Product 1 -->
    <div class="single-product">
        <h3 class="product-title">BODY GLOW OIL</h3>
        <p class="product-description">A luxurious blend of natural oils that deeply moisturizes, enhances your skin's natural radiance, and leaves a long-lasting, healthy glow. Perfect for all skin types and daily use.</p>

        <div class="product-images">
            <img src="images/1.jpeg" alt="Oil 1">
            <img src="images/2.jpeg" alt="Oil 1">
            <img src="images/3.jpeg" alt="Oil 1">
        </div>
        <div class="product-videos">
            <video controls class="product-video">
                <source src="images/4.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video controls class="product-video">
                <source src="images/5.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <a href="#place-order" class="btn-place-order">Place Order</a>
    </div>

    <!-- Product 2 -->
    <div class="single-product">
        <h3 class="product-title">HAIR GROWTH BOOSTER</h3>
        <p class="product-description">Formulated to revitalize the scalp and stimulate hair follicles, this booster promotes faster, thicker hair growth while reducing breakage and shedding.</p>

        <div class="product-images">
            <img src="images/6.jpeg" alt="hair growth 1">
            <img src="images/7.jpeg" alt="hair growth 1">
            <img src="images/8.jpeg" alt="hair growth 1">
        </div>
        <div class="product-videos">
            <video controls class="product-video">
                <source src="images/9.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <a href="#place-order" class="btn-place-order">Place Order</a>
    </div>

    <!-- Product 3 -->
    <div class="single-product">
        <h3 class="product-title">QUASIL POWDER</h3>
        <p class="product-description">A 100% natural cleansing powder made from finely ground Quasil, known for its antibacterial and anti-inflammatory properties. Gently detoxifies the scalp and skin, helping to reduce dandruff, acne, and buildup without stripping natural oils.</p>

        <div class="product-images">
            <img src="images/10.jpeg" alt="Quasil 1">
            <img src="images/11.jpeg" alt="Quasil 1">
            <img src="images/12.jpeg" alt="Quasil 1">
        </div>
        <a href="#place-order" class="btn-place-order">Place Order</a>
    </div>

    <!-- Product 4 -->
    <div class="single-product">
        <h3 class="product-title">RADIANT ESSENCE FACE GLOW OIL</h3>
        <p class="product-description">A lightweight, nutrient-rich facial oil that deeply hydrates, brightens the complexion, and enhances your natural glow. Infused with botanical extracts to nourish the skin and promote a radiant, even-toned finish.</p>

        <div class="product-images">
            <img src="images/13.jpeg" alt="Radiant 1">
        </div>
        <a href="#place-order" class="btn-place-order">Place Order</a>
    </div>

    <!-- Product 5 -->
    <div class="single-product">
        <h3 class="product-title">SAFARI SMOOTH BOTANICAL BODY BUTTER</h3>
        <p class="product-description">A rich, velvety body butter infused with botanical extracts that deeply nourishes, softens, and smooths the skin. Perfect for dry or rough areas, it leaves your skin feeling hydrated, supple, and luxuriously scented.</p>

        <div class="product-images">
            <img src="images/18.jpeg" alt="body butter 1">
            <img src="images/19.jpeg" alt="body butter 1">
            <img src="images/20.jpeg" alt="body butter 1">
        </div>
        <div class="product-videos">
            <video controls class="product-video">
                <source src="images/21.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <a href="#place-order" class="btn-place-order">Place Order</a>
    </div>

    <!-- Product 6 -->
    <div class="single-product">
        <h3 class="product-title">MAJESTIC SOVEREIGN BEARD ELIXIR</h3>
        <p class="product-description">A premium blend of nourishing oils crafted to soften, condition, and strengthen your beard while promoting healthy growth. Tames frizz, adds a natural shine, and leaves a refined, masculine scent fit for royalty.</p>

        <div class="product-images">
            <img src="images/23.jpeg" alt="beard elixir 1">
            <img src="images/24.jpeg" alt="beard elixer 1">
        </div>
        <a href="#place-order" class="btn-place-order">Place Order</a>
    </div>
</section>



   <!-- Place Order Section -->
<section id="place-order" class="place-order-section">
  <h2 class="section-title">Place Your Order</h2>
  <p class="order-instructions">
    To order Nawirizz Organics products, please make your payment via Mpesa using the Buys Goods Number below:
  </p>

  <div class="payment-info">
    <div class="paybill">
      <h3>Mpesa Buy Goods Number</h3>
      <p class="paybill-number"><strong>+254 718 012 542</strong></p>
      <p class="paybill-description"></p>
    </div>

    <div class="contact">
      <h3>Contact Us</h3>
      <p>Have questions? Call or WhatsApp us at:</p>
      <p class="phone-number"><a href="tel:+254700123456">+254 718 012 542</a></p>
    </div>
  </div>

  <p class="thank-you-note">Thank you for choosing Nawirizz Organics! Your natural beauty journey starts here.</p>
</section>

    
<!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title">Nawirizz Organics in Numbers</h2>
    <div class="numbers-background">
        <div class="numbers-grid">
            <div class="number-card">
                <h3 class="count" data-target="5000">0</h3><span>+</span>
                <p>Products Sold</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="1500">0</h3><span>+</span>
                <p>Loyal Customers</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="100">0</h3><span>%</span>
                <p>Natural Ingredients</p>
            </div>
        </div>
    </div>
</section>



    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What Our Customers Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Nawirizz Organics' body glow oil transformed my skin—it's now radiant and deeply nourished. I love that it's all natural and feels so luxurious!"</p>
            <h3>- Sarah L., Happy Customer</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"After using Nawirizz Organics’ hair growth booster, I noticed thicker, healthier hair within weeks. Their products really work and are gentle on my scalp."</p>
            <h3>- David H., Loyal Customer</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"The radiant essence face glow oil is my new skincare staple. It brightens my complexion naturally and keeps my skin hydrated all day."</p>
            <h3>- Olivia P., Skincare Enthusiast</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Nawirizz Organics' botanical body butter has made my skin so soft and smooth. The natural ingredients feel nourishing without any greasy residue."</p>
            <h3>- James T., Wellness Advocate</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"The Majestic Sovereign Beard Elixir keeps my beard soft, shiny, and manageable. I get compliments all the time. Truly a game-changer!"</p>
            <h3>- Robert W., Proud Beard Owner</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
    </div>
</section>



	
	<!-- Contact Section -->
<section id="contact">
    <h2 class="section-title">Get in Touch</h2>
    <div class="contact-container">
        <form class="contact-form" action="#" method="POST">
            <div class="input-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required>
            </div>
            <div class="input-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required>
            </div>
            <div class="input-group">
                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="submit-button">
                <i class="fas fa-paper-plane"></i> Send Message
            </button>
        </form>
    </div>
</section>


    <!-- Footer -->
   <footer id="footer">
    <div class="footer-container">
        <!-- Left Section: Address, Opening Hours, Phone, Email -->
        <div class="footer-left">
            <p><strong>Address:</strong> Nairobi, Kenya</p>
            <p><strong>Opening Hours:</strong> Mon - Sun: 24 / 7</p>
            <p><strong>Phone:</strong> +254 718 012 542</p>
            <p><strong>Email:</strong> nawirizzorganics@gmail.com</p>
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Our Products</a></li>
				<li><a href="#numbers">Numbers</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
        <!-- Right Section: Social Links -->
        <div class="footer-social">
    <a href="#" class="social-icon" target="_blank">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a href="#" class="social-icon" target="_blank">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="#" class="social-icon" target="_blank">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="#" class="social-icon" target="_blank">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="#" class="social-icon" target="_blank">
        <i class="fab fa-youtube"></i>
    </a>
    <a href="#" class="social-icon" target="_blank">
        <i class="fas fa-briefcase"></i> 
    </a>
    <a href="#" class="social-icon" target="_blank">
        <i class="fas fa-globe"></i> 
    </a>
</div>

    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
        <p>&copy; 2025 Nawirizz Organics. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>

	
</body>
</html>