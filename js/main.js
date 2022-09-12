$(function () {
    'use strict';

    var winH = $(window).height(),
        uppH = $('.upperbar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (uppH + navH));
});


let btn = document.querySelector('.up');
window.onscroll = function () {
    if (window.scrollY >= 500) {
        btn.style.display = 'block'
    }else{
        btn.style.display = 'none'
    }
}
btn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})