$(".tender-details-tab-header-item").click(function() {
  $(".tender-details-tab-header-item").removeClass("active");
  if (!$(".tender-details-tab-header-item").hasClass("active")) {
    $(this).addClass("active");
  } else {
    $(".tender-details-tab-header-item").removeClass("active");
  }
});
