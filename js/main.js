$(window).on("load", function() {
  $(".tender-details-tab-header-item").click(function() {
    $(".tender-details-tab-header-item").removeClass("active");
    $(".tab-content").removeClass("tab-active");
    if (!$(".tender-details-tab-header-item").hasClass("active")) {
      $(this).addClass("active");
      // Display the selected tab content
      $(`.${$(this).attr("data-tab")}`).addClass("tab-active");
    } else {
      $(".tender-details-tab-header-item").removeClass("active");
    }
  });

  $(".mobile-nav__icon").click(function() {
    $(".mobile-nav ul").css({
      width: "265px",
      display: "block"
    });
    $(".mobile-nav__bg").css("display", "block");
  });

  $(".mobile-nav__close, .mobile-nav__bg").click(function() {
    $(".mobile-nav ul").css({
      width: "0%",
      display: "none"
    });
    $(".mobile-nav__bg").css("display", "none");
  });

  // Toggle switch function when span is clicked
  $(".toggle-switch-name").click(function() {
    $("#toggleSwitch").prop("checked", false);
  });
  $(".toggle-switch-code").click(() => {
    $("#toggleSwitch").prop("checked", true);
  });

  // Modal
  $(".modal__close").click(function() {
    $(".modal").css("display", "none");
  });

  // მოდალის გარეთ დაკლიკებაზე დახურვა
  $(document).click(function(e) {
    if (!$(e.target).closest(".modal__content").length > 0) {
      $(".modal").css("display", "none");
    }
  });

  $(".header__user").click(function() {
    $(".header__user__dropdown").toggleClass("active");
  });

  // ტენდერის ფავორიტებში დამატება
  $(".tenders__add-to-fav").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
      $(this).html('<i class="fas fa-star"></i>');
    } else {
      $(this).html('<i class="far fa-star"></i>');
    }
  });
});
