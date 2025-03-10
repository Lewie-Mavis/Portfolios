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
      <h1>Streamlining Operations with DevOps Excellence</h1>
      <p>Optimizing Infrastructure | CI/CD Automation | Cloud Solutions | Site Reliability Engineering</p>
      <div class="button-container">
         <a href="#contact" class="cta-button">Get in Touch</a>
         <a href="#services" class="services-button">Explore My Services</a>
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
    <p>Hi, I'm <strong>Lewie Mavis</strong>, a <strong>DevOps Engineer</strong> specializing in <strong>cloud automation, CI/CD pipelines, infrastructure as code (IaC), and site reliability engineering</strong>. With a strong foundation in computer science, I am passionate about optimizing software development lifecycles and ensuring seamless deployment workflows.</p>

    <p>Through my expertise in <strong>containerization, cloud computing, and DevOps best practices</strong>, I help businesses enhance efficiency, scalability, and security. Whether it's automating deployments, managing cloud infrastructure, or improving system reliability, my goal is to bridge the gap between development and operations for high-performing tech solutions.</p>

    <a href="#contact" class="btn-consultation">Book a Consultation</a>
</div>





    </div>
</section>



   
    <!-- Services Section --> 
<section id="services">
    <h2 class="section-title">Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-sync-alt"></i>
            <h3>CI/CD Pipeline Automation</h3>
            <p>Streamlining software development workflows with automated Continuous Integration and Continuous Deployment (CI/CD) pipelines for faster and more reliable releases.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-cloud"></i>
            <h3>Cloud Infrastructure Management</h3>
            <p>Designing, deploying, and managing scalable cloud environments on AWS, Azure, and Google Cloud using Infrastructure as Code (IaC) practices.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-cubes"></i>
            <h3>Containerization & Orchestration</h3>
            <p>Implementing Docker and Kubernetes to containerize applications, ensuring scalability, portability, and efficient resource utilization.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-shield-alt"></i>
            <h3>DevSecOps & Security Compliance</h3>
            <p>Integrating security best practices into DevOps workflows to ensure compliance, vulnerability management, and application security from development to production.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-network-wired"></i>
            <h3>Infrastructure as Code (IaC)</h3>
            <p>Automating infrastructure provisioning and management using Terraform, Ansible, and CloudFormation for consistency and efficiency.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-tools"></i>
            <h3>Site Reliability Engineering (SRE)</h3>
            <p>Enhancing system reliability, monitoring, and incident response strategies to maintain high availability and optimal performance.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-chart-line"></i>
            <h3>Monitoring & Logging</h3>
            <p>Implementing real-time monitoring, observability, and logging solutions with Prometheus, Grafana, ELK stack, and CloudWatch.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-user-cog"></i>
            <h3>DevOps Consultation & Strategy</h3>
            <p>Advising businesses on DevOps best practices, automation strategies, and digital transformation to optimize development and operations.</p>
        </div>
		<div class="service-card">
            <i class="fas fa-dollar-sign"></i>
            <h3>Cloud Cost Optimization</h3>
            <p>Optimizing cloud infrastructure and resources to reduce unnecessary costs while maximizing performance and scalability.</p>
        </div>
    </div>
</section>





<!-- Portfolio Section -->
<section id="portfolio">
    <h2 class="section-title">Portfolio</h2>
    <div class="portfolio-grid">
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-sync-alt"></i>
            <h3>CI/CD Pipeline Automation</h3>
            <p>Designed and implemented automated Continuous Integration/Continuous Deployment (CI/CD) pipelines, enabling faster and more reliable software releases.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-cloud"></i>
            <h3>Cloud Infrastructure Deployment</h3>
            <p>Provisioned and managed cloud environments on AWS, Azure, and Google Cloud using Infrastructure as Code (IaC) tools like Terraform and CloudFormation.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-cubes"></i>
            <h3>Containerization & Kubernetes</h3>
            <p>Deployed and orchestrated containerized applications using Docker and Kubernetes, ensuring scalability, resilience, and efficient resource utilization.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-shield-alt"></i>
            <h3>DevSecOps Implementation</h3>
            <p>Integrated security into DevOps workflows by implementing vulnerability scanning, automated compliance checks, and secure coding practices.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-tools"></i>
            <h3>Site Reliability Engineering (SRE)</h3>
            <p>Enhanced system reliability by implementing monitoring, observability, and incident response strategies, improving uptime and performance.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-chart-line"></i>
            <h3>Monitoring & Logging Solutions</h3>
            <p>Set up comprehensive monitoring and logging solutions using Prometheus, Grafana, ELK Stack, and CloudWatch for real-time observability.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-code-branch"></i>
            <h3>Infrastructure as Code (IaC)</h3>
            <p>Automated infrastructure provisioning using Terraform, Ansible, and Helm, ensuring consistency, efficiency, and repeatability across environments.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-dollar-sign"></i>
            <h3>Cloud Cost Optimization</h3>
            <p>Optimized cloud resource utilization and implemented cost-saving strategies to reduce expenses while maintaining performance and scalability.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-user-cog"></i>
            <h3>DevOps Consultation & Strategy</h3>
            <p>Provided expert guidance to businesses on DevOps best practices, automation strategies, and cloud transformation for enhanced efficiency.</p>
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
    <h2 class="section-title">DevOps Technology Stack</h2>
    <div class="tech-grid">
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
            <i class="fab fa-docker"></i>
            <h3>Docker</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-cubes"></i>
            <h3>Kubernetes</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-git-alt"></i>
            <h3>Git</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-github"></i>
            <h3>GitHub Actions</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-gitlab"></i>
            <h3>GitLab CI/CD</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-tools"></i>
            <h3>Jenkins</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-code-branch"></i>
            <h3>Terraform</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-terminal"></i>
            <h3>Ansible</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-network-wired"></i>
            <h3>Networking & VPN</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-shield-alt"></i>
            <h3>DevSecOps</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-chart-line"></i>
            <h3>Prometheus & Grafana</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-database"></i>
            <h3>PostgreSQL & MySQL</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-cloud"></i>
            <h3>CloudFormation</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-clipboard-check"></i>
            <h3>ELK Stack (Elasticsearch, Logstash, Kibana)</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-brain"></i>
            <h3>Site Reliability Engineering (SRE)</h3>
        </div>
		        <div class="tech-card">
            <i class="fas fa-sync-alt"></i>
            <h3>ArgoCD</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-server"></i>
            <h3>Nginx</h3>
        </div>
    </div>
</section>


    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What Clients Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Lewie Mavis has been instrumental in optimizing our IT infrastructure. His expertise in DevOps and cloud computing helped us scale our operations efficiently, reducing costs and improving system reliability."</p>
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
            <p>"Lewie’s deep knowledge of automation and security has transformed the way we manage our cloud environments. Thanks to his strategies, our deployment processes are now faster and more secure than ever."</p>
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
            <p>"Working with Lewie Mavis was a game-changer for our healthcare IT systems. His expertise in cloud infrastructure and cybersecurity ensured a seamless transition to a more secure and scalable platform."</p>
            <h3>- Sarah W., Hospital IT Manager</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Lewie’s strategic insights into DevOps and automation saved us countless hours in manual configurations. His approach to continuous integration and deployment has boosted our development speed significantly."</p>
            <h3>- Marcus L., Software Engineer</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Lewie Mavis is an exceptional IT consultant. His ability to implement cutting-edge DevOps solutions has streamlined our business operations, allowing us to focus on growth while ensuring system stability."</p>
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