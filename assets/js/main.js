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

menuBtn.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
});

// Close when clicking outside the sidebar
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.add("-translate-x-full");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Animation duration (in ms)
        once: true, // Ensures animation happens only once
    });
});
