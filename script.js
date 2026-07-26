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
    document.getElementById("loading").style.display = "block";

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

   let inverter = "";
let battery = "";
let price = "";

if (totalWatts <= 800) {
    inverter = "1kVA Pure Sine Wave";
    battery = "24V 100Ah Lithium";
    price = "₦1,200,000 - ₦1,950,000";
} else if (totalWatts <= 1500) {
    inverter = "1.5kVA Pure Sine Wave";
    battery = "24V 200Ah Lithium";
    price = "₦1,950,000 - ₦3,500,000";
} else if (totalWatts <= 3000) {
    inverter = "3kVA Pure Sine Wave";
    battery = "48V 100Ah Lithium";
    price = "₦3,900,000 - ₦6,500,000";
} else {
    inverter = "5kVA or Above";
    battery = "48V 200Ah Lithium";
    price = "Request a Custom Quote";
}

const dailyEnergy = (totalWatts * hours) / 1000;
const panels = Math.ceil(dailyEnergy / 2.5);

setTimeout(() => {

    document.getElementById("loading").style.display = "none";

    document.getElementById("result").innerHTML = `

<div class="result-card">

<h3>☀️ Solar Estimate</h3>

<p><strong>⚡ Total Load:</strong> ${totalWatts} W</p>

<p><strong>🔌 Recommended Inverter:</strong> ${inverter}</p>

<p><strong>🔋 Recommended Battery:</strong> ${battery}</p>

<p><strong>☀️ 550W Solar Panels:</strong> ${panels}</p>

<p><strong>⚡ Daily Energy:</strong> ${dailyEnergy.toFixed(2)} kWh/day</p>

<p><strong>💰 Estimated Cost:</strong> ${price}</p>

</div>

`;

},1000);
}
