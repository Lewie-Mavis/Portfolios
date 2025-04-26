<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dr. Wale Akinyemi </title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

</head>
<body>
<!-- Header -->
<header>
    <a href="#" class="logo" onclick="scrollToTop()">
        Dr. Wale Akinyemi
    </a>

    <nav class="nav-links" id="navLinks">
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#books">Books</a>
        <a href="bookstore.html?id=#unique-cart-section">Cart</a>
        <a href="#contact">Contact</a>

        <!-- Search Bar -->
        <div id="search-bar">
            <input type="text" class="search-box" placeholder="Search...">
        </div>

        <!-- Auth buttons -->
        <button class="btn signup" id="openSignUpForm">Sign Up</button>
        <button class="btn login" id="openLoginForm">Login</button>
    </nav>

    <div class="menu-toggle" onclick="toggleMenu()">
        <i class="fas fa-bars"></i>
    </div>
</header>

<!-- Sign Up Modal -->
<div id="signUpModal" class="modal">
    <div class="modal-content">
        <span class="close-btn" id="closeSignUp">&times;</span>
        <h2>Sign Up</h2>
        <form action="signup.php" method="POST">
            <input type="text" name="firstname" placeholder="First Name" required />
            <input type="text" name="lastname" placeholder="Last Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="phone" placeholder="Phone Number" pattern="[0-9]{10,15}" />
            <input type="password" name="password" placeholder="Password" required />
            <input type="password" name="confirm_password" placeholder="Confirm Password" required />
            <label>
                <input type="checkbox" name="terms" required />
                I agree to the Terms and Conditions
            </label>
            <button type="submit">Create Account</button>
        </form>
    </div>
</div>

<!-- Login Modal -->
<div id="loginModal" class="modal">
    <div class="modal-content">
        <span class="close-btn" id="closeLogin">&times;</span>
        <h2>Login</h2>
        <form action="login.php" method="POST">
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Log In</button>
        </form>
    </div>
</div>

<!-- JS Script -->
<script src="scripts/signup.js"></script>


	

    <!-- Hero Section -->
<section class="hero">
    <div class="hero-content">
        <h1>Lead with purpose. Own your vision.</h1>
        <p>Leadership Consultant | Expert in Corporate Culture & Personal Development | Author</p>

        <div class="button-container">
            <a href="#pillars" class="cta-button">Get Started</a>
            <a href="#events" class="services-button">Events</a>
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
        <!-- Image Slider Section -->
        <div class="about-photo-slider">
            <div class="slide">
                <img src="images/1.jpg" alt="Dr. Wale Akinyemi ">
            </div>
            <div class="slide">
                <img src="images/3.jpg" alt="Dr. Wale Akinyemi ">
            </div>
			<div class="slide">
                <img src="images/4.jpg" alt="Dr. Wale Akinyemi ">
            </div>
			<div class="slide">
                <img src="images/5.jpg" alt="Dr. Wale Akinyemi ">
            </div>
			<div class="slide">
                <img src="images/6.jpg" alt="Dr. Wale Akinyemi ">
            </div>
			<div class="slide">
                <img src="images/7.jpg" alt="Dr. Wale Akinyemi ">
            </div>
			<div class="slide">
                <img src="images/9.jpg" alt="Dr. Wale Akinyemi ">
            </div>
			<div class="slide">
                <img src="images/14.jpg" alt="Dr. Wale Akinyemi ">
            </div>

        </div>

        <!-- Description Section -->
        <div class="about-description">
            <p>Welcome, I’m <strong>Dr. Wale Akinyemi</strong>, a renowned Leadership Consultant and Corporate Culture Expert. I am known for my inspirational talks and writings on Personal Development and Leadership. As the preferred consultant for numerous Fortune 500 companies and governments worldwide, I have helped shape successful leadership strategies that foster growth, innovation, and positive corporate cultures. My work focuses on empowering leaders and organizations to achieve excellence by creating a conducive environment for personal and professional development.</p>
            <a href="#contact" class="btn-consultation">Get Consultation</a>
        </div>
    </div>
</section>
<script src="scripts/slider.js"></script>


<section id="events">
    <h2 class="section-title">Events That Liberate</h2>

    <!-- Swiper Container -->
    <div class="swiper events-slider">
        <div class="swiper-wrapper">

            <!-- Event 1 -->
            <div class="swiper-slide event-card">
                <img src="images/5.jpg" alt="Event 1" class="event-image">
                <h3>Leadership Summit</h3>
                <p>Join industry leaders at this exclusive summit, where innovative strategies and insights will be shared.</p>
                <a href="#" class="btn-register">Register Now</a>
            </div>

            <!-- Event 2 -->
            <div class="swiper-slide event-card">
                <img src="images/6.jpg" alt="Event 2" class="event-image">
                <h3>Executive Workshop</h3>
                <p>This workshop will focus on effective leadership strategies, empowering executives to drive change in their organizations.</p>
                <a href="#" class="btn-register">Register Now</a>
            </div>

            <!-- Event 3 -->
            <div class="swiper-slide event-card">
                <img src="images/1.jpg" alt="Event 3" class="event-image">
                <h3>Corporate Culture Conference</h3>
                <p>A deep dive into building a strong corporate culture that promotes productivity and employee engagement.</p>
                <a href="#" class="btn-register">Register Now</a>
            </div>

            <!-- Event 4 -->
            <div class="swiper-slide event-card">
                <img src="images/12.jpg" alt="Event 4" class="event-image">
                <h3>Innovation and Growth Expo</h3>
                <p>Attend this expo to network and learn from leading innovators on how to scale businesses for long-term growth.</p>
                <a href="#" class="btn-register">Register Now</a>
            </div>

        </div>

        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>

        <!-- Add Navigation Arrows -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</section>

<script src="scripts/swiper.js"></script>

<!-- ✅ Updated Unique Event Registration Modal -->
<div id="eventRegisterModal" class="modal">
    <div class="modal-content">
        <span class="close-btn" id="closeEventRegisterModal">&times;</span>
        <h2>Register for the Event</h2>
        <p>Please enter your email address to register:</p>
        <form action="register_event.php" method="POST">
            <input type="email" name="email" placeholder="Email Address" required />
            <button type="submit">Register</button>
        </form>
    </div>
</div>

<!-- ✅ Updated Modal Script -->
<script src="scripts/events.js"></script>


<!-- Video Section -->
<section class="video-section">
  <div class="video-container">
    <video class="video" autoplay muted loop>
      <source src="videos/video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="overlay">
      <h2>Experience the Journey</h2>
      <a href="javascript:void(0);" class="ctav-button" onclick="openGetStartedModal()">Get Started</a>
    </div>
  </div>
</section>

<!-- Get Started Modal for Wale Akinyemi -->
<div id="get-started-modal" class="get-started-modal">
  <div class="get-started-modal-content">
    <span class="close-get-started-btn" onclick="closeGetStartedModal()">&times;</span>
    <h3>Get Started</h3>
    <form id="get-started-form" action="get_started.php" method="POST">
      <label for="get-started-email">Email Address:</label>
      <input type="email" id="get-started-email" name="email" required>

      <button type="submit" class="submit-btn">Submit</button>
    </form>
  </div>
</div>
<script src="scripts/getstarted.js"></script>


  
<section id="pillars" class="pillars-of-life">
  <div class="pillars-container">
    <div class="pillars-text">
      <h1>Pillars of an Extraordinary Life</h1>
      <p>Building an extraordinary life requires a solid foundation built on core principles. These pillars guide us toward fulfillment, happiness, and success. Let’s explore the key areas that help shape a meaningful and purposeful existence.</p>
    </div>
    <div class="pillars-image">
      <img src="images/16.jpg" alt="Pillars of Life">
    </div>
  </div>
</section>

<section class="author-section">
  <div class="author-container">
    <!-- Author Image -->
    <div class="author-image">
      <img src="images/10.jpg" alt="Author Photo">
    </div>

    <!-- Author Description -->
    <div class="author-content">
      <h2>Meet the Author</h2>
      <p>
        Dr. Wale Akinyemi is a visionary writer whose books delve deep into personal growth, leadership, and innovation. 
        With a unique ability to simplify complex concepts, he inspires readers to take meaningful action and embrace 
        transformative thinking. Every page he writes is crafted to empower individuals to unlock their full potential.
      </p>
    </div>
  </div>
</section>

<!-- Include Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

<section id="books" class="books-section">
  <h2 class="section-title">Books by Dr. Wale Akinyemi</h2>

  <div class="swiper books-slider">
    <div class="swiper-wrapper">

<!-- Book 1 -->
<div class="swiper-slide book-card">
  <img src="images/book1.jpg" alt="Book 1" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">Beyond Intelligence</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=1#1" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 2 -->
<div class="swiper-slide book-card">
  <img src="images/book2.jpg" alt="Book 2" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">Brand Control</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=2#2" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 3 -->
<div class="swiper-slide book-card">
  <img src="images/book3.jpg" alt="Book 3" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">Creative Thinking</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=3#3" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 4 -->
<div class="swiper-slide book-card">
  <img src="images/book4.jpg" alt="Book 4" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">Drive</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=4#4" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 5 -->
<div class="swiper-slide book-card">
  <img src="images/book5.jpg" alt="Book 5" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">Help! My Chocolate is Melting</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=5#5" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 6 -->
<div class="swiper-slide book-card">
  <img src="images/book6.jpg" alt="Book 6" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">I Wale</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=6#6" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 7 -->
<div class="swiper-slide book-card">
  <img src="images/book7.jpg" alt="Book 7" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">I Wale II</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=7#7" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 8 -->
<div class="swiper-slide book-card">
  <img src="images/book8.jpg" alt="Book 8" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">Limitless</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=8#8" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 9 -->
<div class="swiper-slide book-card">
  <img src="images/book9.jpg" alt="Book 9" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">Mega Thinking</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=9#9" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 10 -->
<div class="swiper-slide book-card">
  <img src="images/book10.jpg" alt="Book 10" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">Mental Independence</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=10#10" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 11 -->
<div class="swiper-slide book-card">
  <img src="images/book11.jpg" alt="Book 11" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">Success Mindset</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=11#11" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 12 -->
<div class="swiper-slide book-card">
  <img src="images/book12.jpg" alt="Book 12" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">The Growth Mindset</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=12#12" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 13 -->
<div class="swiper-slide book-card">
  <img src="images/book13.jpg" alt="Book 13" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">Innovation Leadership</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=13#13" class="ctab-button">View More</a>
  </div>
</div>

<!-- Book 14 -->
<div class="swiper-slide book-card">
  <img src="images/book14.jpg" alt="Book 14" class="book-image" />
  <div class="book-details">
    <h3 class="book-title">Leadership Excellence</h3>
    <div class="stars">
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <p class="book-price">Ksh 1,200.00</p>
    <a href="bookstore.html?id=14#14" class="ctab-button">View More</a>
  </div>
</div>

    </div>

    <!-- Swiper navigation -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>

  </div>
  <div class="bookstore-btn-container">
    <a href="bookstore.html" class="bookstore-btn">Visit Our Bookstore</a>
  </div>
</section>



<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Swiper Initialization -->
<script src="scripts/booksslider.js"></script>


    
   <!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title">By the Numbers</h2>
    <div class="numbers-background">
        <div class="numbers-grid">
            <div class="number-card">
                <h3 class="count" data-target="500">0</h3><span>+</span>
                <p>Consulting Projects Delivered</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="500">0</h3><span>+</span>
                <p> Clients Served</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="25">0</h3><span>+</span>
                <p>Years of Leadership Experience</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="40">0</h3><span>+</span>
                <p>Books Authored</p>
            </div>
        </div>
    </div>
</section>




<h2 class="section-title">Featured In</h2>

<!-- Featured In Section -->
<div class="featured-in-section">
    <div class="featured-item">
        <img src="images/feature1.png" alt="Featured 1" class="featured-logo">
    </div>
    <div class="featured-item">
        <img src="images/feature2.png" alt="Featured 2" class="featured-logo">
    </div>
    <div class="featured-item">
        <img src="images/feature3.png" alt="Featured 3" class="featured-logo">
    </div>
    <div class="featured-item">
        <img src="images/feature4.png" alt="Featured 4" class="featured-logo">
    </div>

</div>


<!-- Newsletter Section -->
<section class="newsletter-section">
  <div class="newsletter-overlay">
    <h2>Stay Inspired. Get Updates.</h2>
    <p>Subscribe to Dr. Wale Akinyemi’s newsletter for the latest insights, book releases, and empowering content.</p>
    
    <form class="newsletter-form">
      <input type="email" placeholder="Enter your email" required>
      <button type="submit">Subscribe</button>
    </form>
  </div>
</section>


<section id="results" class="results-section">
  <div class="container">
    <h2 class="section-title">Dr. Wale's Results</h2>
    <p class="section-subtitle">Impacting lives and organizations around the globe</p>

    <div class="results-grid">
      <div class="result-card">
        <h3>100+</h3>
        <p>Organizations Transformed</p>
      </div>

      <div class="result-card">
        <h3>250K+</h3>
        <p>Individuals Empowered</p>
      </div>

      <div class="result-card">
        <h3>40+</h3>
        <p>Books Authored</p>
      </div>

      <div class="result-card">
        <h3>20+</h3>
        <p>Countries Reached</p>
      </div>
    </div>
  </div>
</section>

    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What Clients Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Dr. Wale Akinyemi’s wisdom on leadership and personal development has reshaped my mindset and approach to success."</p>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> <!-- 4.5/5 Rating -->
            </div>
            <div class="testimonial-info">
                <div class="testimonial-image">
                    <img src="images/testimonials1.jpeg" alt="Louisa Ilamaha">
                </div>
                <h3>- Louisa Ilamaha</h3>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Every time I listen to Dr. Wale Akinyemi, I walk away with powerful lessons. His content is inspiring, practical, and life-changing."</p>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> <!-- 5/5 Rating -->
            </div>
            <div class="testimonial-info">
                <div class="testimonial-image">
                    <img src="images/testimonials2.png" alt="Dr. Ruth Mwangi">
                </div>
                <h3>- Dr. Ruth Mwangi</h3>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"A true thought leader! Dr. Wale’s teachings have helped me unlock my potential and take charge of my growth."</p>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> <!-- 5/5 Rating -->
            </div>
            <div class="testimonial-info">
                <div class="testimonial-image">
                    <img src="images/testimonials3.jpg" alt="Lewie Mavis">
                </div>
                <h3>- Lewie Mavis</h3>
            </div>
        </div>
    </div>
</section>


<!-- Ready to Start the Journey Section -->
<section class="ctar-section">
  <div class="ctar-overlay">
    <h1>Ready to Start the Journey?</h1>
    <a href="javascript:void(0);" class="ctar-button" onclick="openStartNowModal()">Start Now</a>
  </div>
</section>

<!-- Start Now Modal -->
<div id="start-now-modal" class="start-now-modal">
  <div class="start-now-modal-content">
    <span class="close-start-now-btn" onclick="closeStartNowModal()">&times;</span>
    <h3>Begin Your Journey</h3>
    <form id="start-now-form" action="start_now.php" method="POST">
      <label for="start-now-email">Email Address:</label>
      <input type="email" id="start-now-email" name="email" required>

      <button type="submit" class="submit-btn">Submit</button>
    </form>
  </div>
</div>

<script src="scripts/startnow.js"></script>



	
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
            <p><strong>Address:</strong> Nairobi, Kenya</p>
            <p><strong>Opening Hours:</strong> Mon - Sun: 24 / 7</p>
            <p><strong>Phone:</strong> +254 700 000 000</p>
            <p><strong>Email:</strong> </p>
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
				<li><a href="#events">Events</a></li>
                <li><a href="#books">Books</a></li>
				<li><a href="#numbers">Numbers</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
        <!-- Right Section: Social Links -->
        <div class="footer-social">
    <a href="" class="social-icon" target="_blank">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fab fa-youtube"></i>
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fas fa-briefcase"></i> 
    </a>
    <a href="" class="social-icon" target="_blank">
        <i class="fas fa-globe"></i> 
    </a>
</div>

    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
        <p>&copy; 2025 Dr. Wale Akinyemi. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>


    <script src="scripts/script.js"></script>
	
<script src="scripts/search.js"></script>


	
</body>
</html>