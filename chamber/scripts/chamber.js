import {memberships} from '../data/memberships.js'
// console.log(memberships)

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


// const chamVisits = document.querySelector(".chamVisits");
// let lastVisit = localStorage.getItem("chamLastVisit"); 
// let currentVisit = new Date().getTime();

// if (!lastVisit) {
//     chamVisits.textContent = "Welcome! Let us know if you have any questions"; 
// } else {
//     let timeDifference = currentVisit - Number(lastVisit);
//     let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//     if (daysDifference < 1) {
//         chamVisits.textContent = "Back so soon! Awesome!";
//     } else {
//         chamVisits.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
//     }
// }

// localStorage.setItem("chamLastVisit", currentVisit.toString());

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




const levelsWrap = document.getElementById('levels');
const levels = memberships[0].levels;

if (levelsWrap) {
  levels.forEach(level => {
    const section = document.createElement('section');
    section.classList.add('level-card');
    section.dataset.id = level.id;

    const title = document.createElement('h3');
    title.textContent = level.title;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.classList.add('learn-more');
    btn.dataset.id = level.id;
    btn.textContent = 'Learn More';

    section.append(title, btn);
    levelsWrap.appendChild(section);
  });
}


const membershipDialog = document.querySelector("#dialogBox");
const membershipTitle  = membershipDialog.querySelector("h3"); 
const membershipInfo   = membershipDialog.querySelector("p");
const closeButton      = membershipDialog.querySelector("button");

