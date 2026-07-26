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

    console.log("Button clicked:", id);

    const input = document.getElementById(id);

    console.log(input);

    let value = parseInt(input.value);

    console.log(value);

    input.value = value + change;

}
// ===============================
// CALCULATE BUTTON
// ===============================

const calculateBtn = document.getElementById("calculateSolar");

if (calculateBtn) {

    calculateBtn.addEventListener("click", calculateSolar);

}
function calculateSolar() {

    const bulbs = Number(document.getElementById("bulbs").value);
    const fans = Number(document.getElementById("fans").value);
    const tvs = Number(document.getElementById("tvs").value);
    const fridge = Number(document.getElementById("fridge").value);
    const freezer = Number(document.getElementById("freezer").value);
    const laptop = Number(document.getElementById("laptop").value);
    const decoder = Number(document.getElementById("decoder").value);
    const charger = Number(document.getElementById("charger").value);
    const cctv = Number(document.getElementById("cctv").value);
    const desktop = Number(document.getElementById("desktop").value);
    const pump = Number(document.getElementById("pump").value);
    const washing = Number(document.getElementById("washing").value);
    const microwave = Number(document.getElementById("microwave").value);
    const ac1hp = Number(document.getElementById("ac1hp").value);
    const ac15hp = Number(document.getElementById("ac15hp").value);
    const hours = Number(document.getElementById("hours").value);

    const totalWatts =
        (bulbs * 20) +
        (fans * 80) +
        (tvs * 150) +
        (fridge * 180) +
        (freezer * 280) +
        (laptop * 90) +
        (decoder * 25) +
        (charger * 20) +
        (cctv * 15) +
        (desktop * 200) +
        (pump * 850) +
        (washing * 600) +
        (microwave * 1300) +
        (ac1hp * 1000) +
        (ac15hp * 1800);

    alert("Total Load: " + totalWatts + " W");
}
