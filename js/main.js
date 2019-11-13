var heroSlider = $(".header-slider .owl-carousel");
heroSlider.owlCarousel({
  loop: true,
  items: 1,
  nav: true,
  dots: true,
  autoplay: true,
  animateOut: "slideOutUp",
  animateIn: "slideInUp",
  autoplayTimeOut: 5000, //5sec
  navText: [
    '<i class="fa fa-angle-left fa-2x fa-fw" aria-hidden="true"><<</i>',
    '<i class="fa fa-angle-right fa-2x fa-fw" aria-hidden="true">>></i>'
  ]
});
