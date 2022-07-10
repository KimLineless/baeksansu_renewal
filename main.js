AOS.init();

$(document).ready(function () {
    $('#multiscroll').multiscroll();
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});


if (window.innerWidth > 1000) {
    let balls = document.getElementsByClassName("sec4_img");
    document.onmousemove = function () {
        let x = event.clientX * 20 / window.innerWidth + "%";
        let y = event.clientY * -100 / window.innerHeight + "%";

        for (let i = 0; i < 5; i++) {
            balls[i].style.left = x;
            balls[i].style.top = y;

        }
    }
}

$('.sec1').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
});
$('.sec4_top_img').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
});


// 

let header = document.querySelector('header');
let headerMoving = function (direction) {
    if (direction === "up") {
        header.className = 'hd';
    } else if (direction === "down") {
        header.className = 'scrollDown';
    }
};
let prevScrollTop = 0;
document.addEventListener("scroll", function () {
    let nextScrollTop = window.pageYOffset || 0;
    if (nextScrollTop > prevScrollTop) {
        headerMoving("down");
    } else if (nextScrollTop < prevScrollTop) {
        headerMoving("up");
    }
    prevScrollTop = nextScrollTop;
});

// 

gsap.registerPlugin(ScrollTrigger);


gsap.to(".massiveImage", {
    xPercent: -100,
    x: () => innerWidth,
    ease: "none",
    scrollTrigger: {
        trigger: ".massiveImage",
        start: "center center",
        end: () => innerWidth * 3,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1

    }
});