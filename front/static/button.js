const burger = document.getElementById('burger')
const navi = document.getElementById('nav')

burger.addEventListener('click', (e) => {
    e.preventDefault();
    navi.classList.toggle("open")
})