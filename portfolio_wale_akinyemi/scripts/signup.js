    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Modal open and close logic
    const signUpModal = document.getElementById("signUpModal");
    const loginModal = document.getElementById("loginModal");
    const openSignUpBtn = document.getElementById("openSignUpForm");
    const openLoginBtn = document.getElementById("openLoginForm");
    const closeSignUpBtn = document.getElementById("closeSignUp");
    const closeLoginBtn = document.getElementById("closeLogin");

    openSignUpBtn.onclick = () => signUpModal.style.display = "flex";
    openLoginBtn.onclick = () => loginModal.style.display = "flex";
    closeSignUpBtn.onclick = () => signUpModal.style.display = "none";
    closeLoginBtn.onclick = () => loginModal.style.display = "none";

    // Close modal on outside click
    window.onclick = function(event) {
        if (event.target === signUpModal) signUpModal.style.display = "none";
        if (event.target === loginModal) loginModal.style.display = "none";
    };