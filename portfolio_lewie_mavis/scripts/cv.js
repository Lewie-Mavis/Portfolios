// cv.js - World-Class CV Page JavaScript with Repeating Animations

// CV Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all CV page functionality
    initCVPage();
    initSkillBars();
    initTechSphere();
    initFormValidation();
    initPrintCV();
    initExperienceTimeline();
    initContactForm();
});

// Initialize CV Page
function initCVPage() {
    console.log('World-Class CV Page Initialized - Lewie Mavis');
    
    // Set active navigation
    setActiveNav();
    
    // Initialize smooth scrolling for CV page
    initCVSmoothScroll();
    
    // Initialize intersection observers for animations
    initCVObservers();
    
    // Initialize download CV functionality
    initDownloadCV();
    
    // Initialize contact form
    initCVContactForm();
    
    // Initialize current year in footer
    document.getElementById('current-year-footer').textContent = new Date().getFullYear();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize chat button
    initChatButton();
    
    // Initialize newsletter form
    initNewsletter();
    
    // Initialize floating animations
    initFloatingAnimations();
    
    // Initialize profile badges (fix for disappearing issue)
    initProfileBadges();
}

// Set active navigation
function setActiveNav() {
    const currentHash = window.location.hash;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        link.classList.remove('active');
        
        if ((!currentHash && linkHref === '#cv-hero') || 
            (currentHash && linkHref === currentHash)) {
            link.classList.add('active');
        }
    });
}

// Initialize smooth scrolling for CV page
function initCVSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const mobileMenuPanel = document.querySelector('.mobile-menu-panel');
                if (mobileMenuPanel.classList.contains('active')) {
                    toggleMenu();
                }
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, null, targetId);
                
                // Update active navigation
                setActiveNav();
                
                // Reset animation for target section
                resetSectionAnimation(targetId);
            }
        });
    });
}

// Initialize intersection observers for animations
function initCVObservers() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    // Main observer for animated elements
    const mainObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;
            
            if (entry.isIntersecting) {
                // Element is in view - add animation class
                addAnimationClass(element);
                
                // For skill bars, animate width
                if (element.classList.contains('skill-progress')) {
                    const level = element.getAttribute('data-level');
                    element.style.width = `${level}%`;
                }
            } else {
                // Element is out of view - remove animation class
                removeAnimationClass(element);
                
                // For skill bars, reset width (optional)
                if (element.classList.contains('skill-progress')) {
                    // element.style.width = '0%'; // Uncomment if you want skill bars to reset
                }
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.slide-left, .slide-right, .fade-up, .zoom-in, ' +
        '.blur-in, .flip-in, .rotate-in, .bounce-in, ' +
        '.skill-progress, .profile-badge, .timeline-card, ' +
        '.education-card, .certification-card, .learning-stat, ' +
        '.quick-contact-item, .stat-item, .tech-tag-sphere'
    );
    
    animatedElements.forEach(el => {
        mainObserver.observe(el);
    });
    
    // Section-based observer for larger animations
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animations within this section
                const sectionId = entry.target.id;
                triggerSectionAnimations(sectionId);
            }
        });
    }, { threshold: 0.2 });
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Add animation class based on element's base class
function addAnimationClass(element) {
    // Remove any existing animation classes first
    removeAnimationClass(element);
    
    // Add the appropriate active animation class
    if (element.classList.contains('slide-left')) {
        element.classList.add('slide-left-active');
    } else if (element.classList.contains('slide-right')) {
        element.classList.add('slide-right-active');
    } else if (element.classList.contains('fade-up')) {
        element.classList.add('fade-up-active');
    } else if (element.classList.contains('zoom-in')) {
        element.classList.add('zoom-in-active');
    } else if (element.classList.contains('blur-in')) {
        element.classList.add('blur-in-active');
    } else if (element.classList.contains('flip-in')) {
        element.classList.add('flip-in-active');
    } else if (element.classList.contains('rotate-in')) {
        element.classList.add('rotate-in-active');
    } else if (element.classList.contains('bounce-in')) {
        element.classList.add('bounce-in-active');
    }
}

// Remove animation classes
function removeAnimationClass(element) {
    const animationClasses = [
        'slide-left-active', 'slide-right-active', 'fade-up-active',
        'zoom-in-active', 'blur-in-active', 'flip-in-active',
        'rotate-in-active', 'bounce-in-active'
    ];
    
    animationClasses.forEach(className => {
        element.classList.remove(className);
    });
}

// Trigger animations for a specific section
function triggerSectionAnimations(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Get all animated elements within this section
    const animatedElements = section.querySelectorAll(
        '.slide-left, .slide-right, .fade-up, .zoom-in, ' +
        '.blur-in, .flip-in, .rotate-in, .bounce-in'
    );
    
    // Stagger animations
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            addAnimationClass(element);
        }, index * 100);
    });
}

// Reset animations for a specific section
function resetSectionAnimation(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const animatedElements = section.querySelectorAll(
        '.slide-left, .slide-right, .fade-up, .zoom-in, ' +
        '.blur-in, .flip-in, .rotate-in, .bounce-in'
    );
    
    animatedElements.forEach(element => {
        removeAnimationClass(element);
    });
}

// Initialize profile badges (fix disappearing issue)
function initProfileBadges() {
    const profileBadges = document.querySelectorAll('.profile-badge');
    
    profileBadges.forEach((badge, index) => {
        // Ensure badges are visible
        badge.style.opacity = '1';
        badge.style.visibility = 'visible';
        badge.style.display = 'flex';
        
        // Add continuous floating animation
        badge.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
        badge.style.animationDelay = `${index * 0.3}s`;
    });
    
    // Create floating animation if not exists
    if (!document.querySelector('#float-animation')) {
        const style = document.createElement('style');
        style.id = 'float-animation';
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0) scale(1);
                    box-shadow: 0 5px 15px rgba(0, 247, 255, 0.2);
                }
                50% {
                    transform: translateY(-10px) scale(1.05);
                    box-shadow: 0 15px 30px rgba(0, 247, 255, 0.3);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize skill bars animation with repeat capability
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const bar = entry.target;
            
            if (entry.isIntersecting) {
                const level = bar.getAttribute('data-level');
                
                // Animate width with delay based on index
                const index = Array.from(skillBars).indexOf(bar);
                setTimeout(() => {
                    bar.style.width = `${level}%`;
                    bar.style.opacity = '1';
                }, index * 100);
            } else {
                // Reset animation when out of view (optional)
                // bar.style.width = '0%';
                // bar.style.opacity = '0';
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

// Initialize tech sphere visualization
// Update the initTechSphere function in cv.js
function initTechSphere() {
    const techSphere = document.getElementById('tech-sphere');
    if (!techSphere) return;
    
    // Create tech tags for the sphere
    const techTags = [
        'React', 'Node.js', 'Python', 'AWS', 'AI/ML',
        'Docker', 'Kubernetes', 'TypeScript', 'Vue.js',
        'Java', 'PHP', 'TensorFlow', 'Cybersecurity',
        'Blockchain', 'IoT', 'DevOps', 'CI/CD', 'Cloud'
    ];
    
    // Clear existing content
    techSphere.innerHTML = '';
    
    // Remove the CSS animation from the container
    techSphere.style.animation = 'none';
    techSphere.style.transformStyle = 'preserve-3d';
    techSphere.style.position = 'relative';
    techSphere.style.width = '200px';
    techSphere.style.height = '200px';
    techSphere.style.margin = '0 auto';
    
    // Create sphere container
    const sphereContainer = document.createElement('div');
    sphereContainer.className = 'sphere-container';
    sphereContainer.style.position = 'relative';
    sphereContainer.style.width = '100%';
    sphereContainer.style.height = '100%';
    sphereContainer.style.transformStyle = 'preserve-3d';
    
    techTags.forEach((tag, index) => {
        const angle = (index / techTags.length) * Math.PI * 2;
        const radius = 60; // Reduced radius for better visibility
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = Math.sin(angle * 2) * 20;
        
        const tagElement = document.createElement('div');
        tagElement.className = 'tech-tag-sphere';
        tagElement.textContent = tag;
        tagElement.setAttribute('data-angle', angle);
        tagElement.setAttribute('data-radius', radius);
        
        // Initial positioning
        tagElement.style.position = 'absolute';
        tagElement.style.left = `calc(50% - 50px)`; // Center adjustment
        tagElement.style.top = `calc(50% - 20px)`; // Center adjustment
        tagElement.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        tagElement.style.padding = '8px 12px';
        tagElement.style.background = 'rgba(0, 247, 255, 0.15)';
        tagElement.style.border = '1px solid rgba(0, 247, 255, 0.3)';
        tagElement.style.borderRadius = '15px';
        tagElement.style.color = '#00f7ff';
        tagElement.style.fontSize = '0.8rem';
        tagElement.style.fontWeight = '500';
        tagElement.style.backdropFilter = 'blur(10px)';
        tagElement.style.whiteSpace = 'nowrap';
        tagElement.style.transition = 'all 0.5s ease';
        tagElement.style.opacity = '0.7';
        tagElement.style.zIndex = '1';
        
        // Add hover effect
        tagElement.addEventListener('mouseenter', () => {
            tagElement.style.background = 'rgba(0, 247, 255, 0.3)';
            tagElement.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(1.2)`;
            tagElement.style.zIndex = '10';
        });
        
        tagElement.addEventListener('mouseleave', () => {
            tagElement.style.background = 'rgba(0, 247, 255, 0.15)';
            tagElement.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            tagElement.style.zIndex = '1';
        });
        
        sphereContainer.appendChild(tagElement);
    });
    
    techSphere.appendChild(sphereContainer);
    
    // Add a center point for reference (optional)
    const centerPoint = document.createElement('div');
    centerPoint.style.position = 'absolute';
    centerPoint.style.left = '50%';
    centerPoint.style.top = '50%';
    centerPoint.style.transform = 'translate(-50%, -50%)';
    centerPoint.style.width = '10px';
    centerPoint.style.height = '10px';
    centerPoint.style.background = 'rgba(0, 247, 255, 0.5)';
    centerPoint.style.borderRadius = '50%';
    centerPoint.style.boxShadow = '0 0 20px rgba(0, 247, 255, 0.5)';
    sphereContainer.appendChild(centerPoint);
    
    // Animate sphere
    let rotation = 0;
    let animationId;
    let isAnimating = true;
    
    function animateSphere() {
        if (!isAnimating) return;
        
        rotation += 0.5;
        
        const tags = sphereContainer.querySelectorAll('.tech-tag-sphere');
        tags.forEach((tag, index) => {
            const angle = parseFloat(tag.getAttribute('data-angle')) + rotation * 0.01;
            const radius = parseFloat(tag.getAttribute('data-radius'));
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const z = Math.sin(angle * 2) * 20;
            
            // Calculate distance from center for scale and opacity
            const distance = Math.sqrt(x * x + y * y + z * z);
            const maxDistance = Math.sqrt(radius * radius + 20 * 20);
            const scale = 0.8 + 0.4 * (1 - distance / maxDistance);
            const opacity = 0.5 + 0.5 * (1 - Math.abs(z) / 40);
            
            tag.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
            tag.style.opacity = opacity.toString();
            
            // Add glow effect based on position
            const glowIntensity = (z + 20) / 40;
            tag.style.boxShadow = `0 0 ${10 + glowIntensity * 20}px rgba(0, 247, 255, ${0.2 + glowIntensity * 0.3})`;
        });
        
        // Rotate the entire container
        sphereContainer.style.transform = `rotateY(${rotation * 0.5}deg) rotateX(${rotation * 0.2}deg)`;
        
        animationId = requestAnimationFrame(animateSphere);
    }
    
    // Start animation when sphere is in view
    const sphereObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isAnimating = true;
                if (!animationId) {
                    animateSphere();
                }
            } else {
                isAnimating = false;
            }
        });
    }, { threshold: 0.1 });
    
    sphereObserver.observe(techSphere);
    
    // Start animation immediately
    setTimeout(() => {
        isAnimating = true;
        animateSphere();
    }, 1000);
}

// Initialize form validation
function initFormValidation() {
    const form = document.getElementById('cv-contact-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
            validateField(this);
        });
        
        // Real-time validation for text inputs
        if (input.type !== 'select-one') {
            input.addEventListener('input', function() {
                validateField(this);
            });
        }
    });
}

// Validate individual field
function validateField(field) {
    const fieldGroup = field.parentElement;
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous error
    fieldGroup.classList.remove('error');
    const existingError = fieldGroup.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    // Validate based on field type
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    } else if (field.type === 'tel' && field.value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(field.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }
    
    // Show error if invalid
    if (!isValid) {
        fieldGroup.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        errorElement.style.color = '#ff6b6b';
        errorElement.style.fontSize = '0.85rem';
        errorElement.style.marginTop = '5px';
        fieldGroup.appendChild(errorElement);
    }
    
    return isValid;
}

// Update initDownloadCV function to generate PDF from webpage
// Update initDownloadCV function
function initDownloadCV() {
    const downloadBtn = document.getElementById('download-cv-pdf') || document.querySelector('.cv-download-btn');
    
    if (!downloadBtn) return;
    
    // Remove any existing event listeners to prevent duplicates
    const newDownloadBtn = downloadBtn.cloneNode(true);
    downloadBtn.parentNode.replaceChild(newDownloadBtn, downloadBtn);
    
    // Add event listener to the new button
    newDownloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Prevent the default anchor behavior
        if (this.tagName === 'A' && this.href === '#') {
            return false;
        }
        
        // Show download confirmation
        showNotification('Generating your CV as PDF...', 'info');
        
        // Generate PDF from current webpage content
        setTimeout(() => {
            generatePDFFromWebpage();
        }, 1500);
        
        return false;
    });
    
    // Also prevent default on mousedown
    newDownloadBtn.addEventListener('mousedown', function(e) {
        e.preventDefault();
        return false;
    });
}

// Function to generate PDF from webpage content
function generatePDFFromWebpage() {
    // Extract all data from the webpage
    const cvData = extractCVData();
    
    // Create a temporary iframe for PDF generation
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    iframe.style.top = '-9999px';
    iframe.style.width = '210mm';
    iframe.style.height = '297mm';
    iframe.style.border = 'none';
    
    // Generate HTML for PDF
    const pdfHTML = generateCVHTML(cvData);
    
    // Add iframe to document
    document.body.appendChild(iframe);
    
    // Write HTML to iframe
    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(pdfHTML);
    iframeDoc.close();
    
    // Wait for content to load, then print/save as PDF
    setTimeout(() => {
        try {
            // Trigger print dialog for PDF save
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
            
            showNotification('CV PDF generated! Use Print dialog to save as PDF.', 'success');
            
            // Remove iframe after printing
            setTimeout(() => {
                document.body.removeChild(iframe);
            }, 5000);
        } catch (error) {
            console.error('PDF generation error:', error);
            showNotification('Failed to generate PDF. Please try the Print CV option.', 'error');
            document.body.removeChild(iframe);
        }
    }, 2000);
}

// Initialize CV contact form
function initCVContactForm() {
    const form = document.getElementById('cv-contact-form');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate all fields
        const inputs = form.querySelectorAll('input, textarea, select');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showNotification('Please fix the errors in the form.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Prepare form data
            const formData = new FormData(form);
            
            // Simulate API call (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            
            // Reset form styles
            form.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('focused');
            });
            
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Initialize experience timeline interactions
function initExperienceTimeline() {
    const timelineCards = document.querySelectorAll('.timeline-card');
    
    timelineCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 30px 60px rgba(0, 247, 255, 0.2)';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
            this.style.zIndex = '1';
        });
        
        // Add click effect for mobile
        card.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                this.classList.toggle('expanded');
            }
        });
    });
}

// Initialize contact form
function initContactForm() {
    const fileUpload = document.getElementById('cv-attachment');
    const fileUploadLabel = fileUpload ? fileUpload.previousElementSibling : null;
    
    if (fileUpload && fileUploadLabel) {
        fileUpload.addEventListener('change', function() {
            if (this.files.length > 0) {
                const fileName = this.files[0].name;
                fileUploadLabel.innerHTML = `<i class="fas fa-paperclip"></i> ${fileName}`;
                
                // Validate file size (max 5MB)
                const maxSize = 5 * 1024 * 1024; // 5MB in bytes
                if (this.files[0].size > maxSize) {
                    showNotification('File size should not exceed 5MB.', 'error');
                    this.value = '';
                    fileUploadLabel.innerHTML = '<i class="fas fa-paperclip"></i> Attach File';
                }
            }
        });
    }
}

// Initialize print CV functionality
function initPrintCV() {
    // Add print button if not exists
    if (!document.querySelector('.print-cv-btn')) {
        const printBtn = document.createElement('button');
        printBtn.className = 'print-cv-btn';
        printBtn.innerHTML = '<i class="fas fa-print"></i> Print CV';
        printBtn.style.position = 'fixed';
        printBtn.style.bottom = '100px';
        printBtn.style.right = '30px';
        printBtn.style.zIndex = '1000';
        printBtn.style.padding = '12px 24px';
        printBtn.style.background = 'linear-gradient(135deg, #00f7ff 0%, #00bcd4 100%)';
        printBtn.style.color = '#0a192f';
        printBtn.style.border = 'none';
        printBtn.style.borderRadius = '50px';
        printBtn.style.fontWeight = '600';
        printBtn.style.fontSize = '0.9rem';
        printBtn.style.cursor = 'pointer';
        printBtn.style.boxShadow = '0 10px 30px rgba(0, 247, 255, 0.3)';
        printBtn.style.transition = 'all 0.3s ease';
        
        printBtn.addEventListener('mouseenter', () => {
            printBtn.style.transform = 'translateY(-3px)';
            printBtn.style.boxShadow = '0 15px 40px rgba(0, 247, 255, 0.4)';
        });
        
        printBtn.addEventListener('mouseleave', () => {
            printBtn.style.transform = 'translateY(0)';
            printBtn.style.boxShadow = '0 10px 30px rgba(0, 247, 255, 0.3)';
        });
        
        printBtn.addEventListener('click', () => {
            generatePrintableCV();
        });
        
        document.body.appendChild(printBtn);
    }
}

// Function to generate printable CV from webpage content
function generatePrintableCV() {
    // Extract all data from the webpage
    const cvData = extractCVData();
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    // Generate the HTML for the printable CV
    const printHTML = generateCVHTML(cvData);
    
    // Write the HTML to the new window
    printWindow.document.write(printHTML);
    printWindow.document.close();
    
    // Wait for content to load, then print
    setTimeout(() => {
        printWindow.focus();
        printWindow.print();
        // printWindow.close(); // Optional: close after printing
    }, 500);
}

// Function to extract all CV data from the webpage
function extractCVData() {
    const cvData = {
        personalInfo: {},
        summary: {},
        experience: [],
        skills: {},
        education: [],
        certifications: [],
        contact: {}
    };
    
    // Extract Personal Information
    const profileCard = document.querySelector('.cv-profile-card');
    if (profileCard) {
        cvData.personalInfo.name = document.querySelector('.profile-name')?.textContent || 'Lewie Mavis';
        cvData.personalInfo.title = document.querySelector('.profile-title')?.textContent || 'Computer Scientist & Software Solutions Expert';
        
        // Extract contact info
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            const text = item.textContent.trim();
            if (text.includes('@')) cvData.personalInfo.email = text;
            else if (text.includes('+254')) cvData.personalInfo.phone = text;
            else if (text.includes('Nairobi')) cvData.personalInfo.location = text;
            else if (text.includes('infy.uk')) cvData.personalInfo.website = text;
        });
        
        // Extract profile image
        const profileImg = document.querySelector('.profile-image');
        if (profileImg) {
            cvData.personalInfo.image = profileImg.src;
        }
        
        // Extract badges
        cvData.personalInfo.badges = [];
        document.querySelectorAll('.profile-badge').forEach(badge => {
            cvData.personalInfo.badges.push(badge.textContent.trim());
        });
    }
    
    // Extract Professional Summary
    const summaryCard = document.querySelector('.cv-summary-card');
    if (summaryCard) {
        cvData.summary.text = document.querySelector('.summary-text')?.textContent || '';
        
        cvData.summary.highlights = [];
        document.querySelectorAll('.highlight-item').forEach(item => {
            cvData.summary.highlights.push(item.textContent.trim());
        });
    }
    
    // Extract Experience
    const experienceNodes = document.querySelectorAll('.timeline-card');
    experienceNodes.forEach(node => {
        const experience = {
            company: node.querySelector('.company-name')?.textContent || '',
            title: node.querySelector('.company-title')?.textContent || '',
            period: node.querySelector('.period-duration')?.textContent || '',
            duration: node.querySelector('.period-length')?.textContent || '',
            achievements: [],
            technologies: []
        };
        
        // Extract achievements
        const achievementItems = node.querySelectorAll('.achievements li');
        achievementItems.forEach(item => {
            experience.achievements.push(item.textContent.trim());
        });
        
        // Extract technologies
        const techTags = node.querySelectorAll('.tech-tag');
        techTags.forEach(tag => {
            experience.technologies.push(tag.textContent.trim());
        });
        
        cvData.experience.push(experience);
    });
    
    // Extract Skills
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        const categoryName = category.querySelector('.category-title')?.textContent || 'Skills';
        cvData.skills[categoryName] = [];
        
        const skillItems = category.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            const skillName = item.querySelector('.skill-name')?.textContent || '';
            const skillLevel = item.querySelector('.skill-level')?.textContent || '';
            const skillPercentage = item.querySelector('.skill-progress')?.getAttribute('data-level') || '0';
            
            cvData.skills[categoryName].push({
                name: skillName,
                level: skillLevel,
                percentage: skillPercentage
            });
        });
    });
    
    // Extract Education
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach(card => {
        const education = {
            degree: card.querySelector('.degree-title')?.textContent || '',
            institution: card.querySelector('.institution-name')?.textContent || '',
            location: card.querySelector('.institution-location')?.textContent || '',
            period: card.querySelector('.education-period')?.textContent || '',
            achievements: [],
            specializations: []
        };
        
        // Extract achievements
        const achievementItems = card.querySelectorAll('.achievement-item');
        achievementItems.forEach(item => {
            education.achievements.push(item.textContent.trim());
        });
        
        // Extract specializations
        const specializationTags = card.querySelectorAll('.specialization-tag');
        specializationTags.forEach(tag => {
            education.specializations.push(tag.textContent.trim());
        });
        
        cvData.education.push(education);
    });
    
    // Extract Certifications
    const certificationCards = document.querySelectorAll('.certification-card');
    certificationCards.forEach(card => {
        const certification = {
            name: card.querySelector('h3')?.textContent || '',
            issuer: card.querySelector('.issuer')?.textContent || '',
            date: card.querySelector('.date')?.textContent || '',
            credentialId: card.querySelector('.credential-id')?.textContent || ''
        };
        
        cvData.certifications.push(certification);
    });
    
    // Extract Contact Information
    const contactSection = document.querySelector('.contact-cv-section');
    if (contactSection) {
        cvData.contact.availability = document.querySelector('.availability-status span')?.textContent || 'Available for Opportunities';
        
        cvData.contact.details = [];
        document.querySelectorAll('.availability-item').forEach(item => {
            const title = item.querySelector('h4')?.textContent || '';
            const value = item.querySelector('p')?.textContent || '';
            cvData.contact.details.push({ title, value });
        });
        
        cvData.contact.quickContacts = [];
        document.querySelectorAll('.quick-contact-item').forEach(item => {
            const type = item.querySelector('h4')?.textContent || '';
            const value = item.querySelector('p')?.textContent || '';
            cvData.contact.quickContacts.push({ type, value });
        });
    }
    
    return cvData;
}

// Function to generate HTML for the printable CV
function generateCVHTML(cvData) {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${cvData.personalInfo.name} - Professional CV</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>
            /* World-Class Printable CV Styles */
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Poppins', sans-serif;
                line-height: 1.6;
                color: #333;
                background: #ffffff;
                font-size: 11pt;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            
            .cv-container {
                max-width: 210mm;
                margin: 0 auto;
                padding: 20mm;
                background: white;
                box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
            }
            
            /* Header Styles */
            .cv-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 40px;
                padding-bottom: 20px;
                border-bottom: 3px solid #00bcd4;
            }
            
            .personal-info {
                flex: 1;
            }
            
            .name {
                font-family: 'Montserrat', sans-serif;
                font-size: 36pt;
                font-weight: 700;
                color: #0a192f;
                margin-bottom: 5px;
                background: linear-gradient(90deg, #0a192f, #00bcd4);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .title {
                font-size: 14pt;
                color: #00bcd4;
                font-weight: 500;
                margin-bottom: 15px;
            }
            
            .contact-info {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
                margin-top: 15px;
            }
            
            .contact-item {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 10pt;
                color: #555;
            }
            
            .contact-item i {
                color: #00bcd4;
                width: 16px;
            }
            
            .badges {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                margin-top: 15px;
            }
            
            .badge {
                padding: 6px 12px;
                background: linear-gradient(135deg, #00f7ff, #00bcd4);
                color: white;
                border-radius: 20px;
                font-size: 9pt;
                font-weight: 500;
            }
            
            .profile-image {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                object-fit: cover;
                border: 4px solid #00bcd4;
                box-shadow: 0 10px 30px rgba(0, 188, 212, 0.3);
            }
            
            /* Section Styles */
            .section {
                margin-bottom: 30px;
                page-break-inside: avoid;
            }
            
            .section-title {
                font-family: 'Montserrat', sans-serif;
                font-size: 16pt;
                font-weight: 600;
                color: #0a192f;
                margin-bottom: 20px;
                padding-bottom: 8px;
                border-bottom: 2px solid #00bcd4;
                position: relative;
            }
            
            .section-title::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 60px;
                height: 2px;
                background: #00bcd4;
            }
            
            /* Summary Section */
            .summary-text {
                font-size: 11pt;
                line-height: 1.8;
                color: #444;
                margin-bottom: 15px;
                text-align: justify;
            }
            
            .highlights {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
                margin-top: 15px;
            }
            
            .highlight {
                display: flex;
                align-items: flex-start;
                gap: 8px;
                font-size: 10pt;
            }
            
            .highlight i {
                color: #00bcd4;
                margin-top: 2px;
            }
            
            /* Experience Section */
            .experience-item {
                margin-bottom: 25px;
                padding-left: 20px;
                border-left: 2px solid #00bcd4;
                position: relative;
            }
            
            .experience-item::before {
                content: '';
                position: absolute;
                left: -6px;
                top: 5px;
                width: 10px;
                height: 10px;
                background: #00bcd4;
                border-radius: 50%;
            }
            
            .company-row {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 5px;
            }
            
            .company-name {
                font-size: 12pt;
                font-weight: 600;
                color: #0a192f;
            }
            
            .company-title {
                font-size: 11pt;
                color: #00bcd4;
                font-weight: 500;
                margin-bottom: 5px;
            }
            
            .company-period {
                font-size: 10pt;
                color: #666;
                background: #f0f8ff;
                padding: 4px 10px;
                border-radius: 15px;
                font-weight: 500;
            }
            
            .achievements-list {
                margin-top: 10px;
                margin-left: 20px;
            }
            
            .achievements-list li {
                margin-bottom: 6px;
                font-size: 10pt;
                line-height: 1.5;
            }
            
            .tech-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 10px;
            }
            
            .tech-tag {
                padding: 4px 10px;
                background: #f0f8ff;
                color: #00bcd4;
                border-radius: 15px;
                font-size: 9pt;
                font-weight: 500;
                border: 1px solid rgba(0, 188, 212, 0.2);
            }
            
            /* Skills Section */
            .skills-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
            }
            
            .skill-category {
                margin-bottom: 20px;
            }
            
            .skill-category-title {
                font-size: 11pt;
                font-weight: 600;
                color: #0a192f;
                margin-bottom: 10px;
                padding-bottom: 5px;
                border-bottom: 1px solid #eee;
            }
            
            .skill-item {
                margin-bottom: 12px;
            }
            
            .skill-info {
                display: flex;
                justify-content: space-between;
                margin-bottom: 5px;
            }
            
            .skill-name {
                font-size: 10pt;
                font-weight: 500;
            }
            
            .skill-level {
                font-size: 9pt;
                color: #00bcd4;
                font-weight: 500;
            }
            
            .skill-bar {
                height: 6px;
                background: #e9ecef;
                border-radius: 3px;
                overflow: hidden;
            }
            
            .skill-progress {
                height: 100%;
                background: linear-gradient(90deg, #00f7ff, #00bcd4);
                border-radius: 3px;
            }
            
            /* Education Section */
            .education-item {
                margin-bottom: 20px;
                padding: 15px;
                background: #f9f9f9;
                border-radius: 8px;
                border-left: 4px solid #00bcd4;
            }
            
            .education-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 8px;
            }
            
            .degree-title {
                font-size: 11pt;
                font-weight: 600;
                color: #0a192f;
            }
            
            .education-period {
                font-size: 10pt;
                color: #666;
                font-weight: 500;
            }
            
            .institution-name {
                font-size: 10pt;
                color: #00bcd4;
                font-weight: 500;
                margin-bottom: 3px;
            }
            
            .institution-location {
                font-size: 9pt;
                color: #777;
                margin-bottom: 8px;
            }
            
            .education-achievements {
                margin-top: 8px;
            }
            
            .education-achievements li {
                font-size: 9pt;
                margin-bottom: 4px;
                color: #555;
            }
            
            .specialization-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin-top: 8px;
            }
            
            .specialization-tag {
                padding: 3px 8px;
                background: rgba(0, 188, 212, 0.1);
                color: #00bcd4;
                border-radius: 12px;
                font-size: 8pt;
                font-weight: 500;
            }
            
            /* Certifications Section */
            .certifications-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            
            .certification-item {
                padding: 15px;
                background: #f9f9f9;
                border-radius: 8px;
                border: 1px solid #eee;
            }
            
            .certification-name {
                font-size: 11pt;
                font-weight: 600;
                color: #0a192f;
                margin-bottom: 5px;
            }
            
            .certification-issuer {
                font-size: 10pt;
                color: #00bcd4;
                font-weight: 500;
                margin-bottom: 3px;
            }
            
            .certification-details {
                font-size: 9pt;
                color: #666;
            }
            
            /* Contact Section */
            .contact-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
            }
            
            .contact-card {
                padding: 15px;
                background: #f9f9f9;
                border-radius: 8px;
            }
            
            .contact-card h4 {
                font-size: 11pt;
                font-weight: 600;
                color: #0a192f;
                margin-bottom: 10px;
            }
            
            .contact-detail {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 8px;
            }
            
            .contact-detail i {
                color: #00bcd4;
                width: 16px;
            }
            
            .quick-contacts {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
                margin-top: 15px;
            }
            
            .quick-contact-item {
                padding: 10px;
                background: white;
                border-radius: 6px;
                border: 1px solid #eee;
            }
            
            .quick-contact-type {
                font-size: 9pt;
                font-weight: 500;
                color: #00bcd4;
                margin-bottom: 3px;
            }
            
            .quick-contact-value {
                font-size: 10pt;
                font-weight: 500;
                color: #333;
            }
            
            /* Footer */
            .cv-footer {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 2px solid #eee;
                text-align: center;
                font-size: 9pt;
                color: #777;
            }
            
            /* Print-specific styles */
            @media print {
                @page {
                    margin: 15mm;
                    size: A4;
                }
                
                body {
                    font-size: 10pt;
                }
                
                .cv-container {
                    padding: 0;
                    box-shadow: none;
                    max-width: 100%;
                }
                
                .section {
                    page-break-inside: avoid;
                }
                
                .cv-header {
                    page-break-after: avoid;
                }
                
                .no-print {
                    display: none !important;
                }
                
                a {
                    color: inherit !important;
                    text-decoration: none !important;
                }
            }
            
            /* Responsive */
            @media (max-width: 768px) {
                .cv-header {
                    flex-direction: column;
                    text-align: center;
                }
                
                .profile-image {
                    margin-top: 20px;
                    order: -1;
                }
                
                .skills-grid,
                .certifications-grid,
                .contact-grid,
                .highlights {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    </head>
    <body>
        <div class="cv-container">
            <!-- Header -->
            <header class="cv-header">
                <div class="personal-info">
                    <h1 class="name">${cvData.personalInfo.name}</h1>
                    <p class="title">${cvData.personalInfo.title}</p>
                    
                    <div class="contact-info">
                        ${cvData.personalInfo.email ? `
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>${cvData.personalInfo.email}</span>
                        </div>
                        ` : ''}
                        
                        ${cvData.personalInfo.phone ? `
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>${cvData.personalInfo.phone}</span>
                        </div>
                        ` : ''}
                        
                        ${cvData.personalInfo.location ? `
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${cvData.personalInfo.location}</span>
                        </div>
                        ` : ''}
                        
                        ${cvData.personalInfo.website ? `
                        <div class="contact-item">
                            <i class="fas fa-globe"></i>
                            <span>${cvData.personalInfo.website}</span>
                        </div>
                        ` : ''}
                    </div>
                    
                    ${cvData.personalInfo.badges && cvData.personalInfo.badges.length > 0 ? `
                    <div class="badges">
                        ${cvData.personalInfo.badges.map(badge => `
                        <span class="badge">${badge}</span>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
                
                ${cvData.personalInfo.image ? `
                <img src="${cvData.personalInfo.image}" alt="${cvData.personalInfo.name}" class="profile-image">
                ` : ''}
            </header>
            
            <!-- Summary -->
            ${cvData.summary.text ? `
            <section class="section">
                <h2 class="section-title">Professional Summary</h2>
                <p class="summary-text">${cvData.summary.text}</p>
                
                ${cvData.summary.highlights && cvData.summary.highlights.length > 0 ? `
                <div class="highlights">
                    ${cvData.summary.highlights.map(highlight => `
                    <div class="highlight">
                        <i class="fas fa-check-circle"></i>
                        <span>${highlight}</span>
                    </div>
                    `).join('')}
                </div>
                ` : ''}
            </section>
            ` : ''}
            
            <!-- Experience -->
            ${cvData.experience.length > 0 ? `
            <section class="section">
                <h2 class="section-title">Professional Experience</h2>
                
                ${cvData.experience.map(exp => `
                <div class="experience-item">
                    <div class="company-row">
                        <div>
                            <h3 class="company-name">${exp.company}</h3>
                            <p class="company-title">${exp.title}</p>
                        </div>
                        <span class="company-period">${exp.period} • ${exp.duration}</span>
                    </div>
                    
                    ${exp.achievements.length > 0 ? `
                    <ul class="achievements-list">
                        ${exp.achievements.map(achievement => `
                        <li>${achievement}</li>
                        `).join('')}
                    </ul>
                    ` : ''}
                    
                    ${exp.technologies.length > 0 ? `
                    <div class="tech-tags">
                        ${exp.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
                `).join('')}
            </section>
            ` : ''}
            
            <!-- Skills -->
            ${Object.keys(cvData.skills).length > 0 ? `
            <section class="section">
                <h2 class="section-title">Technical Skills</h2>
                
                <div class="skills-grid">
                    ${Object.entries(cvData.skills).map(([category, skills]) => `
                    <div class="skill-category">
                        <h3 class="skill-category-title">${category}</h3>
                        
                        ${skills.map(skill => `
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">${skill.name}</span>
                                <span class="skill-level">${skill.level}</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: ${skill.percentage}%"></div>
                            </div>
                        </div>
                        `).join('')}
                    </div>
                    `).join('')}
                </div>
            </section>
            ` : ''}
            
            <!-- Education -->
            ${cvData.education.length > 0 ? `
            <section class="section">
                <h2 class="section-title">Education & Qualifications</h2>
                
                ${cvData.education.map(edu => `
                <div class="education-item">
                    <div class="education-header">
                        <h3 class="degree-title">${edu.degree}</h3>
                        <span class="education-period">${edu.period}</span>
                    </div>
                    
                    <p class="institution-name">${edu.institution}</p>
                    ${edu.location ? `<p class="institution-location">${edu.location}</p>` : ''}
                    
                    ${edu.achievements.length > 0 ? `
                    <ul class="education-achievements">
                        ${edu.achievements.map(achievement => `
                        <li>${achievement}</li>
                        `).join('')}
                    </ul>
                    ` : ''}
                    
                    ${edu.specializations.length > 0 ? `
                    <div class="specialization-tags">
                        ${edu.specializations.map(spec => `
                        <span class="specialization-tag">${spec}</span>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
                `).join('')}
            </section>
            ` : ''}
            
            <!-- Certifications -->
            ${cvData.certifications.length > 0 ? `
            <section class="section">
                <h2 class="section-title">Professional Certifications</h2>
                
                <div class="certifications-grid">
                    ${cvData.certifications.map(cert => `
                    <div class="certification-item">
                        <h3 class="certification-name">${cert.name}</h3>
                        <p class="certification-issuer">${cert.issuer}</p>
                        <p class="certification-details">
                            ${cert.date ? `${cert.date}<br>` : ''}
                            ${cert.credentialId ? `ID: ${cert.credentialId}` : ''}
                        </p>
                    </div>
                    `).join('')}
                </div>
            </section>
            ` : ''}
            
            <!-- Contact -->
            ${cvData.contact ? `
            <section class="section">
                <h2 class="section-title">Contact Information</h2>
                
                <div class="contact-grid">
                    <div class="contact-card">
                        <h4>Availability</h4>
                        ${cvData.contact.availability ? `
                        <div class="contact-detail">
                            <i class="fas fa-check-circle"></i>
                            <span>${cvData.contact.availability}</span>
                        </div>
                        ` : ''}
                        
                        ${cvData.contact.details && cvData.contact.details.length > 0 ? `
                        ${cvData.contact.details.map(detail => `
                        <div class="contact-detail">
                            <i class="fas fa-circle"></i>
                            <span><strong>${detail.title}:</strong> ${detail.value}</span>
                        </div>
                        `).join('')}
                        ` : ''}
                    </div>
                    
                    <div class="contact-card">
                        <h4>Quick Contacts</h4>
                        ${cvData.contact.quickContacts && cvData.contact.quickContacts.length > 0 ? `
                        <div class="quick-contacts">
                            ${cvData.contact.quickContacts.map(contact => `
                            <div class="quick-contact-item">
                                <div class="quick-contact-type">${contact.type}</div>
                                <div class="quick-contact-value">${contact.value}</div>
                            </div>
                            `).join('')}
                        </div>
                        ` : ''}
                    </div>
                </div>
            </section>
            ` : ''}
            
            <!-- Footer -->
            <footer class="cv-footer">
                <p>Generated from https://lewiemavis.infy.uk/cv on ${currentDate}</p>
                <p>© ${new Date().getFullYear()} ${cvData.personalInfo.name}. All rights reserved.</p>
            </footer>
        </div>
        
        <script>
            // Add skill bar animation for visual appeal
            document.addEventListener('DOMContentLoaded', function() {
                const skillBars = document.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    bar.style.width = bar.style.width;
                });
            });
        </script>
    </body>
    </html>
    `;
}

// Helper function to pause animations
function pauseAllAnimations() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        const computedStyle = window.getComputedStyle(el);
        if (computedStyle.animationName !== 'none') {
            el.style.animationPlayState = 'paused';
        }
        if (computedStyle.transitionDuration !== '0s') {
            el.style.transition = 'none';
        }
    });
}

// Helper function to resume animations
function resumeAllAnimations() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        el.style.animationPlayState = '';
        el.style.transition = '';
    });
}

// Initialize back to top button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
            backToTopBtn.classList.add('fade-up-active');
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
            backToTopBtn.classList.remove('fade-up-active');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize chat button
function initChatButton() {
    const chatBtn = document.querySelector('.chat-btn');
    if (!chatBtn) return;
    
    chatBtn.addEventListener('click', () => {
        window.open('https://wa.me/254711190029', '_blank');
    });
    
    // Add floating animation
    let floatDirection = -1;
    setInterval(() => {
        chatBtn.style.transform = `translateY(${floatDirection * 5}px)`;
        floatDirection *= -1;
    }, 2000);
}

// Initialize newsletter form
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-input');
    if (!newsletterForm) return;
    
    const emailInput = newsletterForm.querySelector('.newsletter-email');
    const submitBtn = newsletterForm.querySelector('.newsletter-btn');
    
    if (!emailInput || !submitBtn) return;
    
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!emailInput.value) {
            showNotification('Please enter your email address.', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        // Simulate subscription
        setTimeout(() => {
            showNotification('Thank you for subscribing to updates!', 'success');
            emailInput.value = '';
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Initialize floating animations
function initFloatingAnimations() {
    // Profile badges floating
    const badges = document.querySelectorAll('.profile-badge');
    badges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.3}s`;
    });
    
    // Tech tags floating
    const techTags = document.querySelectorAll('.tech-tag, .specialization-tag');
    techTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    notification.style.position = 'fixed';
    notification.style.top = '30px';
    notification.style.right = '30px';
    notification.style.padding = '15px 25px';
    notification.style.background = type === 'error' ? '#ff6b6b' : 
                                  type === 'success' ? '#4CAF50' : 
                                  type === 'warning' ? '#FF9800' : 
                                  'rgba(0, 247, 255, 0.9)';
    notification.style.color = type === 'error' || type === 'success' ? '#ffffff' : '#0a192f';
    notification.style.borderRadius = '12px';
    notification.style.zIndex = '9999';
    notification.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-20px)';
    notification.style.transition = 'all 0.3s ease';
    notification.style.fontWeight = '500';
    notification.style.fontSize = '0.95rem';
    notification.style.backdropFilter = 'blur(10px)';
    
    // Add icon
    const icon = document.createElement('i');
    icon.style.marginRight = '10px';
    if (type === 'success') icon.className = 'fas fa-check-circle';
    else if (type === 'error') icon.className = 'fas fa-exclamation-circle';
    else if (type === 'warning') icon.className = 'fas fa-exclamation-triangle';
    else icon.className = 'fas fa-info-circle';
    
    notification.prepend(icon);
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Mobile menu toggle
function toggleMenu() {
    const overlay = document.querySelector('.mobile-menu-overlay');
    const panel = document.querySelector('.mobile-menu-panel');
    
    overlay.classList.toggle('active');
    panel.classList.toggle('active');
    document.body.style.overflow = panel.classList.contains('active') ? 'hidden' : '';
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCVPage);
} else {
    initCVPage();
}

// Add print styles dynamically
// Add print styles dynamically
const printStyles = `
@media print {
    /* Print everything exactly as it appears on screen */
    * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
        animation: none !important;
        transition: none !important;
    }
    
    /* Hide only the print button and chat button */
    .print-cv-btn,
    .chat-btn,
    .back-to-top {
        display: none !important;
    }
    
    /* Keep everything else visible */
    body, html, #main-header, section, div, header, footer, img, p, h1, h2, h3, h4, h5, h6, span, a, li, ul, ol, table, tr, td {
        visibility: visible !important;
        opacity: 1 !important;
        display: block !important;
        position: static !important;
        float: none !important;
        overflow: visible !important;
    }
    
    /* Ensure proper margins for printing */
    @page {
        margin: 0.5in;
    }
    
    /* Make sure the entire page prints */
    .cv-hero-section,
    .experience-section,
    .skills-section,
    .education-section,
    .certifications-section,
    .contact-cv-section,
    #premium-footer {
        min-height: auto !important;
        padding: 20px 0 !important;
        background: white !important;
        break-inside: avoid !important;
        page-break-inside: avoid !important;
    }
    
    /* Remove fixed positioning for print */
    #main-header {
        position: relative !important;
        top: 0 !important;
        background: #0a192f !important;
        padding: 20px 0 !important;
    }
    
    /* Ensure text is readable */
    .profile-name,
    .profile-title,
    .summary-title,
    .company-name,
    .company-title,
    .degree-title,
    .section-title,
    .category-title,
    .institution-name,
    h1, h2, h3, h4, h5, h6 {
        color: #000 !important;
        background: none !important;
        -webkit-text-fill-color: #000 !important;
    }
    
    p, span, li, td, th, div:not([class*="glow"]):not([class*="particle"]) {
        color: #333 !important;
    }
    
    /* Keep backgrounds for cards but lighten them */
    .cv-profile-card,
    .cv-summary-card,
    .timeline-card,
    .skill-category,
    .education-card,
    .certification-card,
    .availability-card,
    .contact-form-card,
    .quick-contact-item {
        background: #f8f9fa !important;
        border: 1px solid #ddd !important;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
        color: #333 !important;
    }
    
    /* Ensure skill bars are visible */
    .skill-bar {
        background: #e9ecef !important;
        border: 1px solid #ccc !important;
    }
    
    .skill-progress {
        background: #00bcd4 !important;
    }
    
    /* Keep profile image */
    .profile-image {
        border: 3px solid #00bcd4 !important;
        filter: none !important;
    }
    
    /* Keep links visible but printable */
    a {
        color: #00bcd4 !important;
        text-decoration: underline !important;
    }
    
    a[href^="http"]:after {
        content: " (" attr(href) ")";
        font-size: 10px;
        color: #666;
    }
    
    a[href^="#"]:after,
    a[href^="javascript:"]:after,
    a[href^="mailto:"]:after {
        content: "";
    }
    
    /* Prevent page breaks inside important elements */
    .profile-image-frame,
    .timeline-card,
    .education-card,
    .certification-card {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
    }
    
    /* Add page breaks between major sections */
    .cv-hero-section {
        page-break-after: always !important;
    }
    
    #experience,
    #education,
    #certifications {
        page-break-before: always !important;
    }
    
    /* Add print header and footer */
    @page {
        @top-center {
            content: "Lewie Mavis - Professional CV";
            font-size: 12pt;
            color: #00bcd4;
        }
        @bottom-center {
            content: "Page " counter(page) " of " counter(pages);
            font-size: 10pt;
            color: #666;
        }
    }
    
    /* Add print date and URL */
    body:before {
        content: "Printed from https://lewiemavis.infy.uk/cv on " attr(data-print-date);
        display: block;
        text-align: center;
        font-size: 10pt;
        color: #666;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
    
    /* Ensure proper layout for print */
    .cv-hero-container {
        display: flex !important;
        flex-direction: row !important;
        gap: 40px !important;
    }
    
    @media (max-width: 992px) {
        .cv-hero-container {
            flex-direction: column !important;
        }
    }
    
    /* Remove decorative elements that don't print well */
    .logo-particle-1,
    .logo-particle-2,
    .logo-particle-3,
    .profile-image-glow,
    .timeline-glow,
    .education-glow,
    .cv-hero-bg-pattern,
    .summary-decoration,
    .timeline-connector,
    .profile-status-indicator,
    .tech-tag-sphere::before,
    .tech-tag-sphere::after,
    [class*="glow"],
    [class*="particle"],
    [class*="pattern"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
    }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = printStyles;
document.head.appendChild(styleSheet);

// Export functions for use in other scripts
window.CV = {
    initCVPage,
    initSkillBars,
    initTechSphere,
    showNotification,
    toggleMenu
};