AOS.init();

$('.ham').click(function () {
  $(this).toggleClass('active');
  $('.gnb').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
  $(this).toggleClass('on');
  $('.gnb').toggleClass('on');
});

if (window.innerWidth > 1000) {
  let balls = document.getElementsByClassName('sec3_img');
  let balls1 = document.getElementsByClassName('sec3_img1');
  document.onmousemove = function () {
    let x = (event.clientX * 5) / window.innerWidth + '20%';
    let y = (event.clientY * -100) / window.innerHeight + '%';

    for (let i = 0; i < 5; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
    }
  };
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
  if (direction === 'up') {
    header.className = 'hd';
  } else if (direction === 'down') {
    header.className = 'scrollDown';
  }
};
let prevScrollTop = 0;
document.addEventListener('scroll', function () {
  let nextScrollTop = window.pageYOffset || 0;
  if (nextScrollTop > prevScrollTop) {
    headerMoving('down');
  } else if (nextScrollTop < prevScrollTop) {
    headerMoving('up');
  }
  prevScrollTop = nextScrollTop;
});

const headerHeight = header.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.setAttribute('style', 'background: rgba(92, 198, 240, 0.9);');
  } else {
    header.setAttribute('style', 'background: rgba(92, 198, 240, 0.9);');
  }
});

//

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 1450) {
  $(document).ready(function () {
    $('#multiscroll').multiscroll();
  });

  gsap.to('.massiveImage', {
    xPercent: -250,
    x: () => innerWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: '.massiveImage',
      start: 'center center',
      end: () => innerWidth * 4,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });
} else if (window.innerWidth > 1000) {
  $(document).ready(function () {
    $('#multiscroll').multiscroll();
  });

  gsap.to('.massiveImage', {
    xPercent: -110,
    x: () => innerWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: '.massiveImage',
      start: 'center center',
      end: () => innerWidth * 4.5,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      //   anticipatePin: 1,
    },
  });
}

//

if (window.innerWidth < 1000) {
  $(function () {
    $('.sec3_li1').mouseover(function () {
      document.getElementById('sec3_txt1').innerHTML = '바로가기';
    });
    $('.sec3_li2').mouseover(function () {
      document.getElementById('sec3_txt2').innerHTML = '바로가기';
    });
    $('.sec3_li3').mouseover(function () {
      document.getElementById('sec3_txt3').innerHTML = '바로가기';
    });
    $('.sec3_li4').mouseover(function () {
      document.getElementById('sec3_txt4').innerHTML = '바로가기';
    });
    $('.sec3_li5').mouseover(function () {
      document.getElementById('sec3_txt5').innerHTML = '바로가기';
    });
  });

  // let swiper2 = new Swiper(".mySwiper2", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     loop:true,
  //     pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true,
  //     },
  // });
}

//
('use strict');

const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach((item) => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');
  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

items.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    handleIndicator(e.target);
  });
  item.classList.contains('is-active') && handleIndicator(item);
});

//

const $text = document.querySelector('.text');
const letters = ['생명력이', '맑음이', '수원지가'];

const speed = 150;
let i = 0;

const typing = async () => {
  const letter = letters[i].split('');

  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift();
  }

  await wait(1500);

  if (letters[i + 1]) remove();
};

const remove = async () => {
  const letter = letters[i].split('');

  while (letter.length) {
    await wait(speed);

    letter.pop();
    $text.innerHTML = letter.join('');
  }

  i++;
  typing();
};

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

setTimeout(typing, 800);
