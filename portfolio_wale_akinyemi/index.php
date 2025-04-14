<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dr. Wale Akinyemi </title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">


</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo">Dr. Wale Akinyemi</a>
    <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#books">Books</a>
        <a href="#events">Events</a>
        <a href="#cart">Cart</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="menu-toggle" onclick="toggleMenu()">
        <i class="fas fa-bars"></i> <!-- Hamburger Icon -->
    </div>
</header>

	

    <!-- Hero Section -->
<section class="hero">
    <div class="hero-content">
        <h1>Dr. Wale Akinyemi: Leadership, Insight & Inspiration</h1>
        <p>Leadership Consultant | Expert in Corporate Culture & Personal Development | Author</p>

        <div class="button-container">
            <a href="#contact" class="cta-button">Get In Touch</a>
            <a href="#services" class="services-button">Discover My Services</a>
        </div>
		        <!-- Sign Up and Login buttons below -->
        <div class="auth-button-container">
            <a href="#signup" class="signup-button">Sign Up</a>
            <a href="#login" class="login-button">Login</a>
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
    <h2 class="section-title">About Me</h2>
    <div class="about-content">
        <!-- Image Slider Section -->
        <div class="about-photo-slider">
            <div class="slide">
                <img src="images/wale1.jpg" alt="Dr. Wale Akinyemi 1">
            </div>
            <div class="slide">
                <img src="images/wale2.jpg" alt="Dr. Wale Akinyemi 2">
            </div>
            <div class="slide">
                <img src="images/wale3.jpg" alt="Dr. Wale Akinyemi 3">
            </div>
        </div>

        <!-- Description Section -->
        <div class="about-description">
            <p>Welcome, I’m <strong>Dr. Wale Akinyemi</strong>, a renowned Leadership Consultant and Corporate Culture Expert. I am known for my inspirational talks and writings on Personal Development and Leadership. As the preferred consultant for numerous Fortune 500 companies and governments worldwide, I have helped shape successful leadership strategies that foster growth, innovation, and positive corporate cultures. My work focuses on empowering leaders and organizations to achieve excellence by creating a conducive environment for personal and professional development.</p>
            <a href="#contact" class="btn-consultation">Get Consultation</a>
        </div>
    </div>
</section>
<script src="scripts/slider.js"></script>


   
    <!-- Services Section --> 
<section id="services">
    <h2 class="section-title">Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-users"></i>
            <h3>Leadership Development</h3>
            <p>Empowering leaders with the tools and strategies to inspire and motivate teams, fostering growth, innovation, and excellence.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-briefcase"></i>
            <h3>Executive Coaching</h3>
            <p>Personalized coaching for executives and senior leaders, enhancing their leadership effectiveness, decision-making, and team management skills.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-cogs"></i>
            <h3>Corporate Culture Transformation</h3>
            <p>Helping organizations create positive, inclusive, and high-performance cultures that drive business success and employee engagement.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-handshake"></i>
            <h3>Change Management</h3>
            <p>Guiding organizations through the complexities of change, ensuring smooth transitions and positive outcomes during periods of transformation.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-lightbulb"></i>
            <h3>Personal Development Programs</h3>
            <p>Inspiring individuals to unlock their potential, develop critical skills, and build the mindset required for personal and professional growth.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-chart-line"></i>
            <h3>Strategic Leadership Consulting</h3>
            <p>Providing expert advice to businesses and leaders on how to develop and implement effective leadership strategies to drive growth and innovation.</p>
        </div>
    </div>
</section>

<section id="books">
    <h2 class="section-title">Books Store</h2>
    
     <!-- Image Section -->
<div class="image-container">
    <img src="images/books1.jpg" alt="Dr. Wale Akinyemi" class="dr-image">
</div>
<!-- Introduction Paragraph -->
<p class="introduction">
    Dr. Wale Akinyemi is an accomplished author, speaker, and thought leader. His books provide powerful insights into personal development, leadership, and motivation. Through his writing, Dr. Akinyemi inspires individuals to take charge of their lives and create positive, lasting change.
</p>

<!-- New H2 for Dr. Wale's Books -->
<h2 class="section-title">Books by Dr. Wale Akinyemi</h2>

<div class="books-container">
    <div class="book-card">
        <a href="#book1-details" class="book-link">
            <img src="images/book1.jpg" alt="Book 1" class="book-image">
            <div class="book-details">
                <h3 class="book-title">Beyond Intelligence</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p class="book-price">Ksh 1,000.00</p>
            </div>
        </a>
        <a href="#add-to-cart" class="ctab-button">Add to Cart</a>
    </div>
    
    <div class="book-card">
        <a href="#book2-details" class="book-link">
            <img src="images/book2.jpg" alt="Book 2" class="book-image">
            <div class="book-details">
                <h3 class="book-title">Brand Control</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p class="book-price">Ksh 1,000.00</p>
            </div>
        </a>
        <a href="#add-to-cart" class="ctab-button">Add to Cart</a>
    </div>
    
    <div class="book-card">
        <a href="#book3-details" class="book-link">
            <img src="images/book3.jpg" alt="Book 3" class="book-image">
            <div class="book-details">
                <h3 class="book-title">Creative Thinking</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p class="book-price">Ksh 1,000.00</p>
            </div>
        </a>
        <a href="#add-to-cart" class="ctab-button">Add to Cart</a>
    </div>
</div>
</section>


    
   <!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title">By the Numbers</h2>
    <div class="numbers-background">
        <div class="numbers-grid">
            <div class="number-card">
                <h3 class="count" data-target="200">0</h3><span>+</span>
                <p>Consulting Projects Delivered</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="500">0</h3><span>+</span>
                <p> Clients Served</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="25">0</h3><span>+</span>
                <p>Years of Leadership Experience</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="40">0</h3><span>+</span>
                <p>Books Authored</p>
            </div>
        </div>
    </div>
</section>


<section id="events">
    <h2 class="section-title">Upcoming Events</h2>
    <div class="events-container">
        <div class="event-card">
            <div class="event-icon">
                <i class="fas fa-chalkboard-teacher"></i> <!-- Icon for leadership or workshop -->
            </div>
            <div class="event-details">
                <h3 class="event-title">Leadership Mastery Workshop</h3>
                <p class="event-date">May 25, 2025</p>
                <p class="event-location">Location: New York, USA</p>
                <p class="event-description">
                    Join Dr. Wale Akinyemi for an exclusive workshop focused on mastering leadership skills for executives. This interactive session is designed to enhance strategic thinking, decision-making, and effective leadership.
                </p>
                <a href="#register" class="event-button">Register Now</a>
            </div>
        </div>
        <div class="event-card">
            <div class="event-icon">
                <i class="fas fa-user-graduate"></i> <!-- Icon for personal development -->
            </div>
            <div class="event-details">
                <h3 class="event-title">Personal Development Seminar</h3>
                <p class="event-date">June 15, 2025</p>
                <p class="event-location">Location: London, UK</p>
                <p class="event-description">
                    In this seminar, Dr. Wale Akinyemi will guide participants through personal growth strategies, self-awareness, and creating a roadmap for achieving personal success in both career and life.
                </p>
                <a href="#register" class="event-button">Register Now</a>
            </div>
        </div>
        <div class="event-card">
            <div class="event-icon">
                <i class="fas fa-globe-americas"></i> <!-- Icon for global summit -->
            </div>
            <div class="event-details">
                <h3 class="event-title">Global Leadership Summit</h3>
                <p class="event-date">July 30, 2025</p>
                <p class="event-location">Location: Dubai, UAE</p>
                <p class="event-description">
                    The Global Leadership Summit is an exclusive event for thought leaders, innovators, and executives. Dr. Wale Akinyemi will deliver a keynote on the future of leadership in the age of innovation.
                </p>
                <a href="#register" class="event-button">Register Now</a>
            </div>
        </div>
    </div>
</section>


<h2 class="section-title">Featured In</h2>

<!-- Featured In Section -->
<div class="featured-in-section">
    <div class="featured-item">
        <img src="images/feature1.png" alt="Featured 1" class="featured-logo">
    </div>
    <div class="featured-item">
        <img src="images/feature2.png" alt="Featured 2" class="featured-logo">
    </div>
    <div class="featured-item">
        <img src="images/feature3.png" alt="Featured 3" class="featured-logo">
    </div>
    <div class="featured-item">
        <img src="images/feature4.png" alt="Featured 4" class="featured-logo">
    </div>

</div>


<!-- Newsletter Section -->
<section class="newsletter-section">
    <div class="newsletter-content">
        <h2 class="section-title">Stay Updated with Our Newsletter</h2>
        <p>Subscribe to our newsletter for the latest insights, updates, and offers directly in your inbox.</p>
        <div class="newsletter-form">
            <input type="email" placeholder="Enter your email" class="email-input" required>
            <button class="signup-button">Sign Up</button>
        </div>
    </div>
</section>


    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What Clients Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Dr. Wale Akinyemi’s wisdom on leadership and personal development has reshaped my mindset and approach to success."</p>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i> <!-- 4.5/5 Rating -->
            </div>
            <div class="testimonial-info">
                <div class="testimonial-image">
                    <img src="images/testimonials1.jpeg" alt="Louisa Ilamaha">
                </div>
                <h3>- Louisa Ilamaha</h3>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Every time I listen to Dr. Wale Akinyemi, I walk away with powerful lessons. His content is inspiring, practical, and life-changing."</p>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> <!-- 5/5 Rating -->
            </div>
            <div class="testimonial-info">
                <div class="testimonial-image">
                    <img src="images/testimonials2.png" alt="Dr. Ruth Mwangi">
                </div>
                <h3>- Dr. Ruth Mwangi</h3>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"A true thought leader! Dr. Wale’s teachings have helped me unlock my potential and take charge of my growth."</p>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> <!-- 5/5 Rating -->
            </div>
            <div class="testimonial-info">
                <div class="testimonial-image">
                    <img src="images/testimonials3.jpg" alt="Lewie Mavis">
                </div>
                <h3>- Lewie Mavis</h3>
            </div>
        </div>
    </div>
</section>





	
	<!-- Contact Section -->
<section id="contact">
    <h2 class="section-title">Get in Touch</h2>
    <div class="contact-container">
        <form class="contact-form" action="https://formspree.io/f/xnnjvqoz" method="POST">
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
            <p><strong>Phone:</strong> +254 700 000 000</p>
            <p><strong>Email:</strong> </p>
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
				<li><a href="#services">Services</a></li>
                <li><a href="#books">Books</a></li>
                <li><a href="#events">Events</a></li>
				<li><a href="#numbers">Numbers</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
        <!-- Right Section: Social Links -->
        <div class="footer-social">
    <a href="" class="social-icon" target="_blank">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fab fa-youtube"></i>
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fas fa-briefcase"></i> 
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fas fa-globe"></i> 
    </a>
</div>

    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
        <p>&copy; 2025 Dr. Wale Akinyemi. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>

	
</body>
</html>