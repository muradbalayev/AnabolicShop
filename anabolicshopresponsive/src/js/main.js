const btn = document.querySelector('#btn');
const nav = document.querySelector('#nav');
const closebtn = document.querySelector('#closebtn');
btn.addEventListener("click", () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
})

closebtn.addEventListener("click", () => {
    nav.classList.toggle('active')
})
