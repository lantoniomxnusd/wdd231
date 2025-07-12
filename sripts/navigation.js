const hamburgerElement = document.querySelector('#hamBtn');
const navElement = document.querySelector('#menuLinks');

hamburgerElement.addEventListener('click', ()=> {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

