<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lewie Mavis </title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo">Lewie Mavis</a>
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
      <h1>Empowering Businesses with Cutting-Edge IT Solutions</h1>
      <p>IT Consultation | Software Development | Cybersecurity | Data Management | AI & Cloud Solutions</p>
      <div class="button-container">
         <a href="#contact" class="cta-button">Get in Touch</a>
         <a href="#services" class="services-button">Explore Our Services</a>
      </div>
   </div>
</section>


	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
  gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
</script>

   
    <!-- Services Section --> 
<section id="about">
    <h2 class="section-title">About Me</h2>
    <div class="about-content">
        <div class="about-photo">
            <img src="images/lewie.jpg" alt="Lewie Mavis">
        </div>
<div class="about-description">
    <p>Hi, I'm <strong>Lewie Mavis</strong>, a technology consultant specializing in <strong>custom software development, cloud solutions, cybersecurity and artificail intelligence</strong>. With a strong foundation in computer science, I am passionate about helping businesses leverage the latest technology to optimize operations and achieve their digital transformation goals.</p>

    <p>Through my expertise in <strong>AI, data management, and IT strategy</strong>, I deliver tailored solutions that drive efficiency, security and innovation. Whether it's building scalable software, securing digital infrastructures, or creating data-driven strategies, my mission is to empower businesses with technology that accelerates success.</p>

    <a href="#contact" class="btn-consultation">Book a Consultation</a>
</div>




    </div>
</section>



   
    <!-- Services Section --> 
<section id="services">
    <h2 class="section-title">Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-code"></i>
            <h3>Custom Software Development</h3>
            <p>Designing and developing tailor-made software solutions to meet the unique needs of your business, ensuring efficiency and scalability.</p>
        </div>
		<div class="service-card">
            <i class="fas fa-mobile-alt"></i>
            <h3>Mobile App Development</h3>
            <p>Creating custom mobile applications to help businesses engage with their customers on the go, providing a seamless experience across devices.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-cloud"></i>
            <h3>Cloud Solutions</h3>
            <p>Helping businesses move to the cloud with reliable, secure, and scalable cloud computing solutions for seamless operations.</p>
        </div>
		<div class="service-card">
            <i class="fas fa-users-cog"></i>
            <h3>IT Consultation & Strategy</h3>
            <p>Providing expert IT consultation and strategic planning to help your business leverage technology effectively and stay ahead of the competition.</p>
        </div>
		<div class="service-card">
            <i class="fas fa-laptop-code"></i>
            <h3>Web Development</h3>
            <p>Building responsive, user-friendly websites with modern technologies that ensure a strong online presence for your business.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-shield-alt"></i>
            <h3>Cybersecurity</h3>
            <p>Protecting your business from cyber threats with advanced security solutions to safeguard sensitive data and ensure business continuity.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-cogs"></i>
            <h3>IT Infrastructure Management</h3>
            <p>Providing end-to-end IT infrastructure management to optimize your system’s performance, ensuring seamless integration and support.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-chart-line"></i>
            <h3>Data Analytics & Insights</h3>
            <p>Turning data into actionable insights with advanced analytics and business intelligence tools that help drive informed decisions.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-network-wired"></i>
            <h3>Network Solutions</h3>
            <p>Designing and implementing secure and scalable network infrastructures that enhance performance and connectivity for your business.</p>
        </div>
    </div>
</section>




<!-- Portfolio Section -->
<section id="portfolio">
    <h2 class="section-title">Portfolio</h2>
    <div class="portfolio-grid">
	    <div class="portfolio-item">
            <i class="portfolio-icon fas fa-users-cog"></i>
            <h3>IT Consulting & Strategy</h3>
            <p>Provided expert consulting to businesses on IT infrastructure, digital transformation, and technology strategy to achieve operational excellence.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-cogs"></i>
            <h3>Custom Software Development</h3>
            <p>Developed scalable, high-performance software tailored to client needs, optimizing workflows and streamlining business operations.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-cloud"></i>
            <h3>Cloud Infrastructure & Migration</h3>
            <p>Helped organizations transition to the cloud with secure, cost-effective solutions that enhance data accessibility and scalability.</p>
        </div>
		<div class="portfolio-item">
            <i class="portfolio-icon fas fa-robot"></i>
            <h3>AI & Automation Solutions</h3>
            <p>Integrated AI-driven automation tools to optimize business operations, enhance productivity, and reduce operational costs.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-shield-alt"></i>
            <h3>Cybersecurity Solutions</h3>
            <p>Provided robust security frameworks to safeguard sensitive business data, preventing breaches and ensuring compliance with regulations.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-laptop-code"></i>
            <h3>Web & App Development</h3>
            <p>Built user-centric websites and mobile applications that deliver seamless user experiences, boosting customer engagement and business growth.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-chart-line"></i>
            <h3>Data Analytics & Business Intelligence</h3>
            <p>Designed data solutions that analyze business trends, providing actionable insights to optimize decision-making and drive profitability.</p>
        </div>
	    <div class="portfolio-item">
            <i class="portfolio-icon fas fa-business-time"></i>
            <h3>Business Process Automation (BPA)</h3>
            <p>Designed systems to automate repetitive business tasks, freeing up resources and improving operational efficiency.</p>
        </div>
		<div class="portfolio-item">
            <i class="portfolio-icon fas fa-clipboard-check"></i>
            <h3>Project Management Solutions</h3>
            <p>Developed IT solutions for effective project management, including time tracking, collaboration, and task management tools tailored to client needs.</p>
        </div>
    </div>
</section>





    
   <!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title">By the Numbers</h2>
    <div class="numbers-background">
        <div class="numbers-grid">
            <div class="number-card">
                <h3 class="count" data-target="1000">0</h3><span>+</span>
                <p>Consultations</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="500">0</h3><span>+</span>
                <p>Businesses Served</p>
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
            <i class="fas fa-laptop-code"></i>
            <h3>Python</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-java"></i>
            <h3>Java</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-node"></i>
            <h3>Node.js</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-react"></i>
            <h3>React</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-aws"></i>
            <h3>AWS</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-microsoft"></i>
            <h3>Azure</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-google"></i>
            <h3>Google Cloud</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-shield-alt"></i>
            <h3>Fortinet</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-network-wired"></i>
            <h3>Cisco</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-database"></i>
            <h3>SQL</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-js-square"></i>
            <h3>JavaScript</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-apple"></i>
            <h3>Swift</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-android"></i>
            <h3>Kotlin</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-brain"></i>
            <h3>TensorFlow</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-fire"></i>
            <h3>PyTorch</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-database"></i>
            <h3>MongoDB</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-table"></i> <!-- Replaced with an alternative icon for Tableau -->
            <h3>Tableau</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-wrench"></i> <!-- Wrench icon for DevOps -->
            <h3>Hadoop</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-cogs"></i>
            <h3>DevOps</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-angular"></i>
            <h3>Angular</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-shield-virus"></i>
            <h3>SIEM</h3>
        </div>
        <!-- Adding three more technologies -->
        <div class="tech-card">
            <i class="fab fa-git"></i>
            <h3>Git</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-docker"></i>
            <h3>Docker</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-cubes"></i> <!-- Cubes icon for Kubernetes -->
            <h3>Kubernetes</h3>
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
            <p>"Lewie Mavis’s strategic IT solutions completely transformed our digital marketing strategy. His ability to integrate advanced technologies with our existing systems led to improved client engagement and streamlined processes. We couldn’t have asked for a better consultant!"</p>
            <h3>- Anita H., Digital Marketing Expert</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Lewie’s approach to business IT solutions helped us automate key operations in our e-commerce platform. His insights into cloud computing and data security have been invaluable for our growth and success in the market."</p>
            <h3>- Jeff S., E-commerce Business Owner</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Working with Lewie Mavis has elevated our IT infrastructure to the next level. His expertise in software development and system integrations has allowed us to streamline our internal processes, reducing downtime and improving overall productivity."</p>
            <h3>- Sarah W., Operations Manager</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Lewie’s deep understanding of AI and data analytics has been a game-changer for our business. The systems he implemented have given us real-time insights into our operations, allowing us to make more data-driven decisions."</p>
            <h3>- Marcus L., Business Analyst</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"We’ve had the pleasure of working with Lewie on multiple IT projects, including website development and cloud migrations. His dedication, technical knowledge, and innovative solutions have made a lasting impact on our organization."</p>
            <h3>- Emily R., Project Manager</h3>
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
            <p><strong>Address:</strong> Upper Hill, Nairobi, Kenya</p>
            <p><strong>Opening Hours:</strong> Mon - Fri: 24 / 7</p>
            <p><strong>Phone:</strong> +254 711 190 029</p>
            <p><strong>Email:</strong> lewielom@gmail.com</p>
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
        <p>&copy; 2025 Lewie Mavis. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>
</body>
</html>