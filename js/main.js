$(function () {

  $('header .bars').click(function () {
    $('nav').toggleClass('on');
    $(this).find('i').toggleClass('fa-bars').toggleClass('fa-xmark')
  })

  let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let swiper2 = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  let sc;
  let sectionI = $('main>section').length;
  let sectionTop = []
  for (let i = 0; i < sectionI; i++) {
    sectionTop[i] = $('main>section').eq(i).offset().top - 100;
  }

  $(window).scroll(function () {
    let sc = $(window).scrollTop();
    for (let i = 0; i < sectionI; i++) {
      if (sc >= sectionTop[i] && sc < sectionTop[i + 1]) {
        $('main>section').eq(i).addClass('on').siblings().removeClass('on');
      }
    }
  });

  $(window).scroll(function () {
    let sc = $(window).scrollTop();
    let windowHeight = $(window).height();
    let ht1 = windowHeight * 2; // 첫 번째 섹션 높이 (200vh)
    let ht2 = windowHeight; // 나머지 섹션 높이 (100vh)
    let sectionCount = $('main>section').length;

    for (let i = 0; i < sectionCount; i++) {
      var start = i === 0 ? 0 : ht1 + ht2 * (i - 1);
      var end = i === 0 ? ht1 : ht1 + ht2 * i;

      if (sc >= start && sc < end) {
        $('.slide_nav_all .slide_nav').eq(i).addClass('on').siblings().removeClass('on');
      }
    }
  });


  $('.slide_nav_all .slide_nav').click(function () {
    let i = $(this).index();
    let ht1 = $(window).height() * 2; // 첫 번째 섹션 높이 (200vh)
    let ht2 = $(window).height(); // 나머지 섹션 높이 (100vh)
    let scrollTopValue;

    if (i === 0) {
      scrollTopValue = 0; // 첫 번째 섹션의 경우
    } else {
      scrollTopValue = ht1 + ht2 * (i - 1); // 나머지 섹션의 경우
    }

    $('html, body').stop().animate({
      scrollTop: scrollTopValue
    }, 1600, /* 'easeInOutBounce' */);
  });

});


//java 타이핑 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  const typewriterElements = document.querySelectorAll('main .me_introduce .typewriter');

  function typeWriter(element, text, i = 0) {
    if (i < text.length) {
      element.innerHTML = text.slice(0, i + 1); // 요소의 텍스트를 인덱스까지 설정
      setTimeout(() => typeWriter(element, text, i + 1), 50); // 각 글자의 타이핑 속도를 조절합니다.
    }
  }

  typewriterElements.forEach((element, index) => {
    const text = element.innerHTML; // innerHTML로 텍스트를 가져옵니다.

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.innerHTML = ''; // 요소가 보일 때 텍스트를 초기화
          setTimeout(() => {
            typeWriter(element, text);
          }, 800 * index); // 각 애니메이션의 시작을 지연시킵니다.
        }
      });
    }, {
      threshold: 0.5 // 요소가 50% 이상 보이면 콜백 실행
    });

    observer.observe(element);
  });
});

/* orange circle */


/* footer */
window.addEventListener('scroll', function () {
  const footer = document.querySelector('footer');
  const yellowCircle = document.querySelector('.yellow_circle');
  const skyblueCircle = document.querySelector('.skyblue_circle');
  const footerOffsetTop = footer.offsetTop;
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  if (scrollY + windowHeight > footerOffsetTop) {
    yellowCircle.style.right = '0';
    yellowCircle.style.top = '-100px';
    skyblueCircle.style.left = '-110px';
    skyblueCircle.style.bottom = '-709px';
  }
});
