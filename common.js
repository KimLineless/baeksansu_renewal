$(function () {
    $(window).resize(function () {
        location.reload();
    })

    // 
    const header = document.querySelector("header");
    const headerHeight = header.getBoundingClientRect().height;

    window.addEventListener("scroll", () => {
        if (window.scrollY > headerHeight) {
            header.setAttribute("style", "background: #171717;");
        } else {

            header.setAttribute("style", "background: transparent;");
        }
    });

    $('.ham').click(function () {
        $(this).toggleClass('on')
        $('nav').toggleClass('on')
    })

    let w = $('.slide_banner>li').width()
    let intv = setInterval(function () {
        nextAni()
    }, 5010)


    $('.slide_line span').click(function () {
        let nth = $(this).index()

        clearInterval(intv)
        numAni(nth)
        setInterval(function () {
            nextAni()
        }, 5010)
        clearInterval(intv)

    })

    function nextAni() {
        $('.slide_banner').animate({
            marginLeft: -w
        }, 700, function () {
            $('.slide_banner>li').eq(0).appendTo('.slide_banner')
            $('.slide_banner').css({
                marginLeft: 0
            })

            $('.slide_line span').eq(0).appendTo('.slide_line')
        })
    }

    function numAni(Bnth) {
        for (let x = 0; x < Bnth; x++) {
            $('.slide_banner>li').eq(0).appendTo('.slide_banner')
            $('.slide_line span').eq(0).appendTo('.slide_line')
        }
    }

    // sec2
    let w2 = $('.slide>li').width()
    let intv2 = setInterval(function () {
        nextAni2()
    }, 5000)


    $('.next').click(function () {
        clearInterval(intv2)
        numAni2()
        setInterval(function () {
            nextAni()
        }, 5000)
        clearInterval(intv2)

    })

    function nextAni2() {
        $('.slide').animate({
            marginLeft: -w2
        }, 700, function () {
            $('.slide>li').eq(0).appendTo('.slide')
            $('.slide').css({
                marginLeft: 0
            })
        })
    }

    // video

    setTimeout(function () {
        $('.vd').fadeOut('fast');
    }, 4000);

})