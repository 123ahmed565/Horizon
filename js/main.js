// swiper clients
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    loop:false,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        600: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 6.5,
            spaceBetween: 20,
        },
    },
});

// swiper team
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    loop:false,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: '.fa-chevron-right',
        prevEl: '.fa-chevron-left',

    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            freeMode:false,
        },
        600: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// to top
const scrollBtn = document.querySelector(".scroll-to-top");
const upperbar = document.querySelector(".upperbar");

scrollBtn.style.display = "none";

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop <= 100) {
    scrollBtn.style.display = "none";
    } else {
    scrollBtn.style.display = "block";
    }
});

// preloader
window.onload = function () {
    document.querySelector('.loading-overlay ').style.display = "none";
};

// scroll number counter animation
$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#whyUs').position().top) {
        $.fn.jQuerySimpleCounter = function( options ) {
            var settings = $.extend({
                start:  0,
                end:    100,
                easing: 'swing',
                duration: 400,
                complete: ''
            }, options );
        
            var thisElement = $(this);
        
            $({count: settings.start}).animate({count: settings.end}, {
                duration: settings.duration,
                easing: settings.easing,
                step: function() {
                    var mathCount = Math.ceil(this.count);
                    thisElement.text(mathCount);
                },
                complete: settings.complete
            });
        };
        
        
        $('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
        $('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
        $('#number3').jQuerySimpleCounter({end: 359,duration: 3000});
        $('#number4').jQuerySimpleCounter({end: 246,duration: 3000});
    }
})








