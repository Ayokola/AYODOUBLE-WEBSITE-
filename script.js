// AYODOUBLE Website JavaScript

function animateCounter(id, endValue, speed) {

    let element = document.getElementById(id);

    let count = 0;

    let counter = setInterval(function () {

        count++;

        element.innerHTML = count + "+";

        if (count >= endValue) {

            clearInterval(counter);

        }

    }, speed);

}

animateCounter("project-count", 300, 20);

animateCounter("customers", 200, 25);

animateCounter("experience", 5, 300);
function toggleMenu(){

    let menu = document.getElementById("nav-links");

    menu.classList.toggle("active");

}
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>observer.observe(el));
let topButton = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

};

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
// ===== SOLAR CALCULATOR =====

const openCalculator = document.getElementById("openCalculator");
const calculatorContent = document.getElementById("calculatorContent");

openCalculator.addEventListener("click", function () {

    if (
    calculatorContent.style.display === "none" ||
    calculatorContent.style.display === ""
) {

        calculatorContent.style.display = "block";

        openCalculator.innerHTML = "❌ Close Calculator";

    } else {

        calculatorContent.style.display = "none";

        openCalculator.innerHTML = "🚀 Start Calculator";

    }

});

const calculateSolar = document.getElementById("calculateSolar");

calculateSolar.addEventListener("click", function () {

    let bulbs = Number(document.getElementById("bulbs").value);
    let fans = Number(document.getElementById("fans").value);
    let tvs = Number(document.getElementById("tvs").value);
    let fridge = Number(document.getElementById("fridge").value);
    let freezer = Number(document.getElementById("freezer").value);
    let laptop = Number(document.getElementById("laptop").value);
let decoder = Number(document.getElementById("decoder").value);
let charger = Number(document.getElementById("charger").value);
let cctv = Number(document.getElementById("cctv").value);
let desktop = Number(document.getElementById("desktop").value);
let pump = Number(document.getElementById("pump").value);
let washing = Number(document.getElementById("washing").value);
let microwave = Number(document.getElementById("microwave").value);
let ac1hp = Number(document.getElementById("ac1hp").value);
let ac15hp = Number(document.getElementById("ac15hp").value);

    // Estimated wattage
    let totalWatts =
    (bulbs * 20) +
    (fans * 80) +
    (tvs * 150) +
    (fridge * 180) +
    (freezer * 280) +
    (laptop * 90) +
    (decoder * 25) +
    (charger * 19) +
    (cctv * 15) +
    (desktop * 200) +
    (pump * 850) +
    (washing * 600) +
    (microwave * 1300) +
    (ac1hp * 1000) +
    (ac15hp * 1800);

    let inverter = "";

    if (totalWatts <= 800) {
        inverter = "1kVA Inverter";
    } else if (totalWatts <= 1500) {
        inverter = "1.5kVA Inverter";
    } else if (totalWatts <= 2500) {
        inverter = "3kVA Inverter";
    } else {
        inverter = "5kVA or above";
    }
    let hours = Number(document.getElementById("hours").value);

    let dailyEnergy = (totalWatts * hours) / 1000;

    let panels = Math.ceil(dailyEnergy / 2.5);

    let battery = "";

    if (totalWatts <= 800) {
     battery = "24V 100Ah Lithium";
} else if (totalWatts <= 1500) {
    battery = "24V 200Ah Lithium";
} else if (totalWatts <= 3000) {
    battery = "48V 100Ah Lithium";
} else {
    battery = "48V 200Ah Lithium";
}
    document.getElementById("result").innerHTML = `
<div class="result-card">

<h3>☀️ Solar Estimate</h3>

<p>⚡ <strong>Total Load:</strong> ${totalWatts} W</p>

<p>🔌 <strong>Recommended Inverter:</strong> ${inverter}</p>

<p>🔋 <strong>Recommended Battery:</strong> ${battery}</p>

<p>☀️ <strong>550W Solar Panels:</strong> ${panels}</p>

<p>⚡ <strong>Estimated Daily Energy:</strong> ${dailyEnergy.toFixed(2)} kWh/day</p>

<p>📞 Need a detailed quotation?</p>

<a href="https://wa.me/2348066253620" target="_blank" class="btn">
💬 Chat with AYODOUBLE
</a>

</div>
`;
});
