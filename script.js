oooo// ===============================
// AYODOUBLE WEBSITE JAVASCRIPT
// ===============================

// Mobile Menu
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}
// ===============================
// SCROLL ANIMATION
// ===============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));
// ===============================
// BACK TO TOP BUTTON
// ===============================

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
// ===============================
// ANIMATED COUNTERS
// ===============================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 100));

            const updateCounter = () => {

                current += increment;

                if (current >= target) {
                    counter.textContent = target + "+";
                } else {
                    counter.textContent = current;
                    requestAnimationFrame(updateCounter);
                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {
    counterObserver.observe(counter);
});
