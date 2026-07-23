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

    if (calculatorContent.style.display === "none") {

        calculatorContent.style.display = "block";

        openCalculator.innerHTML = "❌ Close Calculator";

    } else {

        calculatorContent.style.display = "none";

        openCalculator.innerHTML = "🚀 Start Calculator";

    }

});