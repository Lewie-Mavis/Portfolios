// Typing Effect for Hero Section
class TypingEffect {
    constructor() {
        this.roles = [
            "Software Engineer",
            "Web Developer", 
            "Cyber Security Expert",
            "Computer Scientist"
        ];
        this.currentRoleIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typingSpeed = 100;
        this.deletingSpeed = 50;
        this.pauseTime = 2000;
        
        this.roleElement = document.getElementById('typing-role');
        this.cursorElement = document.getElementById('typing-cursor');
        
        this.init();
    }
    
    init() {
        if (this.roleElement) {
            this.type();
            this.startCursorBlink();
        }
    }
    
    type() {
        const currentRole = this.roles[this.currentRoleIndex];
        
        if (this.isDeleting) {
            // Deleting text
            this.roleElement.textContent = currentRole.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            this.typingSpeed = this.deletingSpeed;
        } else {
            // Typing text
            this.roleElement.textContent = currentRole.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            this.typingSpeed = 100;
        }
        
        if (!this.isDeleting && this.currentCharIndex === currentRole.length) {
            // Finished typing, pause then start deleting
            this.typingSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            // Finished deleting, move to next role
            this.isDeleting = false;
            this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
            this.typingSpeed = 500; // Brief pause before starting next word
        }
        
        setTimeout(() => this.type(), this.typingSpeed);
    }
    
    startCursorBlink() {
        setInterval(() => {
            this.cursorElement.style.opacity = this.cursorElement.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
}


// Services Typing Effect
const servicesTyping = new TypingEffect({
    elementId: 'services-typing',
    roles: [
        "Web Development",
        "Mobile App Development", 
        "Cloud Solutions",
        "Cybersecurity Services",
        "Data Analytics",
        "AI & Machine Learning",
        "E-Commerce Solutions",
        "IT Consulting"
    ],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseTime: 1500
});


// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TypingEffect();
});