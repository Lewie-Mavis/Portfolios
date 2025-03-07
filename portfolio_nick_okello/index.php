<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ALMOND RIDGE VILLAS</title>
	<link rel="icon" type="image/png" href="images/icon.png"> <!-- Ensure correct path -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
    <a href="#" class="logo">Almond Ridge Villas</a>
    <nav class="nav-links">
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Accommodations</a>
        <a href="#tech-stack">Destinations</a>
        <a href="#testimonials">Reviews</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="menu-toggle" onclick="toggleMenu()">
        <i class="fas fa-bars"></i> <!-- Hamburger Icon -->
    </div>
</header>

	

    <!-- Hero Section -->
   <section class="hero">
    <div class="hero-content">
        <div class="hero-header">
            <h1>Escape to Paradise at Almond Ridge Villas (Mfalme & Sita)</h1>
            <div class="logo-container">
                <img src="images/logo.jpeg" alt="Almond Ridge Villas Logo">
            </div>
        </div>
        <p>Where luxury meets nature. Indulge in breathtaking ocean views, world-class comfort and unforgettable adventures along the Diani coast.</p>
        <div class="button-container">
            <a href="#services" class="cta-button">View Our Services</a>
            <a href="#portfolio" class="services-button">Discover Our Villas</a>
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

   <!-- Slider Section (on its own row) -->
   <div class="about-photo-slider">
        <div class="slide">
            <img src="images/a.jpeg" alt="Safaris with Ellah">
        </div>
        <div class="slide">
            <img src="images/j.jpeg" alt="Safaris with Ellah">
        </div>
        <div class="slide">
            <img src="images/r.jpeg" alt="Safaris with Ellah">
        </div>
        <div class="slide">
            <img src="images/a2.jpeg" alt="Safaris with Ellah">
        </div>
        <div class="slide">
            <img src="images/a4.jpeg" alt="Safaris with Ellah">
        </div>
        <div class="slide">
            <img src="images/b.jpeg" alt="Safaris with Ellah">
        </div>
        <div class="slide">
            <img src="images/a20.jpeg" alt="Safaris with Ellah">
        </div>
        <div class="slide">
            <img src="images/l.jpeg" alt="Safaris with Ellah">
        </div>
   </div>

   <!-- Description Section -->
   <div class="about-description">
       <p>Welcome to <strong>Almond Ridge Villas</strong>, your exclusive escape to luxury and tranquility on Kenya’s breathtaking Diani Coast! Nestled in a serene environment, our villas offer the perfect blend of modern elegance, coastal charm, and ultimate relaxation.</p>
       <p>Whether you're looking to unwind on the pristine white sands of Diani Beach, indulge in world-class dining, explore the vibrant marine life of Wasini Island, or experience the rich Swahili culture, Almond Ridge Villas provides a seamless getaway tailored just for you. Our thoughtfully designed accommodations, exceptional hospitality, and curated experiences ensure an unforgettable stay.</p>
       <p>At <strong>Almond Ridge Villas</strong>, we invite you to experience comfort, privacy, and the beauty of the Kenyan coast like never before. Let us make your dream vacation a reality—where every moment is pure bliss.</p>
       <a href="#portfolio" class="btn-consultation">Book Your Stay</a>
   </div>
</section>


<script src="scripts/slider.js"></script>


   
    <!-- Services Section --> 
<section id="services">
    <h2 class="section-title">Our Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <i class="fas fa-home"></i>
            <h3>Luxury Accommodation</h3>
            <p>Stay in beautifully designed villas with modern amenities, spacious interiors, and breathtaking views.</p>
        </div>
        
        <div class="service-card">
            <i class="fas fa-utensils"></i>
            <h3>Private Chef & Catering</h3>
            <p>Enjoy gourmet meals with private dining options, BBQ nights, and personalized menu selections.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-swimming-pool"></i>
            <h3>Swimming Pool</h3>
            <p>Relax by our stunning pool with a sun deck, lounge chairs, and an outdoor entertainment area.</p>
        </div>
        
        <div class="service-card">
            <i class="fas fa-water"></i>
            <h3>Beach Access & Water Activities</h3>
            <p>Step onto the white sands of Diani Beach and enjoy snorkeling, kayaking, and sunset dhow cruises.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-car"></i>
            <h3>Airport & Local Transfers</h3>
            <p>Hassle-free private transport to and from the airport, SGR station, or local attractions.</p>
        </div>
       
        <div class="service-card">
            <i class="fas fa-users"></i>
            <h3>Group & Family Stays</h3>
            <p>Spacious villas perfect for families and groups, with kid-friendly amenities and activities.</p>
        </div>
        <div class="service-card">
            <i class="fas fa-binoculars"></i>
            <h3>Local Tours & Excursions</h3>
            <p>Explore Shimba Hills, Kisite Marine Park, Wasini Island, and Mombasa’s historical sites.</p>
        </div>
       
        <div class="service-card">
            <i class="fas fa-tree"></i>
            <h3>Eco-Friendly & Sustainable Living</h3>
            <p>Stay in harmony with nature with our eco-conscious initiatives, including solar energy and conservation efforts.</p>
        </div>
    </div>
</section>



    <!-- Portfolio Section -->
<!-- Portfolio Section -->
<section id="portfolio">
    <h2 class="section-title">Our Villas</h2>
    <div class="portfolio-grid">
        <!-- Oceanview Villa -->
        <div class="portfolio-item">
            <div class="villa-slider">
                <button class="prev-slide" aria-label="Previous Image">&#10094;</button>
                <div class="slide"><img src="images/q.jpeg" alt="Oceanview Villa Image 1" class="villa-image"></div>
                <div class="slide"><img src="images/a.jpeg" alt="Oceanview Villa Image 2" class="villa-image"></div>
                <div class="slide"><img src="images/j.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/b.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/c.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/d.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/e.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/g.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/h.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/i.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/k.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/l.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/m.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/n.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/o.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/p.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/r.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/s.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/t.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/w.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/u.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
			
				
                <button class="next-slide" aria-label="Next Image">&#10095;</button>
            </div>
            <h3>Almond Ridge - Villa Mfalme (Deluxe)</h3>
<p>Experience unparalleled comfort and elegance at our Villa Mfalme, where luxury meets tranquility. Perfect for romantic getaways, family retreats, or unforgettable honeymoons, this villa offers the ideal setting for cherished moments. Enjoy spacious living, stunning views, and the ultimate in relaxation.</p>

            <p class="price">6 guests | 3 bedrooms | 3 beds | 3 bathrooms</p>
            <a href="https://wa.me/254700204780" class="book-now-btn" target="_blank">Book Now</a>
        </div>

        <!-- Beachfront Villa -->
        <div class="portfolio-item">
            <div class="villa-slider">
                <button class="prev-slide" aria-label="Previous Image">&#10094;</button>
                <div class="slide"><img src="images/a12.jpeg" alt="Beachfront Villa Image 1" class="villa-image"></div>
                <div class="slide"><img src="images/a22.jpeg" alt="Beachfront Villa Image 2" class="villa-image"></div>
				<div class="slide"><img src="images/r.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a3.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a4.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a5.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a6.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a7.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a8.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a9.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a10.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a11.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a13.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a14.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a15.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a16.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a17.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a18.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a19.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a20.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a21.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				<div class="slide"><img src="images/a23.jpeg" alt="Oceanview Villa Image 3" class="villa-image"></div>
				
                <button class="next-slide" aria-label="Next Image">&#10095;</button>
            </div>
            <h3>Almond Ridge - Villa Sita (Luxurious)</h3>
<p>Wake up to breathtaking views and unparalleled comfort at our luxurious Villa Sita. Featuring a private swimming pool and spacious living areas, it's the perfect getaway for relaxation and group retreats. Indulge in ultimate comfort and enjoy a truly unforgettable experience.</p>

            <p class="price">6 guests | 3 bedrooms | 3 beds | 3 bathrooms</p>
           <a href="https://wa.me/254700204780" class="book-now-btn" target="_blank">Book Now</a>
        </div>

        <!-- Add more Villas -->
        
    </div>
</section>


<section id="location">
    <h2 class="section-title">Our Location</h2>

    <div class="location-container">
        <!-- Map Section -->
        <div class="map-container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.1232333967832!2d39.53981037470806!3d-4.388023446882768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18404d9fbcfd1481%3A0xbd0b0adb8e0389d5!2sAlmond%20Ridge%2C%20Diani!5e0!3m2!1sen!2ske!4v1739630365393!5m2!1sen!2ske" 
                width="100%" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- Image Section -->
        <div class="image-container">
            <img src="images/map2.jpeg" alt="Almond Ridge Villas" class="image-content">
        </div>
    </div>
</section>





<script src="scripts/villas_slider.js"></script>

    
   <!-- Numbers Section -->
<section id="numbers">
    <h2 class="section-title">By the Numbers</h2>
    <div class="numbers-background">
        <div class="numbers-grid">
            <div class="number-card">
                <h3 class="count" data-target="50">0</h3><span>+</span>
                <p>Destinations to Explore</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="1000">0</h3><span>+</span>
                <p>Visitors Hosted</p>
            </div>
            <div class="number-card">
                <h3 class="count" data-target="10">0</h3><span>+</span>
                <p>Years of Hospitality</p>
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
		<div class="tech-card">
    <i class="fas fa-paw"></i> <!-- Paw print icon for wildlife -->
    <h3>Bora Bora</h3>
    <p>Explore the stunning Bora Bora Wildlife Park, offering wildlife safaris, luxurious camps, and excellent restaurants, all set in Kenya’s beautiful coastal region.</p>
</div>

    </div>
</section>




<script>

</script>



    <!-- Testimonials Section -->
<section id="testimonials">
    <h2 class="section-title">What Our Guests Say</h2>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <p>"I stayed at Nick's villa with my family for two days, and we surely had a good experience. The place is quiet, clean and spacious.
Nick assisted with a good driver to pick us from the airport and even drive us around and was good.
I would stay in his place on my next visit"</p>
            <h3>- Arnold, Kampala, Uganda</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Nick was a fantastic host—proactive, friendly, and always kept us updated throughout our stay. His place was absolutely beautiful, offering a perfect blend of comfort and style. We had an amazing time and would highly recommend staying at Nick’s place!"</p>
            <h3>- Michael, Nairobi, Kenya</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"If you're seeking a quiet, peaceful, and serene getaway, then Almond is the perfect destination for you. I recently had the pleasure of staying at Almond, a charming home away from home. The accommodations were spotlessly clean, offering a welcomed respite from the hustle and bustle of town life. The tranquil setting might also inspire you with ideas for your future home-building plans.
Thanks Nick and Aline for hosting us."</p>
            <h3>- Lordvick, Airbnb</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"My family had a fantastic time at Almond Ridge. The villa is absolutely beautiful and very spacious located in a very quiet and peaceful area. Nick was a brilliant host providing lots of help with getting around. The villa is well equipped with most necessities and is very clean. I highly recommend Nick's place."</p>
            <h3>- Brenda, Airbnb</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"Me and my family enjoyed our stay at the house. It was spacious and homely and uniquely decorated. Loved the fact that there’s a pool
Over and above this, the host was extremely friendly and helpful during our stay at all times! Will definitely be back"</p>
            <h3>- Valerie, Nairobi, Kenya</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="testimonial-card">
            <p>"We really enjoyed the stay with Nick. They were very proactive and provided solutions to issues we had thought of yet such as organising a pick up service and self drive car. He addressed our queries ASAP and was really friendly. Definitely spending my next Diani holiday at Almond ridge"</p>
            <h3>- Timothy, Nairobi, Kenya</h3>
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
            <p><strong>Host Phone:</br></strong> +254 700 204780 </br> +254 740 961877</p>
            
        </div>
        
        <!-- Middle Section: Menu (Vertical) -->
        <div class="footer-menu">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Accommodations</a></li>
				<li><a href="#numbers">Numbers</a></li>
				<li><a href="#tech-stack">Destinations</a></li>
				<li><a href="#testimonials">Reviews</a></li>
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
        <p>&copy; 2025 Almond Ridge & Villas. All rights reserved.</p>
    </div>
</footer>


    <!-- Chat Button -->
    <div class="chat-btn">
        <i class="fas fa-comment-dots"></i>
    </div>

    <script src="scripts/script.js"></script>
</body>
</html>