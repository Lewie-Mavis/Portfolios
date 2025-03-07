<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Winnie Madikizella </title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo">Winnie Madikizella</a>
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
        <h1>Turning Data into Strategic Decisions</h1>
        <p> Experienced Data Analyst | Skilled Project Manager | Empowering Businesses with Data Insights</p>
        <a href="#contact" class="cta-button">Contact</a>
    </div>
</section>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
  gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
</script>

    <!-- About Section -->
    <section id="about" class="glass-effect">
    <h2 class="section-title">About Me</h2>
    <div class="about-content">
        <div class="about-photo">
            <img src="images/winnie.jpg" alt="Winnie Madikizella">
        </div>
        <div class="about-description">
            <p>Hi, I'm <strong>Winnie Madikizella</strong>, a dedicated data analyst with a passion for transforming raw data into meaningful insights. With a strong foundation in data analysis and project management, I help organizations leverage data to drive strategic decisions and optimize business processes. My experience includes working with diverse datasets, using analytical tools, and collaborating with cross-functional teams to deliver data-driven solutions that empower businesses to thrive.</p>
            
            <a href="#contact" class="btn-consultation">Get Consultation</a>
        </div>
    </div>
</section>




   
    <!-- Services Section --> 
<section id="services">
    <h2 class="section-title">Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-database"></i>
            <h3>Data Cleaning and Preparation</h3>
            <p>Ensuring data is accurate, consistent, and ready for analysis by removing inconsistencies and outliers.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-chart-bar"></i>
            <h3>Data Visualization & Reporting</h3>
            <p>Transforming complex data into clear, actionable insights through interactive dashboards and visual reports.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-chart-pie"></i>
            <h3>Business Intelligence & Analytics</h3>
            <p>Using data analysis and business intelligence tools to provide strategic insights and support data-driven decision-making.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-calculator"></i>
            <h3>Statistical and Predictive Analysis</h3>
            <p>Applying statistical techniques and machine learning algorithms to predict trends and behaviors, helping you plan for the future.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-database"></i>
            <h3>SQL and Database Management</h3>
            <p>Optimizing and managing databases using SQL to ensure data is stored securely and efficiently for easy retrieval and analysis.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-cogs"></i>
            <h3>Process Automation & Workflow Optimization</h3>
            <p>Streamlining processes and automating repetitive tasks to increase efficiency and reduce human error.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-comments"></i>
            <h3>Data Consulting and Strategy</h3>
            <p>Providing expert guidance on how to leverage data for business growth, including strategy development and implementation.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-project-diagram"></i>
            <h3>Project Management for Data-Driven Initiatives</h3>
            <p>Managing data-related projects from inception to completion, ensuring timely delivery of valuable insights and outcomes.</p>
        </div>
		<div class="service-card">
            <i class="fas fa-cloud-upload-alt"></i>
            <h3>Cloud Data Solutions</h3>
            <p>Implementing scalable cloud-based data storage and analytics solutions for easy access and real-time insights.</p>
        </div>
    </div>
</section>


    <!-- Portfolio Section -->
<!-- Portfolio Section -->
<section id="portfolio">
    <h2 class="section-title">Portfolio</h2>
    <div class="portfolio-grid">
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-database"></i>
            <h3>Project 1: Sales Data Analysis</h3>
            <p>Data Analysis</p>
            <p>Analyzed sales data to uncover trends, forecast future sales, and identify key business opportunities.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-chart-bar"></i>
            <h3>Project 2: Customer Segmentation</h3>
            <p>Data Visualization</p>
            <p>Developed a segmentation model to categorize customers based on purchasing behavior and preferences.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-chart-pie"></i>
            <h3>Project 3: Marketing Campaign Analysis</h3>
            <p>Analytics Reporting</p>
            <p>Provided in-depth analysis of marketing campaign effectiveness and customer engagement metrics.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-cogs"></i>
            <h3>Project 4: Process Optimization with Data</h3>
            <p>Process Improvement</p>
            <p>Identified inefficiencies in business processes using data analysis and recommended actionable improvements.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-calendar-check"></i>
            <h3>Project 5: Predictive Analytics for Inventory Management</h3>
            <p>Predictive Analysis</p>
            <p>Created predictive models to optimize inventory levels, reducing costs and improving supply chain efficiency.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-balance-scale"></i>
            <h3>Project 6: Financial Data Analysis and Forecasting</h3>
            <p>Financial Analysis</p>
            <p>Analyzed financial performance data, developed forecasting models, and provided actionable recommendations to improve profitability.</p>
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
            <i class="fab fa-python"></i>
            <h3>Python</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-database"></i>
            <h3>SQL</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-table"></i>
            <h3>Excel</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-chart-bar"></i>
            <h3>Tableau</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-chart-line"></i>
            <h3>Power BI</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-google"></i>
            <h3>Google Analytics</h3>
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
            <i class="fas fa-cloud"></i>
            <h3>AWS (S3, Redshift)</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-server"></i>
            <h3>Azure</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-cogs"></i>
            <h3>ETL Tools</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-chart-pie"></i>
            <h3>Data Visualization</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-code-branch"></i>
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
            <h3>Windows</h3>
        </div>
    </div>
</section>





<script>

</script>



    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">Testimonials</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Winnie is a highly skilled data analyst. Her ability to transform complex data into actionable insights is impressive."</p>
            <h3>- Alex Carter, Senior Data Scientist</h3>
        </div>
        <div class="testimonial-card">
            <p>"Working with Winnie was a game-changer for our team. Her expertise in data analysis helped us make better business decisions."</p>
            <h3>- Olivia Green, Business Intelligence Lead</h3>
        </div>
        <div class="testimonial-card">
            <p>"Winnie's ability to understand our needs and deliver precise, impactful data insights has been invaluable to our company."</p>
            <h3>- Ethan Clarke, Chief Operations Officer</h3>
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
            <p><strong>Opening Hours:</strong> Mon - Fri: 24 / 7</p>
            <p><strong>Phone:</strong> +254 790 690 849</p>
            <p><strong>Email:</strong> madikizellawinnie@gmail.com</p>
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
        <p>&copy; 2025 Winnie Madikizella. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>
</body>
</html>