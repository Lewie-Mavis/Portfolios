<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ayanda Dimpho Booi</title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo">Ayanda Dimpho Booi</a>
    <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#services">Expertise</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#numbers">Numbers</a>
        <a href="#tech-stack">Certifications</a>
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
            <h1>Creating Secure, Reliable and Scalable Solutions</h1>
            <p>IT Support  Engineer | Cybersecurity  Analyst | Network Engineer </p>
            <div class="button-container">
    <a href="#contact" class="cta-button">Get in Touch</a>
    <a href="#services" class="services-button">Discover My Expertise</a>
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
            <img src="images/about.png" alt="AI Drive">
        </div>
        <div class="about-description">
            <p>Hi, I'm <strong>Ayanda Dimpho Booi</strong>, a dynamic professional equipped with a wealth of experience and expertise cultivated throughout an extensive learning journey. Specialized in network security, ICSCADA fundamentals, ITIL v4, and IAM practices. Actively seeking opportunities to contribute skills and gain practical experience in various industries. Proficient in tools such as Nmap and Wireshark, with a strong emphasis on effective communication, both written and verbal. Demonstrates a goal-oriented, solution-focused approach, coupled with resilience and a collaborative team spirit.</p>
            
            <a href="#contact" class="btn-consultation">Get Consultation</a>
        </div>
    </div>
</section>



   
    <!-- Services Section --> 
<section id="services">
    <h2 class="section-title">Expertise (Skills)</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-network-wired"></i>
            <h3>ICS Networking Devices and Architectures</h3>
            <p>Designing and implementing industrial control system (ICS) networks with secure architectures tailored for operational environments.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-clock"></i>
            <h3>Time Management</h3>
            <p>Optimizing workflows and prioritizing tasks to maximize efficiency and meet deadlines.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-shield-alt"></i>
            <h3>Security Practices Implementation</h3>
            <p>Implementing industry-standard security practices to safeguard organizational assets from evolving threats.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-chart-line"></i>
            <h3>Risk Analysis in IT and Corporate Networks</h3>
            <p>Performing comprehensive risk assessments to identify and mitigate vulnerabilities in IT infrastructure and corporate networks.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-lock"></i>
            <h3>Intrusion and Malware Analysis</h3>
            <p>Conducting thorough analysis of security breaches and malware incidents to improve network defense mechanisms.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-network-wired"></i>
            <h3>Network Security Design</h3>
            <p>Designing robust network security frameworks to ensure protection against internal and external threats.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-cogs"></i>
            <h3>NIST Cybersecurity Framework</h3>
            <p>Implementing the NIST Cybersecurity Framework to improve resilience and ensure compliance with cybersecurity standards.</p>
        </div>
        <div class="service-card">
            <i class="fab fa-linux"></i>
            <h3>Kali Linux</h3>
            <p>Leveraging Kali Linux for penetration testing and vulnerability assessments to ensure system security.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-code"></i>
            <h3>Web Development (HTML, CSS, JavaScript, PHP)</h3>
            <p>Developing dynamic websites and web applications with modern technologies such as HTML, CSS, JavaScript, and PHP.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-users-cog"></i>
            <h3>Active Directory Domain</h3>
            <p>Managing and securing Active Directory domains to ensure seamless access and authentication across organizational networks.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-terminal"></i>
            <h3>Linux Administration</h3>
            <p>Managing Linux servers and ensuring optimal performance, security, and maintenance for enterprise environments.</p>
        </div>
    </div>
</section>


   
<!-- Portfolio Section -->
<section id="portfolio">
    <h2 class="section-title">Portfolio</h2>
    <div class="portfolio-grid">
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-shield-alt"></i>
            <h3>Privacy Preservation and Perimeter Protection</h3>
            <p>Network Security</p>
            <p>Explored vulnerabilities and network architecture in the water and wastewater industry, focusing on enhancing privacy and perimeter protection.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-exclamation-triangle"></i>
            <h3>Doomsday in a Mega Automobile Factory</h3>
            <p>Catastrophe Simulation</p>
            <p>Investigated and simulated catastrophic events in a large-scale automobile factory to enhance disaster preparedness and response strategies.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-desktop"></i>
            <h3>Endpoint Security</h3>
            <p>Cybersecurity</p>
            <p>Secured various network endpoints against cyber-attacks, ensuring robust defense against malware, ransomware, and other online threats.</p>
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
    <h2 class="section-title"> Certifications (Badges)</h2>
    <div class="tech-grid">
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>CCNA (2025)</h3>
            <p>Certificate Course – CCNA</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>Technical Support (MICT Seta) (2024)</h3>
            <p>Certificate Course – Technical Support</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>Yeastar Certified Technician (2024)</h3>
            <p>Certificate Course – Yeastar Certified Technician</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>Network Security (2023)</h3>
            <p>Certificate Course – Network Security</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>Industrial Control System (2023)</h3>
            <p>Certificate Course – Industrial Control System</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>ICS / SCADA Security Fundamentals (2023)</h3>
            <p>Certificate Course – ICS / SCADA Security Fundamentals</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>ICS / SCADA Cybersecurity (2023)</h3>
            <p>Certificate Course – ICS / SCADA Cybersecurity</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>ICS / SCADA Security Analyst (2023)</h3>
            <p>Certificate Course – ICS / SCADA Security Analyst</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>Networking Basics (2023)</h3>
            <p>Certificate Course – Networking Basics</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>Networking Devices & Initial Configuration (2023)</h3>
            <p>Certificate Course – Networking Devices and Initial Configuration</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>Cyberthreat Management (2023)</h3>
            <p>Certificate Course – Cyberthreat Management</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>CompTIA Linux (2023)</h3>
            <p>Certificate Course – CompTIA Linux</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>Windows Operating System (2023)</h3>
            <p>Certificate Course – Windows Operating System</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>Identity & Access Management (2023)</h3>
            <p>Certificate Course – Identity and Access Management</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>ITIL 4 Foundation (2023)</h3>
            <p>Certificate Course – ITIL 4 Foundation</p>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>Cisco Jnr Cybersecurity Analyst (2023)</h3>
            <p>Certificate Course – Cisco Jnr Cybersecurity Analyst</p>
        </div>
    </div>
</section>


<!-- Gallery Section -->
<section id="gallery">
    <h2 class="section-title">Tools & Technologies</h2>
    <div class="gallery-grid">
        <div class="gallery-item">
            <i class="fab fa-linux"></i> <!-- Nmap Icon (Linux) -->
            <h3>Nmap</h3>
            <p>Network exploration and security auditing tool.</p>
        </div>
        <div class="gallery-item">
           <i class="fas fa-fish"></i> <!-- Wireshark Icon (Wi-Fi) -->
            <h3>Wireshark</h3>
            <p>Network protocol analyzer to capture and inspect network traffic.</p>
        </div>
        <div class="gallery-item">
            <i class="fas fa-bug"></i> <!-- Burp Suite Icon (Bug) -->
            <h3>Burp Suite</h3>
            <p>Security testing toolkit for web applications.</p>
        </div>
        <div class="gallery-item">
            <i class="fas fa-database"></i> <!-- Splunk Icon (Database) -->
            <h3>Splunk</h3>
            <p>Data analytics tool for monitoring, searching, and analyzing machine data.</p>
        </div>
        <div class="gallery-item">
            <i class="fas fa-plug"></i> <!-- Metasploit Icon (Plug) -->
            <h3>Metasploit</h3>
            <p>Penetration testing framework for identifying vulnerabilities in networks.</p>
        </div>
    </div>
</section>






    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What Clients Are Saying</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Ayanda's deep expertise in network security and industrial control systems has been invaluable to our business. The implementation of strong security protocols has made a noticeable impact on our operations."</p>
            <h3>- Sarah L., Founder of SecureTech Solutions</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"We reached out to Ayanda for advice on risk analysis and cybersecurity. Her recommendations helped us strengthen our IT infrastructure and mitigate potential threats. Highly recommended!"</p>
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
            <p>"Ayanda's knowledge of ICS/SCADA cybersecurity is unmatched. Her thorough understanding and hands-on approach have made our systems more secure and reliable. Truly an expert in her field."</p>
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
            <p>"Working with Ayanda on network security and cybersecurity frameworks has been an absolute game-changer. Her insights into the NIST Cybersecurity Framework have brought our security practices to the next level."</p>
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
            <p>"Ayanda's expertise in Linux administration and her work with Active Directory Domain have been crucial in our IT infrastructure overhaul. Her advice is always spot-on, and her technical skills are exceptional."</p>
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
            <p><strong>Address:</strong> South Africa</p>
            <p><strong>Opening Hours:</strong> Mon - Sun: 24 / 7</p>
            <p><strong>Phone:</strong>(+27) 67 008 6351 </p>
            <p><strong>Email:</strong> booi.avd@gmail.com </p>
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Expertise</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#numbers">Numbers</a></li>
				<li><a href="#tech-stack">Certifications</a></li>
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
    <a href="https://www.linkedin.com/in/ayanda-booi/" class="social-icon" target="_blank">
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
        <p>&copy; 2025 Ayanda Dimpho Booi. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>
</body>
</html>