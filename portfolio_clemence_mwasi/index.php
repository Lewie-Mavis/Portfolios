<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clemence Mwasi </title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">


</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo" onclick="scrollToTop()">Clemence Mwasi</a>
    <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#statistics">Statistics</a>
        <a href="#tech-stack">Certifications</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="menu-toggle" onclick="toggleMenu()">
        <i class="fas fa-bars"></i> <!-- Hamburger Icon -->
    </div>
</header>
<script>
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>


	

    <!-- Hero Section -->
<section class="hero">
    <div class="hero-content">
        <h1>Crafting Connections, Fueling Growth, Building Brands and Bridging Connections</h1>
        <p>Advancing Community projects with Business Expertise | Passionate Project Development Specialist | Strategic Market Innovator.</p>
        <div class="button-container">
            <a href="#contact" class="cta-button">Get In Touch</a>
            <a href="#services" class="services-button">Discover My Services</a>
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
            <img src="images/about.jpg" alt="Clemence Mwasi">
        </div>
<div class="about-description">
    <p>
        I'm <strong>Clemence Mwasi</strong>, a results-driven <strong>Account-Based Marketing and Business Development</strong> professional with a passion for building personalized campaigns that move the needle.
    </p>
    
    <p>
        With over 5 years of hands-on experience across media, technology, hospitality, and retail sectors, I help organizations craft and execute tailored marketing strategies that boost brand visibility and drive client success.
    </p>
    
    <p>
        My background in ABM allows me to deliver high-touch campaigns, especially for tech-driven or service-oriented businesses. I’ve collaborated closely with engineers, consultants, and marketing teams to ensure technical work translates into meaningful outcomes for clients.
    </p>
    
    <a href="#contact" class="btn-consultation">Get Consultation</a>
</div>


    </div>
</section>

   
    <!-- Services Section --> 
<section id="services">
    <h2 class="section-title">Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-bullseye"></i>
            <h3>Account-Based Marketing (ABM) Strategy</h3>
            <p>Personalized, high-touch campaigns that target key accounts and drive meaningful engagement.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-file-alt"></i>
            <h3>B2B Content Creation</h3>
            <p>Strategic sales decks, email sequences, and compelling case studies tailored for B2B audiences.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-lightbulb"></i>
            <h3>Marketing & Brand Consulting</h3>
            <p>Consultation to shape your brand voice and align marketing efforts with business goals.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-handshake"></i>
            <h3>Client Service & Retention Strategy</h3>
            <p>Programs to boost satisfaction, improve onboarding, and increase long-term client retention.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-bullhorn"></i>
            <h3>Social Media and Event Promotion</h3>
            <p>Amplify your presence across platforms and promote events with impactful campaigns.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-chart-pie"></i>
            <h3>Campaign Analytics & Reporting</h3>
            <p>Performance tracking with actionable insights to continuously refine your campaigns.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-chalkboard-teacher"></i>
            <h3>Presentation & Pitch Development</h3>
            <p>Design and polish of powerful presentations and investor or client-facing pitches.</p>
        </div>
    </div>
</section>



    <!-- Portfolio Section -->
<!-- Portfolio Section -->
<section id="portfolio">
    <h2 class="section-title">Portfolio</h2>
    <div class="portfolio-grid">
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-bullseye"></i>
            <h3>Targeted ABM Campaigns – Olive Tree Media Ltd</h3>
            <p>- Increased client retention by 25% through personalized B2B campaigns</p>
            <p>- Boosted lead conversion by 30% by transforming technical content into client-focused messaging</p>
            <p>- Developed brochures, decks, and email flows used by consultants to close deals faster</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-bolt"></i>
            <h3>Digital Activation & Brand Growth – Maybelline New York</h3>
            <p>- Led product activations that boosted brand visibility by 15%</p>
            <p>- Engaged 30+ customers daily to build product trust and influence messaging</p>
            <p>- Coordinated events and influencer campaigns to maximize audience reach</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-sync-alt"></i>
            <h3>Marketing Process Optimization – Beehive Media Ltd</h3>
            <p>- Achieved a 40% increase in client satisfaction within 3 months through tailored campaigns</p>
            <p>- Reduced campaign delivery time by 15% by streamlining communication and content development</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-truck"></i>
            <h3>Logistics & Sales Support – Paddy Micro Investment Ltd</h3>
            <p>- Grew regional market presence by 20% through strategic route planning and distribution expansion</p>
            <p>- Maintained reliable distributor relationships and improved delivery coordination</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-warehouse"></i>
            <h3>Supply Chain Coordination – Sarova Hotels</h3>
            <p>- Reduced supply delays by 20% through proactive tracking and vendor coordination</p>
            <p>- Ensured smooth product flow to rural and urban locations during peak demand periods</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-hand-holding-heart"></i>
            <h3>Community Wellness Initiative – Mediearth Lifecare</h3>
            <p>- Hosted a free medical camp offering GP consultations, dental & eye checkups, BMI & blood pressure screenings, and more</p>
            <p>- Collaborated with Olive Tree Media to encourage staff wellness participation</p>
            <p>- Strengthened community engagement and health awareness through impactful outreach</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-microphone-alt"></i>
            <h3>Inspirational Public Speaking – Ruthimitu Girls High School</h3>
            <p>- Delivered a motivational talk focused on self-expression and perseverance</p>
            <p>- Connected with students by sharing a personal journey from shyness to impactful speaking</p>
            <p>- Fostered confidence and purpose-driven action in young minds</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-piggy-bank"></i>
            <h3>Retirement Awareness Campaign – Britam Kenya</h3>
            <p>- Advocated for Umbrella Pension Scheme as a sustainable solution for SMEs</p>
            <p>- Promoted the importance of pensions for financial freedom and healthcare support post-retirement</p>
            <p>- Collaborated with financial analyst Susan Kanana to increase financial literacy</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-chart-line"></i>
            <h3>Impact-Driven Marketing Campaign – Moyo Casino</h3>
            <p>- Ran a value-based marketing strategy that improved conversions and brand loyalty</p>
            <p>- Focused on user experience and community connection over direct sales tactics</p>
            <p>- Proved that financial growth follows genuine service and impactful engagement</p>
        </div>
    </div>
</section>



<!-- Statistics Section -->
<section id="statistics">
  <h2 class="section-title">Campaign Statistics</h2>
  <div class="stats-grid">
    <!-- Pie Chart -->
    <div class="stat-chart">
      <canvas id="campaignSuccessPie"></canvas>
      <p>Campaign Outcome Distribution</p>
    </div>

    <!-- Bar Chart -->
    <div class="stat-chart">
      <canvas id="brandImpactBar"></canvas>
      <p>Client Impact by Brand</p>
    </div>
  </div>
</section>

<!-- Chart.js Library -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Statistics Chart Script -->
<script src="scripts/statistics.js"></script>



    
   <!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title">Proven by the Numbers</h2>
    <div class="numbers-background">
        <div class="numbers-grid">
            <div class="number-card">
                <h3 class="count" data-target="30">0</h3><span>+</span>
                <p>Successful Campaigns</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="25">0</h3><span>%</span>
                <p>Client Retention Boost</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="40">0</h3><span>%</span>
                <p>Increase in Satisfaction</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="15">0</h3><span>%</span>
                <p>Improved Delivery Speed</p>
            </div>
        </div>
    </div>
</section>



<section id="tech-stack">
    <h2 class="section-title">Certifications (Badges)</h2>
    <div class="tech-grid">
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>BNI Business Builder</h3>
            <p>Certificate of Completion MSP Networking at Meetings (2025)</p>
            <a href="path/to/technical-support-certificate.pdf" target= "blank" class="download-link" download>Download Certificate</a>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>BNI Business Builder (2025)</h3>
            <p>Certificate of Completion MSP Leadership Roles Overview</p>
            <a href="path/to/technical-support-certificate.pdf" target= "blank" class="download-link" download>Download Certificate</a>
        </div>
        <div class="tech-card">
            <i class="fas fa-certificate"></i>
            <h3>Faith Driven Entrepreneur Foundation Course (2025)</h3>
            <p>Certificat of Completion From Faith Driven Entrepreneur</p>
            <a href="path/to/yeastar-certificate.pdf" target= "blank" class="download-link" download>Download Certificate</a>
        </div>
       
    </div>
</section>





    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What Clients Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Clemence Mwasi's expertise in Account-Based Marketing has transformed our approach to client engagement. Their strategic campaigns helped us target the right customers, significantly boosting our conversion rates."</p>
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
            <p>"Working with Clemence Mwasi has been a game-changer for our business development strategies. Their knowledge of creating tailored marketing campaigns has significantly increased our brand visibility and client engagement."</p>
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
            <p>"Clemence Mwasi's personalized marketing strategies for our retail business have driven outstanding results. Their focus on ABM allowed us to engage deeply with high-value customers, leading to long-term partnerships."</p>
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
            <p>"Clemence Mwasi’s ability to align business development strategies with marketing efforts has been invaluable. Their expertise in ABM has helped us increase our revenue by focusing on the most profitable customer segments."</p>
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
            <p>"Clemence Mwasi's strategic approach to business development and marketing has helped us build lasting client relationships. Their ABM expertise has enabled us to target and nurture high-value clients effectively."</p>
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
            <p><strong>Address:</strong> Nairobi, Kenya</p>
            <p><strong>Opening Hours:</strong> Mon - Sun: 24 / 7</p>
            <p><strong>Phone:</strong> +254 718 843 413</p>
            <p><strong>Email:</strong> mwasiclemence@email.com  </p>
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#statistics">Statistics</a></li>
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
    <a href="https://www.linkedin.com/in/clemence-dricillah-ab1918176/" class="social-icon" target="_blank">
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
        <p>&copy; 2025 Clemence Mwasi. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>

	
</body>
</html>