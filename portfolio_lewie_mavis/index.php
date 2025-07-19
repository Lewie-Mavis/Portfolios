<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!-- SEO Meta Tags -->
    <meta name="description" content="Lewie Mavis Software Solutions Company - We offer world-class IT services including custom software development, cybersecurity, cloud integration, and digital transformation for businesses globally.">
    <meta name="keywords" content="Lewie Mavis, software development, IT solutions, web development, cybersecurity, cloud computing, app development, digital transformation, tech consultant, software engineer, computer scientist">
    <meta name="author" content="Lewie Mavis">
   
   
    
    <!-- Open Graph for Social Sharing -->
    <meta property="og:title" content="Lewie Mavis | Software Engineer & IT Consultant">
    <meta property="og:description" content="Providing innovative, secure, and scalable software solutions for businesses and entrepreneurs worldwide.">
    <meta property="og:image" content="https://yourdomain.com/images/preview.jpg"> <!-- Replace with actual image URL -->
    <meta property="og:url" content="https://yourdomain.com"> <!-- Replace with actual URL -->
    <meta property="og:type" content="website">
    
    <title>Lewie Mavis</title>
    
    <!-- Favicon and Stylesheets -->
    <link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>


 <script src="scripts/voice.js"></script>
 

<body>


    <!-- Header -->
    <header>
    <a href="#" class="logo slide-left" onclick="scrollToTop()">Lewie Mavis</a>
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

<script>
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

   <!-- Hero Section -->
<section class="hero">
    <div class="hero-content slide-right">
        <h1>Innovative Solutions for a Digital World</h1>
        <p> Computer Scientist | Software Engineer | IT Solutions Specialist</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5psxp2dX9f7ucB13BHS4KLRMcWxkFsiI7q9pprjoeKRH6AA/viewform?usp=header" class="cta-button" target="blank">Get in Touch</a>
    </div>
</section>

<!-- GSAP Animation -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
  gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
</script>


<!-- About Section -->
<section id="about">
  <h2 class="section-title slide-right">About Me</h2>
  <div class="about-content">
    <div class="about-photo slide-left" aria-label="Photo of Lewie Mavis">
      <img src="images/Lewie.jpg" alt="Lewie Mavis" loading="lazy" />
    </div>
    <div class="about-description slide-right">
      <p>
        Hi, I'm <strong>Lewie Mavis</strong>, a passionate computer scientist, software engineer, and IT consultant focused on delivering scalable, efficient, and user-centric solutions. My expertise covers cybersecurity, web and mobile development, cloud computing, and AI integration.
      </p>
      <p>
        With over a decade of experience, I transform complex challenges into innovative digital strategies that drive growth and efficiency. I work closely with clients to deliver tailored solutions that align with their goals.
      </p>
      <p>
        I’m committed to leveraging the latest technologies to build secure, future-ready applications that help businesses thrive in a fast-changing digital world.
      </p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5psxp2dX9f7ucB13BHS4KLRMcWxkFsiI7q9pprjoeKRH6AA/viewform?usp=header" class="btn-consultation" role="button" aria-label="Get Consultation" target="blank">Get Consultation</a>
    </div>
  </div>
</section>




<!-- Online Presence Section -->
<section id="online-presence-section">
  <h2 class="section-title slide-right">The Importance of Having an Online Presence</h2>
  <div class="online-presence-content">
    <div class="online-presence-text slide-left">
      <p>
        In today's digital age, having a strong online presence is no longer optional, it's essential. A well-crafted digital footprint builds credibility, opens new markets, and ensures your brand is visible to a global audience 24/7. Whether you're a startup or a growing enterprise, an online presence allows you to:
      </p>
      <ul>
        <li><strong class="highlight-blue">Increase visibility</strong> and attract more customers</li>
        <li><strong class="highlight-blue">Build trust</strong> through professional branding</li>
        <li><strong class="highlight-blue">Engage your audience</strong> on multiple platforms</li>
        <li><strong class="highlight-blue">Drive growth</strong> with data-driven digital marketing</li>
      </ul>
      <p>
        Let Lewie Mavis Software Solutions help you establish a powerful and lasting digital presence.
      </p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5psxp2dX9f7ucB13BHS4KLRMcWxkFsiI7q9pprjoeKRH6AA/viewform?usp=header" class="online-presence-button" target="blank">Build Your Website Today</a>
    </div>
    <div class="online-presence-image slide-right">
      <img src="images/online_presence.webp" alt="Online Presence" />
    </div>
  </div>
</section>


   
<!-- Services Section --> 
<section id="services">
    <h2 class="section-title slide-right">Services</h2>
    <div class="services-grid">
        <div class="service-card slide-right">
            <i class="fas fa-code click-to-read" onclick="speakText('Web Development')"></i>
            <h3>Web Development</h3>
            <p>Building modern, responsive, and high-performance websites.</p>
        </div>
        <div class="service-card slide-right">
            <i class="fas fa-mobile-alt click-to-read" onclick="speakText('Mobile App Development')"></i>
            <h3>Mobile App Development</h3>
            <p>Creating cross-platform mobile applications for iOS and Android.</p>
        </div>
        <div class="service-card slide-right">
            <i class="fas fa-cloud click-to-read" onclick="speakText('Cloud Solutions')"></i>
            <h3>Cloud Solutions</h3>
            <p>Designing and deploying scalable cloud infrastructure.</p>
        </div>
        <div class="service-card slide-right">
            <i class="fas fa-lock click-to-read" onclick="speakText('Cybersecurity Services')"></i>
            <h3>Cybersecurity Services</h3>
            <p>Protecting your digital assets with advanced security solutions.</p>
        </div>
        <div class="service-card slide-right">
            <i class="fas fa-database click-to-read" onclick="speakText('Data Analytics')"></i>
            <h3>Data Analytics</h3>
            <p>Leveraging data insights to drive business growth and efficiency.</p>
        </div>
        <div class="service-card slide-right">
            <i class="fas fa-bullhorn click-to-read" onclick="speakText('Digital Marketing')"></i>
            <h3>Digital Marketing</h3>
            <p>Boosting online presence through SEO, social media, and content marketing.</p>
        </div>
        <div class="service-card slide-right">
            <i class="fas fa-robot click-to-read" onclick="speakText('AI & Machine Learning')"></i>
            <h3>AI & Machine Learning</h3>
            <p>Developing intelligent AI solutions to automate and enhance business operations.</p>
        </div>
        <div class="service-card slide-right">
            <i class="fas fa-shopping-cart click-to-read" onclick="speakText('E-Commerce Solutions')"></i>
            <h3>E-Commerce Solutions</h3>
            <p>Creating seamless and scalable online shopping platforms.</p>
        </div>
        <div class="service-card slide-right">
            <i class="fas fa-network-wired click-to-read" onclick="speakText('IT Consulting')"></i>
            <h3>IT Consulting</h3>
            <p>Providing expert IT solutions tailored to your business needs.</p>
        </div>
    </div>
</section>


  <!-- Slider Section -->
<section class="lewie-mavis-slider-section">
        <!-- Image Slider Section -->
        <div class="about-photo-slider">
            <div class="slide">
                <img src="images/1.webp" alt="slider">
            </div>
            <div class="slide">
                <img src="images/2.webp" alt="slider">
            </div>
			<div class="slide">
                <img src="images/3.webp" alt="slider">
            </div>
			<div class="slide">
                <img src="images/4.webp" alt="slider">
            </div>
            <div class="slide">
                <img src="images/5.webp" alt="slider">
            </div>	
			<div class="slide">
                <img src="images/6.webp" alt="slider">
            </div>
			<div class="slide">
                <img src="images/7.webp" alt="slider">
            </div>	
			<div class="slide">
                <img src="images/8.webp" alt="slider">
            </div>	
			<div class="slide">
                <img src="images/10.webp" alt="slider">
            </div>			
        </div>
</section>
<script src="scripts/slider.js"></script>


<!-- Software Development Process Section -->
<section id="development-process-section">
  <h2 class="section-title slide-right">Our Software Development Process</h2>
  <div class="development-process-content">
    <div class="development-process-image slide-left">
      <img src="images/software_development.webp" alt="Software Development Process">
    </div>
    <div class="development-process-text slide-right">
      <p>
        At Lewie Mavis Software Solutions, we follow a well-defined and collaborative development process to ensure quality, efficiency, and client satisfaction.
      </p>
      <ol>
        <li><span class="highlight-blue"> Discovery & Planning:</span> We gather requirements, define goals, and outline the technical roadmap.</li>
        <li><span class="highlight-blue"> Design & Prototyping:</span> Craft intuitive UI/UX prototypes that align with your vision.</li>
        <li><span class="highlight-blue"> Development:</span> Our team builds robust, scalable, and secure applications using modern tech stacks.</li>
        <li><span class="highlight-blue"> Testing & QA:</span> Rigorous testing ensures the software is bug-free, secure, and high-performing.</li>
        <li><span class="highlight-blue"> Deployment:</span> We launch your solution with seamless integration and minimal downtime.</li>
        <li><span class="highlight-blue"> Maintenance & Support:</span> Ongoing updates, monitoring, and improvements keep your systems optimized.</li>
      </ol>
      <p>
        From idea to execution, we deliver software that transforms how your business operates.
      </p>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5psxp2dX9f7ucB13BHS4KLRMcWxkFsiI7q9pprjoeKRH6AA/viewform?usp=header" class="development-process-button" target="blank">Start Your Software Project</a>
    </div>
  </div>
</section>


<!-- Portfolio Section -->
<section id="portfolio">
    <h2 class="section-title slide-right">Our Portfolio</h2>
    <div class="portfolio-grid">
        <div class="portfolio-item slide-right">
            <a href="https://linktr.ee/lewiemavis" target="_blank">
                <i class="portfolio-icon fas fa-laptop-code click-to-read" onclick="speakText('Portfolio Website')"></i>
                <h3>Portfolio Websites</h3>
                <p>Web Design & Development</p>
                <p>Modern, responsive websites that highlight skills and showcase creative projects.</p>
            </a>
        </div>
        <div class="portfolio-item slide-right">
            <a href="#" target="_blank">
                <i class="portfolio-icon fas fa-mobile-alt click-to-read" onclick="speakText('E-Commerce App')"></i>
                <h3>E-Commerce App</h3>
                <p>Mobile App</p>
                <p>A cross-platform e-commerce app that ensures a seamless shopping experience.</p>
            </a>
        </div>
        <div class="portfolio-item slide-right">
            <a href="#" target="_blank">
                <i class="portfolio-icon fas fa-cloud click-to-read" onclick="speakText('Cloud Storage Solution')"></i>
                <h3>Cloud Storage Solution</h3>
                <p>Cloud Solution</p>
                <p>Scalable, secure cloud storage solutions designed for both individuals and businesses.</p>
            </a>
        </div>
        <div class="portfolio-item slide-right">
            <a href="#" target="_blank">
                <i class="portfolio-icon fas fa-cogs click-to-read" onclick="speakText('Business Automation Tool')"></i>
                <h3>Business Automation Tool</h3>
                <p>Automation Tool</p>
                <p>Streamline workflows and automate manual processes with cutting-edge tools.</p>
            </a>
        </div>
        <div class="portfolio-item slide-right">
            <a href="#" target="_blank">
                <i class="portfolio-icon fas fa-chart-line click-to-read" onclick="speakText('AI-Powered Analytics')"></i>
                <h3>AI-Powered Analytics</h3>
                <p>Data Analytics</p>
                <p>Uncover actionable insights from large datasets using advanced machine learning algorithms.</p>
            </a>
        </div>
        <div class="portfolio-item slide-right">
            <a href="#" target="_blank">
                <i class="portfolio-icon fas fa-lock click-to-read" onclick="speakText('Cybersecurity Framework')"></i>
                <h3>Cybersecurity Framework</h3>
                <p>Cybersecurity System</p>
                <p>Comprehensive security solutions to protect sensitive data and ensure robust defenses.</p>
            </a>
        </div>
    </div>
</section>



    
   <!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title slide-right">By the Numbers</h2>
    <div class="numbers-background slide-right">
        <div class="numbers-grid slide-right">
            <div class="number-card slide-right">
                <h3 class="count" data-target="50">0</h3><span>+</span>
                <p>Projects Completed</p>
            </div>
            <div class="number-card slide-right">
                <h3 class="count" data-target="100">0</h3><span>+</span>
                <p>Happy Clients</p>
            </div>
            <div class="number-card slide-right">
                <h3 class="count" data-target="10">0</h3><span>+</span>
                <p>Years of Experience</p>
            </div>
        </div>
    </div>
</section>
<script src="scripts/number_counter.js"></script>


<!-- FAQ Section -->
<section id="faq-section">
  <h2 class="section-title slide-right">Frequently Asked Questions</h2>
  <div class="faq-container">
    <div class="faq-item slide-right">
      <button class="faq-question">How long does it take to build a custom software solution?</button>
      <div class="faq-answer">
        <p>Project duration varies depending on scope and complexity, but typically ranges from 4 to 12 weeks. We provide a detailed timeline after initial consultation.</p>
      </div>
    </div>
    
    <div class="faq-item slide-right">
      <button class="faq-question">What industries do you specialize in?</button>
      <div class="faq-answer">
        <p>We’ve worked across healthcare, education, e-commerce, finance, and government sectors, delivering scalable and secure tech solutions tailored to each domain.</p>
      </div>
    </div>
    
    <div class="faq-item slide-right">
      <button class="faq-question">Do you offer post-launch support?</button>
      <div class="faq-answer">
        <p>Yes. We offer comprehensive maintenance and support packages, including updates, bug fixes, and performance monitoring to ensure long-term success.</p>
      </div>
    </div>
    
    <div class="faq-item slide-right">
      <button class="faq-question">Can you redesign my existing website or system?</button>
      <div class="faq-answer">
        <p>Absolutely. We modernize existing platforms with new tech stacks, improved UI/UX, and enhanced functionality to meet today’s business needs.</p>
      </div>
    </div>
    
    <div class="faq-item slide-right">
      <button class="faq-question">Is my data safe with your solutions?</button>
      <div class="faq-answer">
        <p>Security is our top priority. We follow industry best practices for data encryption, authentication, and secure coding to protect your digital assets.</p>
      </div>
    </div>
  </div>
</section>
<script src="scripts/faq.js"></script>

<!-- Top Tech Trends Section -->
<section id="tech-trends" class="tech-trends-section">
  <h2 class="section-title slide-right">Top Tech Trends Every Business Should Know</h2>
  <div class="tech-trends-content">
    <div class="tech-trends-image slide-left">
      <img src="images/11.webp" alt="Top Tech Trends">
    </div>
    <div class="tech-trends-text slide-right">
      <p>
        In today’s evolving digital landscape, staying ahead of technological innovations is essential for business growth and resilience.
        From artificial intelligence and automation to extended reality, blockchain, and edge computing — these trends continue to transform industries globally.
      </p>
      <p>
        Companies that adopt these advancements unlock new efficiencies, improve customer experiences, and lead in the marketplace. Understanding these trends isn't just beneficial — it's strategic.
      </p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5psxp2dX9f7ucB13BHS4KLRMcWxkFsiI7q9pprjoeKRH6AA/viewform?usp=header" class="tech-trends-button" target="blank">Explore Tech Solutions</a>
    </div>
  </div>
</section>





<!-- Tech Stack Section -->
<section class="tech-stack-section" id="tech-stack">
  <h2 class="section-title">Technology Stack</h2>
  
  <div class="tech-stack-grid">
    <div class="tech-card slide-right"><i class="fab fa-html5 click-to-read" onclick="speakText('HTML5')"></i><h3>HTML5</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-css3-alt click-to-read" onclick="speakText('CSS3')"></i><h3>CSS3</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-js-square click-to-read" onclick="speakText('JavaScript')"></i><h3>JavaScript</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-react click-to-read" onclick="speakText('React.js')"></i><h3>React.js</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-vuejs click-to-read" onclick="speakText('Vue.js')"></i><h3>Vue.js</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-angular click-to-read" onclick="speakText('Angular')"></i><h3>Angular</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-node-js click-to-read" onclick="speakText('Node.js')"></i><h3>Node.js</h3></div>
    <div class="tech-card slide-right"><i class="fas fa-server click-to-read" onclick="speakText('Express.js')"></i><h3>Express.js</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-php click-to-read" onclick="speakText('PHP')"></i><h3>PHP</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-laravel click-to-read" onclick="speakText('Laravel')"></i><h3>Laravel</h3></div>
    <div class="tech-card slide-right"><i class="fas fa-database click-to-read" onclick="speakText('MySQL')"></i><h3>MySQL</h3></div>
    <div class="tech-card slide-right"><i class="fas fa-database click-to-read" onclick="speakText('PostgreSQL')"></i><h3>PostgreSQL</h3></div>
    <div class="tech-card slide-right"><i class="fas fa-server click-to-read" onclick="speakText('MongoDB')"></i><h3>MongoDB</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-python click-to-read" onclick="speakText('Python')"></i><h3>Python</h3></div>
    <div class="tech-card slide-right"><i class="fas fa-leaf click-to-read" onclick="speakText('Django')"></i><h3>Django</h3></div>
    <div class="tech-card slide-right"><i class="fas fa-flask click-to-read" onclick="speakText('Flask')"></i><h3>Flask</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-java click-to-read" onclick="speakText('Java')"></i><h3>Java</h3></div>
    <div class="tech-card slide-right"><i class="fas fa-code click-to-read" onclick="speakText('Kotlin')"></i><h3>Kotlin</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-swift click-to-read" onclick="speakText('Swift')"></i><h3>Swift</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-android click-to-read" onclick="speakText('Android')"></i><h3>Android</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-apple click-to-read" onclick="speakText('iOS')"></i><h3>iOS</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-aws click-to-read" onclick="speakText('AWS')"></i><h3>AWS</h3></div>
    <div class="tech-card slide-right"><i class="fas fa-cubes click-to-read" onclick="speakText('Kubernetes')"></i><h3>Kubernetes</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-docker click-to-read" onclick="speakText('Docker')"></i><h3>Docker</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-git-alt click-to-read" onclick="speakText('Git')"></i><h3>Git</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-github click-to-read" onclick="speakText('GitHub')"></i><h3>GitHub</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-linux click-to-read" onclick="speakText('Linux')"></i><h3>Linux</h3></div>
    <div class="tech-card slide-right"><i class="fab fa-windows click-to-read" onclick="speakText('Windows Server')"></i><h3>Windows Server</h3></div>
  </div>
</section>




<!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title slide-right">Client Testimonials</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card slide-right">
            <p class="testimonial-quote">“Lewie Mavis Software Company has completely redefined our expectations for a development partner. Their ability to deliver innovative and scalable solutions is unmatched.”</p>
            <div class="testimonial-info">
                <div class="star-rating">★★★★★</div>
                <h3 class="testimonial-author">Emily Carter</h3>
                <p class="testimonial-role">CEO, TechSphere Inc.</p>
            </div>
        </div>
        <div class="testimonial-card slide-right">
            <p class="testimonial-quote">“Our collaboration with Lewie Mavis Software Company was a turning point. Their professionalism, expertise, and focus on quality ensured flawless execution at every stage.”</p>
            <div class="testimonial-info">
                <div class="star-rating">★★★★★</div>
                <h3 class="testimonial-author">James Reynolds</h3>
                <p class="testimonial-role">CTO, Nexa Solutions</p>
            </div>
        </div>
        <div class="testimonial-card slide-right">
            <p class="testimonial-quote">“Lewie Mavis Software Company transformed our digital vision into a reality. Their team brought deep technical expertise and a forward-thinking mindset to every step of the process.”</p>
            <div class="testimonial-info">
                <div class="star-rating">★★★★★</div>
                <h3 class="testimonial-author">Sophia Martinez</h3>
                <p class="testimonial-role">Founder, Elevate Digital</p>
            </div>
        </div>
        <div class="testimonial-card slide-right">
            <p class="testimonial-quote">“Lewie Mavis Software Company consistently exceeds expectations. Their meticulous attention to detail, clear communication, and reliable delivery set them apart in the tech industry.”</p>
            <div class="testimonial-info">
                <div class="star-rating">★★★★★</div>
                <h3 class="testimonial-author">Michael Johnson</h3>
                <p class="testimonial-role">Director, Alpha Innovations</p>
            </div>
        </div>
        <div class="testimonial-card slide-right">
            <p class="testimonial-quote">“Partnering with Lewie Mavis Software Company was one of the best decisions we've made. Their solutions are not only technically robust but strategically aligned with our business goals.”</p>
            <div class="testimonial-info">
                <div class="star-rating">★★★★★</div>
                <h3 class="testimonial-author">Olivia Thompson</h3>
                <p class="testimonial-role">Lead Developer, Pixel Labs</p>
            </div>
        </div>
    </div>
</section>




<!-- Location Section -->
<section id="location">
    <h2 class="section-title slide-right">Location</h2>
    <div class="location-container slide-right">
       
        <p><strong >Lewie Mavis Software Solutions</strong><br> 
        Upper Hill, Nairobi, Kenya</p>
        <div class="map-container">
            <iframe 
                width="100%" 
                height="400" 
                frameborder="0" 
                style="border:0" 
                allowfullscreen 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7977.58733120817!2d36.809850633144414!3d-1.2985513905341175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1739965491113!5m2!1sen!2ske">
            </iframe>
        </div>
    </div>
</section>

<!-- Online Presence CTA Section -->
<section class="lm-online-presence-section">
  <div class="lm-online-presence-overlay">
    <div class="lm-online-presence-content slide-right">
      <h2 class="slide-right">Build a Powerful Online Presence</h2>
      <p class="slide-right"> class="lm-online-presence-content"Your digital journey begins here. Let Lewie Mavis craft your unique space on the web — stunning, responsive, and made for impact.</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5psxp2dX9f7ucB13BHS4KLRMcWxkFsiI7q9pprjoeKRH6AA/viewform?usp=header" class="lm-online-presence-btn slide-right" target="blank">Get Started</a>
    </div>
  </div>
</section>



	<!-- Contact Section -->
<section id="contact">
    <h2 class="section-title slide-right">Get in Touch</h2>
    <div class="contact-container slide-right">
        <form class="contact-form slide-right" action="https://formsubmit.co/lewielom@gmail.com" method="POST" target="blank">
            <div class="input-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required>
            </div>
            <div class="input-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required>
            </div>
			<div class="input-group">
                <input type="phone" id="phone" name="phone" placeholder="Your Phone Number" required>
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
    <div class="footer-container slide-right">
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
    <div class="footer-bottom slide-right">
        <p>&copy; 2025 Lewie Mavis. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>
	
	<script src="scripts/slide.js"></script>
	
	
	
	

</body>
</html>