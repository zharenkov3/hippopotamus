$('.reviews__list').slick({
  arrows: true,
  dots: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: 2000,
  responsive: [
  {
    breakpoint: 319,
    settings: {
      arrows: false
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: true
    }
  },

  {
    breakpoint: 1250,
    settings: "unslick"
  },

  ]
});
