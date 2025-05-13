<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Murira Winnie & Co. Advocates </title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />


</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo" onclick="scrollToTop()">Murira Winnie & Co. Advocates</a>
    <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
		<a href="#numbers">Numbers</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="menu-toggle" onclick="toggleMenu()">
        <i class="fas fa-bars"></i> <!-- Hamburger Icon -->
    </div>
</header>
<script>
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>
	

    <!-- Hero Section -->
<section class="hero">
    <div class="hero-content">
        <h1>Welcome To Murira Winnie & Co. Advocates</h1>
        <p>Trusted Legal Counsel | Integrity-Driven Advocacy | Passion Behind Every Matter</p>

        <div class="button-container">
            <a href="#contact" class="cta-button">Get In Touch</a>
            <a href="#services" class="services-button">Discover Our Services</a>
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

    <!-- Image Slider Section -->
    <div class="about-photo-slider">
        <div class="slide">
            <img src="images/3.jpg" alt="Murira Winnie">
        </div>
        <div class="slide">
            <img src="images/4.jpg" alt="Murira Winnie">
        </div>
        <div class="slide">
            <img src="images/5.jpg" alt="Murira Winnie">
        </div>
        <div class="slide">
            <img src="images/2.jpg" alt="Murira Winnie">
        </div>
        <div class="slide">
            <img src="images/6.jpg" alt="Murira Winnie">
        </div>
        <div class="slide">
            <img src="images/7.jpg" alt="Murira Winnie">
        </div>
    </div>

    <!-- Logo / About Photo -->
    <div class="about-photo">
        <img src="images/logo.jpeg" alt="Murira Winnie & Co. Advocates">
    </div>

    <!-- About Description -->
    <div class="about-description">
        <p>
            Welcome to <strong>Murira Winnie & Co. Advocates</strong> — a distinguished law firm committed to delivering trusted, effective, and client-centered legal services. 
            With a proven track record and a passion for justice, our firm offers comprehensive legal expertise across a wide range of practice areas, including:
            <strong>Personal Injury Law</strong>, <strong>Conveyancing Law</strong>, <strong>Family & Succession Law</strong>, <strong>Commercial Law</strong>, 
            <strong>Criminal Law</strong>, <strong>Employment Law</strong>, and <strong>Environmental Law</strong>.
        </p>
        <p>
            We pride ourselves on our dedication to excellence, integrity, and advocacy — ensuring every client receives personalized legal representation tailored to their unique needs. 
            Whether you're navigating complex legal challenges or seeking proactive legal guidance, <strong>Murira Winnie & Co. Advocates</strong> is here to support you with professionalism and care.
        </p>
        <a href="#contact" class="btn-consultation">Schedule a Consultation</a>
    </div>
</section>
<script src="scripts/slider.js"></script>

<!-- Team Lead Section -->
<section id="lead-team">
    <h2 class="section-title">Meet Our Lead Team</h2>
    <div class="team-member">
        <div class="team-image">
            <img src="images/1.jpg" alt="Murira Winnie - Managing Partner">
        </div>
        <div class="team-description">
            <h3>Murira Winnie</h3>
            <p><strong>Managing Partner & Senior Advocate</strong></p>
            <p>
                With over a decade of legal practice, Murira Winnie is a seasoned advocate specializing in Personal Injury, Family & Succession, and Commercial Law. She is known for her strategic litigation approach and commitment to client advocacy.
            </p>
            <p>
                Winnie leads the firm with a strong dedication to justice, ensuring every client receives personalized and effective legal support.
            </p>
        </div>
    </div>
</section>

   
<!-- Services Section --> 
<section id="services">
    <h2 class="section-title">Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-gavel"></i>
            <h3>Personal Injury Law</h3>
            <p>Providing legal support for individuals who have been injured due to accidents or negligence, ensuring they receive rightful compensation.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-home"></i>
            <h3>Conveyancing Law</h3>
            <p>Specializing in property transactions, including the sale, purchase, and leasing of real estate, as well as handling the legal aspects of property transfers.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-users"></i>
            <h3>Family & Succession Law</h3>
            <p>Assisting with family-related matters including divorce, child custody, spousal support, and handling matters related to inheritance, wills, and estates.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-briefcase"></i>
            <h3>Commercial Law</h3>
            <p>Guiding businesses through the complexities of contracts, partnerships, mergers, acquisitions, and corporate governance.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-gavel"></i>
            <h3>Criminal Law</h3>
            <p>Offering defense representation for clients facing criminal charges, ensuring fair trials and the protection of rights.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-handshake"></i>
            <h3>Employment Law</h3>
            <p>Helping employers and employees navigate employment contracts, workplace disputes, discrimination, and labor rights.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-leaf"></i>
            <h3>Environmental Law</h3>
            <p>Advising on compliance with environmental regulations, handling disputes related to environmental impact, and representing clients in sustainability-related matters.</p>
        </div>
    </div>
</section>


    
   <!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title">Proven by the Numbers</h2>
    <div class="numbers-background">
        <div class="numbers-grid">
            <div class="number-card">
                <h3 class="count" data-target="1000">0</h3><span>+</span>
                <p>Cases Successfully Handled</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="850">0</h3><span>+</span>
                <p>Satisfied Clients</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="10">0</h3><span>+</span>
                <p>Years of Legal Expertise</p>
            </div>
        </div>
    </div>
</section>



    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What Clients Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Murira Winnie & Co. Advocates handled my personal injury case with exceptional professionalism. Their attention to detail and commitment to justice ensured I received fair compensation."</p>
            <h3>- Peter M., Client</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"We worked with Murira Winnie & Co. Advocates for conveyancing on a complex property transfer. Their expertise and communication made the process seamless and stress-free."</p>
            <h3>- Grace W., Real Estate Investor</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Murira Winnie & Co. Advocates supported me through a challenging family and succession case. Their compassion and clarity during such an emotional time truly made a difference."</p>
            <h3>- Nancy K., Client</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Their legal team helped our company resolve a commercial dispute efficiently. The strategic guidance and assertive representation saved us both time and resources."</p>
            <h3>- Brian N., Business Owner</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Murira Winnie & Co. Advocates provided excellent representation in my criminal case. Their professionalism and deep understanding of the law gave me confidence throughout the process."</p>
            <h3>- Kevin L., Client</h3>
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
            <p><strong>Address:</strong> Murang'a, Kenya</p>
			<p>Murang’a Catholic Teacher’s House,
Opposite Equity Bank.
Ground Floor, Rm No.G5</p>
			<p><strong>P.O.Box:</strong> 467-10200</p>
            <p><strong>Opening Hours:</strong> Mon - Sun: 24 / 7</p>
            <p><strong>Phone:</strong> +254 708 813 503 / +254 114 426 869</p>
            <p><strong>Email:</strong> murirawinnieadvocates@gmail.com</p>
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
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
        <p>&copy; 2025 Murira Winnie & Co. Advocates. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="scripts/script.js"></script>

	
</body>
</html>