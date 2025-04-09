<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hellen Muthoni </title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
	
<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Include Slick CSS -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>

<!-- Include Slick JS -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>




</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo">Hellen Muthoni</a>
    <nav class="nav-links">
        <a href="#about">About</a>
		<a href="#gallery">Gallery</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#awards">Awards</a>
        <a href="#tech-stack">Expertise</a>
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
        <h1>Empowering Through Faith, Music and Inspiration</h1>
        <p>Award-Winning Motivational Speaker | Author | Music Writer | Minister of the Gospel | Media Personality</p>
        <div class="button-container">
            <a href="#contact" class="cta-button">Get In Touch</a>
            <a href="#services" class="services-button">Discover My Servies</a>
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
            <img src="images/1.jpg" alt="Hellen Muthoni">
        </div>
        <div class="about-description">
            <p>Hi, I’m <strong>Hellen Muthoni</strong>, an <strong> award-winning motivational speaker</strong>, <strong>music writer</strong>, <strong>minister of the gospel</strong>, <strong>author</strong> and <strong>philanthropist</strong>. Through my work, I aim to inspire and uplift others, blending my love for music, faith and service to create positive change. As a media personality, I use my platform to spread messages of hope, empowerment and faith, touching lives with the power of words, music, and storytelling. My journey is centered around making a meaningful impact in the lives of others, whether through motivating audiences, sharing stories of faith or contributing to causes close to my heart.</p>
            <a href="#contact" class="btn-consultation">Get Consultation</a>
        </div>
    </div>
</section>

<section id="gallery">
    <h2 class="section-title">Gallery</h2>
    <div class="gallery-slider">
        <div><img src="images/1.jpg" alt="1"></div>
        <div><img src="images/2.jpg" alt="2"></div>
        <div><img src="images/4.jpg" alt="4"></div>
        <div><img src="images/9.jpg" alt="9"></div>
        <div><img src="images/12.jpg" alt="12"></div>
        <div><img src="images/13.jpg" alt="13"></div>
        <div><img src="images/14.jpg" alt="14"></div>
        <div><img src="images/15.jpg" alt="15"></div>
		<div><img src="images/16.jpg" alt="16"></div>
        <div><img src="images/17.jpg" alt="17"></div>
        <div><img src="images/21.jpg" alt="21"></div>
        <div><img src="images/22.jpg" alt="22"></div>
        <div><img src="images/27.jpg" alt="27"></div>
    </div>
</section>
<script src="scripts/slider.js"></script>


   
    <!-- Services Section --> 
<section id="services">
    <h2 class="section-title">My Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-microphone"></i>
            <h3>Motivational Speaking</h3>
            <p>Inspiring audiences through powerful speeches that promote personal growth, faith, and empowerment.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-music"></i>
            <h3>Music Writing & Composition</h3>
            <p>Creating soulful, meaningful music that resonates with diverse audiences, spreading messages of hope and inspiration.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-praying-hands"></i>
            <h3>Ministry & Spiritual Guidance</h3>
            <p>Providing spiritual mentorship and guidance to individuals and communities through ministry and faith-based outreach.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-book"></i>
            <h3>Author & Writer</h3>
            <p>Writing books and articles that share powerful stories, life lessons, and motivational insights to inspire and uplift readers.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-heart"></i>
            <h3>Philanthropy & Community Outreach</h3>
            <p>Leading charitable initiatives and supporting causes that uplift underprivileged communities and promote social change.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-video"></i>
            <h3>Media Appearances</h3>
            <p>Serving as a media personality, sharing insights on topics such as personal development, faith, and social empowerment.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-bullhorn"></i>
            <h3>Event Hosting & Facilitation</h3>
            <p>Hosting and facilitating impactful events, conferences, and seminars focused on personal development and empowerment.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-hand-holding-heart"></i>
            <h3>Wellness & Life Coaching</h3>
            <p>Helping individuals lead balanced, fulfilling lives through coaching focused on emotional, spiritual, and mental well-being.</p>
        </div>
		<div class="service-card">
            <i class="fas fa-lightbulb"></i>
            <h3>Inspirational Workshops</h3>
            <p>Conducting engaging workshops that empower individuals to discover their potential and overcome personal challenges.</p>
        </div>
    </div>
</section>



<!-- Portfolio Section -->
<section id="portfolio">
    <h2 class="section-title">Portfolio</h2>
    <div class="portfolio-grid">
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-microphone"></i>
            <h3>Motivational Speaking Engagements</h3>
            <p>Inspiring Audiences</p>
            <p>Delivered powerful speeches at various conferences, empowering individuals to achieve personal growth and success.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-music"></i>
            <h3>Music Writing & Composition</h3>
            <p>Inspirational Music</p>
            <p>Created soulful and inspiring music that resonates with listeners, sharing messages of hope, faith, and empowerment.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-book"></i>
            <h3>Author & Books</h3>
            <p>Published Works</p>
            <p>Authored books that provide motivational insights and life lessons, aimed at inspiring readers to live fulfilling lives.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-praying-hands"></i>
            <h3>Ministry & Outreach</h3>
            <p>Faith-Based Impact</p>
            <p>Led spiritual initiatives and community outreach programs, helping individuals find guidance and hope through faith.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-heart"></i>
            <h3>Philanthropy & Charity Work</h3>
            <p>Giving Back</p>
            <p>Contributed to various charitable initiatives, uplifting underprivileged communities and advocating for social change.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-video"></i>
            <h3>Media Appearances</h3>
            <p>Inspiring Through Media</p>
            <p>Featured on television and radio, sharing messages of personal development, faith, and empowerment to a wide audience.</p>
        </div>
    </div>
</section>


    
   <!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title">By the Numbers</h2>
    <div class="numbers-background">
        <div class="numbers-grid">
            <div class="number-card">
                <h3 class="count" data-target="200">0</h3><span>+</span>
                <p>Motivational Speaking</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="100">0</h3><span>+</span>
                <p>Media Appearances</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="50">0</h3><span>+</span>
                <p>Philanthropic Projects</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="15">0</h3><span>+</span>
                <p>Years of Experience</p>
            </div>
        </div>
    </div>
</section>

<section id="awards">
    <h2 class="section-title">Awards & Recognition</h2>
    <div class="awards-grid">
	    <div class="award-card">
            <i class="fas fa-book"></i>
            <h3>Author of the Year</h3>
            <p>Recognized for exceptional writing and publishing works that inspire and motivate readers.</p>
            <p><strong>Year:</strong> 2024</p>
        </div>
        <div class="award-card">
            <i class="fas fa-trophy"></i>
            <h3>Best Motivational Speaker Award</h3>
            <p>Recognized for outstanding contributions to motivational speaking and empowering audiences globally.</p>
            <p><strong>Year:</strong> 2023</p>
        </div>
        <div class="award-card">
            <i class="fas fa-star"></i>
            <h3>Youngest Purpose Leader of the Year</h3>
            <p>Awarded for inspiring and leading others with a clear sense of purpose at a young age.</p>
            <strong>Year: 2022</strong>
        </div>
        <div class="award-card">
            <i class="fas fa-video"></i>
            <h3>Outstanding Media Personality of the Year</h3>
            <p>Honored for significant impact in the Kenyan media industry and for using the platform to inspire positive change.</p>
            <p><strong>Year:</strong> 2021</p>
        </div>
		 <div class="award-card">
            <i class="fas fa-gift"></i>
            <h3>Humanitarian Award</h3>
            <p>Recognized for outstanding contributions to philanthropic efforts and social impact.</p>
            <strong>Year: 2021</strong>
        </div>
        <div class="award-card">
            <i class="fas fa-award"></i>
            <h3>Excellence in Music Ministry</h3>
            <p>Honored for exceptional dedication to gospel music ministry and reaching diverse audiences.</p>
            <strong>Year: 2020</strong>
        </div>
    </div>
</section>


<section id="tech-stack">
    <h2 class="section-title">My Expertise</h2>
    <div class="tech-grid">
        <div class="tech-card">
            <i class="fas fa-microphone"></i>
            <h3>Public Speaking</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-music"></i>
            <h3>Music Composition</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-book"></i>
            <h3>Book Writing</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-praying-hands"></i>
            <h3>Spiritual Guidance</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-heart"></i>
            <h3>Philanthropy</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-video"></i>
            <h3>Media & Broadcasting</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-hand-holding-heart"></i>
            <h3>Community Outreach</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-bullhorn"></i>
            <h3>Motivational Training</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-people-arrows"></i>
            <h3>Team Leadership</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-cogs"></i>
            <h3>Event Coordination</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-lightbulb"></i>
            <h3>Creative Vision</h3>
        </div>
        <div class="tech-card">
            <i class="fas fa-handshake"></i>
            <h3>Brand Partnerships</h3>
        </div>
    </div>
</section>





    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What People Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Hellen Muthoni's powerful speeches have inspired and motivated our team to achieve greater success. Her ability to connect with people and deliver impactful messages is unparalleled." </p>
            <h3>- Sarah L., CEO of Bright Horizons Ltd.</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Hellen's philanthropic work has touched the lives of so many. Her dedication to improving the lives of others is truly inspiring and has made a tangible difference in our community." </p>
            <h3>- David H., Director at ReachOut Foundation</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Working with Hellen on her motivational talks and workshops has been an enlightening experience. Her unique approach to self-improvement and leadership has impacted so many individuals." </p>
            <h3>- Olivia P., Event Coordinator at Empowerment Workshops</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Hellen Muthoni’s work as a media personality and author has helped raise awareness on important social causes. She has the ability to turn complex topics into accessible and engaging content." </p>
            <h3>- James T., Media Strategist</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Hellen’s commitment to uplifting others through her work, whether in music, writing, or public speaking, has created a lasting impact. Her words resonate deeply with people of all walks of life." </p>
            <h3>- Robert W., Community Leader</h3>
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
            <p><strong>Phone:</strong> +254 799 201 222</p>
            <p><strong>Email:</strong> hellenmuthonikenya@gmail.com</p>
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
				<li><a href="#gallery">Gallery</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#awards">Awards</a></li>
				<li><a href="#tech-stack">Expertise</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
        <!-- Right Section: Social Links -->
        <div class="footer-social">
    <a href="https://www.facebook.com/share/1AFf9t6CWF/?mibextid=wwXIfr" class="social-icon" target="_blank">
        <i class="fab fa-facebook-f"></i>
    </a>
	<a href="https://www.tiktok.com/@hellen_msoo?_t=ZM-8vO6OGFN7B8&_r=1" class="social-icon" target="_blank">
    <i class="fab fa-tiktok"></i>
    </a>
    <a href="https://x.com/hellenmsoo?s=21&t=jUsF6skJr2VaGnPPA0fLtg" class="social-icon" target="_blank">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="#" class="social-icon" target="_blank">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="https://www.instagram.com/hellen_msoo?igsh=enRpbXg4MDA4YTJq&utm_source=qr" class="social-icon" target="_blank">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="#" class="social-icon" target="_blank">
        <i class="fab fa-youtube"></i>
    </a>
    <a href="#" class="social-icon" target="_blank">
        <i class="fas fa-globe"></i> 
    </a>
</div>

    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
        <p>&copy; 2025 Hellen Muthoni. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>

	
</body>
</html>