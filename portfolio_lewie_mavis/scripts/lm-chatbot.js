// Lewie Mavis AI Chatbot - Pure JavaScript Version
class LewieMavisChatbot {
    constructor() {
        this.isOpen = false;
        this.isMinimized = false;
        this.isTyping = false;
        this.isRecording = false;
        this.messages = [];
        this.notificationCount = 0;
        
        this.initializeElements();
        this.initializeEventListeners();
        this.initializeVoiceRecognition();
        this.addWelcomeMessage();
        this.setupKeyboardShortcuts();
        
        console.log('Lewie Mavis AI Chatbot initialized');
    }

    initializeElements() {
        // Core elements
        this.chatButton = document.getElementById('lmChatbotButton');
        this.chatWindow = document.getElementById('lmChatbotWindow');
        this.minimizedWindow = document.getElementById('lmChatbotMinimized');
        this.closeButton = document.getElementById('lmCloseChat');
        this.minimizeButton = document.getElementById('lmMinimizeChat');
        this.restoreButton = document.getElementById('lmRestoreChat');
        this.messageInput = document.getElementById('lmMessageInput');
        this.sendButton = document.getElementById('lmSendMessage');
        this.voiceButton = document.getElementById('lmVoiceInput');
        this.messagesContainer = document.getElementById('lmChatMessages');
        this.typingIndicator = document.getElementById('lmTypingIndicator');
        this.notificationBadge = document.getElementById('lmNotificationBadge');
        
        // Quick suggestions
        this.suggestions = document.querySelectorAll('.lm-suggestion');
    }

    initializeEventListeners() {
        // Toggle chat window
        this.chatButton.addEventListener('click', () => this.toggleChat());
        this.closeButton.addEventListener('click', () => this.closeChat());
        this.minimizeButton.addEventListener('click', () => this.minimizeChat());
        this.restoreButton.addEventListener('click', () => this.restoreChat());

        // Send message
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Quick suggestions
        this.suggestions.forEach(suggestion => {
            suggestion.addEventListener('click', (e) => {
                const query = e.target.dataset.query;
                this.handleSuggestion(query);
            });
        });

        // Voice input
        this.voiceButton.addEventListener('click', () => this.toggleVoiceRecording());

        // Auto-scroll when new messages are added
        const observer = new MutationObserver(() => {
            this.scrollToBottom();
        });
        observer.observe(this.messagesContainer, { childList: true });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (this.isOpen && 
                !this.chatWindow.contains(e.target) && 
                !this.chatButton.contains(e.target) &&
                !this.minimizedWindow.contains(e.target)) {
                this.minimizeChat();
            }
        });
    }

    initializeVoiceRecognition() {
        // Check for browser support
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.messageInput.value = transcript;
                this.stopVoiceRecording();
                
                // Auto-send after 1 second
                setTimeout(() => this.sendMessage(), 1000);
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.stopVoiceRecording();
                this.addMessage('bot', "I couldn't understand your voice. Please try typing or speak more clearly.");
            };

            this.recognition.onend = () => {
                this.stopVoiceRecording();
            };
        } else {
            // Hide voice button if not supported
            this.voiceButton.style.display = 'none';
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + / to toggle chat
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                this.toggleChat();
            }
            
            // Esc to close/minimize
            if (e.key === 'Escape' && this.isOpen) {
                if (this.isMinimized) {
                    this.restoreChat();
                } else {
                    this.minimizeChat();
                }
            }
        });
    }

    toggleChat() {
        if (this.isMinimized) {
            this.restoreChat();
        } else if (this.isOpen) {
            this.minimizeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.isOpen = true;
        this.isMinimized = false;
        
        this.chatWindow.classList.add('lm-active');
        this.minimizedWindow.classList.remove('lm-active');
        this.chatButton.style.transform = 'scale(0.9)';
        
        // Clear notifications
        this.clearNotifications();
        
        setTimeout(() => {
            this.messageInput.focus();
            this.scrollToBottom();
        }, 300);
    }

    minimizeChat() {
        this.isOpen = false;
        this.isMinimized = true;
        
        this.chatWindow.classList.remove('lm-active');
        this.minimizedWindow.classList.add('lm-active');
        this.chatButton.style.transform = 'scale(1)';
    }

    restoreChat() {
        this.openChat();
    }

    closeChat() {
        this.isOpen = false;
        this.isMinimized = false;
        
        this.chatWindow.classList.remove('lm-active');
        this.minimizedWindow.classList.remove('lm-active');
        this.chatButton.style.transform = 'scale(1)';
    }

    addWelcomeMessage() {
        const welcomeMessage = `👋 **Welcome to Lewie Mavis Software Solutions!**\n\nI'm your AI Assistant, here to help you with:\n\n• **Our Services** - Software development, cybersecurity, cloud solutions\n• **Pricing Information** - Project estimates and packages\n• **Our Experience** - 12+ years in tech industry\n• **Portfolio** - See our work and case studies\n• **Contact** - Get in touch with our team\n\n*Try asking: "What services do you offer?" or "Tell me about pricing"*`;
        
        this.addMessage('bot', welcomeMessage);
    }

    async sendMessage() {
        const text = this.messageInput.value.trim();
        
        if (!text) return;

        // Add user message
        this.addMessage('user', text);
        this.messageInput.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Simulate thinking delay
        setTimeout(() => {
            // Hide typing indicator
            this.hideTypingIndicator();
            
            // Get bot response
            const response = this.getBotResponse(text);
            
            // Add bot response with slight delay for realism
            setTimeout(() => {
                this.addMessage('bot', response);
            }, 500);
            
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }

    getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Lewie Mavis Knowledge Base
        const knowledgeBase = {
            // Greetings
            greetings: {
                patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
                response: `👋 **Hello! Welcome to Lewie Mavis Software Solutions!**\n\nI'm your AI Assistant, powered by Lewie Mavis AI. How can I help you today?\n\n*You can ask about:*\n• Our services and expertise\n• Project pricing and estimates\n• Our experience and portfolio\n• Contact information\n• Technology stack`
            },
            
            // Services
            services: {
                patterns: ['services', 'what do you do', 'offerings', 'expertise', 'capabilities', 'solutions'],
                response: `🚀 **Our Premium Services:**\n\n**1. Custom Software Development**\n• Enterprise Applications\n• Web & Mobile Solutions\n• SaaS Platforms\n• E-commerce Systems\n\n**2. Cybersecurity Solutions**\n• Security Audits & Pen Testing\n• Threat Detection Systems\n• Data Protection & Encryption\n• Network Security\n\n**3. Cloud Integration**\n• AWS/Azure/GCP Setup\n• Cloud Migration\n• DevOps Implementation\n• Serverless Architecture\n\n**4. AI & Machine Learning**\n• Custom AI Models\n• Data Analytics\n• Process Automation\n• Predictive Systems\n\n**5. IT Consulting**\n• Digital Strategy\n• Tech Stack Selection\n• System Architecture\n• Project Management\n\n*Which service interests you most?*`
            },
            
            // Pricing
            pricing: {
                patterns: ['price', 'cost', 'how much', 'pricing', 'budget', 'rates', 'quote'],
                response: `💰 **Pricing Structure:**\n\n**Custom Software Development**\n• Small Projects: $5,000 - $15,000\n• Medium Projects: $15,000 - $50,000\n• Enterprise Solutions: $50,000+\n\n**Cybersecurity Services**\n• Security Audit: $2,500 - $10,000\n• Ongoing Protection: $500 - $5,000/month\n\n**Cloud Solutions**\n• Setup & Migration: $3,000 - $20,000\n• Managed Services: From $1,000/month\n\n**AI Development**\n• Custom AI Models: $10,000 - $100,000+\n• AI Integration: $5,000 - $50,000\n\n*Note: All prices are estimates. We provide detailed custom quotes after understanding your specific requirements.*\n\n**Would you like a personalized quote?**`
            },
            
            // Experience
            experience: {
                patterns: ['experience', 'background', 'how long', 'years', 'portfolio', 'projects', 'work'],
                response: `🏆 **Our Experience & Background:**\n\n**Industry Experience:**\n• 12+ years in software development\n• 200+ clients globally\n• 150+ successful projects\n\n**Key Positions:**\n• **KNH ICT Department**: Senior Systems Architect\n• **Nextgen Technologies**: Lead Developer\n• **Medigold Health Services**: IT Consultant\n\n**Industry Expertise:**\n• Healthcare Technology\n• Financial Systems\n• E-commerce Platforms\n• Government Systems\n• Startup MVPs\n\n**Notable Projects:**\n• Enterprise healthcare management systems\n• High-frequency trading platforms\n• Government digital transformation\n• AI-driven analytics platforms\n\n*Would you like to see specific case studies?*`
            },
            
            // About Lewie Mavis
            about: {
                patterns: ['about lewie', 'who is lewie', 'founder', 'about company', 'lewie mavis'],
                response: `👨‍💻 **About Lewie Mavis & Company:**\n\n**Lewie Mavis - Founder & Lead Computer Scientist**\n• Computer Science Expert\n• Cybersecurity Specialist\n• Software Engineer (12+ years experience)\n• Former positions at KNH, Nextgen Technologies, Medigold\n\n**Lewie Mavis Software Solutions**\n• Founded: 2012\n• Headquarters: Nairobi, Kenya\n• Global Client Base\n• Focus: Innovative, Secure, Scalable Solutions\n\n**Our Mission:**\nTo deliver cutting-edge software solutions that transform businesses through technology innovation, security excellence, and user-centric design.\n\n**What would you like to know more about?**`
            },
            
            // Contact
            contact: {
                patterns: ['contact', 'email', 'phone', 'address', 'location', 'reach', 'get in touch', 'call'],
                response: `📞 **Contact Information:**\n\n**Primary Contact:**\n📧 Email: lewielom@gmail.com\n📱 Phone/WhatsApp: +254 711 190 029\n📍 Location: Upper Hill, Nairobi, Kenya\n\n**Working Hours:**\nMon-Fri: 8:00 AM - 8:00 PM EAT\nSat: 9:00 AM - 2:00 PM EAT\n\n**Quick Connect:**\n• WhatsApp: https://wa.me/254711190029\n• Contact Form: On our website\n\n**Would you like me to help you with a specific inquiry?**`
            },
            
            // Portfolio
            portfolio: {
                patterns: ['portfolio', 'projects', 'work', 'case studies', 'examples', 'show me'],
                response: `🎨 **Portfolio Highlights:**\n\n**Web Development:**\n• Dr. Wale Akinyemi Leadership Platform\n• African Legends Publishing Website\n• The Street Hub Organization\n\n**Mobile Applications:**\n• Healthcare management apps\n• E-commerce mobile solutions\n• Financial tracking applications\n\n**AI Solutions:**\n• AI Drive Company platform\n• Predictive analytics systems\n• Chatbot implementations\n\n**View Full Portfolio:**\nhttps://lewie-mavis.github.io/Portfolios/\n\n*Which type of project interests you?*`
            },
            
            // Technology
            technology: {
                patterns: ['technologies', 'tech stack', 'tools', 'languages', 'frameworks', 'what do you use'],
                response: `⚙️ **Our Technology Stack:**\n\n**Frontend:**\n• React.js, Vue.js, Angular\n• HTML5, CSS3, JavaScript/TypeScript\n• Tailwind CSS, Bootstrap\n\n**Backend:**\n• Node.js, Python (Django/Flask)\n• PHP (Laravel), Java, .NET\n• Express.js, FastAPI\n\n**Databases:**\n• PostgreSQL, MySQL, MongoDB\n• Redis, Elasticsearch\n\n**Cloud & DevOps:**\n• AWS, Azure, Google Cloud\n• Docker, Kubernetes\n• Jenkins, GitHub Actions\n\n**AI/ML:**\n• TensorFlow, PyTorch\n• OpenAI, LangChain\n• Computer Vision, NLP\n\n*Need a specific technology recommendation?*`
            },
            
            // Process
            process: {
                patterns: ['process', 'how do you work', 'methodology', 'approach', 'steps', 'timeline'],
                response: `🔄 **Our Development Process:**\n\n1. **Discovery & Planning**\n   - Requirements gathering\n   - Technical analysis\n   - Project roadmap\n\n2. **Design & Prototyping**\n   - UI/UX design\n   - System architecture\n   - Wireframes & mockups\n\n3. **Development**\n   - Agile sprints\n   - Regular updates\n   - Quality coding\n\n4. **Testing & QA**\n   - Comprehensive testing\n   - Security audits\n   - Performance optimization\n\n5. **Deployment**\n   - Smooth launch\n   - User training\n   - Documentation\n\n6. **Support & Maintenance**\n   - Ongoing support\n   - Regular updates\n   - Performance monitoring\n\n*Ready to start your project?*`
            },
            
            // Help
            help: {
                patterns: ['help', 'what can you do', 'assist', 'support', 'guide'],
                response: `🤖 **How I Can Help:**\n\n**Information About:**\n• Our services & pricing\n• Company background & experience\n• Portfolio & case studies\n• Technology stack\n\n**Project Assistance:**\n• Project planning guidance\n• Technology recommendations\n• Process explanation\n• Timeline estimates\n\n**Contact & Support:**\n• Contact information\n• Appointment scheduling\n• Technical support queries\n\n**Try asking:**\n• "What services do you offer?"\n• "Tell me about pricing"\n• "Show me your portfolio"\n• "How can I contact you?"`
            },
            
            // Thanks
            thanks: {
                patterns: ['thank', 'thanks', 'appreciate', 'grateful'],
                response: `🙏 **You're very welcome!**\n\nI'm here to help you with anything related to Lewie Mavis Software Solutions.\n\nIs there anything else you'd like to know about our services, experience, or how we can help with your project?\n\n*Remember, you can always contact us directly at +254 711 190 029 for immediate assistance.*`
            },
            
            // Goodbye
            goodbye: {
                patterns: ['bye', 'goodbye', 'see you', 'later', 'ciao'],
                response: `👋 **Thank you for chatting!**\n\nFeel free to return anytime if you have more questions about Lewie Mavis Software Solutions.\n\n**Contact us directly:**\n📱 +254 711 190 029\n📧 lewielom@gmail.com\n\n*Have a great day!*`
            }
        };

        // Check for matches
        for (const [category, data] of Object.entries(knowledgeBase)) {
            for (const pattern of data.patterns) {
                if (message.includes(pattern)) {
                    return data.response;
                }
            }
        }

        // Default response for unmatched queries
        return `🤔 **Thanks for your question!**\n\nI'm a specialized AI assistant for Lewie Mavis Software Solutions. I can help you with:\n\n**Try asking about:**\n• "What services do you offer?"\n• "Can you tell me about pricing?"\n• "What is your experience?"\n• "How can I contact you?"\n\n**For immediate assistance:**\n📱 Call/WhatsApp: +254 711 190 029\n📧 Email: lewielom@gmail.com\n\n*How else can I help you today?*`;
    }

    handleSuggestion(query) {
        const questions = {
            'services': 'What services do you offer?',
            'pricing': 'What are your prices?',
            'experience': 'What is your experience?',
            'contact': 'How can I contact you?'
        };

        if (questions[query]) {
            this.messageInput.value = questions[query];
            this.sendMessage();
        }
    }

    addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `lm-message lm-${sender}`;
        
        const timestamp = new Date().toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const formattedText = this.formatMessage(text);
        
        messageDiv.innerHTML = `
            <div class="lm-message-avatar">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" 
                          fill="${sender === 'user' ? '#0a192f' : '#00f7ff'}"/>
                </svg>
            </div>
            <div class="lm-message-content">
                <div class="lm-message-text">${formattedText}</div>
                <div class="lm-message-time">${timestamp}</div>
            </div>
        `;

        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        // Add to messages history
        this.messages.push({
            sender,
            text,
            timestamp,
            formatted: formattedText
        });
        
        // If chat is minimized, add notification
        if (sender === 'bot' && this.isMinimized) {
            this.addNotification();
        }
    }

    formatMessage(text) {
        // Convert markdown-style formatting
        text = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/• (.*?)(?:\n|$)/g, '• <span class="lm-highlight">$1</span><br>')
            .replace(/\n/g, '<br>');
        
        // Format numbered lists
        text = text.replace(/(\d+\.) (.*?)(?:\n|$)/g, '$1 <span class="lm-highlight">$2</span><br>');
        
        // Add emoji styling
        text = text.replace(/(👋|🚀|💰|🏆|👨‍💻|📞|🎨|⚙️|🔄|🤖|🙏|👋|🤔)/g, 
            '<span style="font-size: 1.2em; margin-right: 4px;">$1</span>');
        
        // Highlight Lewie Mavis keywords
        const keywords = [
            'Lewie Mavis', 'software', 'development', 'cybersecurity', 
            'AI', 'cloud', 'consulting', 'portfolio', 'pricing', 'services',
            'KNH', 'Nextgen', 'Medigold', 'Nairobi', 'Kenya'
        ];
        
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
            text = text.replace(regex, 
                `<span style="color: #00f7ff; font-weight: 600;">$&</span>`);
        });
        
        // Convert URLs to links
        text = text.replace(/(https?:\/\/[^\s]+)/g, 
            '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #00f7ff; text-decoration: underline;">$1</a>');
        
        return text;
    }

    showTypingIndicator() {
        this.isTyping = true;
        this.typingIndicator.classList.add('lm-active');
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.isTyping = false;
        this.typingIndicator.classList.remove('lm-active');
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    toggleVoiceRecording() {
        if (!this.recognition) {
            this.addMessage('bot', "Voice recognition is not supported in your browser. Please use the text input.");
            return;
        }

        if (this.isRecording) {
            this.stopVoiceRecording();
        } else {
            this.startVoiceRecording();
        }
    }

    startVoiceRecording() {
        try {
            this.recognition.start();
            this.isRecording = true;
            this.voiceButton.classList.add('lm-recording');
            this.addMessage('bot', "🎤 **Listening...** Speak clearly about your inquiry.");
        } catch (error) {
            console.error('Error starting voice recognition:', error);
            this.addMessage('bot', "I'm having trouble accessing the microphone. Please check your browser permissions.");
        }
    }

    stopVoiceRecording() {
        if (this.recognition && this.isRecording) {
            this.recognition.stop();
            this.isRecording = false;
            this.voiceButton.classList.remove('lm-recording');
        }
    }

    addNotification() {
        this.notificationCount++;
        this.notificationBadge.textContent = this.notificationCount;
        this.notificationBadge.style.display = 'flex';
        
        // Add animation to chat button
        this.chatButton.style.animation = 'lm-float 0.5s ease-in-out 3';
        
        setTimeout(() => {
            this.chatButton.style.animation = '';
        }, 1500);
    }

    clearNotifications() {
        this.notificationCount = 0;
        this.notificationBadge.style.display = 'none';
    }

    // Auto-open on first visit
    autoOpen() {
        if (!sessionStorage.getItem('lmChatbotOpened')) {
            setTimeout(() => {
                this.openChat();
                sessionStorage.setItem('lmChatbotOpened', 'true');
            }, 3000);
        }
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit to ensure other scripts are loaded
    setTimeout(() => {
        window.lmChatbot = new LewieMavisChatbot();
        
        // Optional: Auto-open on first visit (uncomment if desired)
        // window.lmChatbot.autoOpen();
        
        // Make chatbot accessible globally for debugging
        console.log('Lewie Mavis Chatbot ready! Type window.lmChatbot to access.');
    }, 1000);
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LewieMavisChatbot;
}