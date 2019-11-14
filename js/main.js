var heroSlider = $(".header-slider .owl-carousel");
heroSlider.owlCarousel({
  loop: true,
  items: 1,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa fa-angle-left fa-2x fa-fw" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right fa-2x fa-fw" aria-hidden="true"></i>'
  ]
});
