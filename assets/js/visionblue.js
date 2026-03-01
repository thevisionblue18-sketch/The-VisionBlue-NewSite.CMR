// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
            el.classList.add("active");
        }
    });
});

// Donate click interaction
document.querySelectorAll(".donate-card").forEach(card => {
    card.addEventListener("click", () => {
        const amount = card.getAttribute("data-amount");
        alert("Thank you for choosing to donate €" + amount + "!");
    });
});