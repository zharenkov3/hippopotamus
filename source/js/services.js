$('.services-gallery__list').slick({
  dots: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: "unslick"
    },
  ]
});
