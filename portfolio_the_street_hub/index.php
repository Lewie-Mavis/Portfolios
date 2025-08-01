<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Title -->
  <title>The Street Hub - Strategic Leadership & Consulting</title>

  <!-- Meta Description -->
  <meta name="description" content="The Street Hub is a strategic consulting firm empowering Fortune 500s, multinationals, and governments through leadership development and transformational change.">

  <!-- Meta Keywords (optional) -->
  <meta name="keywords" content="The Street Hub, strategic consulting, leadership development, organizational transformation, business consulting, innovation strategy, executive coaching">

  <!-- Author -->
  <meta name="author" content="The Street Hub Consulting Team">

  <!-- Robots -->
  <meta name="robots" content="index, follow">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://www.thestreethub.com/">

  <!-- Open Graph for Social Media -->
  <meta property="og:title" content="The Street Hub - Empowering Leaders & Transforming Organizations">
  <meta property="og:description" content="A premier consulting firm with 30+ years of experience guiding Fortune 500 companies, governments, and global brands toward innovation and leadership excellence.">
  <meta property="og:image" content="https://www.thestreethub.com/images/the_street_hub.jpeg">
  <meta property="og:url" content="https://www.thestreethub.com/">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="The Street Hub - Empowering Leaders & Transforming Organizations">
  <meta name="twitter:description" content="We partner with clients to drive change, develop leadership, and create lasting impact across industries.">
  <meta name="twitter:image" content="https://www.thestreethub.com/images/the_street_hub.jpeg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="images/the_street_hub.jpeg">

  <!-- Stylesheets & Fonts -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>

<body>
  <!-- Header -->
<header>
  <div class="container header-container slide-right">
    <a href="#" class="logo" onclick="scrollToTop()">
      <img src="images/the_street_hub.jpeg" alt="Street Hub Logo" class="logo-img">
      The Street Hub
    </a>

    <button class="hamburger" id="menu-toggle">&#9776;</button>

    <nav>
      <ul class="nav-links" id="nav-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#values">Values</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

<script>
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>



  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content slide-right">
        <h1>Transforming Mindsets. Shaping Cultures. Empowering Leadership.</h1>
        <p>The Street Hub is a multifaceted consulting firm with over three decades of leadership experience across Fortune 500 companies, multinationals, and governments.</p>
        <div class="hero-btns">
          <a href="#services" class="btn btn-secondary slide-right">Our Services</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSejGELhNy_SZBBzao4_wgib9u4G5BIUDHg_UVt9xL9Ujf0pCQ/viewform?usp=header" class="btn btn-accent slide-right" target="blank">Contact Us</a>
        </div>
      </div>
    </div>
    <div class="hero-image">
      <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        <path fill="rgba(255,255,255,0.1)" d="M0,0 C150,100 350,0 600,150 L600,400 L0,400 Z"></path>
      </svg>
    </div>
  </section>
  
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
  gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
</script>

<!-- About Section -->
<section id="about">
  <div class="container">
    <div class="section-header slide-right">
      <h2>About Us</h2>
      <p>We have a proven track record of helping clients anticipate change and stay ahead of the curve.</p>
    </div>
    <div class="about-content">
      <div class="about-text slide-left">
        <p>The Street Hub is a multifaceted consulting firm with over three decades of leadership experience across Fortune 500 companies, multinationals, and governments. We have a proven track record of helping clients anticipate change and stay ahead of the curve.</p>
        <p>We believe no organization can rise beyond the mindset and capacity of its decision-makers. That's why we place strategic emphasis on leadership development—empowering individuals and institutions to think differently, act boldly, and lead transformational change.</p>
        <p>Our approach combines deep industry knowledge with innovative thinking to create sustainable solutions that drive real results. We partner with organizations to build cultures that foster innovation, collaboration, and excellence.</p>
        <a href="#services" class="btn">Learn More</a>
      </div>
      <div class="about-image slide-right">
        <img src="images/the_street_hub.jpeg" alt="Leadership Excellence" class="about-img">
      </div>
    </div>
  </div>
</section>


<!-- Founder Section -->
<section id="founder" class="founder-section">
  <div class="container">
    <div class="section-header slide-right">
      <h2>Meet the Founder</h2>
      <p>Visionary Leadership Driving Transformational Impact</p>
    </div>

    <div class="founder-content">
      <div class="founder-image slide-left">
        <img src="images/4.png" alt="Wale Akinyemi" class="founder-img">
      </div>

      <div class="founder-text slide-right">
        <h3>Dr. Wale Akinyemi</h3>
        <p><strong>Dr. Wale Akinyemi</strong> is the Founder and Chief Executive Officer at The Street Hub. With a passion for unlocking human potential, Wale is a renowned thought leader, author, and strategic advisor to leaders around the world.</p>
        <p>He brings over three decades of experience in organizational development, leadership training, and cultural transformation. Wale's dynamic approach has impacted Fortune 500 companies, multinationals, and governments globally.</p>
        <a href="https://waleakinyemi.africa" target="_blank" class="founder-btn">Visit Dr. Wale Akinyemi Website</a>
      </div>
    </div>
  </div>
</section>

  <!-- Slider Section -->
<section class="street-hub-slider-section">
        <!-- Image Slider Section -->
        <div class="about-photo-slider">
            <div class="slide">
                <img src="images/slider1.jpg" alt="slider 1 ">
            </div>
            <div class="slide">
                <img src="images/slider7.jpg" alt="slider 2 ">
            </div>
			<div class="slide">
                <img src="images/slider3.jpg" alt="slider 3 ">
            </div>
			<div class="slide">
                <img src="images/slider15.jpg" alt="slider 4 ">
            </div>
            <div class="slide">
                <img src="images/slider18.jpg" alt="slider 5 ">
            </div>	
			<div class="slide">
                <img src="images/slider2.jpg" alt="slider 2 ">
            </div>
        </div>
</section>
<script src="scripts/slider.js"></script>

<!-- Services Section -->
<section id="services" class="services">
  <div class="container">
    <div class="section-header slide-right">
      <h2>Our Services</h2>
      <p>We offer specialized consulting services designed to transform organizations and empower leaders.</p>
    </div>
    <div class="services-grid">
      <div class="service-card slide-right">
        <div class="service-icon">
          <i class="fas fa-people-arrows"></i>
        </div>
        <div class="service-content">
          <h3>Transformational Leadership</h3>
          <p>We guide organizations from their current reality to their place of maximum potential—what we call "X." Through deep exploration of critical questions, we shift mindsets, align systems, and produce real transformation.</p>
        </div>
      </div>
      
      <div class="service-card slide-right">
        <div class="service-icon">
          <i class="fas fa-comments"></i>
        </div>
        <div class="service-content">
          <h3>EXCO Conversations</h3>
          <p>High-level leadership comes with unique challenges. We support executive teams through structured conversations that build alignment, strengthen cohesion, and enhance relational harmony.</p>
        </div>
      </div>
      
      <div class="service-card slide-right">
        <div class="service-icon">
          <i class="fas fa-chess-rook"></i>
        </div>
        <div class="service-content">
          <h3>Board Retreats & Orientation</h3>
          <p>We align boards with executive teams to foster synergy, clarify purpose, and drive strategic impact. Our retreats ignite vision, clarity, and mutual understanding at the highest levels.</p>
        </div>
      </div>
      
      <div class="service-card slide-right">
        <div class="service-icon">
          <i class="fas fa-shapes"></i>
        </div>
        <div class="service-content">
          <h3>Organizational Culture Design</h3>
          <p>We help organizations move from values on the wall to values in action. Our customized, co-designed culture programs shape the internal belief systems that drive sustainable productivity and innovation.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  


<!-- Values Section -->
  <section id="values">
  <div class="container">
    <div class="section-header slide-right">
      <h2>Our Values</h2>
      <p>These core principles guide everything we do at The Street Hub.</p>
    </div>
    <div class="values-grid">
      <div class="value-card slide-right">
        <div class="value-icon">
          <i class="fas fa-heart"></i>
        </div>
        <h3>Love of People</h3>
        <p>Transformation must begin from the heart. We prioritize human connection in all our engagements.</p>
      </div>
      
      <div class="value-card slide-right">
        <div class="value-icon">
          <i class="fas fa-handshake"></i>
        </div>
        <h3>Respect</h3>
        <p>We value every individual and their contribution, creating an environment of mutual appreciation.</p>
      </div>
      
      <div class="value-card slide-right">
        <div class="value-icon">
          <i class="fas fa-medal"></i>
        </div>
        <h3>Excellence</h3>
        <p>We never compromise on quality or standards, delivering exceptional results every time.</p>
      </div>
      
      <div class="value-card slide-right">
        <div class="value-icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <h3>Continuous Improvement</h3>
        <p>We stretch ourselves in pursuit of knowledge and growth, always seeking to evolve.</p>
      </div>
      
      <div class="value-card slide-right">
        <div class="value-icon">
          <i class="fas fa-lightbulb"></i>
        </div>
        <h3>Unconventional Thinking</h3>
        <p>We do not follow trends. We set them through innovative approaches and fresh perspectives.</p>
      </div>
      
      <div class="value-card slide-right">
        <div class="value-icon">
          <i class="fas fa-bolt"></i>
        </div>
        <h3>Speed</h3>
        <p>We execute with focus and urgency, delivering timely solutions without compromising quality.</p>
      </div>
    </div>
  </div>
</section>

  
<!-- Leadership Excellence Section -->
<section class="leadership-section">
  <div class="leadership-overlay">
    <div class="leadership-content">
      <h2 class="section-title-leadership slide-right" >Excellence in Leadership</h2>
      <p class="slide-right">Empowering individuals and organizations to lead with vision, integrity, and impact.</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSejGELhNy_SZBBzao4_wgib9u4G5BIUDHg_UVt9xL9Ujf0pCQ/viewform?usp=header" class="leadership-btn" target="blank">Get in Touch</a>
    </div>
  </div>
</section>  
  
  <!-- Executive Leadership Section -->
<section id="executive-leadership" class="executive-section">
  <div class="container">
    <div class="section-header slide-right">
      <h2>Redefining Executive Leadership in the 21st Century</h2>
      <p>Today’s leaders must be visionary, agile, and deeply human. At The Street Hub, we redefine what executive leadership means in an era of complexity, disruption, and innovation.</p>
    </div>
    <div class="executive-content">
      <div class="executive-text slide-left">
        <p>Our approach equips leaders to think beyond the boardroom—empowering them to inspire, influence, and ignite transformation from the inside out. We work with C-level executives to build adaptive strategies, emotional intelligence, and authentic presence.</p>
        <p>Whether guiding Fortune 500 CEOs or emerging leadership teams, our tailored frameworks help leaders navigate uncertainty and lead with clarity and conviction.</p>
      </div>
      <div class="executive-image slide-right">
        <img src="images/63.jpeg" alt="Executive Leadership" class="executive-img">
      </div>
    </div>
  </div>
</section>



<!-- Culture Shift Section -->
<section id="culture-shift" class="culture-section">
  <div class="container">
    <div class="section-header slide-right">
      <h2>Culture Shifts That Drive Organizational Excellence</h2>
      <p>Culture is not what’s written on walls—it’s what happens in the hallways. We help organizations design cultures that fuel purpose, productivity, and performance.</p>
    </div>
    <div class="culture-content">
      <div class="culture-image slide-left">
        <img src="images/61.jpeg" alt="Culture Shift" class="culture-img">
      </div>
      <div class="culture-text slide-right">
        <p>Through immersive culture diagnostics and co-creative workshops, we enable leaders and teams to shape belief systems, values, and behaviors that align with strategic goals.</p>
        <p>Our methodology bridges the gap between vision and reality—ensuring your organizational culture becomes a catalyst for excellence, innovation, and sustainable success.</p>
      </div>
    </div>
  </div>
</section>



  
<!-- By the Numbers Section -->
<section id="numbers" class="numbers-section">
  <div class="container">
    <div class="section-header slide-right">
      <h2>Proven by the Numbers</h2>
      <p>Our impact is backed by measurable results.</p>
    </div>
    <div class="numbers-grid">
      <div class="number-card">
        <h3><span class="counter" data-target="30">0</span>+</h3>
        <p>Years of Experience</p>
      </div>
      <div class="number-card">
        <h3><span class="counter" data-target="150">0</span>+</h3>
        <p>Organizations Transformed</p>
      </div>
      <div class="number-card">
        <h3><span class="counter" data-target="500">0</span>+</h3>
        <p>Leaders Empowered</p>
      </div>
      <div class="number-card">
        <h3><span class="counter" data-target="20">0</span>+</h3>
        <p>Countries Reached</p>
      </div>
    </div>
  </div>
</section>

<script src="scripts/numbers_counter.js"></script>


  
 
<!-- African Legends Publishing Section -->
<section id="african-legends" class="african-legends-section">
  <div class="container">
    <div class="section-header slide-right">
      <h2>African Legends Publishing</h2>
      <p>Preserving Africa’s heritage through powerful storytelling and inspirational literature.</p>
    </div>

    <div class="african-legends-content">
      <div class="african-legends-text slide-left">
        <p><strong>African Legends Publishing</strong> is a distinguished publishing house committed to amplifying authentic African narratives. Through compelling stories, biographies, and literary works, we celebrate the continent’s rich heritage, legendary figures, and cultural legacy.</p>
        <p>Our mission is to empower voices that shape Africa’s literary future while preserving its timeless wisdom for generations to come.</p>
        <a href="africanlegends.africa" target="_blank" class="african-legends-btn">Visit African Legends Website</a>
      </div>

      <div class="african-legends-image slide-right">
        <img src="images/african-legends.jpg" alt="African Legends Publishing" class="african-legends-img">
      </div>
    </div>
  </div>
</section>

 
 
 
  
<!-- Testimonials Section -->
<section id="testimonials" class="testimonials-section">
  <div class="container">
    <div class="section-header slide-right">
      <h2>What Our Clients Say</h2>
      <p>Real stories from leaders we've worked with across the globe.</p>
    </div>
    <div class="testimonials-grid">
      <!-- Testimonial 1 -->
      <div class="testimonial-card slide-right">
        <p class="testimonial-text">"The Street Hub revolutionized the way we lead and collaborate. Their approach helped us align our leadership and unlock innovation across the board."</p>
        <div class="testimonial-author">
          <div>
            <h4>Jane Mwangi</h4>
            <p>CEO, VisionCorp</p>
          </div>
        </div>
      </div>

      <!-- Testimonial 2 -->
      <div class="testimonial-card slide-right">
        <p class="testimonial-text">"Their EXCO Conversations shifted our executive mindset. We now make decisions faster, together, and with greater clarity."</p>
        <div class="testimonial-author">
          <div>
            <h4>David Otieno</h4>
            <p>HR Director, Nova Bank</p>
          </div>
        </div>
      </div>

      <!-- Testimonial 3 -->
      <div class="testimonial-card slide-right">
        <p class="testimonial-text">"We’ve partnered with many consultants, but The Street Hub brought something rare—deep empathy, strategy, and sustainable impact."</p>
        <div class="testimonial-author">
          <div>
            <h4>Linda Oduor</h4>
            <p>Managing Director, StratEdge</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header slide-right">
        <h2>Contact Us</h2>
        <p>Reach out to start your transformation journey today.</p>
      </div>
      <div class="contact-content slide-right">
        <div class="contact-info">
          <p>We'd love to hear from you! Whether you're ready to transform your organization or just have questions about our services, our team is here to help.</p>
          
          <div class="contact-details">
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@thestreethub.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+254 701 628 414</p>
              </div>
            </div>
            
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        
        <div class="contact-form">
          <h3>Send us a message</h3>
          <form>
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name">
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email">
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" placeholder="Enter subject">
            </div>
            
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" placeholder="Enter your message"></textarea>
            </div>
            
            <button type="submit" class="btn btn-secondary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container slide-right">
      <div class="footer-content">
        <div class="footer-column">
          <h3>The Street Hub</h3>
          <p>Transforming Mindsets. Shaping Cultures. Empowering Leadership.</p>
          <div class="social-links">
            <a href="#" target="blank"><i class="fab fa-facebook-f"></i></a>
            <a href="#" target="blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/power-talks/posts/?feedView=all" target="blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" target="blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        
        <div class="footer-column">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#values">Our Values</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>Our Services</h3>
          <ul class="footer-links">
            <li><a href="#">Transformational Leadership</a></li>
            <li><a href="#">EXCO Conversations</a></li>
            <li><a href="#">Board Retreats</a></li>
            <li><a href="#">Culture Design</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates and insights.</p>
          <form>
            <div class="form-group">
              <input type="email" placeholder="Your email address">
            </div>
            <button type="submit" class="btn btn-secondary">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div class="copyright slide-right">
        <p>&copy; 2025 The Street Hub. All rights reserved.</p>
      </div>
    </div>
  </footer>

 <script src="scripts/script.js"></script>
<script src="scripts/slide.js"></script> 

</body>
</html>