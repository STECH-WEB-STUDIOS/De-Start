tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#00739D',
                secondary: '#ffffff'
            }
        }
    }
}
        


const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const menuLinks = document.querySelectorAll(".side-nav a"); // Select all sidebar links

// Open sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
});

// Close sidebar
closeBtn.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
});

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.add("-translate-x-full");
    }
});

// Close sidebar when clicking a menu link
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.add("-translate-x-full");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Animation duration (in ms)
        once: true, // Ensures animation happens only once
    });
});



function toggleDescription(id) {
    let shortDesc = document.getElementById(id);
    let fullDesc = document.getElementById('full-' + id);
    let btn = event.target;

    if (fullDesc.classList.contains("hidden")) {
        fullDesc.classList.remove("hidden");
        shortDesc.classList.add("hidden");
        btn.innerText = "View Less";
    } else {
        fullDesc.classList.add("hidden");
        shortDesc.classList.remove("hidden");
        btn.innerText = "View More";
    }
}



window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const logo = document.querySelector("header img");
    const menuIcon = document.querySelector("#menu-btn i");
    const navLinks = document.querySelectorAll("nav ul li a");

    if (window.scrollY > 50) {
        // Change header background to semi-white with shadow
        header.classList.add("bg-white/80", "shadow-md");

        // Change logo to black version
        logo.src = "assets/images/logo_black.svg";

        // Change menu icon color (for mobile)
        menuIcon.classList.remove("text-white");
        menuIcon.classList.add("text-gray-600");

        // Change navigation links to black
        navLinks.forEach(link => {
            link.classList.remove("text-white");
            link.classList.add("text-gray-600");
        });

    } else {
        // Revert to original styles
        header.classList.remove("bg-white/80", "shadow-md");
        logo.src = "assets/images/logo_white.svg";

        menuIcon.classList.remove("text-gray-600");
        menuIcon.classList.add("text-white");

        navLinks.forEach(link => {
            link.classList.remove("text-gray-600");
            link.classList.add("text-white");
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-text", {
        strings: ["De-Start"],
        typeSpeed: 100, // Speed of typing
        backSpeed: 50,  // Speed of backspacing
        startDelay: 500, // Delay before typing starts
        loop: true, // Repeats the animation
        showCursor: true, // Shows the typing cursor
        cursorChar: "|", // Cursor style
    });
});


particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#00739D" }, // White color dots
        shape: { type: "circle" }, // Circular dots
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", attract: { enable: false } },
        line_linked: { enable: false } // ❌ Removes connecting lines
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400 },
            bubble: { distance: 400, size: 4, duration: 0.3 },
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});
