$('.reviews__list').slick({
  arrows: true,
  dots: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 320,
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
