// Get the modal elements
const signUpModal = document.getElementById('signUpModal');
const loginModal = document.getElementById('loginModal');

// Get the buttons that open the modals
const openSignUpForm = document.getElementById('openSignUpForm');
const openLoginForm = document.getElementById('openLoginForm');

// Get the elements that close the modals
const closeSignUp = document.getElementById('closeSignUp');
const closeLogin = document.getElementById('closeLogin');

// Open the Sign Up modal when the Sign Up button is clicked
openSignUpForm.addEventListener('click', () => {
    signUpModal.style.display = 'flex';
});

// Open the Login modal when the Login button is clicked
openLoginForm.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Close the Sign Up modal when the close button is clicked
closeSignUp.addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

// Close the Login modal when the close button is clicked
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close the modals when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === signUpModal) {
        signUpModal.style.display = 'none';
    }
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});
