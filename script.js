window.addEventListener("scroll", function() {
    let scrollar = document.querySelector('.cabecalho')
    scrollar.classList.toggle('scrolldown', window.scrollY > 300)
})