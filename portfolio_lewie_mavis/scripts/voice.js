// Preload voices when the page loads
let voices = [];

function preloadVoices() {
    voices = window.speechSynthesis.getVoices();
    // In case voices are loaded asynchronously, wait for the 'voiceschanged' event
    if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
        };
    }
}

// Call preloadVoices when the page loads
window.addEventListener('load', preloadVoices);

// Function to trigger speech with the default voice
function speakText(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.volume = 1;  // Volume 0 to 1
    speech.rate = 1;  // Speed 0.1 to 10
    speech.pitch = 1;  // Pitch 0 to 2

    // Ensure voices are loaded before speaking
    if (voices.length === 0) {
        // Wait for voices to load and then speak
        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            speech.voice = voices[0] || null;
            window.speechSynthesis.speak(speech);
        };
    } else {
        // If voices are already loaded, use the default voice
        speech.voice = voices[0] || null;
        window.speechSynthesis.speak(speech);
    }
}

// Add event listener to trigger speech when clicked
document.querySelectorAll('.click-to-read').forEach(element => {
    element.addEventListener('click', function() {
        // Read the text of the clicked element immediately
        speakText(element.innerText || element.textContent);
    });
});
