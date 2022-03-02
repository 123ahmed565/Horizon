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
  document.querySelector(".preloaders").style.display = "none";
};