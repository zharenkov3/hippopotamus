$('.reviews-quote__list').slick({
  dots: false,
  arrows: false,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: 2000,
  responsive: [
    {
      breakpoint: 1250,
      settings: "unslick"
    },
  ]
});

