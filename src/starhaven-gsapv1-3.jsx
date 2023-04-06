//Animations Starhaven.ai0

gsap.registerPlugin(ScrollTrigger);



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
    },
    {
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
    },
    1
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
    }
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

$('.section_key-visual').each(function () {
  let triggerElement = $(this);
  let targetElements = $('.key-visual_left-grid, .key-visual_right-grid');
  let imageElement = $('.key-visual_sticky-image');
  let introTextElements = $("[key-visual-text='opacity']", this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top top-=70%',
      end: 'center center+=15%',
      scrub: 1,
    },
  });

  tl.fromTo(
    targetElements,
    {
      opacity: 0,
      'border-right-color': 'black',
      'border-top-color': 'black',
    },
    {
      opacity: 1,
      'border-right-color': '#302e2e',
      'border-top-color': '#302e2e',
      ease: 'power2.easeIn',
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
      duration: 4,
      ease: 'power2.easeIn',
    }
  );

  let reverseTl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'center center-=15%',
      end: 'bottom bottom-=15%',
      scrub: 1,
      ease: 'power2.easeOut',
      reverse: true,
    },
  });

  reverseTl.add([
    gsap.to(targetElements, {
      opacity: 0,
      'border-right-color': 'black',
      'border-top-color': 'black',
      duration: 1,
    }),
    gsap.to(introTextElements, {
      opacity: 0,
      duration: 1,
    }),
    gsap.to(imageElement, {
      opacity: 0,
      ease: 'power1.inOut',
      duration: 1,
      delay: 0.5,
    }),
  ]);
});

function scrambleText(
  elementSelector,
  triggerElement,
  startPosition,
  endPosition,
  newText,
  delay = 0
) {
  const elements = $(elementSelector);
  elements.each(function (index) {
    let element = $(this);
    let originalText = element.text();
    let isScrambling = false;
    let scrambleDuration = 20; // Scramble duration in frames
    let currentFrame = 0;

    function scramble(element, targetText) {
      if (currentFrame < scrambleDuration) {
        // eslint-disable-next-line no-plusplus
        currentFrame++;
        let scrambleText = '';
        for (let i = 0; i < targetText.length; i++) {
          scrambleText +=
            String.fromCharCode(targetText.charCodeAt(i) + Math.floor(Math.random() * 3) - 1) + ' ';
        }
        element.text(scrambleText);
        requestAnimationFrame(() => scramble(element, targetText));
      } else {
        currentFrame = 0;
        element.text(targetText);
      }
    }

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: startPosition,
        end: endPosition,
        scrub: 1,
        onUpdate: (self) => {
          if (self.progress === 1 && !isScrambling) {
            isScrambling = true;
            gsap.delayedCall(index * delay, () => {
              scramble(element, newText);
            });
          } else if (self.progress === 0 && isScrambling) {
            isScrambling = false;
            gsap.delayedCall(index * delay, () => {
              scramble(element, originalText);
            });
          }
        },
      },
    });

    return tl;
  });
}

function imageTransition(elementSelector, triggerElement, startPosition, endPosition) {
  const elements = $(elementSelector);
  elements.each(function (index) {
    let element = $(this);

    // Ensure the images are initially hidden
    if (index !== 0) {
      element.css('opacity', 0);
    }

    gsap.to(element, {
      opacity: index === 0 ? 0 : 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: startPosition,
        end: endPosition,
        scrub: 1,
        onEnter: () => {
          if (index !== 0) {
            element.css('opacity', 0);
          }
        },
      },
    });
  });
}

function fadeInOutAnimation(elementSelector, triggerElement, inEndPercentage, outStartPercentage) {
  const elements = $(elementSelector);
  const totalHeight = triggerElement.height();
  const inEndPosition = 'top+=' + totalHeight * inEndPercentage + 'px';
  const outStartPosition = 'top+=' + totalHeight * outStartPercentage + 'px';

  elements.each(function () {
    let element = $(this);

    // Fade in animation
    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top top',
          end: inEndPosition,
          scrub: 1,
        },
      }
    );

    // Fade out animation
    gsap.fromTo(
      element,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: triggerElement,
          start: outStartPosition,
          end: 'bottom bottom',
          scrub: 1,
        },
      }
    );
  });
}

$('.section_alignment-cycle').each(function () {
  let triggerElement = $(this);

  const totalHeight = triggerElement.height();
  const scrambleAt33Percent = 'top+=' + totalHeight * 0.33 + 'px';
  const scrambleAt66Percent = 'top+=' + totalHeight * 0.66 + 'px';

  scrambleText(
    "[scramble-heading='services']",
    triggerElement,
    scrambleAt33Percent,
    scrambleAt33Percent,
    'Training your own AI models for own use',
    0.2
  );
  scrambleText(
    "[scramble-pre-heading='services']",
    triggerElement,
    scrambleAt33Percent,
    scrambleAt33Percent,
    'SCOPE'
  );

  scrambleText(
    "[scramble-text='services']",
    triggerElement,
    scrambleAt66Percent,
    scrambleAt66Percent,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique.',
    0.2
  );
  scrambleText(
    "[scramble-heading='services']",
    triggerElement,
    scrambleAt66Percent,
    scrambleAt66Percent,
    'BUILD YOUR OWN AI MODELS AND CHATGPT intern',
    0.2
  );
  scrambleText(
    "[scramble-pre-heading='services']",
    triggerElement,
    scrambleAt66Percent,
    scrambleAt66Percent,
    'BUILD'
  );

  // Image transitions
  imageTransition(
    "[scramble-image-1='services'], [scramble-image-2='services']",
    triggerElement,
    scrambleAt33Percent,
    scrambleAt33Percent
  );
  imageTransition(
    "[scramble-image-2='services'], [scramble-image-3='services']",
    triggerElement,
    scrambleAt66Percent,
    scrambleAt66Percent
  );

  $(document).ready(function () {
    $('.alignment-cycle_right-grid, .alignment-cycle_left-grid').css('opacity', 0);
  });

  // Fade in and out animations
  fadeInOutAnimation(
    '.alignment-cycle_right-grid, .alignment-cycle_left-grid',
    triggerElement,
    0.1, // In animation ends at 10%
    0.95 // Out animation starts at 90%
  );
});

function animateProgressBar(elementSelector, triggerElement, startPercentage, endPercentage) {
  const element = $(elementSelector);

  gsap.fromTo(
    element,
    { width: '0%' },
    {
      width: '100%',
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top+=' + triggerElement.height() * startPercentage + 'px',
        end: 'top+=' + triggerElement.height() * endPercentage + 'px',
        scrub: 1,
        ease: 'power1.inOut',
      },
    }
  );
}

$('.section_alignment-cycle').each(function () {
  let triggerElement = $(this);

  // Progress bar animations
  animateProgressBar('.progress-bar_inside-first', triggerElement, 0.1, 0.33);
  animateProgressBar('.progress-bar_inside-second', triggerElement, 0.33, 0.66);
  animateProgressBar('.progress-bar_inside-third', triggerElement, 0.66, 0.9);
});

//About us

$('.section_about-us').each(function () {
  let triggerElement = $(this);
  const totalHeight = triggerElement.height();
  const fadeInImageEnd = totalHeight * 0.15;

  // In animations
  gsap.fromTo(
    '.about-us_background-image',
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top',
        end: '+=' + fadeInImageEnd,
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    ".about-us_character-choose, [about-us='ani']",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top-=33%',
        end: '+=' + fadeInImageEnd,
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    '.about-us_image-wrapper',
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top-=50%',
        end: '+=' + fadeInImageEnd,
        scrub: 1,
      },
    }
  );

  // Out animation for ".section_about-us"
  gsap.to('.section_about-us', {
    opacity: 0,
    scrollTrigger: {
      trigger: triggerElement,
      start: 'bottom-=20% bottom-=1%',
      end: 'bottom bottom',
      scrub: 1,
    },
  });
});

const imageMap = {
  first: 'voidwalker',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
};

let currentImage = 'first';

$('[character]').on('click', function () {
  const character = $(this).attr('character');

  if (character !== currentImage) {
    const previousImage = currentImage;
    currentImage = character;

    gsap.to('.about-us_image-' + imageMap[previousImage], {
      y: '100%',
      duration: 0.5,
    });

    gsap.fromTo(
      '.about-us_image-' + imageMap[currentImage],
      { y: '100%' },
      { y: '0%', duration: 0.5 }
    );

    // Hide previous text with a small animation
    gsap.to('.about-us_right-wrapper-char-' + previousImage, {
      opacity: 0,
      display: 'none',
      duration: 0.25,
    });

    // Show new text with a small animation and scramble effect
    gsap.fromTo(
      '.about-us_right-wrapper-char-' + currentImage,
      { opacity: 0, display: 'none' },
      {
        opacity: 1,
        display: 'block',
        duration: 0.25,
      }
    );

    $('[character]').css('filter', 'grayscale(100%)');
    $(this).css('filter', 'grayscale(0%)');
  }
});

// Set initial filter values using GSAP
gsap.set($('[character]'), { css: { filter: 'grayscale(100%)' } });
gsap.set($('[character="first"]'), { css: { filter: 'grayscale(0%)' } });

$('[character]').hover(
  function () {
    if ($(this).attr('character') !== currentImage) {
      gsap.to($(this), {
        duration: 0.2,
        css: { filter: 'grayscale(0%)' },
      });
    }
  },
  function () {
    if ($(this).attr('character') !== currentImage) {
      gsap.to($(this), {
        duration: 0.2,
        css: { filter: 'grayscale(100%)' },
      });
    }
  }
);

$('.section_logos-sticky').each(function () {
  let triggerElement = $(this);

  gsap.fromTo(
    '.section_logos-sticky',
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top',
        end: 'top top-=80%',
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    '.section_logos-sticky',
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top-=80%',
        end: 'top top-=100%',
        scrub: 1,
      },
    }
  );
});

gsap.set('.section_logos-sticky', { opacity: 0 });

$('.section_projects-sticky').each(function () {
  let triggerElement = $(this);

  gsap.fromTo(
    '.section_projects-sticky',
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top',
        end: 'top top-=80%',
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    '.section_projects-sticky',
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top-=80%',
        end: 'top top-=100%',
        scrub: 1,
      },
    }
  );
});

gsap.set('.section_projects-sticky', { opacity: 0 });

$('.section_cta').each(function () {
  let triggerElement = $(this);

  // Set initial opacities
  gsap.set('.cta_background-image', { opacity: 0 });
  gsap.set('.cta_component', { opacity: 0 });

  // Animate the .cta_background-image opacity from 0 to 1
  gsap.fromTo(
    '.cta_background-image',
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top',
        end: 'top top-=80%',
        scrub: 1,
      },
    }
  );

  // Animate the .cta_component opacity from 0 to 1 after .cta_background-image animation is almost done
  gsap.fromTo(
    '.cta_component',
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top-=50%',
        end: 'top top-=80%',
        scrub: 1,
      },
    }
  );
});