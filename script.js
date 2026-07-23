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

animateCounter("project-count", 200, 20);

animateCounter("customers", 150, 25);

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

    // Estimated wattage
    let totalWatts =
        (bulbs * 10) +
        (fans * 75) +
        (tvs * 120) +
        (fridge * 200) +
        (freezer * 300);

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

    document.getElementById("result").innerHTML = `
        <h3>Estimated Result</h3>
        <p><strong>Total Load:</strong> ${totalWatts} W</p>
        <p><strong>Recommended:</strong> ${inverter}</p>
    `;
});