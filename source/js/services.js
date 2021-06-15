$('.services-gallery__list').slick({
  arrows: true,
  dots: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: 1500,
  responsive: [
  {
    breakpoint: 300,
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
