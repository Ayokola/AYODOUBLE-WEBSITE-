// ===============================
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
// ===============================
// SOLAR CALCULATOR
// ===============================

const openCalculator = document.getElementById("openCalculator");
const calculatorContent = document.getElementById("calculatorContent");

if (openCalculator && calculatorContent) {

    openCalculator.addEventListener("click", () => {

        if (
            calculatorContent.style.display === "none" ||
            calculatorContent.style.display === ""
        ) {

            calculatorContent.style.display = "block";
            openCalculator.textContent = "❌ Close Calculator";

        } else {

            calculatorContent.style.display = "none";
            openCalculator.textContent = "🚀 Start Calculator";

        }

    });

}
function changeValue(id, change) {

    const input = document.getElementById(id);

    if (!input) return;

    let value = Number(input.value);

    if (isNaN(value)) {
        value = 0;
    }

    value += change;

    if (value < 0) {
        value = 0;
    }

    input.value = value;
}
