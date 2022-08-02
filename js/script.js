document.querySelector('.hamburger').addEventListener('click', function(e) {
    this.classList.toggle('hamburger-active');
    document.querySelector('.navigation__list').classList.toggle('navigation__list_active');
    element = document.querySelector('.logo');
    opacity = window.getComputedStyle(element).opacity;
    if (opacity == 1) {
        element.style.opacity = '0';
    } else {
        element.style.opacity = '1';
    }
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        this.document.querySelector('.btn-up').style.opacity = '1';
    } else {
        this.document.querySelector('.btn-up').style.opacity = '0';
    }
})

let smoothLinks = document.querySelectorAll('a[href^="#"]')
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        document.querySelector('.hamburger').classList.remove('hamburger-active')
        document.querySelector('.navigation__list').classList.remove('navigation__list_active');
        document.querySelector('.logo').style.opacity = '1';
        e.preventDefault();
        let id = smoothLink.getAttribute('href').slice(1, );
        let coord = document.getElementById(id).getBoundingClientRect();
        window.scrollTo({
            left: coord.x, 
            top: coord.y,
            behavior: "smooth"})
    })
};