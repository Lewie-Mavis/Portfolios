<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>African Legends Publishing | Inspiring African Stories</title>

  <!-- Meta Description (For SEO) -->
  <meta name="description" content="African Legends Publishing is dedicated to capturing, preserving, and promoting powerful African stories through books, mentorship, and empowerment initiatives." />

  <!-- Keywords (Optional, not prioritized by Google but can be used) -->
  <meta name="keywords" content="African Publishing, African Authors, Inspirational Stories, African Books, Storytelling, African Literature" />

  <!-- Author -->
  <meta name="author" content="African Legends Publishing" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://www.africanlegends.africa" />

  <!-- Open Graph Meta Tags (For Social Media Sharing) -->
  <meta property="og:title" content="African Legends Publishing" />
  <meta property="og:description" content="Preserving and promoting Africa’s greatest stories, legends, and leaders through publishing and storytelling." />
  <meta property="og:image" content="https://www.africanlegends.africa/images/african-legends.jpg" />
  <meta property="og:url" content="https://www.africanlegends.africa/" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card Meta -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="African Legends Publishing" />
  <meta name="twitter:description" content="Preserving and promoting Africa’s greatest stories, legends, and leaders through publishing and storytelling." />
  <meta name="twitter:image" content="https://www.africanlegends.africa/images/african-legends.jpg" />

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="images/african-legends.jpg" />

  <!-- Fonts & Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Stylesheet -->
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <!-- Header -->
<header>
  <div class="logo-container" onclick="scrollToTop()">
    <img src="images/african-legends.jpg" alt="African Legends Logo" class="logo slide-in-right">
    <div class="logo-text slide-in-right">African Legends</div>
  </div>

  <nav>
    <ul class="nav-links">
      <li><a href="index.php">Home</a></li>
      <li><a href="index.php?id=#about-us">About</a></li>
      <li><a href="index.php?id=#publish">Get Published</a></li>
      <li><a href="index.php?id=#authors">Authors</a></li>
      <li><a href="index.php?id=#stories">Stories</a></li>
      <li><a href="#contact">Contact</a></li>

<!-- 🔍 Search Bar -->
<li class="search-bar-container">
  <form class="nav-search-form" onsubmit="return searchSection(event)">
    <input type="text" id="search-input" placeholder="Search..." />
    <button type="submit"><i class="fas fa-search"></i></button>
  </form>
</li>


      <li><a href="login.php" class="auth-btn login-btn">Login</a></li>
      <li><a href="signup.php" class="auth-btn signup-btn">Sign Up</a></li>
    </ul>

    <button class="mobile-menu-btn">
      <i class="fas fa-bars"></i>
    </button>
  </nav>
</header>

<script>
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

  <!-- Hero Section -->
  <section class="hero">
    <h1>Harriet Wandira Rumanyika</h1>
  </section>
  
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
  gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero p", { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
</script>


<!-- Author Profile Section -->
<section class="author-profile-section" id="author-profile-section">
  <div class="author-profile-container">
    <div class="author-profile-info slide-in-right">

      <!-- Profile Image on Top -->
      <div class="author-profile-image slide-in-left">
        <img src="images/harriet1.jpeg" alt="Dr. Harriet Wandira Rumanyika">
      </div>

      <!-- Author Name -->
      <h2 class="author-profile-name">About Dr. Harriet Wandira Rumanyika</h2>

      <!-- Author Description -->
      <p class="author-profile-description">
        Harriet Wandira is a seasoned business executive with over 20 years of experience in logistics, operations, partnerships, and leadership across Africa. She has led high-impact teams and managed complex projects in Uganda, Kenya, Ghana, Tanzania, and Liberia for international organizations and UN agencies.
      </p>
      <p class="author-profile-description">
        Known for her visionary leadership, Harriet has excelled in roles spanning human resources, sales and marketing, and supply chain management. Respected for her people skills and ability to navigate change, she engages stakeholders at all levels with ease.
      </p>
      <p class="author-profile-description">
        An energetic leader who loves adventure, Harriet is also a committed philanthropist and a proud daughter, wife, and mother of three.
      </p>
    </div>
  </div>
</section>

<!-- Books Authored Section -->
<section class="books-authored-section">
  <div class="books-authored-container slide-in-right">
    <h2 class="books-authored-title">Books Authored</h2>

    <div class="books-grid slide-in-right">
      <!-- Book Card -->
      <div class="book-card">
        <img src="images/harriet.jpeg" alt="Stretch Book Cover" class="book-image">
        <div class="book-details">
          <h3 class="book-title">STRETCH</h3>
          <p class="book-description">
            How to say no to limitations and yes to greatness.
          </p>
        </div>
      </div>
    </div>

    <!-- Move Back Button -->
    <a href="index.php?id=#authors" class="author-profile-back-button slide-in-right">← Go Back</a>
  </div>
</section>







<!-- Publish Now -->
<section class="publish-now-section">
  <div class="publish-now-overlay">
    <h2 class="publish-now-heading slide-in-right">Share Your Legend</h2>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPYeGiaCSJaC7ZP7ba7skLcNSSgztZCFKYR5LTcQMWNHoPtw/viewform?usp=header" class="publish-now-button slide-in-right" target="blank">Get Published With Us</a>
  </div>
</section>



  <!-- Contact Section -->
  <section class="section" id="contact">
    <div class="section-title slide-in-right">
      <h2>Get in Touch</h2>
    </div>
    
    <div class="contact-container slide-in-right">
      <div class="contact-info">
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="contact-details">
            <h3>Email</h3>
            <p>christine@powertalks.biz</p>
          </div>
        </div>
        
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fab fa-whatsapp"></i>
          </div>
          <div class="contact-details">
            <h3>WhatsApp</h3>
            <p>+254 745 679735</p>
          </div>
        </div>
        
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class="contact-details">
            <h3>Visit Us</h3>
            <p>Nairobi, Kenya</p>
            <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
      
      <div class="contact-form">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" class="form-control" placeholder="Your name">
        </div>
        
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" class="form-control" placeholder="Your email">
        </div>
        
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" class="form-control" placeholder="Subject">
        </div>
        
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" class="form-control" placeholder="How can we help you?"></textarea>
        </div>
        
        <button class="btn btn-primary" style="width: 100%;">Send Message</button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footer-content">
      <div class="footer-logo">
        <div class="logo-text">African Legends</div>
        <p>Bringing African stories to the world. Preserving heritage, inspiring futures.</p>
        <p>&copy; 2025 African Legends Publishing. All Rights Reserved.</p>
      </div>
      
      <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="index.php"><i class="fas fa-chevron-right"></i> Home</a></li>
          <li><a href="index.php?id=#about-us"><i class="fas fa-chevron-right"></i> About</a></li>
          <li><a href="index.php?id=#authors"><i class="fas fa-chevron-right"></i> Authors</a></li>
          <li><a href="index.php?id=#publish"><i class="fas fa-chevron-right"></i> Get Published</a></li>
          <li><a href="index.php?id=#stories"><i class="fas fa-chevron-right"></i> Stories</a></li>
          <li><a href="index.php?id=#contact"><i class="fas fa-chevron-right"></i> Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-social">
        <h3>Connect With Us</h3>
        <div class="social-icons">
          <a href="#" class="social-icon" target="blank"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon" target="blank"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon" target="blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/showcase/africa-legends-publishing/posts/?feedView=all" class="social-icon" target="blank"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="social-icon" target="blank"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
    
    <div class="copyright slide-in-right">
      <p>Proudly African. Globally Inspired.</p>
    </div>
  </footer>

<script src="scripts/script.js"></script>
<script src="scripts/slide.js"></script>


</body>
</html>