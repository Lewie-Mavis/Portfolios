particlesJS("particles-js", {
    particles: {
        number: { 
            value: 100, 
            density: { enable: true, value_area: 1000 } 
        },
        color: { 
            value: ["#35D6ED", "#0160C9"], // Multiple colors for stars
            random: true // Allow random color assignment
        },
        shape: { 
            type: "star", 
        },
        opacity: { 
            value: 0.8, 
            random: true, 
            anim: { 
                enable: true, 
                speed: 2, 
                opacity_min: 0.1, 
                sync: false 
            } 
        },
        size: { 
            value: 6, 
            random: true, 
            anim: { 
                enable: true, 
                speed: 2.5, 
                size_min: 1.5, 
                sync: false 
            } 
        },
        line_linked: { enable: false },
        move: {
            enable: true,
            speed: 15, 
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false }, 
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
});

