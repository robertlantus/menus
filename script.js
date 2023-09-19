
// Hamburger Toggle

const btn = document.querySelector('.btn');
const header = document.querySelector('header');
const ul = document.querySelector('ul');

btn.addEventListener('click', () => {
    btn.classList.toggle('change');
    header.classList.toggle('open');
    ul.classList.toggle('open');
});
