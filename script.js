
// Hamburger Toggle

const btn = document.querySelector('.btn');
const header = document.querySelector('header');
const ul = document.querySelector('ul');

btn.addEventListener('click', () => {
    btn.classList.toggle('change');
    header.classList.toggle('open');
    ul.classList.toggle('open');
});

// Full screen Overlay Navigation

// 1 -- Slide in from the right side

document.querySelector('.openbtn').addEventListener('click', () => {
    document.getElementById("myNav").style.width = "20rem";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});

document.querySelector('.closebtn').addEventListener('click', () => {
    document.getElementById("myNav").style.width = "0%";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
});
