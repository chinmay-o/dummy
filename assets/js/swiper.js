var swiperA = new Swiper("#mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    500: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 1.6,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 2.4,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2.8,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3.8,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiperB = new Swiper("#testimonial-swipper", {

  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    900: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    601: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});
