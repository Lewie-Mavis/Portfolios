<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SAFARIS WITH ELLAH</title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo">SAFARIS WITH ELLAH</a>
    <nav class="nav-links">
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Experiences</a>
        <a href="#numbers">Numbers</a>
        <a href="#tech-stack">Destinations</a>
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
        <h1>Discover Kenya's Coastal Wonders with Safaris with Ellah</h1>
        <p>Luxury Safaris | Stunning Beaches | Unforgettable Adventures</p>
        <div class="button-container">
             <a href="#contact" class="cta-button">Book Your Tour Now</a>
            <a href="#tech-stack" class="services-button">Explore Our Destinations</a>
        </div>
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
   <h2 class="section-title">About Us</h2>
<div class="about-content">
    <div class="about-photo-slider">
        <div class="slide">
            <img src="images/about.jpg" alt="Safaris with Ellah">
        </div>
        <div class="slide">
            <img src="images/2.jpg" alt="Safaris with Ellah">
        </div>
        <div class="slide">
            <img src="images/3.jpg" alt="Safaris with Ellah">
        </div>
		<div class="slide">
            <img src="images/4.jpg" alt="Safaris with Ellah">
        </div>
		<div class="slide">
            <img src="images/5.jpg" alt="Safaris with Ellah">
        </div>
		<div class="slide">
            <img src="images/6.jpg" alt="Safaris with Ellah">
        </div>
		<div class="slide">
            <img src="images/7.jpg" alt="Safaris with Ellah">
        </div>
		<div class="slide">
            <img src="images/8.jpg" alt="Safaris with Ellah">
        </div>
        <!-- Add more slides here as needed -->
    </div>
</div>


        <div class="about-description">
            <p>Welcome to <strong>Safaris with Ellah</strong>, your ultimate gateway to unforgettable adventures along Kenya’s breathtaking coastline! Nestled in the heart of the coastal region, we specialize in curating world-class safari experiences, beach getaways, cultural tours and thrilling marine adventures that will leave you in awe.</p>

            <p>Whether you dream of strolling along the pristine white sands of Diani Beach, diving into the crystal-clear waters of Wasini Island, exploring the historical marvels of Fort Jesus, or witnessing the majestic wildlife of Shimba Hills, we make every journey extraordinary. Our expert guides, luxury transport and personalized itineraries ensure a seamless and enriching experience for every traveler.</p>

            <p>With <strong>Safaris with Ellah</strong>, you’re not just taking a trip, you are embarking on a lifetime adventure filled with magical moments, authentic Kenyan hospitality and breathtaking landscapes. Let us take you on an unforgettable journey across Mombasa, Diani, Kilifi and beyond!</p>

            <a href="#contact" class="btn-consultation">Book Your Adventure</a>
        </div>
    </div>
</section>

<script src="scripts/slider.js"></script>


   
    <!-- Services Section --> 
<section id="services">
    <h2 class="section-title">Our Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-map-marked-alt"></i>
            <h3>Personalized Itineraries</h3>
            <p>Tailoring tours to individual preferences such as history, adventure, food, or culture.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-user-tie"></i>
            <h3>Local Guide Services</h3>
            <p>Experienced local guides offering insider tips and stories for a richer experience.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-users"></i>
            <h3>Private & Group Tours</h3>
            <p>Exclusive private tours or social group experiences with flexible schedules.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-palette"></i>
            <h3>Cultural Immersion Experiences</h3>
            <p>Cooking classes, local crafts workshops, and cultural performances.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-leaf"></i>
            <h3>Eco-Friendly Tours</h3>
            <p>Sustainable travel options with nature walks and conservation activities.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-hiking"></i>
            <h3>Adventure & Outdoor Activities</h3>
            <p>Hiking, kayaking, zip-lining, and wildlife safaris for thrill-seekers.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-utensils"></i>
            <h3>Food & Drink Experiences</h3>
            <p>Local food tours, wine tastings, and farm-to-table dining experiences.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-spa"></i>
            <h3>Wellness & Relaxation</h3>
            <p>Yoga retreats, spa packages, and peaceful relaxation destinations.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-car"></i>
            <h3>Transportation Services</h3>
            <p>Airport & SGR transfers, private vehicles, and scenic guided drives.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-camera"></i>
            <h3>Photography Tours</h3>
            <p>Guided photography experiences to capture stunning landscapes & culture.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-gem"></i>
            <h3>Luxury Services</h3>
            <p>High-end accommodations, fine dining, and private luxury experiences.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-child"></i>
            <h3>Family-Friendly Tours</h3>
            <p>Kid-friendly activities, theme parks, and educational experiences.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-moon"></i>
            <h3>Night Tours</h3>
            <p>Evening tours including night markets, stargazing, and dinner cruises.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-users-cog"></i>
            <h3>Group Travel Planning</h3>
            <p>Logistics for corporate retreats, school trips, and destination weddings.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-ticket-alt"></i>
            <h3>VIP Access & Skip-the-Line</h3>
            <p>Exclusive passes to attractions, museums, concerts, and theme parks.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-landmark"></i>
            <h3>Historical & Educational Tours</h3>
            <p>Guided tours focused on history, art, architecture, and local heritage.</p>
        </div>
    </div>
</section>


    <!-- Portfolio Section -->
<!-- Portfolio Section -->
<section id="portfolio">
    <h2 class="section-title">Our Experiences</h2>
    <div class="portfolio-grid">
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-map-marked-alt"></i>
            <h3>Custom Travel Itineraries</h3>
            <p>Tailored travel plans for history lovers, adventure seekers, food enthusiasts, and cultural explorers.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-user-tie"></i>
            <h3>Expert Guided Tours</h3>
            <p>Experienced local guides providing in-depth knowledge and insider stories.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-hiking"></i>
            <h3>Adventure & Outdoor Activities</h3>
            <p>Exciting experiences including hiking, zip-lining, safaris, and water sports.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-utensils"></i>
            <h3>Culinary & Wine Tours</h3>
            <p>Exclusive food tastings, farm-to-table dining, and wine-tasting experiences.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-leaf"></i>
            <h3>Eco-Friendly & Sustainable Tours</h3>
            <p>Nature-friendly tours with conservation-focused experiences and green travel initiatives.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-moon"></i>
            <h3>Night & Cultural Experiences</h3>
            <p>Evening tours featuring night markets, stargazing, cultural performances, and city lights.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-car"></i>
            <h3>Luxury & Private Transport</h3>
            <p>Private airport transfers, chauffeur services, and scenic road trips.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-camera"></i>
            <h3>Photography & Scenic Tours</h3>
            <p>Guided tours to capture breathtaking landscapes, iconic landmarks, and hidden gems.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-landmark"></i>
            <h3>Historical & Educational Tours</h3>
            <p>Deep explorations of historical sites, museums, and cultural heritage landmarks.</p>
        </div>
        <div class="portfolio-item">
            <i class="portfolio-icon fas fa-ticket-alt"></i>
            <h3>VIP Experiences</h3>
            <p>Exclusive access to major attractions, museums, and special events without long waits.</p>
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
                <p>Destinations Covered</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="1000">0</h3><span>+</span>
                <p>Happy Travellers</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="10">0</h3><span>+</span>
                <p>Years of Experience</p>
            </div>
        </div>
    </div>
</section>


<section id="tech-stack">
    <h2 class="section-title">Top Coastal Destinations</h2>
    <div class="tech-grid">

        <div class="tech-card">
            <i class="fas fa-umbrella-beach"></i>
            <h3>Diani Beach</h3>
            <p>Voted one of Africa’s best beaches, Diani offers white sands, clear waters, and a perfect tropical escape.</p>
        </div>

        <div class="tech-card">
            <i class="fas fa-water"></i>
            <h3>Wasini Island</h3>
            <p>Famous for its dolphin safaris, coral reefs, and the stunning Kisite Marine Park for snorkeling and diving.</p>
        </div>

        <div class="tech-card">
            <i class="fas fa-landmark"></i>
            <h3>Fort Jesus</h3>
            <p>A UNESCO World Heritage site, this 16th-century fortress offers deep historical insights into Mombasa’s past.</p>
        </div>

        <div class="tech-card">
            <i class="fas fa-fish"></i>
            <h3>Haller Park</h3>
            <p>A nature lover’s paradise with giraffes, hippos, and crocodiles. A perfect blend of conservation and tourism.</p>
        </div>

        <div class="tech-card">
            <i class="fas fa-ship"></i>
            <h3>Tamarind Dhow</h3>
            <p>Experience fine dining aboard a Swahili-style dhow as you sail along Mombasa’s stunning coastline.</p>
        </div>

        <div class="tech-card">
            <i class="fas fa-sun"></i>
            <h3>Nyali Beach</h3>
            <p>A serene escape with luxurious resorts, watersports, and spectacular sunrise views over the Indian Ocean.</p>
        </div>

        <div class="tech-card">
            <i class="fas fa-swimmer"></i>
            <h3>Watamu Marine Park</h3>
            <p>Snorkel and dive in one of Kenya’s most beautiful coral reefs, home to diverse marine life.</p>
        </div>

        <div class="tech-card">
            <i class="fas fa-mountain"></i>
            <h3>Shimba Hills</h3>
            <p>Escape to this scenic national reserve with breathtaking waterfalls, lush forests, and rare wildlife.</p>
        </div>

        <div class="tech-card">
            <i class="fas fa-torii-gate"></i>
            <h3>Mida Creek</h3>
            <p>Enjoy canoeing through mangrove forests and witness one of Kenya’s most stunning sunset spots.</p>
        </div>

        <div class="tech-card">
            <i class="fas fa-anchor"></i>
            <h3>Kilifi Creek</h3>
            <p>A hidden gem known for deep-sea fishing, boat rides, and scenic beauty along the turquoise waters.</p>
        </div>

        <div class="tech-card">
            <i class="fas fa-hotel"></i>
            <h3>Vipingo Ridge</h3>
            <p>A luxury destination with a world-class golf course, pristine beaches, and high-end holiday villas.</p>
        </div>

        <div class="tech-card">
            <i class="fas fa-tree"></i>
            <h3>Arabuko Sokoke Forest</h3>
            <p>Explore the largest coastal forest in East Africa, home to rare bird species and indigenous wildlife.</p>
        </div>

    </div>
</section>




<script>

</script>



    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What Our Clients Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"Our safari with Safaris with Ellah was an unforgettable experience! The guides were knowledgeable, and the coastal sights were breathtaking. I highly recommend their services to anyone looking to explore the beauty of Kenya!"</p>
            <h3>- Sarah K., Traveler</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"The safari experience with Safaris with Ellah exceeded all expectations. The team made sure we felt safe and provided personalized experiences that made our trip truly memorable."</p>
            <h3>- Michael B., Adventure Seeker</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"I had the best time on my coastal safari with Ellah! From the pristine beaches to the amazing wildlife, everything was perfect. The guides went above and beyond to ensure we had the most authentic experience possible."</p>
            <h3>- David P., Wildlife Enthusiast</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Safaris with Ellah is the best way to explore Kenya’s coastal region. The team offers a tailored experience with exceptional attention to detail. We felt truly immersed in nature and culture!"</p>
            <h3>- Jennifer M., Nature Lover</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"We had an amazing time on the beach safari with Safaris with Ellah! The service was impeccable, and we felt like we were treated as VIPs the entire trip. I would book again in a heartbeat!"</p>
            <h3>- Ethan G., Beach Enthusiast</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"From start to finish, Safaris with Ellah provided a flawless experience. The coastal safaris were breathtaking, the food was great, and the staff was incredibly friendly and knowledgeable. Truly a five-star experience!"</p>
            <h3>- Olivia R., Luxury Traveler</h3>
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
            <p><strong>Address:</strong> Diani Coast, Kenya</p>
            <p><strong>Opening Hours:</strong> Mon - Sun: 24 / 7</p>
            <p><strong>Phone:</strong> +254 799 201222</p>
            <p><strong>Email:</strong> safariswithellah@gmail.com</p>
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Experiences</a></li>
				<li><a href="#numbers">Numbers</a></li>
				<li><a href="#tech-stack">Destinations</a></li>
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
        <p>&copy; 2025 Safaris with Ellah. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>
</body>
</html>