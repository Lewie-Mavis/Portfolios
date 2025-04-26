    const eventRegisterModal = document.getElementById("eventRegisterModal");
    const closeEventRegisterModal = document.getElementById("closeEventRegisterModal");

    const registerBtns = document.querySelectorAll(".btn-register");
    registerBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            eventRegisterModal.style.display = "flex";
        });
    });

    closeEventRegisterModal.onclick = () => {
        eventRegisterModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === eventRegisterModal) {
            eventRegisterModal.style.display = "none";
        }
    };