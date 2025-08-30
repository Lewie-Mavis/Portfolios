<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Oyato Beespoke — Wear Distinction</title>
  <meta name="description" content="Oyato Beespoke is an authentic Nigerian fashion house creating bespoke outfits — from casual to wedding — for a global clientele." />

  <!-- Keywords for SEO -->
  <meta name="keywords" content="Oyato Beespoke, Nigerian fashion, bespoke tailoring, custom suits, wedding attire, luxury fashion, African fashion house, global fashion brand, handcrafted outfits, elegant clothing, premium suits, Oyato designs, stylish wear, men’s fashion, women’s fashion, traditional Nigerian outfits, custom wedding suits, Oyato couture, designer wear, tailored clothing, luxury wear Nigeria, Nigerian designers, bespoke style, Oyato Weddings, international fashion delivery" />

  <!-- Author -->
  <meta name="author" content="Oyato Beespoke" />

  <!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
  <meta property="og:title" content="Oyato Beespoke — Wear Distinction" />
  <meta property="og:description" content="Authentic Nigerian fashion house crafting bespoke outfits for weddings, casual wear, and global delivery. Elegance, precision, and distinction." />
  <meta property="og:image" content="assets/oyato-preview.jpg" />
  <meta property="og:url" content="https://www.oyatobeespoke.com" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Oyato Beespoke — Wear Distinction" />
  <meta name="twitter:description" content="Authentic Nigerian fashion house creating bespoke outfits for a global clientele." />
  <meta name="twitter:image" content="assets/oyato-preview.jpg" />

  <!-- Favicon -->
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml" />


  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="js/tailwind-config.js"></script>

  <!-- Custom Styles -->
  <link rel="stylesheet" href="css/styles.css">
  
  
<!-- Font Awesome 5.15.4 (browsers support) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />



</head>

<body class="bg-brand-deep text-white font-sans tracking-wide">

<!-- === NAV === -->
<header class="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
  <div class="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center gap-2 cursor-pointer" onclick="scrollToTop()">
      <div class="h-8 w-8 rounded-full flex items-center justify-center border-2 border-[#C5A452]">
        <span class="font-bold text-lg" style="background: linear-gradient(90deg, #C5A452 0%, #E7D6A2 50%, #C5A452 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">OB</span>
      </div>
      <span class="text-lg md:text-2xl font-semibold">
        Oyato <span class="gold-gradient">Beespoke</span>
      </span>
    </div>

    <!-- Desktop Menu -->
    <nav class="hidden md:flex items-center gap-8 text-sm">
      <a href="#about" class="hover:text-[#C5A452]">About</a>
      <a href="#collections" class="hover:text-[#C5A452]">Collections</a>
      <a href="#experience" class="hover:text-[#C5A452]">Experience</a>
      <a href="#gallery" class="hover:text-[#C5A452]">Gallery</a>
      <a href="#measurements" class="hover:text-[#C5A452]">Measurements</a>
      <a href="#contact" class="hover:text-[#C5A452]">Contact</a>
    </nav>

    <!-- Start CTA Desktop -->
    <a href="#measurements" class="md:inline-flex hidden px-4 py-2 rounded-xl bg-white text-black hover:bg-[#C5A452] transition">
      Start Your Bespoke Journey
    </a>

    <!-- Hamburger Icon Mobile -->
    <button id="mobile-menu-btn" class="md:hidden flex flex-col gap-1">
      <span class="block w-6 h-0.5 bg-[#C5A452] transition-all"></span>
      <span class="block w-6 h-0.5 bg-[#C5A452] transition-all"></span>
      <span class="block w-6 h-0.5 bg-[#C5A452] transition-all"></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <nav id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-4 px-6 py-6 md:hidden">
    <a href="#about" class="hover:text-[#C5A452]">About</a>
    <a href="#collections" class="hover:text-[#C5A452]">Collections</a>
    <a href="#experience" class="hover:text-[#C5A452]">Experience</a>
    <a href="#gallery" class="hover:text-[#C5A452]">Gallery</a>
    <a href="#measurements" class="hover:text-[#C5A452]">Measurements</a>
    <a href="#contact" class="hover:text-[#C5A452]">Contact</a>
    <a href="#measurements" class="px-4 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#C5A452] text-black text-center">Start Your Bespoke Journey</a>
  </nav>
</header>

<!-- === Mobile Menu Script === -->
<script src="js/mobile_menu.js"></script>

  
<script>
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>	
  

<!-- === HERO === -->
<section class="relative min-h-screen flex items-end md:items-center pt-24">
  <!-- Background Image -->
  <img src="assets/couple_flowers.jpg" 
       alt="Elegant couple in traditional attire" 
       class="absolute inset-0 w-full h-full object-cover object-center opacity-90">

  <!-- Overlay -->
  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10"></div>

  <!-- Content -->
  <div class="relative mx-auto max-w-7xl px-6 py-20 md:py-32">
    <div class="max-w-3xl">
      <h1 class="font-serif text-4xl md:text-6xl leading-tight font-semibold slide-left">
        Wear <span class="gold-gradient">Distinction</span>. Live Confidence.
      </h1>
      <p class="mt-6 text-lg md:text-xl text-gray-200 fade-up">
        Authentic Nigerian craftsmanship tailored to perfection for a global audience.
        From casual to wedding wear, we create outfits that command presence and tell your story.
      </p>
<div class="mt-8 flex gap-4 fade-up">
  <!-- Solid White Button with Gold Hover -->
  <a href="#collections" class="px-6 py-3 rounded-xl bg-white text-black font-semibold 
     hover:bg-[#C5A452] hover:text-black transition-all duration-300">
    Explore Collections
  </a>

  <!-- Gold Outline Button with Gold Fill on Hover -->
  <a href="#measurements" class="px-6 py-3 rounded-xl border-2 border-[#C5A452] text-[#C5A452] font-semibold 
     hover:bg-[#C5A452] hover:text-black transition-all duration-300">
    Get Measured
  </a>
</div>

    </div>
  </div>
</section>


<!-- About -->
<section id="about" class="bg-black py-20">
  <div class="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
    
    <!-- Text Content -->
    <div class="order-2 md:order-1">
      <h2 class="font-serif text-3xl md:text-4xl slide-left">
        About <span class="gold-gradient">Oyato</span>
      </h2>
      <p class="mt-6 text-gray-300 leading-relaxed fade-up">
        “Oyato” means <em>different</em> — and that is our promise. Different in craftsmanship.
        Different in attention to detail. Different in the experience you receive from consultation to final fitting.
      </p>
      <p class="mt-4 text-gray-300 leading-relaxed fade-up">
        We believe true style goes beyond fabric — it tells a story.
        Every stitch is intentional, infused with the richness of Nigerian heritage and the finesse of world-class tailoring.
        When you step out in Oyato, you don’t just get noticed — <strong>you get remembered</strong>.
      </p>
      <ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200 fade-up">
        <li class="flex gap-3 items-start"><span class="text-brand.gold">◆</span> Bespoke designs that enhance your presence</li>
        <li class="flex gap-3 items-start"><span class="text-brand.gold">◆</span> Heritage silhouettes with a modern edge</li>
        <li class="flex gap-3 items-start"><span class="text-brand.gold">◆</span> Premium aso-oke, lace, brocade and fine suiting</li>
        <li class="flex gap-3 items-start"><span class="text-brand.gold">◆</span> Global delivery and virtual fittings</li>
      </ul>
    </div>

    <!-- Image -->
    <div class="order-1 md:order-2 slide-right">
      <img src="assets/bride_purple_fan.jpg" 
           alt="Bride in regal aso-oke with fan" 
           class="rounded-2xl soft-shadow object-cover w-full h-[520px]">
    </div>
  </div>
</section>


<!-- Collections -->
<section id="collections" class="py-20 bg-[#0E0E0E]">
  <div class="mx-auto max-w-7xl px-6">
    <h2 class="font-serif text-3xl md:text-4xl slide-left">
      Our <span class="gold-gradient">Collections</span>
    </h2>
    <p class="mt-4 text-gray-300 max-w-3xl fade-up">
      We cater to all your style needs, blending timeless Nigerian tradition with contemporary fashion.
      Each design is customized to reflect the excellence already inherent in our clients.
    </p>

    <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <!-- Collection Card -->
      <article class="rounded-2xl overflow-hidden bg-black/40 border border-white/10 soft-shadow fade-up">
        <img src="assets/wale_black_cap.png" class="w-full object-contain max-h-72 mx-auto">
        <div class="p-6">
          <h3 class="font-semibold">Casual Elegance</h3>
          <p class="mt-2 text-sm text-gray-300">Relaxed silhouettes with refined finishing for everyday distinction.</p>
        </div>
      </article>

      <article class="rounded-2xl overflow-hidden bg-black/40 border border-white/10 soft-shadow fade-up">
        <img src="assets/wale_blue_cap.png" class="w-full object-contain max-h-72 mx-auto">
        <div class="p-6">
          <h3 class="font-semibold">Smart Casual</h3>
          <p class="mt-2 text-sm text-gray-300">Modern looks for professionals who lead with presence.</p>
        </div>
      </article>

      <article class="rounded-2xl overflow-hidden bg-black/40 border border-white/10 soft-shadow fade-up">
        <img src="assets/groom_blue_cane.jpg" class="w-full object-contain max-h-72 mx-auto">
        <div class="p-6">
          <h3 class="font-semibold">Formal Wear</h3>
          <p class="mt-2 text-sm text-gray-300">Suits, kaftans and agbadas that radiate prestige.</p>
        </div>
      </article>

      <article class="rounded-2xl overflow-hidden bg-black/40 border border-white/10 soft-shadow fade-up">
        <img src="assets/bridesmaids.jpg" class="w-full object-contain max-h-72 mx-auto">
        <div class="p-6">
          <h3 class="font-semibold">Weddings & Special Occasions</h3>
          <p class="mt-2 text-sm text-gray-300">Unforgettable ensembles for your most important celebrations.</p>
        </div>
      </article>

    </div>
  </div>
</section>


<!-- === SERVICES SECTION === -->
<section id="services" class="relative bg-[#0E0E0E] py-20 text-white">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <!-- Section Heading -->
    <div class="mb-12 fade-up">
<h2 class="font-serif text-3xl md:text-4xl slide-left mb-4">
  Our <span class="gold-gradient">Bespoke Services</span>
</h2>

      <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto fade-up">
        Elevate your style with our tailored services. From weddings to corporate elegance, every stitch tells a story.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-3 gap-10">
      
      <!-- Service 1 -->
      <div class="service-card bg-[#1C1C1C] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 slide-up">
        <div class="text-4xl text-[#C5A452] mb-4">
          <i class="fas fa-tshirt"></i>
        </div>
        <h3 class="text-xl font-semibold gold-gradient mb-2">Custom Suits & Outfits</h3>
        <p class="text-gray-300">
          Perfectly tailored suits and outfits crafted to your measurements, style, and personality.
        </p>
      </div>

      <!-- Service 2 -->
      <div class="service-card bg-[#1C1C1C] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 fade-up">
        <div class="text-4xl text-[#C5A452] mb-4">
          <i class="fas fa-ring"></i>
        </div>
        <h3 class="text-xl font-semibold gold-gradient mb-2">Wedding Attire</h3>
        <p class="text-gray-300">
          Exclusive bridal and groom attire designed for your special day, blending tradition and modern elegance.
        </p>
      </div>

      <!-- Service 3 -->
      <div class="service-card bg-[#1C1C1C] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 slide-right">
        <div class="text-4xl text-[#C5A452] mb-4">
          <i class="fas fa-user-tie"></i>
        </div>
        <h3 class="text-xl font-semibold gold-gradient mb-2">Corporate & Business Styling</h3>
        <p class="text-gray-300">
          Elevate your corporate wardrobe with suits, shirts, and outfits tailored for success and confidence.
        </p>
      </div>

      <!-- Service 4 -->
      <div class="service-card bg-[#1C1C1C] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 slide-left">
        <div class="text-4xl text-[#C5A452] mb-4">
          <i class="fas fa-swatchbook"></i>
        </div>
        <h3 class="text-xl font-semibold gold-gradient mb-2">Fabric Selection & Consulting</h3>
        <p class="text-gray-300">
          Handpick the finest fabrics and get expert advice on textures, colors, and patterns for your bespoke wardrobe.
        </p>
      </div>

      <!-- Service 5 -->
      <div class="service-card bg-[#1C1C1C] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 fade-up">
        <div class="text-4xl text-[#C5A452] mb-4">
          <i class="fas fa-users"></i>
        </div>
        <h3 class="text-xl font-semibold gold-gradient mb-2">Personal Styling & Consultation</h3>
        <p class="text-gray-300">
          Work with our experts to define your signature style and create timeless looks for every occasion.
        </p>
      </div>

      <!-- Service 6 -->
      <div class="service-card bg-[#1C1C1C] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 slide-right">
        <div class="text-4xl text-[#C5A452] mb-4">
          <i class="fas fa-gift"></i>
        </div>
        <h3 class="text-xl font-semibold gold-gradient mb-2">Gift & Corporate Packages</h3>
        <p class="text-gray-300">
          Customized gift sets and corporate packages for clients, colleagues, and loved ones.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- Include Font Awesome if not already -->
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>


  <!-- Slider Section -->
<section class="oyato_beespoke-slider-section">
        <!-- Image Slider Section -->
        <div class="about-photo-slider">
            <div class="slide">
                <img src="assets/cultural_group_award.jpg" alt="slider 1 ">
            </div>
            <div class="slide">
                <img src="assets/royal_wedding1.jpg" alt="slider 2 ">
            </div>
			<div class="slide">
                <img src="assets/4.jpg" alt="slider 3 ">
            </div>
			<div class="slide">
                <img src="assets/bridesmaids.jpg" alt="slider 4 ">
            </div>	
			<div class="slide">
                <img src="assets/1.jpg" alt="slider 2 ">
            </div>
			<div class="slide">
                <img src="assets/5.jpg" alt="slider 2 ">
            </div>
			<div class="slide">
                <img src="assets/groomsmen_white.jpg" alt="slider 2 ">
            </div>
			<div class="slide">
                <img src="assets/6.jpg" alt="slider 2 ">
            </div>
			<div class="slide">
                <img src="assets/8.jpg" alt="slider 2 ">
            </div>
			<div class="slide">
                <img src="assets/10.jpg" alt="slider 2 ">
            </div>
        </div>
</section>
<script src="js/slider.js"></script>


<!-- Experience -->
<section id="experience" class="py-20 bg-black">
  <div class="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
    <div class="slide-left">
      <img src="assets/groomsmen_white.jpg" alt="Groomsmen in white agbada" class="rounded-2xl soft-shadow object-cover w-full h-[520px]">
    </div>
    <div class="slide-right">
      <h2 class="font-serif text-3xl md:text-4xl">The Oyato <span class="gold-gradient">Experience</span></h2>
      <p class="mt-6 text-gray-300 fade-up">Choosing Oyato is more than tailoring — it’s a journey of transformation.</p>
      <div class="mt-6 grid sm:grid-cols-2 gap-6">
        <div class="bg-white/5 rounded-xl p-5 fade-up">
          <div class="text-brand.gold">01</div>
          <h4 class="mt-2 font-semibold">Consult & Design</h4>
          <p class="text-gray-300 text-sm mt-1">We listen, sketch, source fabric and align to your story.</p>
        </div>
        <div class="bg-white/5 rounded-xl p-5 fade-up">
          <div class="text-brand.gold">02</div>
          <h4 class="mt-2 font-semibold">Bespoke Tailoring</h4>
          <p class="text-gray-300 text-sm mt-1">Precision patterning and hand-finishing for an impeccable fit.</p>
        </div>
        <div class="bg-white/5 rounded-xl p-5 fade-up">
          <div class="text-brand.gold">03</div>
          <h4 class="mt-2 font-semibold">Fitting & Refinement</h4>
          <p class="text-gray-300 text-sm mt-1">We refine every detail until the garment feels like you.</p>
        </div>
        <div class="bg-white/5 rounded-xl p-5 fade-up">
          <div class="text-brand.gold">04</div>
          <h4 class="mt-2 font-semibold">Worldwide Delivery</h4>
          <p class="text-gray-300 text-sm mt-1">From Lagos to Nairobi to London — we ship with care.</p>
        </div>
      </div>
      <a href="#measurements" class="inline-block mt-8 px-6 py-3 rounded-xl bg-white text-black hover:bg-brand.gold transition fade-up">Begin Your Fitting</a>
    </div>
  </div>
</section>


  <!-- Gallery -->
  <section id="gallery" class="py-20 bg-[#0E0E0E]">
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="font-serif text-3xl md:text-4xl slide-left">Lookbook <span class="gold-gradient">& Gallery</span></h2>
      <div class="mt-8 grid md:grid-cols-3 gap-4">
        <img src="assets/cultural_group_award.jpg" class="rounded-xl w-full h-72 object-cover soft-shadow fade-up">
        <img src="assets/1.jpg" class="rounded-xl w-full h-72 object-cover soft-shadow fade-up">
        <img src="assets/bridesmaids.jpg" class="rounded-xl w-full h-72 object-cover soft-shadow fade-up">
        <img src="assets/bride_purple_fan.jpg" class="rounded-xl w-full h-72 object-cover soft-shadow fade-up">
        <img src="assets/groomsmen_white.jpg" class="rounded-xl w-full h-72 object-cover soft-shadow fade-up">
        <img src="assets/couple_flowers.jpg" class="rounded-xl w-full h-72 object-cover soft-shadow fade-up">
      </div>
    </div>
  </section>

  <!-- Measurements -->
  <section id="measurements" class="py-20 bg-black">
    <div class="mx-auto max-w-7xl px-6">
      <h2 class="font-serif text-3xl md:text-4xl slide-left">Send Your <span class="gold-gradient">Measurements</span></h2>
      <p class="mt-3 text-gray-300 max-w-3xl fade-up">Fill in your details below...</p>
      <form id="measureForm" class="mt-8 grid lg:grid-cols-3 gap-6 bg-white/5 p-6 rounded-2xl fade-up">
        <!-- Form as-is -->
		
        <!-- Column 1: Personal -->
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-gray-300">Full Name</label>
            <input name="name" required class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-brand.gold"/>
          </div>
          <div>
            <label class="block text-sm text-gray-300">Email</label>
            <input name="email" type="email" required class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-brand.gold"/>
          </div>
          <div>
            <label class="block text-sm text-gray-300">Phone (WhatsApp preferred)</label>
            <input name="phone" class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-brand.gold"/>
          </div>
          <div>
            <label class="block text-sm text-gray-300">City / Country</label>
            <input name="location" class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-brand.gold"/>
          </div>
        </div>

        <!-- Column 2: Core Measurements -->
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div><label class="block text-sm text-gray-300">Chest</label><input name="chest" class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2"/></div>
            <div><label class="block text-sm text-gray-300">Waist</label><input name="waist" class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2"/></div>
            <div><label class="block text-sm text-gray-300">Hips</label><input name="hips" class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2"/></div>
            <div><label class="block text-sm text-gray-300">Shoulder</label><input name="shoulder" class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2"/></div>
            <div><label class="block text-sm text-gray-300">Neck</label><input name="neck" class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2"/></div>
            <div><label class="block text-sm text-gray-300">Sleeve Length</label><input name="sleeve" class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2"/></div>
            <div><label class="block text-sm text-gray-300">Top Length</label><input name="top_length" class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2"/></div>
            <div><label class="block text-sm text-gray-300">Trouser Length</label><input name="trouser_length" class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2"/></div>
          </div>
          <div>
            <label class="block text-sm text-gray-300">Occasion / Notes</label>
            <textarea name="notes" rows="3" class="mt-1 w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2"></textarea>
          </div>
        </div>

        <!-- Column 3: Actions -->
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-white/10">
            <p class="text-sm text-gray-300">Optional: upload a reference look (image or PDF)</p>
            <input type="file" accept="image/*,.pdf" class="mt-2 text-sm"/>
          </div>
          <button type="button" id="emailBtn" class="w-full px-4 py-3 rounded-xl bg-white text-black hover:bg-brand.gold transition">Email These Measurements</button>
          <button type="button" id="printBtn" class="w-full px-4 py-3 rounded-xl bg-brand.purple/80 hover:bg-brand.purple transition">Print/Save as PDF</button>
          <a id="waBtn" href="#" target="_blank" class="block text-center px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700">Send via WhatsApp</a>
          <p class="text-xs text-gray-400">We’ll reply within 24 hours to confirm your order, fabric options, and delivery timeline.</p>
        </div>
		
      </form>
    </div>
  </section>
  
  
<!-- === Numbers That Matter Section === -->
<section id="numbers" class="py-20" style="background-color: #0E0E0E;">
  <div class="mx-auto max-w-7xl px-6 text-center">
    <h2 class="font-serif text-3xl md:text-4xl gold-gradient slide-left">
      Numbers That Matter
    </h2>
    <p class="mt-4 text-gray-300 fade-up">
      Our journey in bespoke fashion has been defined by trust, heritage, and unforgettable moments.
    </p>

    <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
      <!-- Years of Craftsmanship -->
      <div class="fade-up">
        <h3 class="text-4xl md:text-5xl font-bold gold-gradient counter" data-target="15">0</h3>
        <p class="mt-2 text-gray-300 text-sm">Years of Craftsmanship</p>
      </div>

      <!-- Clients Dressed -->
      <div class="fade-up">
        <h3 class="text-4xl md:text-5xl font-bold gold-gradient counter" data-target="1200">0</h3>
        <p class="mt-2 text-gray-300 text-sm">Clients Dressed</p>
      </div>

      <!-- Weddings Styled -->
      <div class="fade-up">
        <h3 class="text-4xl md:text-5xl font-bold gold-gradient counter" data-target="300">0</h3>
        <p class="mt-2 text-gray-300 text-sm">Weddings Styled</p>
      </div>

      <!-- Countries Delivered -->
      <div class="fade-up">
        <h3 class="text-4xl md:text-5xl font-bold gold-gradient counter" data-target="25">0</h3>
        <p class="mt-2 text-gray-300 text-sm">Countries Delivered</p>
      </div>
    </div>
  </div>
</section>


<!-- === Counter Animation Script === -->
<script src="js/numbers.js"></script>


<!-- Start Your Bespoke Journey Section -->
<section class="relative w-full bg-cover bg-center text-white" 
         style="background-image: url('assets/bridesmaids.jpg'); background-position: center 30%;">
  <!-- Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-60"></div>

  <!-- Content -->
  <div class="relative container mx-auto px-6 py-24 text-center">
    <h2 class="font-serif text-4xl md:text-5xl gold-gradient slide-left mb-6">
      Start Your <span class="gold-gradient">Bespoke Journey</span>
    </h2>
    <p class="max-w-2xl mx-auto text-lg md:text-xl mb-8 fade-up">
      Step into a world where every stitch and cut reflects your individuality. 
      At <span class="font-bold gold-gradient">Oyato Beespoke</span>, we craft timeless outfits tailored to your style and personality.
    </p>
    <a href="#contact" 
       class="inline-block px-8 py-3 border-2 border-[#C5A452] text-[#FFFFFF] font-semibold rounded-full 
              hover:bg-[#C5A452] hover:text-black 
              transition-all duration-500 transform hover:scale-105 slide-right">
      Get Started
    </a>
  </div>
</section>




 
<!-- === FAQ Section === -->
<section id="faq" class="section py-20 bg-black text-white">
  <div class="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
<h2 class="font-serif text-3xl md:text-4xl gold-gradient slide-left text-center mb-12">
  Frequently Asked Questions
</h2>

    
    <div class="space-y-6">

      <!-- FAQ Item -->
      <div class="faq-item border-b border-gray-700 pb-4 cursor-pointer group slide-right">
        <div class="flex justify-between items-center">
          <h3 class="text-lg md:text-xl font-semibold group-hover:text-brand.gold transition">
            What makes Oyato Beespoke unique?
          </h3>
          <span class="symbol text-2xl transition-transform duration-300">+</span>
        </div>
        <p class="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-in-out mt-3 text-gray-300 leading-relaxed">
          Oyato Beespoke is defined by its dedication to craftsmanship, premium fabrics, and tailoring that blends tradition with modern sophistication.
        </p>
      </div>

      <!-- FAQ Item -->
      <div class="faq-item border-b border-gray-700 pb-4 cursor-pointer group slide-left">
        <div class="flex justify-between items-center">
          <h3 class="text-lg md:text-xl font-semibold group-hover:text-brand.gold transition">
            Do you deliver internationally?
          </h3>
          <span class="symbol text-2xl transition-transform duration-300">+</span>
        </div>
        <p class="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-in-out mt-3 text-gray-300 leading-relaxed">
          Yes, we deliver worldwide. Wherever you are, we ensure your bespoke pieces reach you with the same care and elegance.
        </p>
      </div>

      <!-- FAQ Item -->
      <div class="faq-item border-b border-gray-700 pb-4 cursor-pointer group slide-right">
        <div class="flex justify-between items-center">
          <h3 class="text-lg md:text-xl font-semibold group-hover:text-brand.gold transition">
            How long does the tailoring process take?
          </h3>
          <span class="symbol text-2xl transition-transform duration-300">+</span>
        </div>
        <p class="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-in-out mt-3 text-gray-300 leading-relaxed">
          Depending on the design and level of detail, our bespoke process typically takes between 3 to 6 weeks.
        </p>
      </div>

      <!-- FAQ Item -->
      <div class="faq-item border-b border-gray-700 pb-4 cursor-pointer group slide-left">
        <div class="flex justify-between items-center">
          <h3 class="text-lg md:text-xl font-semibold group-hover:text-brand.gold transition">
            Can I schedule a consultation?
          </h3>
          <span class="symbol text-2xl transition-transform duration-300">+</span>
        </div>
        <p class="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-in-out mt-3 text-gray-300 leading-relaxed">
          Absolutely. We encourage personal consultations to capture your vision and deliver a truly unique piece.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- === FAQ Script === -->
<script src="js/faq.js"></script>



<!-- === Newsletter Subscription Section === -->
<section class="relative w-full bg-cover bg-center text-white" 
         style="background-image: url('https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');">
  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/60"></div>

  <!-- Content -->
  <div class="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
    <h2 class="text-3xl md:text-4xl font-semibold mb-4 slide-left">
      Stay Updated with <span class="gold-gradient">Oyato Beespoke</span>
    </h2>
    <p class="text-lg md:text-xl mb-8 fade-up">
      Subscribe to our newsletter to receive exclusive updates, latest collections, and bespoke fashion insights.
    </p>
    <form action="#" method="POST" class="flex flex-col sm:flex-row justify-center items-center gap-4 slide-right">
      <input type="email" name="email" id="newsletter-email" placeholder="Enter your email" 
             class="px-4 py-3 rounded-lg w-full sm:w-64 text-black focus:outline-none" required>
      <button type="submit" 
              class="px-6 py-3 bg-[#C5A452] text-black font-semibold rounded-lg hover:bg-[#b38e3c] transition duration-300 slide-right">
        Subscribe
      </button>
    </form>
  </div>
</section>



<!-- === TESTIMONIALS SECTION === -->
<section id="testimonials" class="relative bg-[#0E0E0E] py-20 overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <!-- Section Heading -->
    <div class="mb-12 fade-up">
      <h2 class="font-serif text-3xl md:text-4xl gold-gradient slide-left text-center mb-6">
        What Our Clients Say
      </h2>
      <p class="text-gray-400 text-lg max-w-2xl mx-auto fade-up">
        Real stories from leaders, couples, and clients who trusted Oyato Beespoke for their timeless looks.
      </p>
    </div>

    <!-- Testimonials Grid -->
    <div class="grid md:grid-cols-3 gap-8">
      
      <!-- Testimonial Card 1 -->
      <div class="testimonial-card slide-left">
        <p class="text-gray-300 mb-6 italic">
          “Oyato Beespoke crafted my wedding suit with such perfection. The attention to detail was unmatched, and I felt like royalty on my big day.”
        </p>
        <div class="flex items-center gap-4">
          <div class="text-left">
            <h4 class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C5A452] via-[#E7D6A2] to-[#C5A452]">
              James Mwangi
            </h4>
            <p class="text-sm text-gray-400">Groom, Nairobi</p>
          </div>
        </div>
      </div>

      <!-- Testimonial Card 2 -->
      <div class="testimonial-card fade-up">
        <p class="text-gray-300 mb-6 italic">
          “Every client meeting is an opportunity for me to impress, and Oyato Beespoke ensures I always look sharp and confident.”
        </p>
        <div class="flex items-center gap-4">
          <div class="text-left">
            <h4 class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C5A452] via-[#E7D6A2] to-[#C5A452]">
              Anita Wanjiru
            </h4>
            <p class="text-sm text-gray-400">Corporate Executive</p>
          </div>
        </div>
      </div>

      <!-- Testimonial Card 3 -->
      <div class="testimonial-card slide-right">
        <p class="text-gray-300 mb-6 italic">
          “From fabric selection to final delivery, the experience was seamless. I’ve never owned a suit that fits and feels this good.”
        </p>
        <div class="flex items-center gap-4">
          <div class="text-left">
            <h4 class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C5A452] via-[#E7D6A2] to-[#C5A452]">
              David Kimani
            </h4>
            <p class="text-sm text-gray-400">Entrepreneur</p>
          </div>
        </div>
      </div>

      <!-- Testimonial Card 4 -->
      <div class="testimonial-card slide-left">
        <p class="text-gray-300 mb-6 italic">
          “The bespoke process was flawless. They guided me with fabric choices and styling tips — the final product was beyond my expectations.”
        </p>
        <div class="flex items-center gap-4">
          <div class="text-left">
            <h4 class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C5A452] via-[#E7D6A2] to-[#C5A452]">
              Sophia Njeri
            </h4>
            <p class="text-sm text-gray-400">Bride, Mombasa</p>
          </div>
        </div>
      </div>

      <!-- Testimonial Card 5 -->
      <div class="testimonial-card fade-up">
        <p class="text-gray-300 mb-6 italic">
          “As someone who travels often, I appreciate the precision and consistency Oyato delivers. My suits fit perfectly every single time.”
        </p>
        <div class="flex items-center gap-4">
          <div class="text-left">
            <h4 class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C5A452] via-[#E7D6A2] to-[#C5A452]">
              Michael Ochieng
            </h4>
            <p class="text-sm text-gray-400">Consultant</p>
          </div>
        </div>
      </div>

      <!-- Testimonial Card 6 -->
      <div class="testimonial-card slide-right">
        <p class="text-gray-300 mb-6 italic">
          “What sets Oyato Beespoke apart is the personal touch. They don’t just make suits, they craft experiences that last a lifetime.”
        </p>
        <div class="flex items-center gap-4">
          <div class="text-left">
            <h4 class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C5A452] via-[#E7D6A2] to-[#C5A452]">
              Grace Otieno
            </h4>
            <p class="text-sm text-gray-400">Fashion Enthusiast</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


 
<!-- Call-to-Action Section -->
<section class="relative w-full bg-cover bg-center text-white" style="background-image: url('assets/1.jpg');">
  <!-- Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-60"></div>

  <!-- Content -->
  <div class="relative container mx-auto px-6 py-24 text-center">
    <h2 class="font-serif text-4xl md:text-5xl gold-gradient slide-left mb-6">
      Discover Elegance with Oyato Beespoke
    </h2>
    <p class="max-w-2xl mx-auto text-lg md:text-xl mb-8 fade-up">
      Step into a world where every design is tailored to perfection.  
      At <span class="font-bold gold-gradient fade-up">Oyato Beespoke</span>, we blend sophistication, style, and individuality to create timeless outfits that define you.  
    </p>
    <a href="#contact" 
       class="inline-block px-8 py-3 border-2 border-[#C5A452] text-[#FFFFFF] font-semibold rounded-full 
              hover:bg-[#C5A452] hover:text-black 
              transition-all duration-500 transform hover:scale-105 slide-right">
      Get Started
    </a>
  </div>
</section>


<!-- Contact -->
<section id="contact" class="py-20 bg-[#0E0E0E] relative overflow-hidden">
  <div class="mx-auto max-w-7xl px-6">
    
    <!-- Section Title -->
    <h2 class="font-serif text-3xl md:text-4xl gold-gradient text-center mb-12 slide-left">
      Contact Us
    </h2>

    <div class="grid md:grid-cols-2 gap-12 items-center">
      
      <!-- Left Content -->
      <div>
        <h2 class="font-serif text-3xl md:text-4xl slide-left">
          Ready to <span class="gold-gradient">Stand Out</span>?
        </h2>
        <p class="mt-4 text-gray-300 fade-up">
          Book a consultation or fitting. We work with clients worldwide.
        </p>

        <!-- CTA Buttons -->
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#measurements" 
             class="px-6 py-3 rounded-xl bg-white text-black hover:bg-brand.gold transition-all duration-300 shadow-lg slide-left">
            Start Your Bespoke Journey
          </a>
          <a href="mailto:orders@oyatobeespoke.com" 
             class="px-6 py-3 rounded-xl border border-white/20 hover:border-brand.gold transition-all duration-300 slide-right">
            orders@oyatobeespoke.com
          </a>
        </div>

        <!-- Extra Info -->
        <div class="mt-6 space-y-2 text-sm text-gray-400 fade-up">
          <p><strong class="text-white">Call Us:</strong> +254 701 628 414</p>
          <p><strong class="text-white">WhatsApp:</strong> +254 701 628 414</p>
          <p><strong class="text-white">Address:</strong> 3rd Floor, Northstar Building, Lenana Road, Nairobi, Kenya</p>
          <p><strong class="text-white">Opening Hours:</strong> Mon – Sat, 8am – 7pm</p>
        </div>
        
        <!-- Social Links -->
        <div class="mt-10 flex gap-6 fade-up">
          <a href="https://www.linkedin.com" target="_blank" class="text-brand-gold hover:text-white transition-all duration-300 transform hover:scale-110">
            <i class="fab fa-linkedin text-3xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="text-brand-gold hover:text-white transition-all duration-300 transform hover:scale-110">
            <i class="fab fa-twitter text-3xl"></i>
          </a>
          <a href="https://facebook.com" target="_blank" class="text-brand-gold hover:text-white transition-all duration-300 transform hover:scale-110">
            <i class="fab fa-facebook text-3xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="text-brand-gold hover:text-white transition-all duration-300 transform hover:scale-110">
            <i class="fab fa-instagram text-3xl"></i>
          </a>
          <a href="https://youtube.com" target="_blank" class="text-brand-gold hover:text-white transition-all duration-300 transform hover:scale-110">
            <i class="fab fa-youtube text-3xl"></i>
          </a>
        </div>
      </div> <!-- ✅ close left column -->

      <!-- Right Image -->
      <div class="slide-in-right">
        <img src="assets/groom_blue_cane.jpg" alt="Luxury bespoke menswear" class="rounded-2xl soft-shadow w-full h-[450px] object-cover">
      </div>

    </div>
  </div>
</section>




<!-- FOOTER -->
<footer class="border-t border-white/10 bg-black">
  <div class="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 slide-up">
    <!-- Left -->
    <p class="text-sm text-gray-400 text-center md:text-left flex-1 md:flex-none">
      © <span id="year"></span> Oyato Beespoke. All rights reserved.
    </p>

    <!-- Middle -->
    <div class="text-sm text-gray-400 text-center flex-1">
      Built with ❤️ in Nigeria • Serving clients worldwide
    </div>

    <!-- Right (optional placeholder to maintain spacing) -->
    <div class="flex-1 md:flex-none"></div>
  </div>
</footer>


<!-- Script to auto-update year -->
<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>


<!-- WhatsApp Chat Button -->
<a href="https://wa.me/254701628414" target="_blank" id="whatsapp-chat" class="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#1A1A1A] text-[#C5A452] rounded-full shadow-lg transition-all duration-300">
  <i class="fab fa-whatsapp text-xl"></i>
  <span class="hidden md:inline font-semibold">Chat with Us</span>
</a>


  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"></script>
  <script src="js/scripts.js"></script>
  
  <script>
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // adjust "60" if sticky header height is different
          behavior: "smooth"
        });
      }
    });
  });
</script>

</body>
</html>
