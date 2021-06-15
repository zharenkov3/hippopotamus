$('.successes__gallery-list').slick({
  dots: false,
  arrows: false,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: "unslick"
    },
  ]
});

