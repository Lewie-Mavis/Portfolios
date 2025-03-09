<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Drive </title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">


</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo">AI Drive</a>
    <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#numbers">Numbers</a>
        <a href="#tech-stack">Technology Stack</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="menu-toggle" onclick="toggleMenu()">
        <i class="fas fa-bars"></i> <!-- Hamburger Icon -->
    </div>
</header>

	

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Empowering the Digital World with AI Innovation</h1>
            <p> AI Specialist | Digital Transformation | Technology Innovator</p>
            <div class="button-container">
    <a href="#contact" class="cta-button">Get in Touch</a>
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
    <h2 class="section-title">About AI Drive</h2>
    <div class="about-content">
        <div class="about-photo">
            <img src="images/about.jpg" alt="AI Drive">
        </div>
        <div class="about-description">
            <p>Welcome to <strong>AI Drive</strong>, a leading technology company specializing in cutting-edge digital solutions. At AI Drive, we are dedicated to providing innovative services in software development, cybersecurity, AI solutions, cloud computing, and IT consultancy. Our mission is to empower businesses and individuals with scalable, efficient, and secure technology solutions that drive success in the digital age.</p>
            
            <a href="#contact" class="btn-consultation">Get Consultation</a>
        </div>
    </div>
</section>



   
    <!-- Services Section --> 
<section id="services">

	
    <h2 class="section-title">Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>Building modern, responsive, and high-performance websites.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-mobile-alt"></i>
            <h3>Mobile App Development</h3>
            <p>Creating cross-platform mobile applications for iOS and Android.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-cloud"></i>
            <h3>Cloud Solutions</h3>
            <p>Designing and deploying scalable cloud infrastructure.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-lock"></i>
            <h3>Cybersecurity Services</h3>
            <p>Protecting your digital assets with advanced security solutions.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-database"></i>
            <h3>Data Analytics</h3>
            <p>Leveraging data insights to drive business growth and efficiency.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-bullhorn"></i>
            <h3>Digital Marketing</h3>
            <p>Boosting online presence through SEO, social media, and content marketing.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-robot"></i>
            <h3>AI & Machine Learning</h3>
            <p>Developing intelligent AI solutions to automate and enhance business operations.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-shopping-cart"></i>
            <h3>E-Commerce Solutions</h3>
            <p>Creating seamless and scalable online shopping platforms.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-network-wired"></i>
            <h3>IT Consulting</h3>
            <p>Providing expert IT solutions tailored to your business needs.</p>
        </div>
    </div>
</section>

    <!-- Portfolio Section -->
<!-- Portfolio Section -->
<section id="portfolio">
	
    <h2 class="section-title">Portfolio</h2>
    <div class="portfolio-grid">
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-laptop-code"></i>
            <h3>Project 1</h3>
            <p>Web Application</p>
            <p>A modern and responsive web application for better user experience.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-mobile-alt"></i>
            <h3>Project 2</h3>
            <p>Mobile App</p>
            <p>Cross-platform mobile application developed for both iOS and Android.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-cloud"></i>
            <h3>Project 3</h3>
            <p>Cloud Solution</p>
            <p>Scalable cloud infrastructure for seamless business operations.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-cogs"></i>
            <h3>Project 4</h3>
            <p>Automation Tool</p>
            <p>An automated tool for optimizing business workflows and reducing manual effort.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-chart-line"></i>
            <h3>Project 5</h3>
            <p>Data Analytics</p>
            <p>Powerful data analytics solution to gain insights from large datasets.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-lock"></i>
            <h3>Project 6</h3>
            <p>Cybersecurity System</p>
            <p>Advanced security systems to protect sensitive data and systems.</p>
        </div>
    </div>
</section>



    
   <!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title">By the Numbers</h2>
    <div class="numbers-background">
        <div class="numbers-grid">
            <div class="number-card">
                <h3 class="count" data-target="50">0</h3><span>+</span>
                <p>Projects Completed</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="100">0</h3><span>+</span>
                <p>Happy Clients</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="10">0</h3><span>+</span>
                <p>Years of Experience</p>
            </div>
        </div>
    </div>
</section>


<section id="tech-stack">


    <h2 class="section-title">Technology Stack</h2>
    <div class="tech-grid">
        <div class="tech-card">
            <i class="fab fa-html5"></i>
            <h3>HTML5</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-css3-alt"></i>
            <h3>CSS3</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-js-square"></i>
            <h3>JavaScript</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-react"></i>
            <h3>React.js</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-vuejs"></i>
            <h3>Vue.js</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-angular"></i>
            <h3>Angular</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-node-js"></i>
            <h3>Node.js</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-server"></i>
            <h3>Express.js</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-php"></i>
            <h3>PHP</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-laravel"></i>
            <h3>Laravel</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-database"></i>
            <h3>MySQL</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-database"></i>
            <h3>PostgreSQL</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-server"></i>
            <h3>MongoDB</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-python"></i>
            <h3>Python</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-leaf"></i>
            <h3>Django</h3> <!-- Used leaf icon to symbolize Django -->
        </div>
        <div class="tech-card">
            <i class="fas fa-flask"></i>
            <h3>Flask</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-java"></i>
            <h3>Java</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-code"></i>
            <h3>Kotlin</h3> <!-- Used generic code icon -->
        </div>
        <div class="tech-card">
            <i class="fab fa-swift"></i>
            <h3>Swift</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-android"></i>
            <h3>Android</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-apple"></i>
            <h3>iOS</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-aws"></i>
            <h3>AWS</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-cubes"></i>
            <h3>Kubernetes</h3> <!-- Used cubes icon to represent Kubernetes -->
        </div>
        <div class="tech-card">
            <i class="fab fa-docker"></i>
            <h3>Docker</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-git-alt"></i>
            <h3>Git</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-github"></i>
            <h3>GitHub</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-linux"></i>
            <h3>Linux</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-windows"></i>
            <h3>Windows Server</h3>
        </div>
    </div>
</section>



<script src="scripts/bounce.js"></script>



    <!-- Testimonials Section -->
    <section id="testimonials">
    <h2 class="section-title">What Our Clients Are Saying</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"AI Drive’s advanced AI solutions and commitment to cybersecurity have transformed our business. Their attention to detail and expertise are unmatched!"</p>
            <h3>- Sarah L., Founder of FutureTech Solutions</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Thanks to AI Drive’s cloud computing services, we’ve seen incredible scalability and reliability in our infrastructure. Their guidance has been invaluable."</p>
            <h3>- David H., VP of Technology at Green Energy Co.</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"We partnered with AI Drive for a custom software project, and their innovative approach has exceeded expectations. Their team is knowledgeable and always on the cutting edge."</p>
            <h3>- Olivia P., CEO of Innovators Hub</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"AI Drive’s cybersecurity solutions have been a game-changer for us. Our sensitive data is now fully protected, and their team’s professionalism is unparalleled."</p>
            <h3>- James T., COO of SecureNet Systems</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"AI Drive’s consultancy has been key in transforming our IT infrastructure. Their strategic guidance, combined with their technical expertise, has propelled our company forward."</p>
            <h3>- Robert W., Director of Operations at Global Tech Solutions</h3>
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
            <p><strong>Phone:</strong> +254 711 190 029</p>
            <p><strong>Email:</strong> aidrive254@outlook.com</p>
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#numbers">Numbers</a></li>
				<li><a href="#tech-stack">Technology Stack</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
        <!-- Right Section: Social Links -->
        <div class="footer-social">
    <a href="https://www.facebook.com/lewie.lom/" class="social-icon" target="_blank">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://x.com/Mavis_Lewie" class="social-icon" target="_blank">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://www.linkedin.com/in/lewie-mavis-a72855207/" class="social-icon" target="_blank">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="https://www.instagram.com/lewie_mavis/" class="social-icon" target="_blank">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://www.youtube.com/@lewiemavis" class="social-icon" target="_blank">
        <i class="fab fa-youtube"></i>
    </a>
    <a href="https://africabyte.wordpress.com/" class="social-icon" target="_blank">
        <i class="fas fa-briefcase"></i> 
    </a>
    <a href="https://lewiemavis.wordpress.com/" class="social-icon" target="_blank">
        <i class="fas fa-globe"></i> 
    </a>
</div>

    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
        <p>&copy; 2025 AI Drive. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>

	
</body>
</html>