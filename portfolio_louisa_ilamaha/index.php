<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Louisa Ilamaha </title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo">Louisa Ilamaha</a>
    <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#numbers">Numbers</a>
        <a href="#tech-stack">Skills</a>
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
        <h1>Delivering Excellence in Customer Service</h1>
        <p>Customer Service Professional | Expert in Client Relationships & Sales Growth | Experienced in Healthcare & Call Center Operations</p>
        <div class="button-container">
            <a href="#contact" class="cta-button">Get in Touch</a>
            <a href="#services" class="services-button">My Services</a>
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
        <div class="about-photo">
            <img src="images/about.jpeg" alt="Louisa Ilamaha">
        </div>
        <div class="about-description">
            <p>Hi, I'm <strong>Louisa Ilamaha</strong>, a highly motivated and results-driven Customer Service professional with a proven track record of exceeding expectations and delivering exceptional customer experiences. With over 6 years of experience in the industry, I specialize in building strong client relationships, resolving complex issues, and driving continuous improvement. Throughout my career, I have consistently demonstrated a passion for exceeding customer expectations. I've honed my skills in complaint resolution, relationship building, and customer retention. I thrive in fast-paced environments and excel at multitasking while maintaining a high level of attention to detail.</p>
            
            <a href="#contact" class="btn-consultation">Get Consultation</a>
        </div>
    </div>
</section>



   
    <!-- Services Section --> 
<section id="services">
    <h2 class="section-title">Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-headset"></i>
            <h3>Customer Support</h3>
            <p>Providing responsive and efficient support to address customer inquiries and concerns.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-handshake"></i>
            <h3>Client Relationship Management</h3>
            <p>Building strong, long-lasting relationships with clients to foster loyalty and trust.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-chart-line"></i>
            <h3>Customer Retention Strategies</h3>
            <p>Implementing strategies to improve customer satisfaction and retention rates.</p>
        </div>
		        <div class="service-card">
            <i class="fas fa-bell"></i>
            <h3>Customer Experience Improvement</h3>
            <p>Enhancing the overall customer journey with a focus on satisfaction and loyalty.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-arrow-up"></i>
            <h3>Sales Growth Strategies</h3>
            <p>Developing targeted strategies to drive revenue growth through enhanced customer service and retention efforts.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-trophy"></i>
            <h3>Quality Assurance</h3>
            <p>Ensuring that all customer interactions meet high standards of excellence and service quality.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-comments"></i>
            <h3>Feedback & Survey Management</h3>
            <p>Gathering customer feedback to drive improvements and enhance customer experience.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-users"></i>
            <h3>Team Training & Development</h3>
            <p>Training and developing customer service teams to deliver consistent and high-quality service.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-clipboard-list"></i>
            <h3>Process Optimization</h3>
            <p>Streamlining customer service processes to improve efficiency and overall performance.</p>
        </div>
		
		
    </div>
</section>


<!-- Portfolio Section -->
<section id="portfolio">
    <h2 class="section-title">Portfolio</h2>
    <div class="portfolio-grid">
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-briefcase"></i>
            <h3>Zuri Health</h3>
            <p>Market Expansion & Key Accounts</p>
            <p>At Zuri Health, I played a pivotal role in expanding our market presence by successfully securing new key accounts. This effort not only increased our revenue but also strengthened our brand in a highly competitive industry.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-heartbeat"></i>
            <h3>Checkups Medical Centre</h3>
            <p>Customer Satisfaction & Service Excellence</p>
            <p>While at Checkups Medical Centre, I boosted customer satisfaction scores to 100% by leveraging my deep knowledge of medical services and insurance coverage. My ability to empathize with patients and swiftly resolve their concerns led to a significant improvement in service standards.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-shield-alt"></i>
            <h3>Ecom Services Limited</h3>
            <p>Fraud Prevention & Service Excellence</p>
            <p>During my tenure at Ecom Services Limited, I led the charge in fraud prevention and customer service excellence. I identified and mitigated potential fraud cases daily, which safeguarded company revenue and enhanced operational efficiency. My dedication and performance earned me a promotion to Team Lead.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-phone-alt"></i>
            <h3>Zuri Health</h3>
            <p>Client Retention & Customer Engagement</p>
            <p>As a Customer Service Executive at Zuri Health, I not only maintained a high client retention rate of 80% but also significantly increased customer call intake from 40 to 60 calls daily by using open-ended questions and making effective suggestions, thereby enhancing overall customer engagement.</p>
        </div>
    </div>
</section>




    
   <!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title">By the Numbers</h2>
    <div class="numbers-background">
        <div class="numbers-grid">
		    <div class="number-card">
                <h3 class="count" data-target="100">0</h3><span>%</span>
                <p>Client Satisfaction</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="50">0</h3><span>+</span>
                <p>Projects Completed</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="500">0</h3><span>+</span>
                <p>Clients Served</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="6">0</h3><span>+</span>
                <p>Years of Experience</p>
            </div>
        </div>
    </div>
</section>


<section id="tech-stack">
    <h2 class="section-title">Skills & Expertise</h2>
    <div class="tech-grid">
        <div class="tech-card">
            <i class="fas fa-headset"></i>
            <h3>Customer Relationship Management (CRM)</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-comments"></i>
            <h3>Live Chat & Communication Tools</h3>
        </div>
		 <div class="tech-card">
            <i class="fas fa-user-shield"></i>
            <h3>Security & Privacy Awareness</h3>
        </div>
		<div class="tech-card">
            <i class="fas fa-headphones-alt"></i>
            <h3>Omnichannel Support</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-cogs"></i>
            <h3>Issue Tracking & Support Systems</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-users"></i>
            <h3>Client Relationship Building</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-chart-line"></i>
            <h3>Data Analytics for Customer Insights</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-bell"></i>
            <h3>Customer Feedback & Survey Tools</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-sync-alt"></i>
            <h3>Process Optimization</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-cloud"></i>
            <h3>Cloud-based Support Systems</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-robot"></i>
            <h3>Automation Tools</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-trophy"></i>
            <h3>Performance Metrics & Reporting</h3>
        </div>
    </div>
</section>




<script>

</script>



    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What Clients Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Louisa’s ability to understand and address our patient needs in the healthcare sector is unparalleled. She swiftly resolves complex issues, ensuring our clients receive exceptional care. Her dedication to improving patient experience has made a significant impact on our practice!"</p>
            <h3>- Dr. Emma J., Chief Medical Officer at HealthFirst Clinic</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
		 <div class="testimonial-card">
            <p>"Louisa's expertise in building strong client relationships in the healthcare sector has been instrumental in improving patient satisfaction scores. She proactively addresses concerns and ensures every patient feels valued and cared for. A true asset to our team!"</p>
            <h3>- John M., Director of Operations at WellnessCare Hospitals</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Working with Louisa in the tech industry has been a game-changer for us. Her problem-solving skills and ability to build strong relationships have helped us streamline our customer support processes. Her contributions have been vital in enhancing our client retention!"</p>
            <h3>- Alex T., CTO of InnovateTech Solutions</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Louisa's attention to detail and her customer-centric approach in our retail business has significantly improved our customer satisfaction. She listens attentively, resolves issues promptly, and ensures clients feel heard and valued every time. Truly a professional!"</p>
            <h3>- Rachel L., Head of Customer Experience at RetailNow</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"In the fast-paced tech environment, Louisa’s ability to handle customer inquiries with professionalism and empathy has made a tremendous difference. She consistently exceeds expectations and ensures our clients receive timely and accurate assistance, improving our overall business efficiency!"</p>
            <h3>- David P., Customer Success Manager at FutureTech Systems</h3>
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
            <p><strong>Phone:</strong> +254 701 465 136</p>
            <p><strong>Email:</strong> louizailamaha@gmail.com</p>
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#numbers">Numbers</a></li>
				<li><a href="#tech-stack">Skills</a></li>
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
    <a href="https://www.linkedin.com/in/louisa-ilamaha-92b7b0b4" class="social-icon" target="_blank">
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
        <p>&copy; 2025 Louisa Ilamaha. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>
</body>
</html>