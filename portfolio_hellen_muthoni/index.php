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
  <a href="#" class="logo" onclick="scrollToTop()">Hellen Muthoni</a>
  <nav class="nav-links">
    <a href="#about">About</a>
    <a href="#ministries">Ministry</a>
    <a href="#books">Books</a>
    <a href="#media">Media</a>
    <a href="#awards">Awards</a>
	<a href="#podcast">Podcast</a>
    <a href="#donations">Donations</a>
    <a href="#contact">Contact</a>
  </nav>
  <div class="menu-toggle" onclick="toggleMenu()">
    <i class="fas fa-bars"></i>
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
        <h1>Empowering Through Faith, Music and Inspiration</h1>
        <p>Award-Winning Motivational Speaker | Author | Music Writer | Minister of the Gospel | Media Personality</p>
        <div class="button-container">
            <a href="#contact" class="cta-button">Get In Touch</a>
            <a href="#about" class="services-button">Learn More</a>
        </div>
    </div>
</section>


	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
  gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero-content p", { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
</script>


<!-- About Me Section -->
<section id="about" class="about-section">
  <div class="about-container">
    <div class="about-image">
      <img src="images/9.jpg" alt="Hellen Muthoni">
    </div>
    <div class="about-description">
      <h2>About Me</h2>
      <p>
        Hi, I’m <strong>Hellen Muthoni</strong>, an <strong>award-winning motivational speaker</strong>, 
        <strong>music writer</strong>, <strong>minister of the gospel</strong>, <strong>author</strong>, and 
        <strong>philanthropist</strong>. Through my work, I aim to inspire and uplift others, blending my love for 
        music, faith, and service to create positive change. As a media personality, I use my platform to spread 
        messages of hope, empowerment, and faith, touching lives with the power of words, music, and storytelling. 
        My journey is centered around making a meaningful impact in the lives of others—whether through motivating 
        audiences, sharing stories of faith, or contributing to causes close to my heart.
      </p>
      <a href="#contact" class="btn-consultation">Get Consultation</a>
    </div>
  </div>
</section>

<!-- MINISTRY SECTION -->
<section id="ministries" class="ministry-section">
  <div class="ministry-content">
    <div class="ministry-text">
      <h2>Hellen's Ministry</h2>
<p>
  Hellen Muthoni is a devoted gospel minister with a passion for transforming lives through
  worship, prayer, and the word of God. Her ministry touches countless hearts across Kenya and
  beyond, combining music, mentorship, and service to spread hope, healing, and faith. 
  With a calling deeply rooted in compassion and obedience to Christ, Hellen uses her voice not just 
  to sing, but to speak life into broken situations, inspire spiritual growth, and ignite revival in communities. 
  She leads with humility and boldness, empowering the youth, uplifting women, and supporting the less fortunate 
  through outreach programs, missions, and charitable initiatives. Her unwavering commitment to the Gospel continues 
  to leave an indelible mark in churches, conferences, schools, and media platforms, as she remains a beacon 
  of God’s light and love to the world.
</p>

    </div>
    <div class="ministry-image">
      <img src="images/21.jpg" alt="Hellen in Ministry">
    </div>
  </div>
</section>

<!-- AUTHOR SECTION -->
<section id="books" class="author-section">
  <div class="author-content">
    <div class="author-image">
      <img src="images/22.jpg" alt="Hellen the Author">
    </div>
    <div class="author-text">
      <h2>Hellen the Author</h2>
      <p>
        Hellen Muthoni is not only a celebrated gospel minister and media personality but also a published author whose words uplift, inspire, and transform lives. Through her books, she shares powerful personal testimonies, life lessons, and Biblical insights that speak directly to the soul.
        <br><br>
        Her writing style is deeply relatable, drawing from her spiritual journey, experiences in ministry, and passion for empowering others. With every chapter, Hellen brings readers closer to purpose, healing, and divine truth. Her books serve as both a mirror and a guide—encouraging reflection, resilience, and renewed faith.
        <br><br>
        Whether you're seeking spiritual growth, emotional strength, or everyday encouragement, Hellen’s work as an author offers a timeless resource for those navigating life with God at the center.
      </p>
    </div>
  </div>
</section>

<!-- MEDIA SECTION -->
<section id="media" class="media-section">
  <div class="media-content">
    <div class="media-text">
      <h2>Hellen in the Media</h2>
      <p>
        Hellen Muthoni is a celebrated media personality known for her dynamic presence, eloquence, and grace as a presenter. As the face and voice behind inspiring gospel programs, she has connected deeply with audiences across Kenya and beyond, bringing faith, encouragement, and authentic conversations to screens every week.
        <br><br>
        With a gift for storytelling and a heart for ministry, Hellen has mastered the art of engaging her viewers—hosting shows that spotlight local talent, uplift communities, and amplify God’s word in everyday life. Her professionalism, warm energy, and powerful message continue to shape the media landscape with excellence and purpose.
        <br><br>
        From live TV broadcasts to digital platforms, Hellen remains a trusted and beloved figure in the gospel media space.
      </p>
    </div>
    <div class="media-image">
      <img src="images/13.jpg" alt="Hellen as Media Presenter">
    </div>
  </div>
</section>


<!-- AWARDS SECTION -->
<section id="awards" class="awards-section">
  <h2 class="section-title">Awards & Recognitions</h2>
  <div class="awards-container">
    <div class="award-card">
      <img src="images/award1.jpg" alt="Award 1">
      <h3>Best Gospel Artist 2023</h3>
    </div>
    <div class="award-card">
      <img src="images/award2.jpg" alt="Award 2">
      <h3>Inspiration Icon Award</h3>
    </div>
    <div class="award-card">
      <img src="images/award3.jpg" alt="Award 3">
      <h3>Media Personality of the Year</h3>
    </div>
    <div class="award-card">
      <img src="images/award4.avif" alt="Award 4">
      <h3>Philanthropy Excellence Award</h3>
    </div>
  </div>
</section>



<!-- BY THE NUMBERS SECTION -->
<section class="by-the-numbers">
  <div class="overlay"></div>
  <div class="numbers-container">
    <div class="stats-grid">
      <div class="stat-box">
        <h3>16.6M</h3>
        <p>Global Reach</p>
      </div>
      <div class="stat-box">
        <h3>274K</h3>
        <p>Facebook Followers</p>
      </div>
      <div class="stat-box">
        <h3>274K</h3>
        <p>Instagram Followers</p>
      </div>
      <div class="stat-box">
        <h3>961K</h3>
        <p>YouTube Subscriptions</p>
      </div>
      <div class="stat-box">
        <h3>338.5K</h3>
        <p>TikTok Followers</p>
      </div>
      <div class="stat-box">
        <h3>2.1K</h3>
        <p>Event Engagements</p>
      </div>
    </div>
  </div>
</section>


<!-- PODCAST SECTION -->
<section id="podcast" class="podcast-section">
  <div class="podcast-overlay"></div>
  <div class="podcast-content">
    <h2 class="podcast-title">Podcast</h2>
    <p class="podcast-description">
      Join Hellen’s inspiring podcast where she shares powerful stories, spiritual insights, and conversations that uplift and empower her global audience. Tune in weekly to connect with purpose, passion, and authenticity.
    </p>
    <a href="#" class="subscribe-btn">Subscribe to Podcast</a>
  </div>
</section>

<!-- DONATIONS SECTION -->
<section id="donations" class="donations-section">
  <div class="donations-container">
    <div class="donations-text">
      <h2>Support Hellen's Charity Mission</h2>
      <p>
        Hellen Muthoni is deeply committed to uplifting lives through her charity organization, which provides food, education, shelter, and spiritual support to underprivileged children, women, and families across Kenya. Her mission is rooted in compassion and the belief that small acts of kindness can create lasting change.
        <br><br>
        Your donation helps fund outreach programs, school fees, clothing, and essential supplies for those in need. Together, we can be the hands and feet of Jesus—bringing hope, healing, and a brighter future to countless lives.
        <br><br>
        Join Hellen in making a difference today.
      </p>

      <div class="donation-details">
        <h3>How to Donate:</h3>
        <ul>
          <li><strong>Bank Name:</strong> National Bank of Kenya</li>
          <li><strong>Account Name:</strong> Hellen Muthoni Foundation</li>
          <li><strong>Account Number:</strong> 124 556 8390</li>
          <li><strong>Branch:</strong> Nairobi CBD</li>
          <li><strong>Mobile Money (M-Pesa):</strong> Paybill: <strong>124276</strong>, Account: <strong>HellenCharity</strong></li>
        </ul>
      </div>
    </div>
    <div class="donations-image">
      <img src="images/5.jpg" alt="Hellen's Charity Work">
    </div>
  </div>
</section>



<!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What People Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Hellen Muthoni’s gospel ministry has touched my soul deeply. Her music and testimony have brought hope to my family during difficult times. She is truly anointed."</p>
            <h3>- Grace Wanjiku, Worship Leader at Destiny Chapel</h3>
            <div class="stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"I invited Hellen to speak at our women’s conference and she moved the entire room with her words. Her message was authentic, powerful, and full of God’s grace."</p>
            <h3>- Mary Achieng, Founder, Women Arise Kenya</h3>
            <div class="stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Hellen’s outreach work in the community continues to inspire us. She doesn’t just talk — she shows up for the people. Her heart for service is rare and genuine."</p>
            <h3>- Peter Mwangi, Youth Pastor, Nairobi West</h3>
            <div class="stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Hellen Muthoni is a beacon in media. Her shows bring light and positivity to our screens. She is a role model to many young women in Kenya and beyond."</p>
            <h3>- Lucy Naliaka, Media Consultant</h3>
            <div class="stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Her ability to merge faith, music, and community impact is unmatched. Hellen is not just talented—she’s purposeful and full of integrity."</p>
            <h3>- John Kiprotich, CEO, Kingdom Impact Network</h3>
            <div class="stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
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
        <li><a href="#ministries">Ministry</a></li>
        <li><a href="#books">Books</a></li>
        <li><a href="#media">Media</a></li>
        <li><a href="#awards">Awards</a></li>
		<li><a href="#podcast">Podcast</a></li>
        <li><a href="#donations">Donations</a></li>
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