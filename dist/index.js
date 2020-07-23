let btn = document.querySelector('.container .btn')
let hinge = document.querySelector('.container .hinge')

btn.addEventListener('click', () => {
    hinge.classList.toggle('animated')
})