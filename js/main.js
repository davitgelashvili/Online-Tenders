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
    $(".modal")[0].classList.remove("active");
  });

  $(".add-user-btn").click(function() {
    $("#add-user-modal")[0].classList.add("active");
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

  // ტენდერის გამოწერაში ყველას მონიშვნა
  $("#check-all").click(function() {
    $('.subscribe__listing input[type="checkbox"]').prop(
      "checked",
      this.checked
    );
  });

  $(".edit").click(function() {
    this.classList.toggle("active");
    const editMenu = this.nextElementSibling;
    editMenu.classList.toggle("active");
  });

  $(".search-input input").keyup(function() {
    if ($("#toggleSwitch").is(":checked")) {
      $(".search-out")[0].classList.add("open");
    } else {
      $(".search-out")[0].classList.remove("open");
    }
  });
});
