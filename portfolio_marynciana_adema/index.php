<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marynciana Adema </title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">


</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo">LUGASIE CONCEPTS</a>
    <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#blog">Blog</a>
        <a href="#featured-stories">Features</a>
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
        <h1>Welcome To My Creative Space</h1>
        <p>Telling Stories That Inspire Change | Creating Visuals That Captivate</p>
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
            <img src="images/about.jpg" alt="Lugasie Concepts">
        </div>
<div class="about-description">
    <p>Hi, I'm <strong>Marynciana Adema</strong> a <strong>Storyteller with a Purpose</strong>. I'm a journalist, gender equality advocate, creative digital storyteller, and designer passionate about impactful narratives and visual storytelling. Through storytelling, branding, and event organizing, I bring ideas to life and spark conversations that matter.</p>

    <p>With a background in journalism and digital storytelling, I specialize in crafting compelling narratives that shine a light on gender, finance, and social issues. My investigative work, such as highlighting illicit financial flows affecting women in Kenya's informal sector, has earned recognition and grants.</p>

    <p>Beyond storytelling, I'm a mid-level graphic designer who creates visually striking content from branding projects to fashion campaigns. I also organize impactful events like the <strong>Top 20 Most Influential Women in Kenya</strong> and <strong>Made in Kenya brand awareness initiatives </strong>, all aimed at celebrating and supporting local talent.</p>

    <p>Let’s collaborate and create something meaningful together!</p>
    
    <a href="#contact" class="btn-consultation">Lets Connect</a>
</div>

    </div>
</section>

   
    <!-- Services Section --> 
<section id="services">
    <h2 class="section-title">Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-newspaper"></i>
            <h3>Journalism & Digital Storytelling</h3>
            <p>Investigative reporting, gender-based journalism, and compelling multimedia storytelling that informs and inspires change.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-pen-nib"></i>
            <h3>Creative Content & Influencer Marketing</h3>
            <p>Developing social media campaigns, collaborating with brands, and creating authentic content that drives engagement and visibility.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-paint-brush"></i>
            <h3>Graphic Design & Branding</h3>
            <p>Visual storytelling through brand identity design, packaging, and promotional materials that connect emotionally with audiences.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-calendar-check"></i>
            <h3>Event Organizing & Brand Awareness</h3>
            <p>Planning and executing impactful events like the Top 20 Most Influential Women in Kenya and Made in Kenya initiatives.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-video"></i>
            <h3>Multimedia Content Production</h3>
            <p>Producing videos, photo stories, and digital content that deliver meaningful narratives across various platforms.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-female"></i>
            <h3>Modeling & Campaign Shoots</h3>
            <p>Fashion and commercial modeling services for brand campaigns, creative shoots, and media collaborations.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-comments"></i>
            <h3>Gender Advocacy & Strategic Communication</h3>
            <p>Creating awareness campaigns and strategic messaging that highlight gender issues and empower underrepresented voices.</p>
        </div>
		<div class="service-card">
            <i class="fas fa-broadcast-tower"></i>
            <h3>Public Relations & Media Strategy</h3>
            <p>Crafting media strategies and building brand reputation through effective PR tactics and communication campaigns.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-hand-holding-heart"></i>
            <h3>Social Impact Campaigns</h3>
            <p>Designing and executing campaigns that address social issues, promote community engagement, and drive positive change.</p>
        </div>
    </div>
</section>


<!-- Portfolio Section -->
<section id="portfolio">
    <h2 class="section-title">Portfolio</h2>
    <div class="portfolio-grid">

        <!-- Journalism & Storytelling -->
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-microphone-alt"></i>
            <h3>Investigative Journalism</h3>
            <p>Illicit Financial Flows & Gender</p>
            <p>Stories on women in Kenya’s informal sector and gold mining, exposing exploitation and financial injustice.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-chart-bar"></i>
            <h3>Data-Driven Storytelling</h3>
            <p>Gender & Financial Exclusion</p>
            <p>Interactive stories using data visualizations to highlight systemic gender and financial gaps in Kenya.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-play-circle"></i>
            <h3>Digital Storytelling</h3>
            <p>Social Impact Stories</p>
            <p>Short multimedia pieces capturing community issues, cultural moments, and advocacy themes.</p>
        </div>

        <!-- Graphic Design & Branding -->
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-paint-brush"></i>
            <h3>Fashion Teaser Design</h3>
            <p>Metropolitan Muse</p>
            <p>Visually stunning teaser graphics for a modern fashion collection exploring urban African aesthetics.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-leaf"></i>
            <h3>Eco Packaging Design</h3>
            <p>Kana’s Choice</p>
            <p>Eco-friendly and sustainable packaging design for a green lifestyle brand in Kenya.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-bullhorn"></i>
            <h3>Event Branding</h3>
            <p>Posters & Promos</p>
            <p>Brand identity and materials for major events, including launch posters, flyers, and branded stage visuals.</p>
        </div>

        <!-- Content Creation & Modeling -->
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-camera-retro"></i>
            <h3>Modeling Portfolio</h3>
            <p>Fashion & Commercial Shoots</p>
            <p>Curated campaigns and brand shoots featured across digital and print platforms.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fab fa-instagram"></i>
            <h3>Content Creation</h3>
            <p>Instagram & TikTok</p>
            <p>Creative storytelling, lifestyle vlogs, and influencer marketing for lifestyle and fashion brands.</p>
        </div>

        <!-- Events & Campaigns -->
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-award"></i>
            <h3>Top 20 Most Influential Women in Kenya</h3>
            <p>National Recognition Event</p>
            <p>Organized a prestigious event honoring impactful Kenyan women across industries.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-flag"></i>
            <h3>Made in Kenya Campaign</h3>
            <p>Local Brand Awareness</p>
            <p>Promoting Kenyan-made products and businesses through events and storytelling.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-music"></i>
            <h3>Jazz & Fashion Experience</h3>
            <p>Art & Culture Event</p>
            <p>Curated a cultural event blending live jazz music with runway fashion to celebrate African creativity.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-tshirt"></i>
            <h3>The Kenyan Fashion Story</h3>
            <p>Documentary & Runway Series</p>
            <p>A visual journey through Kenya’s evolving fashion identity and designer narratives.</p>
        </div>

    </div>
</section>


    
   <!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title">By the Numbers</h2>
    <div class="numbers-background">
        <div class="numbers-grid">
            <div class="number-card">
                <h3 class="count" data-target="60">0</h3><span>+</span>
                <p>Stories & Reports Published</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="30">0</h3><span>+</span>
                <p>Brands & Events Collaborated With</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="15">0</h3><span>+</span>
                <p>Visual Campaigns & Designs</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="8">0</h3><span>+</span>
                <p>Years of Creative Experience</p>
            </div>
        </div>
    </div>
</section>


<section id="blog">
    <h2 class="section-title">Blog</h2>
    <div class="blog-grid">
        <div class="blog-post">
            <img src="images/blog1.jpg" alt="Blog Post 1" class="blog-image">
            <h3 class="blog-title">Investigating Gender and Financial Exclusion in Kenya</h3>
            <p class="blog-excerpt">In this article, I explore the financial exclusion faced by women in Kenya’s informal sector and how gender-sensitive policies can drive financial inclusion.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="blog-post">
            <img src="images/blog2.jpeg" alt="Blog Post 2" class="blog-image">
            <h3 class="blog-title">The Impact of Women in Gold Mining: A Story of Exploitation</h3>
            <p class="blog-excerpt">Through investigative journalism, I uncover the challenges women face in the gold mining sector and how exploitation continues to hinder their growth.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="blog-post">
            <img src="images/blog3.jpg" alt="Blog Post 3" class="blog-image">
            <h3 class="blog-title">Visualizing Gender-Based Violence Through Digital Storytelling</h3>
            <p class="blog-excerpt">Using multimedia storytelling techniques, I bring attention to the pervasive issue of gender-based violence in Kenya, sharing real-life stories that demand action.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
        <div class="blog-post">
            <img src="images/blog4.jpg" alt="Blog Post 4" class="blog-image">
            <h3 class="blog-title">The Role of Social Media in Shaping Gender Narratives</h3>
            <p class="blog-excerpt">Social media plays a pivotal role in shaping public perceptions of gender roles. In this blog, I discuss how influencers can challenge traditional norms and advocate for equality.</p>
            <a href="#" class="read-more">Read More</a>
        </div>
    </div>
</section>


<section id="featured-stories">
    <h2 class="section-title">Featured Stories</h2>
    <div class="featured-stories-grid">
        <div class="featured-story-card">
            <img src="images/feature1.jpg" alt="Story 1" class="story-image">
            <div class="story-info">
                <h3>Is Feminism Empowerment or Reinforced Stereotypes?</h3>
                <p>This feature examines whether feminism empowers individuals or inadvertently reinforces societal stereotypes by exploring diverse perspectives and expert insights.</p>
            </div>
        </div>
        <div class="featured-story-card">
            <img src="images/feature2.jpg" alt="Story 2" class="story-image">
            <div class="story-info">
                <h3>Africa’s Jobs Crisis Needs Urgent Solutions </h3>
                <p>This feature examines the growing employment challenges facing Africa and highlights the urgent need for innovative solutions to address the continent's job crisis.</p>
            </div>
        </div>
        <div class="featured-story-card">
            <img src="images/feature3.jpg" alt="Story 3" class="story-image">
            <div class="story-info">
                <h3>Is Intersectionality a Missing Link in Kenya’s Feminism?</h3>
                <p>This feature explores the concept of intersectionality within Kenya’s feminist movement, questioning whether it’s a crucial element that’s often overlooked in the fight for gender equality.</p>
            </div>
        </div>
    </div>
    <a href="https://womankenya.com/" class="view-all" target="blank">View All Stories</a>
</section>


<section id="tech-stack">
    <h2 class="section-title">Creative & Digital Tools</h2>
    <div class="tech-grid">
        <div class="tech-card">
            <i class="fas fa-paint-brush"></i>
            <h3>Adobe Photoshop</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-pen-nib"></i>
            <h3>Adobe Illustrator</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-figma"></i>
            <h3>Figma</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-film"></i>
            <h3>Premiere Pro / CapCut</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-microphone-alt"></i>
            <h3>Podcasting Tools</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-chart-bar"></i>
            <h3>Data Visualization</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-camera-retro"></i>
            <h3>Photography & DSLR Tools</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-palette"></i>
            <h3>Canva</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-newspaper"></i>
            <h3>Newsroom & CMS Tools</h3>
        </div>
        <div class="tech-card">
            <i class="fab fa-instagram"></i>
            <h3>Instagram & TikTok Tools</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-envelope-open-text"></i>
            <h3>Email Marketing</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-users-cog"></i>
            <h3>Community Engagement Tools</h3>
        </div>
    </div>
</section>





    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What People Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Marynciana's storytelling skills have elevated our brand's narrative to new heights. Her investigative reporting on women's financial inclusion has been impactful and eye-opening." </p>
            <h3>- Grace A., Founder of Women in Finance</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Marynciana’s work on our fashion branding has been outstanding. Her unique graphic design style and attention to detail helped us launch a memorable and stylish campaign." </p>
            <h3>- Claudia M., CEO of Kana’s Choice</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Her event organizing skills are unmatched. The 'Top 20 Most Influential Women in Kenya' event was a huge success, thanks to her meticulous planning and execution." </p>
            <h3>- Josephine N., Founder of the Influential Women Awards</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Marynciana's influencer marketing strategy for our brand was highly effective. Her ability to create compelling narratives on social media transformed our engagement." </p>
            <h3>- Emma L., Marketing Director at Metropolitan Muse</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Working with Marynciana on the 'Made in Kenya' brand awareness event was a dream. She brought our vision to life with her creativity and passion for local talent." </p>
            <h3>- Michael J., CEO of Made in Kenya Campaign</h3>
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
            <p><strong>Phone:</strong> +254 790 347 336</p>
            <p><strong>Email:</strong> Maryncianaadema@gmail.com</p>
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#blog">Blog</a></li>
				<li><a href="#featured-stories">Features</a></li>
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
    <a href="https://www.linkedin.com/in/marynciana-adema-aa5101164?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="social-icon" target="_blank">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="https://www.instagram.com/cianna_lugasie?igsh=cHplem42dno2OG03" class="social-icon" target="_blank">
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
        <p>&copy; 2025 Marynciana Adema. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>

	
</body>
</html>