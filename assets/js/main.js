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