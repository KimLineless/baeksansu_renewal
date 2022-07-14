AOS.init();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

$('.ham').click(function(){
    $(this).toggleClass('active');
 });


if (window.innerWidth > 1000) {
    let balls = document.getElementsByClassName("sec3_img");
    document.onmousemove = function () {
        let x = event.clientX * 10 / window.innerWidth + "100%";
        let y = event.clientY * -200 / window.innerHeight + "%";

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


// 

let header = document.querySelector('header');
let headerIn = document.querySelector('header');
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

const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
        header.setAttribute("style", "background: #005B91;");
    } else {

        header.setAttribute("style", "background: transparent;");
    }
});

// 

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 1450) {
    $(document).ready(function () {
        $('#multiscroll').multiscroll();
    });

    gsap.to(".massiveImage", {
        xPercent: -125,
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
} else if (window.innerWidth > 1000) {
    $(document).ready(function () {
        $('#multiscroll').multiscroll();
    });

    gsap.to(".massiveImage", {
        xPercent: -110,
        x: () => innerWidth,
        ease: "none",
        scrollTrigger: {
            trigger: ".massiveImage",
            start: "center center",
            end: () => innerWidth * 4.5,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1

        }
    });
}

// 

$(function () {
    $(".sec3_li1").mouseover(function(){
      document.getElementById("sec3_txt1").innerHTML = "바로가기";
    })
    $(".sec3_li2").mouseover(function(){
      document.getElementById("sec3_txt2").innerHTML = "바로가기";
    })
    $(".sec3_li3").mouseover(function(){
      document.getElementById("sec3_txt3").innerHTML = "바로가기";
    })
    $(".sec3_li4").mouseover(function(){
      document.getElementById("sec3_txt4").innerHTML = "바로가기";
    })
    $(".sec3_li5").mouseover(function(){
      document.getElementById("sec3_txt5").innerHTML = "바로가기";
    })


  })