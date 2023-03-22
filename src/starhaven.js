//Animations Starhaven.ai

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>;

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>;

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r125/three.min.js"></script>;

<script src="https://cdn.jsdelivr.net/npm/@finsweet/3dglobes@1/OrbitControls.min.js"></script>;

<script src="https://cdn.jsdelivr.net/npm/@finsweet/3dglobes@1/FsGlobe.min.js"></script>;

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/CustomEase.min.js"></script>;

<script src="https://uploads-ssl.webflow.com/63e7d7711a7c20bd4fdc5e51/63ea44dec1046d1e2ef592e6_scrambletext.txt"></script>;

<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>;

gsap.registerPlugin(ScrollTrigger);

$('.section_key-visual').each(function () {
  let triggerElement = $(this);
  let targetElement = $('.key-visual_sticky-element');

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,

      start: 'top top',
      end: 'center center',
      scrub: 1,
    },
  });
  tl.fromTo(
    targetElement,
    {
      width: '60em',
      height: '40em',
      borderRadius: '1em',
      duration: 1,
    },
    {
      width: '100vw',
      height: '100vh',
      borderRadius: '0em',
      duration: 1,
    }
  );
});

function setTrackHeights() {
  $('.alignment-cycle_height').each(function () {
    let trackWidth = $(this).find('.track').outerWidth();
    $(this).height(trackWidth);
  });
}
setTrackHeights();

window.addEventListener('resize', function () {
  setTrackHeights();
});

document.addEventListener('DOMContentLoaded', function () {
  let tlCounter = gsap.timeline({ delay: 1 });

  tlCounter.to('.loader_progress-bar', {
    width: '100%',
    duration: 4,
    // voeg een kleine vertraging toe van 0.5 seconden
    ease: CustomEase.create(
      'custom',
      'M0,0 C0,0.037 0.182,0.09 0.204,0.12 0.266,0.204 0.264,0.244 0.3,0.3 0.386,0.433 0.563,0.498 0.598,0.532 0.611,0.545 0.669,0.737 0.71,0.77 0.82,0.858 0.696,1 1,1  '
    ),
    onUpdate: function () {
      const progress = (tlCounter.progress() * 100).toFixed(2);
      const countdown = (4 - tlCounter.progress() * 4).toFixed(2);
      document.querySelector('.loader_progress-bar').style.width = `${progress}%`;
      document.querySelector('.preloader_countdown').textContent = countdown;
    },
  });
});

const navLinks = document.querySelectorAll("[nav-link='scramble']");

navLinks.forEach((link) => {
  const text = link.textContent;

  link.style.display = 'inline-flex'; // of 'inline-block'
  link.style.width = `${link.offsetWidth}px`;

  link.addEventListener('mouseenter', () => {
    gsap.to(link, {
      scrambleText: {
        chars: text,
        text: text,
        speed: 1,
        delimiter: '',
        revealDelay: 0.5,
      },
      duration: 0.5,
    });
  });
});

// section_header

$('.section_header').each(function () {
  let triggerElement = $(this);
  let targetElement = $('.header_background-overlay');
  let textElements = $("[header-text-animation='opacity']");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top center',
      end: 'bottom-=10%',
      scrub: 1,
    },
  });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top center',
      end: 'bottom-=20%',
      scrub: 1,
    },
  });

  tl.to(textElements, {
    delay: 1.5,
    opacity: 0,
    duration: 1,
  });

  tl2.to(targetElement, {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    ease: 'power1.inOut',
    duration: 1,
  });
});

//Section_intro

$('.section_intro').each(function () {
  let triggerElement = $(this);
  let targetElements = $('.intro_left-grid, .intro_grid-top-right-first, .intro_right-grid-bottom');

  let introTextElements = $("[text-animation='opacity']", this);

  let introImageElement = $('.intro_grid-image', this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top top',
      end: 'top+=5%',
      scrub: 1,
    },
  });

  tl.fromTo(
    targetElements,
    {
      'border-right-color': 'black',
      'border-top-color': 'black',
    },
    {
      'border-right-color': '#302e2e',
      'border-top-color': '#302e2e',
      duration: 1,
      ease: 'power2.inOut',
    }
  );

  tl.fromTo(
    introTextElements,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    },
    '-=0.5'
  );

  let introImageTl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top top',
      end: 'top+=5%',
      scrub: 1,
    },
  });

  introImageTl.fromTo(
    introImageElement,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
    },
    0.5
  );

  let reverseTl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'center+=5%',
      end: 'bottom bottom',
      scrub: 1,
      ease: 'power2.inOut',
      reverse: true,
    },
  });

  reverseTl.to(
    targetElements,
    {
      'border-right-color': 'black',
      'border-top-color': 'black',
      duration: 1,
    },
    0.05
  );

  reverseTl.to(
    introTextElements,
    {
      opacity: 0,
      duration: 1,
    },
    0.05
  );

  reverseTl.to(
    introImageElement,
    {
      opacity: 0,
      duration: 1,
    },
    0.05
  );
});

//Planet manifesto animation

gsap.registerPlugin(ScrollTrigger);

let triggerElement = $('.section_manifesto');
let fsglobeElement = $('.fs-globe-container');
let textElements = $("[text-animation='opacity']");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: triggerElement,
    start: 'top top-=5%',
    end: 'center center',
    scrub: 1,
  },
});

tl.fromTo(
  fsglobeElement,
  {
    x: '-50%',
  },
  {
    x: '0%',
    duration: 2,
    ease: 'power2.out',
  }
);

tl.fromTo(
  textElements,
  {
    opacity: 0,
    y: 30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.inOut',
  },
  '-=0.5'
);

tl.fromTo(
  '.manifesto_left-grid-wrapper',
  {
    'border-right-color': 'black',
  },
  {
    'border-right-color': '#302e2e',
    duration: 1,
    ease: 'power2.inOut',
  },
  0
);

let reverseTl = gsap.timeline({
  scrollTrigger: {
    trigger: triggerElement,
    start: 'center+=5%',
    end: 'bottom bottom',
    scrub: 1,
    ease: 'power2.inOut',
    toggleActions: 'play none reverse none',
  },
});

reverseTl.to(
  '.manifesto_left-grid-wrapper',
  {
    'border-right-color': 'black',
    duration: 1,
  },
  0
);

reverseTl.to(
  textElements,
  {
    opacity: 0,
    duration: 1,
  },
  0
);

reverseTl.fromTo(
  '.manifesto_left-grid-wrapper',
  {
    duration: 2,
    ease: 'power2.out',
  },
  0
);

reverseTl.to(
  '.fs-globe-container',
  {
    x: '-50%',
    duration: 2,
    ease: 'power2.inOut',
  },
  0.05
);

function numberWithZero(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

$('.slider-gallery_component').each(function () {
  let totalSlides = numberWithZero($(this).find('.swiper-slide.is-slider-thumbs').length);
  $('.swiper-number-total').text(totalSlides);

  const bgSwiper = new Swiper($(this).find('.swiper.is-slider-bg')[0], {
    slidesPerView: 1,
    speed: 400,
    effect: 'fade',
    allowTouchMove: false,
  });

  const thumbsSwiper = new Swiper($(this).find('.swiper.is-slider-thumbs')[0], {
    slidesPerView: 1,
    speed: 600,
    loop: true,
    loopedSlides: 8,
    slideToClickedSlide: true,
  });

  const textSwiper = new Swiper($(this).find('.swiper.is-slider-titles')[0], {
    slidesPerView: 'auto',
    speed: 600,
    loop: true,
    loopedSlides: 8,
    slideToClickedSlide: true,
    mousewheel: false,
    keyboard: true,
    centeredSlides: true,
    slideActiveClass: 'is-active',
    slideDuplicateActiveClass: 'is-active',
    thumbs: {
      swiper: bgSwiper,
    },
    navigation: {
      nextEl: $(this).find('.swiper-next')[0],
      prevEl: $(this).find('.swiper-prev')[0],
    },
  });

  textSwiper.controller.control = thumbsSwiper;
  thumbsSwiper.controller.control = textSwiper;

  textSwiper.on('slideChange', function (e) {
    let slideNumber = numberWithZero(e.realIndex + 1);
    $('.swiper-number-current').text(slideNumber);
  });
});