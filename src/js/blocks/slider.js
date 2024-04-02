import {tns} from 'tiny-slider'

const sliderPromo = tns({
    container: '.promo__slider',
    slideBy: 1,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    nav: false,
    nextButton: '.promo__next',
    prevButton: '.promo__prev',
    responsive: {
      1024: {
        items: 2.5,
      },
      768: {
        items: 2,
      },
      480: {
        items: 1.5,
        gutter: 10,
      },
      320: {
        items: 1,
      }
    }
  });

const sliderCategory = tns({
    container: '.category__slider',
    slideBy: 1,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayButtonOutput: false,
    nav: false,
    nextButton: '.category__next',
    prevButton: '.category__prev',
    responsive: {
      1024: {
        items: 7,
      },
      768: {
        items: 5,
      },
      480: {
        items: 4,
        gutter: 10,
      },
      320: {
        items: 3,
      }
    }
  });

const sliderMenu = tns({
    container: '.menu__slider',
    slideBy: 1,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayButtonOutput: false,
    nav: false,
    nextButton: '.menu__next',
    prevButton: '.menu__prev',
    responsive: {
      1024: {
        items: 7,
      },
      768: {
        items: 5,
      },
      480: {
        items: 4,
        gutter: 10,
      },
      320: {
        items: 3,
      }
    }
  });

const sliderDiscont = tns({
    container: '.discont__slider',
    slideBy: 1,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    nav: false,
    
    nextButton: '.discont__next',
    prevButton: '.discont__prev',
    responsive: {
      1024: {
        items: 2.5,
      },
      768: {
        items: 2,
      },
      480: {
        items: 1.5,
        gutter: 10,
      },
      320: {
        items: 1,
      }
    }
  });


  const sliderCompound = tns({
    container: '.compound__slider',
    slideBy: 1,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayButtonOutput: false,
    nav: false,
    nextButton: '.compound__next',
    prevButton: '.compound__prev',
    responsive: {
      1024: {
        items: 6,
      },
      768: {
        items: 5,
      },
      480: {
        items: 4,
      },
      320: {
        items: 3,
      }
    }
  });
  
  const sliderRecomend = tns({
    container: '.recomend__slider',
    slideBy: 1,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayButtonOutput: false,
    nav: false,
    nextButton: '.recomend__next',
    prevButton: '.recomend__prev',
    responsive: {
      1140: {
        items: 5,
      },
      930: {
        items: 4,
      },
      768: {
        items: 3,
      },
      480: {
        items: 3,
        gutter: 10,
      },
      320: {
        items: 3,
      }
    }
  });