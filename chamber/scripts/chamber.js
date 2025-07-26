const today = document.querySelector("#lastModified"); 
const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
};

today.innerHTML = "Last modified: " + new Date().toLocaleDateString("en-US", options);

const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})


const chamVisits = document.querySelector(".chamVisits");
let lastVisit = localStorage.getItem("chamLastVisit"); 
let currentVisit = new Date().getTime();

if (!lastVisit) {
    chamVisits.textContent = "Welcome! Let us know if you have any questions"; 
} else {
    let timeDifference = currentVisit - Number(lastVisit);
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        chamVisits.textContent = "Back so soon! Awesome!";
    } else {
        chamVisits.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
    }
}

localStorage.setItem("chamLastVisit", currentVisit.toString());

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const timestampInput = document.getElementById("formTimestamp");

    if (form && timestampInput) {
        form.addEventListener("submit", () => {
            const now = new Date();
            timestampInput.value = now.toISOString();
        });
    }
});

