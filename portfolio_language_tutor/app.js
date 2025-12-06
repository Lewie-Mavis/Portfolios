/*
 * Language Learning App - Main JavaScript Module
 * 
 * This is a production-ready, modular language learning application
 * with comprehensive features including translation, text-to-speech,
 * flashcards, history tracking, and offline support.
 * 
 * CONFIGURATION:
 * =============
 * Update the CONFIG object below to connect to your translation API.
 * See detailed comments for different service providers.
 */

// ============================================
// CONFIGURATION SECTION
// ============================================

/**
 * Application Configuration
 * 
 * IMPORTANT: Update these values based on your chosen translation service.
 * 
 * Supported providers:
 * - "libretranslate": Free, open-source API (https://libretranslate.com/)
 * - "deepl": DeepL API (paid, high quality)
 * - "google": Google Cloud Translation API (paid)
 * - "custom": Your own API endpoint
 * 
 * Privacy Note: When useRemoteTranslation is true, user input may be sent
 * to third-party services. Always inform users and get consent.
 */
const CONFIG = {
    // Enable/disable remote translation API
    useRemoteTranslation: true,
    
    // Use "multi" for multiple free APIs
    apiProvider: "multi", // Changed from "libretranslate"
    
    // API endpoint base URL
    apiBaseUrl: "https://api.mymemory.translated.net", // Primary API
    
    // API key (if required by your provider)
    apiKey: "", // Empty string for free APIs
    
    // Default target language (ISO 639-1 code)
    defaultTarget: "fr",
    
    // Maximum number of history items to store
    maxHistoryItems: 100,
    
    // Maximum number of flashcards to store
    maxFlashcards: 500,
    
    // Enable/disable Web Speech API (text-to-speech)
    enableSpeech: true,
    
    // Enable/disable speech recognition
    enableSpeechRecognition: true,
    
    // Fallback translation dictionary (used when offline or API fails)
    fallbackDictionary: {
        "hello": {
            "fr": "bonjour",
            "es": "hola",
            "de": "hallo",
            "zh": "你好",
            "ar": "مرحبًا",
            "sw": "hujambo"
        },
        "thank you": {
            "fr": "merci",
            "es": "gracias",
            "de": "danke",
            "zh": "谢谢",
            "ar": "شكرا",
            "sw": "asante"
        },
        "goodbye": {
            "fr": "au revoir",
            "es": "adiós",
            "de": "auf wiedersehen",
            "zh": "再见",
            "ar": "مع السلامة",
            "sw": "kwaheri"
        },
        "yes": {
            "fr": "oui",
            "es": "sí",
            "de": "ja",
            "zh": "是",
            "ar": "نعم",
            "sw": "ndiyo"
        },
        "no": {
            "fr": "non",
            "es": "no",
            "de": "nein",
            "zh": "不",
            "ar": "لا",
            "sw": "hapana"
        }
    }
};


// ============================================
// DICTIONARY API FUNCTIONS
// ============================================

/**
 * Free Dictionary API lookup
 * https://dictionaryapi.dev/
 */
async function getWordDetailsFromFreeDictionary(word, language) {
  const langMap = {
    'en': 'en',
    'fr': 'fr',
    'es': 'es',
    'de': 'de',
    'zh': 'zh', // Limited support
    'hi': 'hi',
    'it': 'it',
    'ko': 'ko',
    'pt': 'pt',
    'ru': 'ru',
    'ar': 'ar' // Note: Arabic support may be limited
  };
  
  const lang = langMap[language];
  if (!lang) {
    console.log(`Free Dictionary API doesn't support ${language}`);
    return null;
  }
  
  const url = `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${encodeURIComponent(word)}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        console.log(`Word "${word}" not found in Free Dictionary API`);
      }
      return null;
    }
    
    const data = await response.json();
    
    if (Array.isArray(data) && data.length > 0) {
      const entry = data[0];
      const meanings = entry.meanings || [];
      
      // Extract definitions
      const definitions = meanings.flatMap(meaning =>
        meaning.definitions.map(def => def.definition)
      );
      
      // Get part of speech (from first meaning)
      const partOfSpeech = meanings[0]?.partOfSpeech || '';
      
      // Extract examples
      const examples = meanings.flatMap(meaning =>
        meaning.definitions
          .filter(def => def.example)
          .map(def => def.example)
      );
      
      // Get phonetic pronunciation
      const phonetic = entry.phonetic || 
        entry.phonetics?.find(p => p.text)?.text || '';
      
      // Get audio URL if available
      const audioUrl = entry.phonetics?.find(p => p.audio)?.audio || '';
      
      return {
        word: entry.word || word,
        definitions: definitions.slice(0, 3), // Limit to 3 definitions
        partOfSpeech,
        phonetic,
        examples: examples.slice(0, 2), // Limit to 2 examples
        audioUrl,
        synonyms: meanings.flatMap(m => m.synonyms || []).slice(0, 5),
        antonyms: meanings.flatMap(m => m.antonyms || []).slice(0, 5),
        source: 'Free Dictionary API',
        license: {
          name: 'CC BY-SA 3.0',
          url: 'https://creativecommons.org/licenses/by-sa/3.0/'
        }
      };
    }
  } catch (error) {
    console.warn('Free Dictionary API error:', error);
    return null;
  }
  
  return null;
}

/**
 * Wiktionary API lookup (fallback)
 */
async function getWordDetailsFromWiktionary(word, language) {
  // ... (add the Wiktionary function from previous response)
}

/**
 * Local fallback word details
 */
function getLocalWordDetails(word, language) {
  const lowerWord = word.toLowerCase();
  
  // Check exact match in CONFIG.fallbackDictionary
  if (CONFIG.fallbackDictionary[lowerWord] && 
      CONFIG.fallbackDictionary[lowerWord][language]) {
    
    const entry = CONFIG.fallbackDictionary[lowerWord][language];
    
    return {
      word,
      definitions: [`Common translation for "${word}"`],
      partOfSpeech: '',
      translation: typeof entry === 'string' ? entry : entry.translation,
      examples: [`"${word}" in context`],
      source: 'Local Dictionary',
      isFallback: true
    };
  }
  
  // Return basic fallback
  return {
    word,
    definitions: [`No dictionary entry found for "${word}"`],
    partOfSpeech: '',
    examples: [],
    source: 'Generated',
    isFallback: true
  };
}

/**
 * UI Strings - Internationalization-ready
 * 
 * To add support for another UI language:
 * 1. Create a new object with the same keys
 * 2. Replace values with translations
 * 3. Add language switching logic
 */
const UI_STRINGS = {
    en: {
        // General
        appName: "LinguaLearn",
        loading: "Loading...",
        error: "Error",
        success: "Success",
        warning: "Warning",
        offline: "Offline",
        
        // Translation
        translate: "Translate",
        translating: "Translating...",
        translationFailed: "Translation failed",
        usingFallback: "Using offline fallback — translations are approximate",
        confidence: "Confidence",
        detectedLanguage: "Detected Language",
        
        // Audio
        play: "Play",
        pause: "Pause",
        stop: "Stop",
        audioUnavailable: "Audio playback unavailable",
        voicesLoading: "Loading voices...",
        
        // Flashcards
        saveFlashcard: "Save to Flashcards",
        flashcardSaved: "Flashcard saved",
        practiceMode: "Practice Mode",
        
        // History
        clearHistory: "Clear History",
        exportHistory: "Export History",
        
        // Phrases
        greetings: "Greetings",
        travel: "Travel",
        food: "Food",
        numbers: "Numbers",
        
        // Settings
        settings: "Settings",
        privacyNotice: "Privacy Notice: When remote API is enabled, your text may be sent to third-party translation services.",
        
        // Errors
        networkError: "Network error. Please check your connection.",
        apiError: "Translation service unavailable. Using offline mode.",
        speechError: "Speech synthesis not supported in your browser.",
        micError: "Microphone access denied or not available."
    }
};

// Current UI language
let currentUILanguage = 'en';

// ============================================
// GLOBAL STATE
// ============================================

const state = {
    // Translation state
    currentTranslation: null,
    translationHistory: [],
    
    // Audio state
    speechSynthesis: window.speechSynthesis,
    currentUtterance: null,
    voices: [],
    isSpeaking: false,
    
    // Speech recognition state
    speechRecognition: null,
    isListening: false,
    
    // Flashcards state
    flashcards: [],
    practiceMode: false,
    currentPracticeCard: null,
    
    // UI state
    isOnline: navigator.onLine,
    currentSection: 'translate',
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    
    // Settings
    settings: {
        autoDetect: true,
        storeHistory: true,
        useRemoteAPI: CONFIG.useRemoteTranslation,
        defaultTarget: CONFIG.defaultTarget,
        playbackSpeed: 1.0
    }
};

// ============================================
// DOM ELEMENTS
// ============================================

// Navigation
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavOverlay = document.createElement('div');

// Sections
const sections = document.querySelectorAll('.section');
const sectionHeaders = {
    translate: document.getElementById('translate-heading'),
    flashcards: document.getElementById('flashcards-heading'),
    history: document.getElementById('history-heading'),
    phrases: document.getElementById('phrases-heading')
};

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Settings
const settingsToggle = document.querySelector('.settings-toggle');
const settingsPanel = document.querySelector('.settings-panel');
const settingsClose = document.querySelector('.settings-close');
const saveSettingsBtn = document.getElementById('save-settings');
const clearDataBtn = document.getElementById('clear-data');

// Translation elements
const sourceText = document.getElementById('source-text');
const sourceLang = document.getElementById('source-lang');
const targetLang = document.getElementById('target-lang');
const swapLanguagesBtn = document.querySelector('.swap-languages');
const translateBtn = document.getElementById('translate-btn');
const clearInputBtn = document.querySelector('.clear-input');
const charCount = document.getElementById('char-count');

// Translation output
const translatedText = document.getElementById('translated-text');
const translationStatus = document.getElementById('translation-status');
const statusIndicator = translationStatus.querySelector('.status-indicator');
const statusText = translationStatus.querySelector('.status-text');
const confidenceValue = document.getElementById('confidence-value');
const detectedLang = document.getElementById('detected-lang');

// Audio controls
const audioControls = document.getElementById('audio-controls');
const voiceSelect = document.getElementById('voice-select');
const speedSelect = document.getElementById('speed-select');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');
const stopAudioBtn = document.getElementById('stop-audio');
const waveAnimation = document.getElementById('wave-animation');

// Word details
const wordDetailsPanel = document.getElementById('word-details-panel');
const wordDetailsOverlay = document.createElement('div');
const closeDetailsBtn = document.querySelector('.close-details');
const wordDetailsContent = document.getElementById('word-details-content');

// Action buttons
const saveFlashcardBtn = document.getElementById('save-flashcard-btn');
const copyTranslationBtn = document.getElementById('copy-translation-btn');
const exampleBtn = document.getElementById('example-btn');

// Microphone
const microphoneBtn = document.getElementById('microphone-btn');

// Stats
const totalTranslations = document.getElementById('total-translations');
const totalFlashcards = document.getElementById('total-flashcards');
const totalWords = document.getElementById('total-words');

// Offline indicator
const offlineIndicator = document.getElementById('offline-indicator');

// Toast container
const toastContainer = document.getElementById('toast-container');

// Practice modal
const practiceModal = document.getElementById('practice-modal');
const practiceModeBtn = document.getElementById('practice-mode-btn');
const closePracticeBtn = document.querySelector('.close-practice');
const revealAnswerBtn = document.getElementById('reveal-answer');
const practiceQuestion = document.getElementById('practice-question');
const practiceAnswer = document.getElementById('practice-answer');
const practiceHint = document.getElementById('practice-hint');
const cardsRemaining = document.getElementById('cards-remaining');
const cardsCorrect = document.getElementById('cards-correct');
const streak = document.getElementById('streak');
const feedbackButtons = document.querySelectorAll('.btn-feedback');

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the application
 */
function init() {
    // Load data from localStorage
    loadFromStorage();
    
    // Initialize UI
    initUI();
    
    // Initialize event listeners
    initEventListeners();
    
    // Initialize Web Speech API
    initSpeechSynthesis();
    
    // Initialize speech recognition if available
    initSpeechRecognition();
    
    // Check online status
    updateOnlineStatus();
    
    // Load example phrases
    loadExamplePhrases();
    
    // Update stats
    updateStats();
    
    // Set initial theme
    if (state.darkMode) {
        document.body.classList.add('dark');
        themeIcon.className = 'fas fa-sun';
    }
    
    // Create mobile nav overlay
    mobileNavOverlay.className = 'mobile-nav-overlay';
    document.body.appendChild(mobileNavOverlay);
    
    // Create word details overlay
    wordDetailsOverlay.className = 'word-details-overlay';
    document.body.appendChild(wordDetailsOverlay);
    
    // Show welcome message
    showToast('Welcome to LinguaLearn!', 'success');
}

/**
 * Initialize UI components
 */
function initUI() {
    // Set default target language from settings
    targetLang.value = state.settings.defaultTarget;
    
    // Set character count
    updateCharCount();
    
    // Update translation status
    updateTranslationStatus('idle', 'Ready');
    
    // Populate language dropdowns
    populateLanguageDropdowns();
    
    // Load voices
    loadVoices();
    

}

/**
 * Initialize all event listeners
 */
function initEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            switchSection(section);
            closeMobileMenu();
        });
    });
    
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    mobileNavOverlay.addEventListener('click', closeMobileMenu);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Settings
    settingsToggle.addEventListener('click', openSettings);
    settingsClose.addEventListener('click', closeSettings);
    saveSettingsBtn.addEventListener('click', saveSettings);
    clearDataBtn.addEventListener('click', clearAllData);
    
    // Translation
    sourceText.addEventListener('input', updateCharCount);
    translateBtn.addEventListener('click', handleTranslation);
    clearInputBtn.addEventListener('click', clearInput);
    swapLanguagesBtn.addEventListener('click', swapLanguages);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter to translate
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && sourceText === document.activeElement) {
            e.preventDefault();
            handleTranslation();
        }
        
        // Escape to close modals
        if (e.key === 'Escape') {
            if (settingsPanel.classList.contains('active')) {
                closeSettings();
            }
            if (wordDetailsPanel.classList.contains('active')) {
                closeWordDetails();
            }
            if (practiceModal.classList.contains('active')) {
                closePracticeModal();
            }
            closeMobileMenu();
        }
    });
    
    // Audio controls
    playAudioBtn.addEventListener('click', playAudio);
    pauseAudioBtn.addEventListener('click', pauseAudio);
    stopAudioBtn.addEventListener('click', stopAudio);
    speedSelect.addEventListener('change', updatePlaybackSpeed);
    
    // Action buttons
    saveFlashcardBtn.addEventListener('click', saveCurrentTranslationAsFlashcard);
    copyTranslationBtn.addEventListener('click', copyTranslationToClipboard);
    exampleBtn.addEventListener('click', loadRandomExample);
    
    // Microphone
    microphoneBtn.addEventListener('click', toggleSpeechRecognition);
    
    // Word details
    closeDetailsBtn.addEventListener('click', closeWordDetails);
    wordDetailsOverlay.addEventListener('click', closeWordDetails);
    
    // Practice mode
    practiceModeBtn.addEventListener('click', openPracticeModal);
    closePracticeBtn.addEventListener('click', closePracticeModal);
    revealAnswerBtn.addEventListener('click', revealAnswer);
    
    feedbackButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const strength = parseInt(e.target.dataset.strength);
            handleFlashcardFeedback(strength);
        });
    });
    
    // Online/offline events
    window.addEventListener('online', () => {
        state.isOnline = true;
        hideOfflineIndicator();
        showToast('Back online', 'success');
    });
    
    window.addEventListener('offline', () => {
        state.isOnline = false;
        showOfflineIndicator();
        showToast('You are offline. Some features may be limited.', 'warning');
    });
    
    // Voice list loading
    if (state.speechSynthesis) {
        state.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    }
}

// ============================================
// TRANSLATION FUNCTIONS
// ============================================

/**
 * Handle translation request
 */
async function handleTranslation() {
    const text = sourceText.value.trim();
    
    if (!text) {
        showToast('Please enter text to translate', 'warning');
        sourceText.focus();
        return;
    }
    
    const source = sourceLang.value === 'auto' ? 'auto' : sourceLang.value;
    const target = targetLang.value;
    
    // Show loading state
    updateTranslationStatus('loading', UI_STRINGS[currentUILanguage].translating);
    
    try {
        const result = await translate(text, source, target);
        
        // Update UI with translation
        displayTranslation(result);
        
        // Save to history
        if (state.settings.storeHistory) {
            saveToHistory(text, result.translatedText, source, target, result.confidence);
        }
        
        // Update status
        updateTranslationStatus('success', 'Translated');
        
        // Show success message
        showToast('Translation completed', 'success');
        
    } catch (error) {
        console.error('Translation error:', error);
        
        // Update status
        updateTranslationStatus('error', UI_STRINGS[currentUILanguage].translationFailed);
        
        // Show error message
        showToast(error.message || 'Translation failed', 'error');
    }
}

/**
 * Translate text using configured API or fallback
 * 
 * @param {string} text - Text to translate
 * @param {string} sourceLang - Source language code or 'auto'
 * @param {string} targetLang - Target language code
 * @returns {Promise<Object>} Translation result
 */
async function translate(text, sourceLang, targetLang) {
    // If offline or remote API disabled, use fallback
    if (!state.isOnline || !state.settings.useRemoteAPI) {
        return localTranslate(text, sourceLang, targetLang);
    }
    
    // Use remote translation API
    try {
        return await remoteTranslate(text, sourceLang, targetLang);
    } catch (error) {
        console.warn('Remote translation failed, falling back to local:', error);
        return localTranslate(text, sourceLang, targetLang);
    }
}

/**
 * Remote translation using configured API
 * 
 * IMPORTANT: Configure this function based on your chosen translation service.
 * Each service has different API endpoints, request formats, and authentication.
 * 
 * Example configurations for different providers:
 */
/**
 * Remote translation using multiple free APIs
 */
async function remoteTranslate(text, sourceLang, targetLang) {
    // MyMemory API - free, no key needed
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang === 'auto' ? 'en' : sourceLang}|${targetLang}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        
        return {
            translatedText: data.responseData.translatedText,
            detectedSourceLanguage: data.responseData.detectedLanguage || sourceLang,
            confidence: data.match || 0.8,
            source: 'MyMemory API'
        };
        
    } catch (error) {
        console.error('Translation error:', error);
        throw new Error('Translation service unavailable');
    }
}

/**
 * Translate using MyMemory API (free, no key required)
 */
async function translateWithMyMemory(text, sourceLang, targetLang) {
    // Handle auto-detect
    const fromLang = sourceLang === 'auto' ? 'en' : sourceLang;
    
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${targetLang}`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('MyMemory API failed');
    
    const data = await response.json();
    
    // Clean the translated text (MyMemory sometimes returns HTML)
    let translatedText = data.responseData.translatedText;
    translatedText = translatedText.replace(/&quot;/g, '"')
                                   .replace(/&#39;/g, "'")
                                   .replace(/&amp;/g, '&')
                                   .replace(/&lt;/g, '<')
                                   .replace(/&gt;/g, '>');
    
    return {
        translatedText,
        detectedSourceLanguage: data.responseData.detectedLanguage || fromLang,
        confidence: data.match || 0.8,
        source: 'MyMemory API'
    };
}

/**
 * Translate using LibreTranslate
 */
async function translateWithLibreTranslate(text, sourceLang, targetLang) {
    // Use a free public instance
    const baseUrl = "https://translate.argosopentech.com";
    
    const response = await fetch(`${baseUrl}/translate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: text,
            source: sourceLang === 'auto' ? '' : sourceLang,
            target: targetLang,
            format: 'text'
        })
    });
    
    if (!response.ok) {
        // If rate limited, try another instance
        if (response.status === 429) {
            return await translateWithLibreTranslateBackup(text, sourceLang, targetLang);
        }
        throw new Error('LibreTranslate failed');
    }
    
    const data = await response.json();
    
    return {
        translatedText: data.translatedText,
        detectedSourceLanguage: data.detectedLanguage?.language || sourceLang,
        confidence: data.detectedLanguage?.confidence || 0.9,
        source: 'LibreTranslate'
    };
}

/**
 * Backup LibreTranslate instance
 */
async function translateWithLibreTranslateBackup(text, sourceLang, targetLang) {
    const backupInstances = [
        "https://libretranslate.de",
        "https://translate.terraprint.co"
    ];
    
    for (const baseUrl of backupInstances) {
        try {
            const response = await fetch(`${baseUrl}/translate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    q: text,
                    source: sourceLang === 'auto' ? '' : sourceLang,
                    target: targetLang,
                    format: 'text'
                })
            });
            
            if (response.ok) {
                const data = await response.json();
                return {
                    translatedText: data.translatedText,
                    detectedSourceLanguage: data.detectedLanguage?.language || sourceLang,
                    confidence: data.detectedLanguage?.confidence || 0.9,
                    source: 'LibreTranslate (Backup)'
                };
            }
        } catch (error) {
            console.log(`Backup instance ${baseUrl} failed`);
            continue;
        }
    }
    
    throw new Error('All LibreTranslate instances failed');
}

/**
 * Local fallback translation using in-memory dictionary
 * 
 * @param {string} text - Text to translate
 * @param {string} sourceLang - Source language code (ignored for fallback)
 * @param {string} targetLang - Target language code
 * @returns {Object} Translation result
 */
function localTranslate(text, sourceLang, targetLang) {
    const lowerText = text.toLowerCase().trim();
    
    // Check if exact phrase exists in dictionary
    if (CONFIG.fallbackDictionary[lowerText] && CONFIG.fallbackDictionary[lowerText][targetLang]) {
        return {
            translatedText: CONFIG.fallbackDictionary[lowerText][targetLang],
            detectedSourceLanguage: 'en', // Fallback assumes English
            confidence: 0.8,
            source: 'fallback',
            fallback: true
        };
    }
    
    // Simple word-by-word translation for demo purposes
    const words = lowerText.split(' ');
    const translatedWords = words.map(word => {
        if (CONFIG.fallbackDictionary[word] && CONFIG.fallbackDictionary[word][targetLang]) {
            return CONFIG.fallbackDictionary[word][targetLang];
        }
        return `[${word}]`; // Mark untranslated words
    });
    
    return {
        translatedText: translatedWords.join(' '),
        detectedSourceLanguage: 'en',
        confidence: 0.5,
        source: 'fallback',
        fallback: true
    };
}




/**
 * Build HTML for word details panel
 */
function buildWordDetailsHTML(word, language, details) {
  return `
    <div class="word-header">
      <h3 class="word-title">${details.word || word}</h3>
      <div class="word-meta">
        <span class="word-language">${getLanguageName(language)}</span>
        ${details.partOfSpeech ? `<span class="part-of-speech">${details.partOfSpeech}</span>` : ''}
        ${details.source ? `<span class="source-badge">${details.source}</span>` : ''}
      </div>
    </div>
    
    ${details.phonetic ? `
      <div class="pronunciation-section">
        <h4>Pronunciation</h4>
        <div class="pronunciation">
          <span class="ipa">${details.phonetic}</span>
          ${details.audioUrl ? `
            <button class="icon-btn play-pronunciation" 
                    data-audio-url="${details.audioUrl}"
                    aria-label="Play pronunciation">
              <i class="fas fa-volume-up"></i>
            </button>
          ` : ''}
        </div>
      </div>
    ` : ''}
    
    ${details.definitions && details.definitions.length > 0 ? `
      <div class="definitions-section">
        <h4>Definitions</h4>
        <ol class="definitions-list">
          ${details.definitions.map((def, i) => `
            <li>${def}</li>
          `).join('')}
        </ol>
      </div>
    ` : ''}
    
    ${details.examples && details.examples.length > 0 ? `
      <div class="examples-section">
        <h4>Examples</h4>
        <ul class="examples-list">
          ${details.examples.map(example => `
            <li>${example}</li>
          `).join('')}
        </ul>
      </div>
    ` : ''}
    
    ${(details.synonyms && details.synonyms.length > 0) || 
      (details.antonyms && details.antonyms.length > 0) ? `
      <div class="related-words-section">
        <h4>Related Words</h4>
        ${details.synonyms && details.synonyms.length > 0 ? `
          <div class="synonyms">
            <strong>Synonyms:</strong>
            ${details.synonyms.map(syn => `
              <span class="word-tag" data-word="${syn}">${syn}</span>
            `).join('')}
          </div>
        ` : ''}
        ${details.antonyms && details.antonyms.length > 0 ? `
          <div class="antonyms">
            <strong>Antonyms:</strong>
            ${details.antonyms.map(ant => `
              <span class="word-tag" data-word="${ant}">${ant}</span>
            `).join('')}
          </div>
        ` : ''}
      </div>
    ` : ''}
    
    <div class="word-actions">
      <button class="btn btn-primary" id="add-word-flashcard">
        <i class="fas fa-save"></i> Add to Flashcards
      </button>
      <button class="btn btn-secondary" id="practice-word">
        <i class="fas fa-brain"></i> Practice This Word
      </button>
      ${details.audioUrl ? `
        <button class="btn btn-secondary" id="download-audio">
          <i class="fas fa-download"></i> Download Audio
        </button>
      ` : ''}
    </div>
    
    ${details.isFallback ? `
      <div class="fallback-notice">
        <i class="fas fa-info-circle"></i>
        <p>Limited dictionary data available. Consider adding this word to your personal dictionary.</p>
      </div>
    ` : ''}
    
    ${details.license ? `
      <div class="license-notice">
        <small>
          Data provided by ${details.source} under 
          <a href="${details.license.url}" target="_blank">${details.license.name}</a>
        </small>
      </div>
    ` : ''}
  `;
}

/**
 * Attach event listeners to word details panel
 */
function attachWordDetailsEventListeners(word, language, details) {
  // Pronunciation button
  const playBtn = wordDetailsContent.querySelector('.play-pronunciation');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const audioUrl = playBtn.dataset.audioUrl;
      playPronunciationAudio(audioUrl);
    });
  }
  
  // Word tags (synonyms/antonyms)
  wordDetailsContent.querySelectorAll('.word-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const relatedWord = tag.dataset.word;
      showWordDetails(relatedWord, language);
    });
  });
  
  // Action buttons
  const addFlashcardBtn = wordDetailsContent.getElementById('add-word-flashcard');
  const practiceWordBtn = wordDetailsContent.getElementById('practice-word');
  const downloadAudioBtn = wordDetailsContent.getElementById('download-audio');
  
  if (addFlashcardBtn) {
    addFlashcardBtn.addEventListener('click', () => {
      saveWordAsFlashcard(word, language, details);
      showToast('Word added to flashcards', 'success');
    });
  }
  
  if (practiceWordBtn) {
    practiceWordBtn.addEventListener('click', () => {
      practiceSingleWord(word, language);
      closeWordDetails();
    });
  }
  
  if (downloadAudioBtn && details.audioUrl) {
    downloadAudioBtn.addEventListener('click', () => {
      downloadAudioFile(details.audioUrl, `${word}_pronunciation.mp3`);
    });
  }
}

/**
 * Play pronunciation audio from URL
 */
function playPronunciationAudio(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play().catch(error => {
    console.error('Failed to play audio:', error);
    showToast('Could not play pronunciation audio', 'error');
  });
}

/**
 * Download audio file
 */
function downloadAudioFile(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Display translation result in UI
 */
function displayTranslation(result) {
    // Clear previous translation
    translatedText.innerHTML = '';
    
    // Split translated text into words for clickable tokens
    const words = result.translatedText.split(/(\s+)/);
    
    words.forEach(word => {
        if (word.trim()) {
            const span = document.createElement('span');
            span.className = 'word';
            span.textContent = word;
            span.dataset.word = word;
            span.setAttribute('role', 'button');
            span.setAttribute('tabindex', '0');
// In displayTranslation function, update the span creation:
span.addEventListener('click', () => showWordDetails(word, targetLang.value));
span.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    showWordDetails(word, targetLang.value);
  }
});
            translatedText.appendChild(span);
        } else {
            translatedText.appendChild(document.createTextNode(word));
        }
    });
    
    // Update translation details
    if (result.confidence) {
        confidenceValue.textContent = `${Math.round(result.confidence * 100)}%`;
    }
    
    if (result.detectedSourceLanguage) {
        detectedLang.textContent = getLanguageName(result.detectedSourceLanguage);
    }
    
    // Show fallback notice if using fallback translation
    if (result.fallback) {
        const notice = document.createElement('div');
        notice.className = 'fallback-notice';
        notice.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <span>${UI_STRINGS[currentUILanguage].usingFallback}</span>
        `;
        translatedText.parentNode.insertBefore(notice, translatedText);
    }
    
    // Store current translation in state
    state.currentTranslation = {
        sourceText: sourceText.value,
        translatedText: result.translatedText,
        sourceLang: result.detectedSourceLanguage || sourceLang.value,
        targetLang: targetLang.value,
        confidence: result.confidence,
        timestamp: new Date().toISOString()
    };
    
    // Enable audio controls if we have text
    if (result.translatedText && state.speechSynthesis) {
        enableAudioControls(true);
    }
}

/**
 * Update translation status UI
 */
function updateTranslationStatus(status, message) {
    statusIndicator.className = `status-indicator ${status}`;
    statusText.textContent = message;
}

// ============================================
// TEXT-TO-SPEECH FUNCTIONS
// ============================================

/**
 * Initialize Web Speech API
 */
function initSpeechSynthesis() {
    if (!state.speechSynthesis) {
        console.warn('Web Speech API not supported');
        enableAudioControls(false);
        return;
    }
    
    // Set up utterance events
    state.speechSynthesis.onstart = () => {
        state.isSpeaking = true;
        waveAnimation.classList.add('active');
        playAudioBtn.disabled = true;
        pauseAudioBtn.disabled = false;
        stopAudioBtn.disabled = false;
    };
    
    state.speechSynthesis.onend = () => {
        state.isSpeaking = false;
        waveAnimation.classList.remove('active');
        playAudioBtn.disabled = false;
        pauseAudioBtn.disabled = true;
        stopAudioBtn.disabled = true;
    };
    
    state.speechSynthesis.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        state.isSpeaking = false;
        waveAnimation.classList.remove('active');
        playAudioBtn.disabled = false;
        pauseAudioBtn.disabled = true;
        stopAudioBtn.disabled = true;
        showToast('Speech synthesis failed', 'error');
    };
}

/**
 * Load available voices
 */
function loadVoices() {
    if (!state.speechSynthesis) return;
    
    state.voices = state.speechSynthesis.getVoices();
    
    // Clear voice select
    voiceSelect.innerHTML = '';
    
    if (state.voices.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = UI_STRINGS[currentUILanguage].voicesLoading;
        voiceSelect.appendChild(option);
        return;
    }
    
    // Filter voices for current target language
    const targetLangCode = targetLang.value;
    const filteredVoices = state.voices.filter(voice => 
        voice.lang.startsWith(targetLangCode)
    );
    
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Default Voice';
    voiceSelect.appendChild(defaultOption);
    
    // Add filtered voices
    filteredVoices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
    
    // If no filtered voices, show all voices
    if (filteredVoices.length === 0) {
        state.voices.forEach(voice => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.textContent = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }
}

/**
 * Play audio for translated text
 */
function playAudio() {
    if (!state.speechSynthesis || !state.currentTranslation) {
        showToast(UI_STRINGS[currentUILanguage].audioUnavailable, 'warning');
        return;
    }
    
    // Stop any current speech
    stopAudio();
    
    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(state.currentTranslation.translatedText);
    
    // Set voice if selected
    if (voiceSelect.value) {
        const selectedVoice = state.voices.find(voice => voice.name === voiceSelect.value);
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
    }
    
    // Set language
    utterance.lang = targetLang.value;
    
    // Set rate (speed)
    utterance.rate = parseFloat(speedSelect.value) || 1.0;
    
    // Store current utterance
    state.currentUtterance = utterance;
    
    // Speak
    state.speechSynthesis.speak(utterance);
}

/**
 * Pause audio playback
 */
function pauseAudio() {
    if (state.speechSynthesis && state.isSpeaking) {
        state.speechSynthesis.pause();
        pauseAudioBtn.disabled = true;
        playAudioBtn.disabled = false;
        waveAnimation.classList.remove('active');
    }
}

/**
 * Stop audio playback
 */
function stopAudio() {
    if (state.speechSynthesis) {
        state.speechSynthesis.cancel();
        state.isSpeaking = false;
        waveAnimation.classList.remove('active');
        playAudioBtn.disabled = false;
        pauseAudioBtn.disabled = true;
        stopAudioBtn.disabled = true;
    }
}

/**
 * Update playback speed
 */
function updatePlaybackSpeed() {
    const speed = parseFloat(speedSelect.value);
    state.settings.playbackSpeed = speed;
    
    // If currently speaking, update current utterance
    if (state.currentUtterance && state.isSpeaking) {
        state.currentUtterance.rate = speed;
        // Need to restart speech with new rate
        stopAudio();
        setTimeout(playAudio, 100);
    }
}

/**
 * Enable/disable audio controls
 */
function enableAudioControls(enabled) {
    playAudioBtn.disabled = !enabled;
    voiceSelect.disabled = !enabled;
    speedSelect.disabled = !enabled;
    
    if (!enabled) {
        pauseAudioBtn.disabled = true;
        stopAudioBtn.disabled = true;
    }
}

// ============================================
// SPEECH RECOGNITION FUNCTIONS
// ============================================

/**
 * Initialize speech recognition
 */
function initSpeechRecognition() {
    if (!CONFIG.enableSpeechRecognition) {
        microphoneBtn.style.display = 'none';
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        microphoneBtn.style.display = 'none';
        return;
    }
    
    state.speechRecognition = new SpeechRecognition();
    state.speechRecognition.continuous = false;
    state.speechRecognition.interimResults = false;
    state.speechRecognition.lang = sourceLang.value === 'auto' ? 'en-US' : sourceLang.value;
    
    state.speechRecognition.onstart = () => {
        state.isListening = true;
        microphoneBtn.classList.add('listening');
        microphoneBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
        microphoneBtn.setAttribute('aria-label', 'Stop listening');
        showToast('Listening...', 'info');
    };
    
    state.speechRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        sourceText.value = transcript;
        updateCharCount();
        showToast('Speech recognized', 'success');
    };
    
    state.speechRecognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        showToast(UI_STRINGS[currentUILanguage].micError, 'error');
    };
    
    state.speechRecognition.onend = () => {
        state.isListening = false;
        microphoneBtn.classList.remove('listening');
        microphoneBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        microphoneBtn.setAttribute('aria-label', 'Voice input');
    };
}

/**
 * Toggle speech recognition
 */
function toggleSpeechRecognition() {
    if (!state.speechRecognition) {
        showToast('Speech recognition not supported', 'warning');
        return;
    }
    
    if (state.isListening) {
        state.speechRecognition.stop();
    } else {
        try {
            state.speechRecognition.lang = sourceLang.value === 'auto' ? 'en-US' : sourceLang.value;
            state.speechRecognition.start();
        } catch (error) {
            console.error('Failed to start speech recognition:', error);
            showToast('Failed to access microphone', 'error');
        }
    }
}

// ============================================
// WORD DETAILS FUNCTIONS
// ============================================

/**
 * Show word details panel
 */
/**
 * Show word details panel with dictionary lookup
 */
async function showWordDetails(word, language) {
  // Show loading state
  wordDetailsContent.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading word details...</p>
    </div>
  `;
  
  // Show panel immediately
  wordDetailsPanel.classList.add('active');
  wordDetailsOverlay.classList.add('active');
  wordDetailsPanel.setAttribute('aria-hidden', 'false');
  
  try {
    // Try Free Dictionary API first
    let wordDetails = await getWordDetailsFromFreeDictionary(word, language);
    
    // If Free Dictionary fails, try Wiktionary
    if (!wordDetails || wordDetails.definitions.length === 0) {
      wordDetails = await getWordDetailsFromWiktionary(word, language);
    }
    
    // If both APIs fail, use local fallback
    if (!wordDetails || wordDetails.definitions.length === 0) {
      wordDetails = getLocalWordDetails(word, language);
    }
    
    // Build the HTML for word details
    wordDetailsContent.innerHTML = buildWordDetailsHTML(word, language, wordDetails);
    
    // Add event listeners for the new buttons
    attachWordDetailsEventListeners(word, language, wordDetails);
    
  } catch (error) {
    console.error('Failed to load word details:', error);
    wordDetailsContent.innerHTML = `
      <div class="error-state">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Could not load word details. Please try again.</p>
        <button class="btn btn-secondary" id="retry-word-details">Retry</button>
      </div>
    `;
    
    document.getElementById('retry-word-details').addEventListener('click', () => {
      showWordDetails(word, language);
    });
  }
  
  // Focus on close button for accessibility
  closeDetailsBtn.focus();
}

/**
 * Close word details panel
 */
function closeWordDetails() {
    wordDetailsPanel.classList.remove('active');
    wordDetailsOverlay.classList.remove('active');
    wordDetailsPanel.setAttribute('aria-hidden', 'true');
}

/**
 * Get word definition (mock implementation)
 */
function getWordDefinition(word, language) {
    // In a real app, this would call a dictionary API
    const definitions = {
        en: {
            "hello": "A greeting or expression of goodwill.",
            "thank": "To express gratitude or appreciation.",
            "goodbye": "A parting expression of farewell."
        },
        fr: {
            "bonjour": "Une salutation ou expression de bonnes intentions.",
            "merci": "Exprimer de la gratitude ou de l'appréciation.",
            "au revoir": "Une expression d'adieu lors de la séparation."
        },
        es: {
            "hola": "Un saludo o expresión de buena voluntad.",
            "gracias": "Expresar gratitud o aprecio.",
            "adiós": "Una expresión de despedida."
        }
    };
    
    return definitions[language]?.[word.toLowerCase()] || "Definition not available.";
}

/**
 * Get example sentence (mock implementation)
 */
function getExampleSentence(word, language) {
    const examples = {
        en: {
            "hello": "Hello, how are you today?",
            "thank": "Thank you for your help.",
            "goodbye": "Goodbye, see you tomorrow!"
        },
        fr: {
            "bonjour": "Bonjour, comment allez-vous aujourd'hui?",
            "merci": "Merci pour votre aide.",
            "au revoir": "Au revoir, à demain!"
        },
        es: {
            "hola": "Hola, ¿cómo estás hoy?",
            "gracias": "Gracias por tu ayuda.",
            "adiós": "¡Adiós, hasta mañana!"
        }
    };
    
    return examples[language]?.[word.toLowerCase()] || `Example with "${word}"`;
}

/**
 * Get IPA transcription (mock implementation)
 */
function getIPA(word, language) {
    const ipaMap = {
        en: {
            "hello": "/həˈloʊ/",
            "thank": "/θæŋk/",
            "goodbye": "/ɡʊdˈbaɪ/"
        },
        fr: {
            "bonjour": "/bɔ̃.ʒuʁ/",
            "merci": "/mɛʁ.si/",
            "au revoir": "/o ʁə.vwaʁ/"
        },
        es: {
            "hola": "/ˈola/",
            "gracias": "/ˈɡɾa.sjas/",
            "adiós": "/aˈðjos/"
        }
    };
    
    return ipaMap[language]?.[word.toLowerCase()] || "/.../";
}

/**
 * Pronounce a single word
 */
function pronounceWord(word, language) {
    if (!state.speechSynthesis) return;
    
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = language;
    
    // Try to find appropriate voice
    const voices = state.speechSynthesis.getVoices();
    const appropriateVoice = voices.find(v => v.lang.startsWith(language));
    if (appropriateVoice) {
        utterance.voice = appropriateVoice;
    }
    
    state.speechSynthesis.speak(utterance);
}

// ============================================
// FLASHCARDS FUNCTIONS
// ============================================

/**
 * Save current translation as flashcard
 */
function saveCurrentTranslationAsFlashcard() {
    if (!state.currentTranslation) {
        showToast('No translation to save', 'warning');
        return;
    }
    
    const flashcard = {
        id: Date.now().toString(),
        source: state.currentTranslation.sourceText,
        target: state.currentTranslation.translatedText,
        sourceLang: state.currentTranslation.sourceLang,
        targetLang: state.currentTranslation.targetLang,
        example: getExampleSentence(state.currentTranslation.sourceText.split(' ')[0], state.currentTranslation.sourceLang),
        createdAt: new Date().toISOString(),
        lastReviewed: null,
        strength: 0, // 0-3: 0=unlearned, 1=hard, 2=good, 3=easy
        reviews: 0
    };
    
    state.flashcards.push(flashcard);
    saveToStorage('flashcards', state.flashcards);
    
    showToast(UI_STRINGS[currentUILanguage].flashcardSaved, 'success');
    updateStats();
    
    // If on flashcards section, refresh the list
    if (state.currentSection === 'flashcards') {
        displayFlashcards();
    }
}

/**
 * Save word as flashcard
 */
function saveWordAsFlashcard(word, language) {
    // Find translation for the word
    let translation = '';
    
    if (state.currentTranslation && state.currentTranslation.translatedText.includes(word)) {
        // Try to find corresponding source word
        const sourceWords = state.currentTranslation.sourceText.split(' ');
        const targetWords = state.currentTranslation.translatedText.split(' ');
        const wordIndex = targetWords.findIndex(w => w.includes(word));
        
        if (wordIndex >= 0 && wordIndex < sourceWords.length) {
            translation = sourceWords[wordIndex];
        }
    }
    
    if (!translation) {
        // Use fallback dictionary
        for (const [key, translations] of Object.entries(CONFIG.fallbackDictionary)) {
            if (translations[language] === word) {
                translation = key;
                break;
            }
        }
    }
    
    const flashcard = {
        id: Date.now().toString(),
        source: translation || `[Translation of "${word}"]`,
        target: word,
        sourceLang: 'en', // Assume English source for word cards
        targetLang: language,
        example: getExampleSentence(word, language),
        createdAt: new Date().toISOString(),
        lastReviewed: null,
        strength: 0,
        reviews: 0
    };
    
    state.flashcards.push(flashcard);
    saveToStorage('flashcards', state.flashcards);
    
    showToast('Word added to flashcards', 'success');
    updateStats();
}

/**
 * Display flashcards in the flashcards section
 */
function displayFlashcards() {
    const flashcardsList = document.getElementById('flashcards-list');
    const filterLanguage = document.getElementById('filter-language').value;
    
    // Filter flashcards
    let filteredFlashcards = state.flashcards;
    if (filterLanguage !== 'all') {
        filteredFlashcards = state.flashcards.filter(card => 
            card.targetLang === filterLanguage
        );
    }
    
    if (filteredFlashcards.length === 0) {
        flashcardsList.innerHTML = '<p class="empty-state">No flashcards found.</p>';
        return;
    }
    
    // Sort by creation date (newest first)
    filteredFlashcards.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Create flashcards HTML
    flashcardsList.innerHTML = filteredFlashcards.map(card => `
        <div class="flashcard-item" data-id="${card.id}">
            <div class="flashcard-content">
                <div class="flashcard-text">
                    <div class="flashcard-source">${card.source}</div>
                    <div class="flashcard-target">${card.target}</div>
                    ${card.example ? `<div class="flashcard-example">${card.example}</div>` : ''}
                </div>
                <div class="flashcard-actions">
                    <button class="icon-btn play-flashcard" aria-label="Play audio" data-word="${card.target}" data-lang="${card.targetLang}">
                        <i class="fas fa-volume-up"></i>
                    </button>
                    <button class="icon-btn delete-flashcard" aria-label="Delete flashcard">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="flashcard-meta">
                <span>${getLanguageName(card.targetLang)}</span>
                <span>•</span>
                <span>Created: ${formatDate(card.createdAt)}</span>
                ${card.lastReviewed ? `
                    <span>•</span>
                    <span>Last reviewed: ${formatDate(card.lastReviewed)}</span>
                ` : ''}
                <span>•</span>
                <span>Strength: ${getStrengthIcon(card.strength)}</span>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    flashcardsList.querySelectorAll('.play-flashcard').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const word = e.currentTarget.dataset.word;
            const lang = e.currentTarget.dataset.lang;
            pronounceWord(word, lang);
        });
    });
    
    flashcardsList.querySelectorAll('.delete-flashcard').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cardElement = e.currentTarget.closest('.flashcard-item');
            const cardId = cardElement.dataset.id;
            deleteFlashcard(cardId);
        });
    });
    
    // Update count
    document.getElementById('flashcards-count').textContent = filteredFlashcards.length;
}

/**
 * Delete a flashcard
 */
function deleteFlashcard(id) {
    state.flashcards = state.flashcards.filter(card => card.id !== id);
    saveToStorage('flashcards', state.flashcards);
    displayFlashcards();
    updateStats();
    showToast('Flashcard deleted', 'success');
}

/**
 * Get strength icon
 */
function getStrengthIcon(strength) {
    const icons = ['🔴', '🟠', '🟡', '🟢'];
    return icons[strength] || '⚪';
}

// ============================================
// PRACTICE MODE FUNCTIONS
// ============================================

/**
 * Open practice modal
 */
function openPracticeModal() {
    if (state.flashcards.length === 0) {
        showToast('No flashcards to practice', 'warning');
        return;
    }
    
    // Initialize practice session
    state.practiceMode = true;
    state.practiceSession = {
        remainingCards: [...state.flashcards],
        currentCardIndex: 0,
        correctAnswers: 0,
        streak: 0,
        maxStreak: 0
    };
    
    // Show next card
    showNextPracticeCard();
    
    // Show modal
    practiceModal.classList.add('active');
    practiceModal.setAttribute('aria-hidden', 'false');
}

/**
 * Close practice modal
 */
function closePracticeModal() {
    state.practiceMode = false;
    practiceModal.classList.remove('active');
    practiceModal.setAttribute('aria-hidden', 'true');
}

/**
 * Show next practice card
 */
function showNextPracticeCard() {
    if (!state.practiceSession || state.practiceSession.remainingCards.length === 0) {
        // Practice session complete
        practiceQuestion.textContent = 'Practice complete!';
        practiceHint.textContent = '';
        practiceAnswer.textContent = '';
        revealAnswerBtn.style.display = 'none';
        document.querySelector('.card-back').hidden = true;
        document.querySelector('.card-front').hidden = false;
        
        // Show session stats
        const accuracy = state.practiceSession.correctAnswers / 
            (state.practiceSession.correctAnswers + 
             (state.practiceSession.remainingCards.length - state.practiceSession.currentCardIndex)) * 100;
        
        setTimeout(() => {
            showToast(`Practice complete! Accuracy: ${Math.round(accuracy)}%`, 'success');
        }, 500);
        
        return;
    }
    
    // Get next card (simple algorithm: random card)
    const randomIndex = Math.floor(Math.random() * state.practiceSession.remainingCards.length);
    state.currentPracticeCard = state.practiceSession.remainingCards[randomIndex];
    state.practiceSession.currentCardIndex++;
    
    // Show front of card
    practiceQuestion.textContent = state.currentPracticeCard.source;
    practiceHint.textContent = `Language: ${getLanguageName(state.currentPracticeCard.targetLang)}`;
    practiceAnswer.textContent = state.currentPracticeCard.target;
    
    // Reset card state
    document.querySelector('.card-back').hidden = true;
    document.querySelector('.card-front').hidden = false;
    revealAnswerBtn.style.display = 'block';
    
    // Update stats
    cardsRemaining.textContent = state.practiceSession.remainingCards.length;
    cardsCorrect.textContent = state.practiceSession.correctAnswers;
    streak.textContent = state.practiceSession.streak;
}

/**
 * Reveal answer
 */
function revealAnswer() {
    document.querySelector('.card-front').hidden = true;
    document.querySelector('.card-back').hidden = false;
    
    // Add audio button for answer
    const answerAudio = document.getElementById('answer-audio');
    answerAudio.innerHTML = `
        <button class="btn btn-secondary" id="play-answer-audio">
            <i class="fas fa-volume-up"></i> Listen to pronunciation
        </button>
    `;
    
    document.getElementById('play-answer-audio').addEventListener('click', () => {
        pronounceWord(state.currentPracticeCard.target, state.currentPracticeCard.targetLang);
    });
}

/**
 * Handle flashcard feedback
 */
function handleFlashcardFeedback(strength) {
    if (!state.currentPracticeCard) return;
    
    // Update card strength
    const cardIndex = state.flashcards.findIndex(card => card.id === state.currentPracticeCard.id);
    if (cardIndex >= 0) {
        state.flashcards[cardIndex].strength = strength;
        state.flashcards[cardIndex].lastReviewed = new Date().toISOString();
        state.flashcards[cardIndex].reviews++;
        
        // Remove from remaining cards if answered correctly (strength > 0)
        if (strength > 0) {
            state.practiceSession.remainingCards = state.practiceSession.remainingCards.filter(
                card => card.id !== state.currentPracticeCard.id
            );
            state.practiceSession.correctAnswers++;
            state.practiceSession.streak++;
            state.practiceSession.maxStreak = Math.max(state.practiceSession.maxStreak, state.practiceSession.streak);
        } else {
            state.practiceSession.streak = 0;
        }
        
        // Save updated flashcards
        saveToStorage('flashcards', state.flashcards);
    }
    
    // Show next card
    showNextPracticeCard();
}

/**
 * Practice a single word
 */
function practiceSingleWord(word, language) {
    // Create a temporary flashcard for practice
    const tempCard = {
        id: 'temp',
        source: `Practice: ${word}`,
        target: word,
        sourceLang: 'en',
        targetLang: language,
        example: getExampleSentence(word, language)
    };
    
    // Initialize practice session with single card
    state.practiceMode = true;
    state.practiceSession = {
        remainingCards: [tempCard],
        currentCardIndex: 0,
        correctAnswers: 0,
        streak: 0,
        maxStreak: 0
    };
    
    // Show practice modal
    openPracticeModal();
    showNextPracticeCard();
}

// ============================================
// HISTORY FUNCTIONS
// ============================================

/**
 * Save translation to history
 */
function saveToHistory(sourceText, translatedText, sourceLang, targetLang, confidence) {
    const historyItem = {
        id: Date.now().toString(),
        sourceText,
        translatedText,
        sourceLang,
        targetLang,
        confidence,
        timestamp: new Date().toISOString()
    };
    
    state.translationHistory.unshift(historyItem);
    
    // Limit history size
    if (state.translationHistory.length > CONFIG.maxHistoryItems) {
        state.translationHistory = state.translationHistory.slice(0, CONFIG.maxHistoryItems);
    }
    
    saveToStorage('translationHistory', state.translationHistory);
    updateStats();
    
    // If on history section, refresh the list
    if (state.currentSection === 'history') {
        displayHistory();
    }
}

/**
 * Display translation history
 */
function displayHistory() {
    const historyList = document.getElementById('history-list');
    const dateFilter = document.getElementById('history-date-filter').value;
    
    // Filter history
    let filteredHistory = state.translationHistory;
    
    if (dateFilter !== 'all') {
        const now = new Date();
        const cutoff = new Date();
        
        switch (dateFilter) {
            case 'today':
                cutoff.setHours(0, 0, 0, 0);
                break;
            case 'week':
                cutoff.setDate(now.getDate() - 7);
                break;
            case 'month':
                cutoff.setMonth(now.getMonth() - 1);
                break;
        }
        
        filteredHistory = state.translationHistory.filter(item => 
            new Date(item.timestamp) >= cutoff
        );
    }
    
    if (filteredHistory.length === 0) {
        historyList.innerHTML = '<p class="empty-state">No translation history found.</p>';
        return;
    }
    
    // Create history HTML
    historyList.innerHTML = filteredHistory.map(item => `
        <div class="history-item" data-id="${item.id}">
            <div class="history-content">
                <div class="history-text">
                    <div class="history-source">${item.sourceText}</div>
                    <div class="history-target">${item.translatedText}</div>
                </div>
                <div class="history-actions">
                    <button class="icon-btn replay-history" aria-label="Reuse translation">
                        <i class="fas fa-redo"></i>
                    </button>
                    <button class="icon-btn delete-history" aria-label="Delete from history">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="history-meta">
                <span>${getLanguageName(item.sourceLang)} → ${getLanguageName(item.targetLang)}</span>
                <span>•</span>
                <span>${formatDate(item.timestamp)}</span>
                ${item.confidence ? `
                    <span>•</span>
                    <span>Confidence: ${Math.round(item.confidence * 100)}%</span>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    historyList.querySelectorAll('.replay-history').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemElement = e.currentTarget.closest('.history-item');
            const itemId = itemElement.dataset.id;
            replayHistoryItem(itemId);
        });
    });
    
    historyList.querySelectorAll('.delete-history').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemElement = e.currentTarget.closest('.history-item');
            const itemId = itemElement.dataset.id;
            deleteHistoryItem(itemId);
        });
    });
}

/**
 * Replay history item
 */
function replayHistoryItem(id) {
    const item = state.translationHistory.find(item => item.id === id);
    if (!item) return;
    
    // Switch to translate section
    switchSection('translate');
    
    // Fill input fields
    sourceText.value = item.sourceText;
    sourceLang.value = item.sourceLang;
    targetLang.value = item.targetLang;
    
    // Trigger translation
    updateCharCount();
    setTimeout(() => handleTranslation(), 100);
}

/**
 * Delete history item
 */
function deleteHistoryItem(id) {
    state.translationHistory = state.translationHistory.filter(item => item.id !== id);
    saveToStorage('translationHistory', state.translationHistory);
    displayHistory();
    updateStats();
    showToast('History item deleted', 'success');
}

/**
 * Clear all history
 */
function clearHistory() {
    state.translationHistory = [];
    saveToStorage('translationHistory', []);
    displayHistory();
    updateStats();
    showToast('History cleared', 'success');
}

// ============================================
// EXAMPLE PHRASES FUNCTIONS
// ============================================

/**
 * Load example phrases
 */
function loadExamplePhrases() {
    const phrasesGrid = document.getElementById('phrases-grid');
    
    // Example phrases data
    const phrases = {
        greetings: [
            { text: "Hello, how are you?", translation: "Bonjour, comment allez-vous?", lang: "fr" },
            { text: "Good morning", translation: "Buenos días", lang: "es" },
            { text: "Good evening", translation: "Guten Abend", lang: "de" },
            { text: "Nice to meet you", translation: "很高兴认识你", lang: "zh" },
            { text: "Welcome", translation: "أهلاً وسهلاً", lang: "ar" },
            { text: "How are you doing?", translation: "Habari gani?", lang: "sw" }
        ],
        travel: [
            { text: "Where is the station?", translation: "Où est la gare?", lang: "fr" },
            { text: "How much does it cost?", translation: "¿Cuánto cuesta?", lang: "es" },
            { text: "I need a taxi", translation: "Ich brauche ein Taxi", lang: "de" },
            { text: "Hotel reservation", translation: "酒店预订", lang: "zh" },
            { text: "Airport", translation: "مطار", lang: "ar" },
            { text: "Bus stop", translation: "Kituo cha basi", lang: "sw" }
        ],
        food: [
            { text: "I would like water", translation: "Je voudrais de l'eau", lang: "fr" },
            { text: "The menu, please", translation: "La carta, por favor", lang: "es" },
            { text: "Delicious", translation: "Lecker", lang: "de" },
            { text: "I'm vegetarian", translation: "我是素食者", lang: "zh" },
            { text: "Bill please", translation: "الفاتورة من فضلك", lang: "ar" },
            { text: "I'm hungry", translation: "Nina njaa", lang: "sw" }
        ],
        numbers: [
            { text: "One, two, three", translation: "Uno, dos, tres", lang: "es" },
            { text: "Ten, twenty, thirty", translation: "Dix, vingt, trente", lang: "fr" },
            { text: "One hundred", translation: "Einhundert", lang: "de" },
            { text: "Thousand", translation: "千", lang: "zh" },
            { text: "Five", translation: "خمسة", lang: "ar" },
            { text: "Seven", translation: "Saba", lang: "sw" }
        ]
    };
    
    // Display all phrases initially
    displayPhrases(phrases, 'all');
    
    // Add category filter event listener
    document.getElementById('phrase-category').addEventListener('change', (e) => {
        displayPhrases(phrases, e.target.value);
    });
}

/**
 * Display phrases by category
 */
function displayPhrases(phrases, category) {
    const phrasesGrid = document.getElementById('phrases-grid');
    
    let phrasesToShow = [];
    
    if (category === 'all') {
        // Show all phrases from all categories
        Object.values(phrases).forEach(categoryPhrases => {
            phrasesToShow.push(...categoryPhrases);
        });
    } else if (phrases[category]) {
        phrasesToShow = phrases[category];
    }
    
    if (phrasesToShow.length === 0) {
        phrasesGrid.innerHTML = '<p class="empty-state">No phrases found.</p>';
        return;
    }
    
    // Create phrases HTML
    phrasesGrid.innerHTML = phrasesToShow.map(phrase => `
        <div class="phrase-card" data-text="${phrase.text}" data-lang="${phrase.lang}">
            <div class="phrase-text">${phrase.text}</div>
            <div class="phrase-translation">${phrase.translation}</div>
            <div class="phrase-meta">
                <span class="phrase-category">${getLanguageName(phrase.lang)}</span>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    phrasesGrid.querySelectorAll('.phrase-card').forEach(card => {
        card.addEventListener('click', () => {
            const text = card.dataset.text;
            const lang = card.dataset.lang;
            
            // Switch to translate section
            switchSection('translate');
            
            // Fill input and set language
            sourceText.value = text;
            sourceLang.value = 'auto';
            targetLang.value = lang;
            
            // Trigger translation
            updateCharCount();
            setTimeout(() => handleTranslation(), 100);
        });
    });
}

/**
 * Load random example
 */
function loadRandomExample() {
    const categories = ['greetings', 'travel', 'food', 'numbers'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    // Switch to phrases section to show the category
    switchSection('phrases');
    document.getElementById('phrase-category').value = randomCategory;
    document.getElementById('phrase-category').dispatchEvent(new Event('change'));
    
    showToast(`Showing ${randomCategory} examples`, 'info');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Switch between app sections
 */
function switchSection(section) {
    // Update navigation
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === section);
    });
    
    // Update sections
    sections.forEach(sec => {
        const isActive = sec.id === section;
        sec.classList.toggle('active-section', isActive);
        sec.hidden = !isActive;
        
        // Update aria attributes
        const heading = sectionHeaders[sec.id];
        if (heading) {
            sec.setAttribute('aria-labelledby', heading.id);
        }
    });
    
    // Update state
    state.currentSection = section;
    
    // Load section-specific data
    switch (section) {
        case 'flashcards':
            displayFlashcards();
            break;
        case 'history':
            displayHistory();
            break;
        case 'phrases':
            // Already loaded
            break;
    }
    
    // Update URL hash
    window.location.hash = section;
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    const isActive = mobileNav.classList.toggle('active');
    mobileNavOverlay.classList.toggle('active', isActive);
    mobileMenuToggle.setAttribute('aria-expanded', isActive);
    mobileNav.setAttribute('aria-hidden', !isActive);
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    mobileNav.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
}

/**
 * Toggle theme
 */
function toggleTheme() {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark', state.darkMode);
    themeIcon.className = state.darkMode ? 'fas fa-sun' : 'fas fa-moon';
    saveToStorage('darkMode', state.darkMode);
}

/**
 * Open settings panel
 */
function openSettings() {
    settingsPanel.classList.add('active');
    settingsPanel.setAttribute('aria-hidden', 'false');
    settingsToggle.setAttribute('aria-expanded', 'true');
    
    // Load current settings into form
    document.getElementById('default-target').value = state.settings.defaultTarget;
    document.getElementById('auto-detect').checked = state.settings.autoDetect;
    document.getElementById('use-remote-api').checked = state.settings.useRemoteAPI;
    document.getElementById('store-history').checked = state.settings.storeHistory;
    document.getElementById('playback-speed').value = state.settings.playbackSpeed;
}

/**
 * Close settings panel
 */
function closeSettings() {
    settingsPanel.classList.remove('active');
    settingsPanel.setAttribute('aria-hidden', 'true');
    settingsToggle.setAttribute('aria-expanded', 'false');
}

/**
 * Save settings
 */
function saveSettings() {
    state.settings.defaultTarget = document.getElementById('default-target').value;
    state.settings.autoDetect = document.getElementById('auto-detect').checked;
    state.settings.useRemoteAPI = document.getElementById('use-remote-api').checked;
    state.settings.storeHistory = document.getElementById('store-history').checked;
    state.settings.playbackSpeed = parseFloat(document.getElementById('playback-speed').value);
    
    // Update target language dropdown if changed
    if (targetLang.value !== state.settings.defaultTarget) {
        targetLang.value = state.settings.defaultTarget;
    }
    
    // Save to localStorage
    saveToStorage('settings', state.settings);
    
    // Close settings
    closeSettings();
    
    showToast('Settings saved', 'success');
}

/**
 * Clear all user data
 */
function clearAllData() {
    if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
        // Clear arrays
        state.translationHistory = [];
        state.flashcards = [];
        
        // Clear localStorage
        localStorage.removeItem('lingualearn_translationHistory');
        localStorage.removeItem('lingualearn_flashcards');
        
        // Clear current translation
        state.currentTranslation = null;
        translatedText.innerHTML = '<p class="placeholder">Translation will appear here...</p>';
        
        // Update UI
        updateStats();
        displayFlashcards();
        displayHistory();
        
        showToast('All data cleared', 'success');
    }
}

/**
 * Update character count
 */
function updateCharCount() {
    const count = sourceText.value.length;
    charCount.textContent = count;
}

/**
 * Clear input
 */
function clearInput() {
    sourceText.value = '';
    updateCharCount();
    sourceText.focus();
}

/**
 * Swap source and target languages
 */
function swapLanguages() {
    const sourceValue = sourceLang.value;
    const targetValue = targetLang.value;
    
    // Don't swap if source is auto-detect
    if (sourceValue === 'auto') {
        showToast('Cannot swap with auto-detect', 'warning');
        return;
    }
    
    sourceLang.value = targetValue;
    targetLang.value = sourceValue;
    
    // Also swap text if we have a current translation
    if (state.currentTranslation) {
        sourceText.value = state.currentTranslation.translatedText;
        updateCharCount();
        
        // Clear current translation to avoid confusion
        state.currentTranslation = null;
        translatedText.innerHTML = '<p class="placeholder">Translation will appear here...</p>';
        updateTranslationStatus('idle', 'Ready');
    }
    
    // Reload voices for new target language
    loadVoices();
    
    showToast('Languages swapped', 'success');
}

/**
 * Copy translation to clipboard
 */
async function copyTranslationToClipboard() {
    if (!state.currentTranslation) {
        showToast('No translation to copy', 'warning');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(state.currentTranslation.translatedText);
        showToast('Translation copied to clipboard', 'success');
    } catch (error) {
        console.error('Failed to copy:', error);
        showToast('Failed to copy translation', 'error');
    }
}

/**
 * Populate language dropdowns with full language names
 */
function populateLanguageDropdowns() {
    const languages = {
        'auto': 'Auto-detect',
        'en': 'English',
        'fr': 'French',
        'es': 'Spanish',
        'de': 'German',
        'zh': 'Chinese',
        'ar': 'Arabic',
        'sw': 'Swahili'
    };
    
    // Update source language dropdown
    Object.entries(languages).forEach(([code, name]) => {
        const option = sourceLang.querySelector(`option[value="${code}"]`);
        if (option) {
            option.textContent = name;
        }
    });
    
    // Update target language dropdown (excluding auto)
    Object.entries(languages).forEach(([code, name]) => {
        if (code !== 'auto') {
            const option = targetLang.querySelector(`option[value="${code}"]`);
            if (option) {
                option.textContent = name;
            }
        }
    });
}

/**
 * Get language name from code
 */
function getLanguageName(code) {
    const languageNames = {
        'auto': 'Auto-detect',
        'en': 'English',
        'fr': 'French',
        'es': 'Spanish',
        'de': 'German',
        'zh': 'Chinese',
        'ar': 'Arabic',
        'sw': 'Swahili'
    };
    
    return languageNames[code] || code;
}

/**
 * Format date for display
 */
function formatDate(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString();
}

/**
 * Update stats display
 */
function updateStats() {
    totalTranslations.textContent = state.translationHistory.length;
    totalFlashcards.textContent = state.flashcards.length;
    
    // Count unique words in flashcards
    const uniqueWords = new Set();
    state.flashcards.forEach(card => {
        // Simple word count - split by spaces and punctuation
        const words = card.target.toLowerCase().match(/\b\w+\b/g) || [];
        words.forEach(word => uniqueWords.add(word));
    });
    
    totalWords.textContent = uniqueWords.size;
}


/**
 * Update online status
 */
function updateOnlineStatus() {
    state.isOnline = navigator.onLine;
    // Just update state, no UI changes
}

/**
 * Update online status
 */
function updateOnlineStatus() {
    state.isOnline = navigator.onLine;
    if (state.isOnline) {
        hideOfflineIndicator();
    } else {
        showOfflineIndicator();
    }
}

// ============================================
// STORAGE FUNCTIONS
// ============================================

/**
 * Load data from localStorage
 */
function loadFromStorage() {
    try {
        // Load settings
        const savedSettings = localStorage.getItem('lingualearn_settings');
        if (savedSettings) {
            state.settings = { ...state.settings, ...JSON.parse(savedSettings) };
        }
        
        // Load translation history
        const savedHistory = localStorage.getItem('lingualearn_translationHistory');
        if (savedHistory) {
            state.translationHistory = JSON.parse(savedHistory);
        }
        
        // Load flashcards
        const savedFlashcards = localStorage.getItem('lingualearn_flashcards');
        if (savedFlashcards) {
            state.flashcards = JSON.parse(savedFlashcards);
        }
        
        // Load theme preference
        const savedDarkMode = localStorage.getItem('lingualearn_darkMode');
        if (savedDarkMode !== null) {
            state.darkMode = JSON.parse(savedDarkMode);
        }
        
    } catch (error) {
        console.error('Failed to load from storage:', error);
        // Clear corrupted data
        localStorage.removeItem('lingualearn_settings');
        localStorage.removeItem('lingualearn_translationHistory');
        localStorage.removeItem('lingualearn_flashcards');
        localStorage.removeItem('lingualearn_darkMode');
    }
}

/**
 * Save data to localStorage
 */
function saveToStorage(key, data) {
    try {
        localStorage.setItem(`lingualearn_${key}`, JSON.stringify(data));
    } catch (error) {
        console.error('Failed to save to storage:', error);
        showToast('Failed to save data', 'error');
    }
}

// ============================================
// TOAST NOTIFICATION SYSTEM
// ============================================

/**
 * Show toast notification
 */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'alert');
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="${icons[type] || icons.info}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" aria-label="Close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Add close button event
    toast.querySelector('.toast-close').addEventListener('click', () => {
        removeToast(toast);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            removeToast(toast);
        }
    }, 5000);
}

/**
 * Remove toast notification
 */
function removeToast(toast) {
    toast.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => {
        if (toast.parentNode) {
            toastContainer.removeChild(toast);
        }
    }, 300);
}

// ============================================
// EXPORT FUNCTIONS
// ============================================

/**
 * Export history as JSON
 */
function exportHistory() {
    if (state.translationHistory.length === 0) {
        showToast('No history to export', 'warning');
        return;
    }
    
    const dataStr = JSON.stringify(state.translationHistory, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `lingualearn-history-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showToast('History exported', 'success');
}

/**
 * Export flashcards as CSV
 */
function exportFlashcards() {
    if (state.flashcards.length === 0) {
        showToast('No flashcards to export', 'warning');
        return;
    }
    
    // Convert to CSV
    const headers = ['Source', 'Target', 'Source Language', 'Target Language', 'Example', 'Created', 'Last Reviewed', 'Strength'];
    const csvRows = [
        headers.join(','),
        ...state.flashcards.map(card => [
            `"${card.source.replace(/"/g, '""')}"`,
            `"${card.target.replace(/"/g, '""')}"`,
            card.sourceLang,
            card.targetLang,
            `"${(card.example || '').replace(/"/g, '""')}"`,
            card.createdAt,
            card.lastReviewed || '',
            card.strength
        ].join(','))
    ];
    
    const csvString = csvRows.join('\n');
    const dataUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvString);
    
    const exportFileDefaultName = `lingualearn-flashcards-${new Date().toISOString().split('T')[0]}.csv`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showToast('Flashcards exported', 'success');
}

// ============================================
// INITIALIZE APP
// ============================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add export event listeners
document.getElementById('export-history-btn')?.addEventListener('click', exportHistory);
document.getElementById('export-flashcards-btn')?.addEventListener('click', exportFlashcards);
document.getElementById('clear-history-btn')?.addEventListener('click', () => {
    if (confirm('Clear all translation history?')) {
        clearHistory();
    }
});

// Handle hash changes for deep linking
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (['translate', 'flashcards', 'history', 'phrases'].includes(hash)) {
        switchSection(hash);
    }
});

// Initial hash handling
if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (['translate', 'flashcards', 'history', 'phrases'].includes(hash)) {
        switchSection(hash);
    }
}

// Service Worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}